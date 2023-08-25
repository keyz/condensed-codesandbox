#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

previous_dir=""
for current_dir in *
do
  if [[ "$current_dir" =~ ^template ]]
  then
    continue
  fi

  if [[ "$previous_dir" != "" ]]
  then
    printf "\n%*s\n\n" 80 "" | tr " " "=" # divider

    previous="$previous_dir/src/root.tsx"
    current="$current_dir/src/root.tsx"

    git --no-pager diff --no-index "$previous" "$current" || true
  fi

  previous_dir="$current_dir"
done
