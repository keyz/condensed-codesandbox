REPO_ROOT := $(shell git rev-parse --show-toplevel)
include $(REPO_ROOT)/shared.mk

REACT_SUBDIR_LIST := $(wildcard react/*)

.PHONY: copy
copy:
	@./scripts/copy.sh

.PHONY: dev
dev:
	@./scripts/dev.sh

.PHONY: embed
embed:
	@./scripts/embed.sh

.PHONY: for-each
for-each:
	@set -e; \
	for dir in $(REACT_SUBDIR_LIST); do \
		printf '%s $$ %s\n' "$$dir" "$(COMMAND)"; \
		(cd $$dir && $(COMMAND)); \
	done

.PHONY: gen
gen:
	@./scripts/gen.sh

.PHONY: install
install:
	npm install

.PHONY: install-ci
install-ci:
	npm ci

.PHONY: matrixize
matrixize:
	@echo "$(REACT_SUBDIR_LIST)" | jq -cR 'split(" ")'

.PHONY: outdated
outdated:
	npm outdated

.PHONY: rename
rename:
	@./scripts/rename.sh

.PHONY: reset
reset:
	rm -rf ./node_modules/ ./.next/ ./.cache/
	@$(MAKE) for-each COMMAND="rm -rf ./node_modules/ ./.next/ ./.cache/"

.PHONY: snapshot
snapshot:
	@./scripts/snapshot.sh

.PHONY: upgrade
upgrade:
	npm upgrade --save

.PHONY: warmup
warmup:
	@WARMUP=1 ./scripts/embed.sh
