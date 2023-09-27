#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT=$(git rev-parse --show-toplevel)
REACT_ROOT="$REPO_ROOT/react"

cd "$REACT_ROOT"

read -rep "Module to run? " target
echo ""

cd "$target"
corepack npm run dev
