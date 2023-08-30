#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"
DIFF_ROOT="$REPO_ROOT/diff"

rm -rf "$DIFF_ROOT"
mkdir -p "$DIFF_ROOT"

cd "$REACT_ROOT"

for current_dir in *
do
  config_path="$current_dir/.condensed.json"

  if ! [[ -f "$config_path" ]]
  then
    continue
  fi

  previous_dir=$(jq -r '.diffBase | select(. != null)' "$config_path")

  if [[ -z "$previous_dir" ]]
  then
    continue
  fi

  previous="$previous_dir/src/root.tsx"
  current="$current_dir/src/root.tsx"

  target_path="$DIFF_ROOT/$current_dir.diff"

  (git --no-pager diff --no-index "$previous" "$current" || true) > "$target_path"

  sed_pattern="/^index [a-f0-9]{7}\.\.[a-f0-9]{7} [0-9]{6}$/d"

  if [[ "$OSTYPE" == "darwin"* ]]
  then
    sed -E -i "" "$sed_pattern" "$target_path"
  else
    sed -E -i -e "$sed_pattern" "$target_path"
  fi
done
