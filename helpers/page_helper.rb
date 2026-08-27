module PageHelper
  # Canonical origin of the published site. Used to build absolute URLs for
  # canonical links, Open Graph tags and the sitemap.
  SITE_URL = "https://comparaconta.com"

  def link_to_page(page)
    link_to page.data.fetch("title", page.request_path), page.request_path
  end

  def link_to_if_current(text, page, active_class: "active")
    if page == current_page
      link_to text, page.request_path, class: active_class
    else
      link_to text, page.request_path
    end
  end

  def site_url
    SITE_URL
  end

  # Absolute URL for a page, e.g. "https://comparaconta.com/corretoras-exterior".
  def canonical_url(page = current_page)
    File.join(SITE_URL, page.request_path)
  end

  # The page description, collapsed onto a single line so it can be used inside
  # a meta tag. Front matter uses a YAML block scalar for readability.
  def page_description(page = current_page)
    page.data["description"].to_s.split.join(" ")
  end

  def page_title(page = current_page)
    [page.data["title"], "ComparaConta.com"].compact.uniq.join(" | ")
  end
end
