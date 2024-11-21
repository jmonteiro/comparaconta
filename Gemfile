source "https://rubygems.org"

# Stand-alone Sitepress server and compiler.
gem "sitepress", "~> 4.0"

# Templating engines. Under the hood Sitepress uses a slimmed
# down Rails, so rails templating engines should mostly work.
gem "sass-rails"
gem "markdown-rails", "~> 1.0"

group :development do
  gem "overmind", require: false
  gem "ruby-lsp", require: false
  gem "standard", "1.41.1", require: false
  # Server used for the Sitepress preview server.
  gem "webrick"
end
