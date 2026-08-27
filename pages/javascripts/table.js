// Progressive enhancement for the broker comparison table.
//
// Everything here is additive: with JavaScript disabled the page still renders
// the complete table, the native `title` tooltips still work, and none of the
// controls below are shown in a broken half-state.
(function () {
  "use strict";

  var STORAGE_THEME = "theme";
  var STORAGE_COLUMNS = "corretoras-visiveis";
  var QUERY_COLUMNS = "corretoras";

  // localStorage throws outright in some privacy modes, so every access is
  // wrapped rather than feature-detected once.
  function readStore(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeStore(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      /* nothing we can do, and nothing that needs doing */
    }
  }

  function normalize(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  // --------------------------------------------------------------- dark mode

  function setupTheme() {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var dark = document.documentElement.classList.toggle("dark");
      writeStore(STORAGE_THEME, dark ? "dark" : "light");
    });
  }

  // ------------------------------------------------------- column visibility

  function setupColumns() {
    var checkboxes = Array.prototype.slice.call(
      document.querySelectorAll("[data-corretora-toggle]")
    );
    if (!checkboxes.length) return;

    var counter = document.querySelector("[data-contador-corretoras]");
    var sectionSpans = document.querySelectorAll("tbody tr[data-secao] td[colspan]");
    var emptySpan = document.querySelector("[data-sem-resultados] td[colspan]");

    function slugsFromQuery() {
      var match = new RegExp("[?&]" + QUERY_COLUMNS + "=([^&#]*)").exec(window.location.search);
      return match ? decodeURIComponent(match[1]).split(",").filter(Boolean) : null;
    }

    function apply(visible) {
      checkboxes.forEach(function (box) {
        var shown = visible.indexOf(box.value) !== -1;
        box.checked = shown;
        document.querySelectorAll('[data-col="' + box.value + '"]').forEach(function (cell) {
          cell.hidden = !shown;
        });
      });

      if (counter) counter.textContent = visible.length + "/" + checkboxes.length;

      // Keep the section bands and the empty-state row spanning exactly the
      // columns that are still on screen.
      sectionSpans.forEach(function (cell) {
        cell.colSpan = Math.max(visible.length, 1);
      });
      if (emptySpan) emptySpan.colSpan = visible.length + 1;
    }

    function persist() {
      var visible = checkboxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; });
      writeStore(STORAGE_COLUMNS, visible.join(","));

      // A query string rather than the hash, so section anchor links keep working.
      var url = new URL(window.location.href);
      if (visible.length === checkboxes.length) {
        url.searchParams.delete(QUERY_COLUMNS);
      } else {
        url.searchParams.set(QUERY_COLUMNS, visible.join(","));
      }
      window.history.replaceState(null, "", url.toString());

      apply(visible);
    }

    checkboxes.forEach(function (box) {
      box.addEventListener("change", persist);
    });

    var all = document.querySelector("[data-corretoras-todas]");
    var none = document.querySelector("[data-corretoras-nenhuma]");
    if (all) {
      all.addEventListener("click", function () {
        checkboxes.forEach(function (b) { b.checked = true; });
        persist();
      });
    }
    if (none) {
      none.addEventListener("click", function () {
        checkboxes.forEach(function (b) { b.checked = false; });
        persist();
      });
    }

    // A shared URL wins over whatever this browser last chose.
    var known = checkboxes.map(function (b) { return b.value; });
    var initial = slugsFromQuery();
    if (!initial) {
      var stored = readStore(STORAGE_COLUMNS);
      initial = stored === null ? known : stored.split(",").filter(Boolean);
    }
    apply(initial.filter(function (slug) { return known.indexOf(slug) !== -1; }));
  }

  // ------------------------------------------------------------- row filter

  function setupFilter() {
    var input = document.getElementById("filtro-criterios");
    if (!input) return;

    var rows = Array.prototype.slice.call(document.querySelectorAll("tr[data-criterio]"));
    var counter = document.querySelector("[data-contador-criterios]");
    var empty = document.querySelector("[data-sem-resultados]");

    var haystacks = rows.map(function (row) { return normalize(row.dataset.criterio || ""); });

    function run() {
      var needle = normalize(input.value.trim());
      var shown = 0;

      rows.forEach(function (row, index) {
        var match = !needle || haystacks[index].indexOf(needle) !== -1;
        row.hidden = !match;
        if (match) shown += 1;
      });

      // A section header is noise once every criterion under it is filtered out.
      document.querySelectorAll("tbody").forEach(function (body) {
        var header = body.querySelector("tr[data-secao]");
        if (!header) return;
        var visible = body.querySelector("tr[data-criterio]:not([hidden])");
        header.hidden = !visible;
      });

      if (counter) {
        counter.textContent = needle
          ? shown + " de " + rows.length + " critérios"
          : rows.length + " critérios";
      }
      if (empty) empty.hidden = shown !== 0;
    }

    input.addEventListener("input", run);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        input.value = "";
        run();
      }
    });
  }

  // ----------------------------------------------------------- note popovers

  function setupNotes() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-nota]"));
    if (!buttons.length) return;

    var popover = document.createElement("div");
    popover.className =
      "fixed z-[60] hidden max-w-xs rounded-md bg-gray-900 px-3 py-2 text-xs leading-snug text-white shadow-lg dark:bg-gray-700";
    popover.setAttribute("role", "tooltip");
    popover.id = "nota-popover";
    document.body.appendChild(popover);

    var current = null;

    function close() {
      if (!current) return;
      current.setAttribute("aria-expanded", "false");
      current.removeAttribute("aria-describedby");
      current = null;
      popover.classList.add("hidden");
    }

    function open(button) {
      close();
      current = button;
      popover.textContent = button.dataset.nota;
      popover.classList.remove("hidden");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-describedby", popover.id);

      // Positioned against the viewport because the table lives inside a
      // scroll container, which an absolutely positioned element cannot escape.
      var anchor = button.getBoundingClientRect();
      var box = popover.getBoundingClientRect();
      var left = Math.min(
        Math.max(8, anchor.left + anchor.width / 2 - box.width / 2),
        window.innerWidth - box.width - 8
      );
      var top = anchor.bottom + 8;
      if (top + box.height > window.innerHeight - 8) top = anchor.top - box.height - 8;

      popover.style.left = left + "px";
      popover.style.top = Math.max(8, top) + "px";
    }

    buttons.forEach(function (button) {
      // The native tooltip is the no-JavaScript fallback; with JavaScript it
      // would just duplicate the popover.
      button.removeAttribute("title");

      button.addEventListener("click", function (event) {
        event.stopPropagation();
        if (current === button) close();
        else open(button);
      });
    });

    document.addEventListener("click", close);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
    var pane = document.getElementById("tabela-scroll");
    if (pane) pane.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
  }

  // ------------------------------------------------------------- dropdowns

  function setupDropdowns() {
    var menus = Array.prototype.slice.call(document.querySelectorAll("[data-tabela-toolbar] details"));

    document.addEventListener("click", function (event) {
      menus.forEach(function (menu) {
        if (menu.open && !menu.contains(event.target)) menu.open = false;
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      menus.forEach(function (menu) { menu.open = false; });
    });
  }

  // ------------------------------------------------------ swipe affordance

  function setupSwipeHint() {
    var pane = document.getElementById("tabela-scroll");
    var hint = document.querySelector("[data-dica-arraste]");
    if (!pane || !hint) return;

    pane.addEventListener(
      "scroll",
      function () {
        if (pane.scrollLeft > 8) hint.hidden = true;
      },
      { passive: true }
    );
  }

  function init() {
    setupTheme();
    setupColumns();
    setupFilter();
    setupNotes();
    setupDropdowns();
    setupSwipeHint();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
