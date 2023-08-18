#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

read -rep "Template to use? " template
template=${template%/} # remove trailing slash
echo ""

read -rep "Path for the new module? " target
target=${target%/}
echo ""

read -rep "Create new project \`$target\` from template \`$template\`? [y/N] " response
echo ""

if ! [[ "$response" =~ ^[Yy]$ ]]
then
  echo "Skipped."
  exit 1
else
  npx create-next-app@latest --example "https://github.com/keyz/condensed-codesandbox/tree/main/react/$template" "$target"

  echo "Updating generated files..."

  cd "$target"
  for file in *.{json,md}
  do
    sed -i "" "s/$template/$target/g" "$file"
  done

  echo "Done!"
fi
