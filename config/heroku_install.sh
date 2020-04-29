#!/usr/bin/env sh
set -e
npm config set "@fortawesome:registry" 'https://npm.fontawesome.com/'
npm config set "//npm.fontawesome.com/:_authToken" "$FONT_AWESOME_AUTH_TOKEN"