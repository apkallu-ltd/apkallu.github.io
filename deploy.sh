#!/usr/bin/env bash

set -e

source $HOMEBREW_PREFIX/opt/chruby/share/chruby/chruby.sh
chruby 3.3.4
bundle install
bundle exec jekyll serve