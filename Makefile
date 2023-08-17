REPO_ROOT := $(shell git rev-parse --show-toplevel)
include $(REPO_ROOT)/shared.mk

REACT_SUBDIR_LIST := $(wildcard react/*)

.PHONY: diff
diff:
	@./scripts/diff.sh

.PHONY: embed
embed:
	@for dir in $(REACT_SUBDIR_LIST); do \
		printf '%s\n' "$$dir"; \
		printf '\thttps://codesandbox.io/p/sandbox/github/keyz/condensed-codesandbox/tree/main/%s?file=/src/root.tsx\n\n' $$dir; \
	done

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
