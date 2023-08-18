#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

read -rep "File source? " template
from=${template%/}
echo ""

read -rep "Replicate file \`$from\` to all modules? [y/N] " response
echo ""

if ! [[ "$response" =~ ^[Yy]$ ]]
then
  echo "Skipped."
  exit 1
fi

source_dir=$(echo "$from" | cut -d/ -f1)

for current_dir in *
do
  if [[ "$current_dir" == "$source_dir" ]]
  then
    continue
  fi

  target=$(echo "$from" | sed "s/$source_dir\//$current_dir\//")

  command="cp $from $target"
  echo "$ $command"
  eval "$command"
done
