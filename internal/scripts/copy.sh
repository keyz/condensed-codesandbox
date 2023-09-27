#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

read -rep "File source? " template
source_path=${template%/}
echo ""

read -rep "Replicate file \`$source_path\` to all modules? [y/N] " response
echo ""

if ! [[ "$response" =~ ^[Yy]$ ]]
then
  echo "Skipped."
  exit 1
fi

source_name=$(echo "$source_path" | cut -d/ -f1)

for target_name in *
do
  if [[ "$target_name" == "$source_name" ]]
  then
    continue
  fi

  target_path=$(echo "$source_path" | sed "s/$source_name\//$target_name\//")

  command="mkdir -p $(dirname "$target_path") && cp $source_path $target_path"
  echo "$ $command"
  eval "$command"

  sed -i "" "s/$source_name/$target_name/g" "$target_path"
  echo "Updated generated files"
done
