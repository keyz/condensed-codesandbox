#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

name="$1"
template="template-minimal"

read -r -p "Create new project \`$name\` from template \`$template\`? [y/N] " response

if ! [[ "$response" =~ ^[Yy]$ ]]
then
  echo "Skipped."
  exit 1
else
  cd "$REACT_ROOT"
  npx create-next-app@latest --example "https://github.com/keyz/condensed-codesandbox/tree/main/react/$template" "$name"
  echo "Updating generated files..."

  cd "$REACT_ROOT/$name"
  for file in *.{json,md}
  do
    sed -i "" "s/$template/$name/g" "$file"
  done

  echo "Done!"
fi
