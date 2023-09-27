#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

for dir in *
do
  if [[ "$dir" =~ ^template ]]
  then
    continue
  fi

  port=$(jot -r 1 10000 65000)

  cd "$REACT_ROOT/$dir"

  PORT="$port" corepack npm run dev &
  # pid="$!"

  MODULE="$dir" PORT="$port" make -C "$REPO_ROOT/internal" screenshot
  killall node
done
