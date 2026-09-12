source "https://rubygems.org"

# Matches the gem set actually supported/run by GitHub Pages.
# See: https://pages.github.com/versions/
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Required by `jekyll serve` on Ruby 3.x — webrick left the stdlib in Ruby 3.0.
# Local preview only; GitHub Pages ignores this Gemfile when it builds.
gem "webrick", "~> 1.8"

# Windows/JRuby shims some Jekyll versions need.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw]
