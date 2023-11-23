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

  # https://codesandbox.io/docs/learn/devboxes/synced-templates
  # sandbox_url="https://codesandbox.io/s/github/keyz/condensed-codesandbox/main/react/$dir?file=/src/root.tsx"
  sandbox_url="https://codesandbox.io/p/devbox/github/keyz/condensed-codesandbox/tree/main/react/$dir?file=/src/root.tsx"
  embedded_url="https://condensed.dev/embedded/react/$dir"

  echo "$dir"
  echo -e "\t- $sandbox_url"
  echo -e "\t- $embedded_url\n"

  if [[ "${WARMUP:-0}" == "1" ]]
  then
    curl --fail --silent --show-error --output /dev/null --location "$sandbox_url"
  fi
done
