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

  url="https://codesandbox.io/p/sandbox/github/keyz/condensed-codesandbox/tree/main/react/$dir?file=/src/root.tsx"

  echo "$dir"
  echo -e "\t$url\n"

  if [[ "${WARMUP:-0}" == "1" ]]
  then
    curl --fail --silent --show-error --output /dev/null "$url"
  fi
done
