REPO_ROOT := $(shell git rev-parse --show-toplevel)
include $(REPO_ROOT)/shared.mk

REACT_SUBDIR_LIST := $(wildcard react/*)

.PHONY: copy
copy:
	@./scripts/copy.sh

.PHONY: dev
dev:
	@./scripts/dev.sh

.PHONY: diff
diff:
	@./scripts/diff.sh

.PHONY: embed
embed:
	@./scripts/embed.sh

.PHONY: for-each
for-each:
	@for dir in $(REACT_SUBDIR_LIST); do \
		printf '%s $$ %s\n' "$$dir" "$(COMMAND)"; \
		(cd $$dir && $(COMMAND)); \
	done

.PHONY: gen
gen:
	@./scripts/gen.sh

.PHONY: install
install:
	npm install
	@$(MAKE) for-each COMMAND="npm install"

.PHONY: outdated
outdated:
	npm outdated
	@$(MAKE) for-each COMMAND="npm outdated"

.PHONY: rename
rename:
	@./scripts/rename.sh

.PHONY: reset
reset:
	rm -rf ./node_modules/ ./.next/ ./.cache/
	@$(MAKE) for-each COMMAND="rm -rf ./node_modules/ ./.next/ ./.cache/"

.PHONY: snapshot
snapshot:
	@${MAKE} diff > ./diff/react.diff

.PHONY: upgrade
upgrade:
	npm upgrade --save
	@$(MAKE) for-each COMMAND="npm upgrade --save"

.PHONY: warmup
warmup:
	@WARMUP=1 ./scripts/embed.sh
