#!/usr/bin/env bash

set -e

# Ensure local user gems are prioritized (fixes 'bundler not found' issues)
export GEM_HOME=$HOME/.gem
export PATH=$GEM_HOME/bin:$PATH

# Try to use chruby if available, otherwise fallback to system ruby
if [ -f "$HOMEBREW_PREFIX/opt/chruby/share/chruby/chruby.sh" ]; then
    source "$HOMEBREW_PREFIX/opt/chruby/share/chruby/chruby.sh"
    # Attempt to use 3.3.4, but continue if not installed
    chruby 3.3.4 || echo "Warning: Ruby 3.3.4 not found via chruby, using default."
fi

echo "🚀 Installing/Updating dependencies..."
bundle install

echo "✨ Starting Jekyll server with livereload..."
bundle exec jekyll serve --livereload
