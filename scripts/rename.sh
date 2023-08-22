#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

read -rep "Module to rename? " source_name
source_name=${source_name%/} # remove trailing slash
echo ""

read -rep "New name? " target_name
target_name=${target_name%/}
echo ""

read -rep "Rename module \`$source_name\` to \`$target_name\`? [y/N] " response
echo ""

if ! [[ "$response" =~ ^[Yy]$ ]]
then
  echo "Skipped."
  exit 1
fi

git mv -v "$source_name" "$target_name"

echo "Updating generated files..."

cd "$target_name"
for file in *.{json,md}
do
  sed -i "" "s/$source_name/$target_name/g" "$file"
done

echo "Done!"
