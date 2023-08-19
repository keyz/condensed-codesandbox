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

.PHONY: upgrade
upgrade:
	npm upgrade --save
	@$(MAKE) for-each COMMAND="npm upgrade --save"
