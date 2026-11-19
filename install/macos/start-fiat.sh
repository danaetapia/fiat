#!/bin/sh
# Starts Fiat on macOS: a local web server for the oracle folder, then Chrome
# full screen. Ollama must already be running (the Ollama app starts it at login).
#
# Template based on the setup at De Nederlandsche Bank. Adapt the paths and
# test it on your own machine before leaving it unattended.

ORACLE_DIR="$(cd "$(dirname "$0")/../../oracle" && pwd)"
PORT=8000
PROFILE="$HOME/.fiat-chrome"          # own profile, so Chrome starts a separate process

cd "$ORACLE_DIR" || exit 1
python3 -m http.server "$PORT" --bind 127.0.0.1 &
SERVER_PID=$!
sleep 2

# Background throttling is disabled so the field keeps moving if the window
# loses focus.
open -na "Google Chrome" --args \
  --kiosk \
  --user-data-dir="$PROFILE" \
  --noerrdialogs \
  --disable-session-crashed-bubble \
  --disable-background-timer-throttling \
  --disable-renderer-backgrounding \
  --disable-backgrounding-occluded-windows \
  "http://127.0.0.1:$PORT/"

# Stay alive with the server. If it dies, this script exits and launchd
# starts it again.
wait "$SERVER_PID"
