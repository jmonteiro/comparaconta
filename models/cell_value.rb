# Classifies the free-text values that come out of the broker YAML files, so the
# table can render a scannable icon for the very common "Sim" / "Não" answers
# without losing the original wording.
module CellValue
  YES = /\Asim\b/i
  NO = /\An[ãa]o\b/i
  BARE_VERDICT = /\A(sim|n[ãa]o)\z/i
  UNAVAILABLE = /\A(n\/d|n\/a)\z/i

  module_function

  # :yes, :no, or nil when the value isn't a yes/no answer at all.
  def verdict(text)
    value = text.to_s.strip
    return :yes if value.match?(YES)
    return :no if value.match?(NO)
    nil
  end

  # True when the value is nothing but "Sim" or "Não", in which case the icon
  # already says everything and the word can be visually hidden.
  def bare_verdict?(text)
    text.to_s.strip.match?(BARE_VERDICT)
  end

  def unavailable?(text)
    text.to_s.strip.match?(UNAVAILABLE)
  end

  # Host of a source URL, for use as an accessible link name. Extracted with a
  # regexp rather than URI.parse because several sources contain unencoded
  # accented characters, which URI.parse rejects.
  def host(url)
    url.to_s[%r{\Ahttps?://(?:www\.)?([^/?#]+)}i, 1]
  end
end
