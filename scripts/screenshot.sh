#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
INTERNAL_ROOT="$REPO_ROOT/internal"
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

for dir in *
do
  if [[ "$dir" =~ ^template ]]
  then
    continue
  fi

  echo "Screenshotting $dir..."

  port=$(jot -r 1 10000 65000)

  cd "$REACT_ROOT/$dir"

  PORT="$port" corepack npm run dev &

  cd "$INTERNAL_ROOT"

  MODULE="$dir" PORT="$port" corepack npm run screenshot
  kill "$(lsof -t -i:"$port")"
done
