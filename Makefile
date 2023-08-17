REPO_ROOT := $(shell git rev-parse --show-toplevel)
include $(REPO_ROOT)/shared.mk

REACT_SUBDIR_LIST := $(wildcard react/*)

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
