REPO_ROOT := $(shell git rev-parse --show-toplevel)
include $(REPO_ROOT)/internal/shared.mk

.PHONY: install
install:
	corepack npm install
	corepack npm run playwright:install
