import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import NextImage from "next/image";
import * as React from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { PaginationControl } from "./components/pagination";
import { Button, Link } from "./components/pressable";
import { OctokitProvider, useOctokit } from "./context";
import { assertNonNull, isGitHubRequestError } from "./helpers/refinement";
import { formatRelativeTime } from "./helpers/time";
import type { TRepoSearchResultItem } from "./types";

const PAGE_SIZE = 8;

export function GitHubRoot() {
  return (
    <OctokitProvider>
      <AuthGating>
        <GitHubView />
      </AuthGating>
    </OctokitProvider>
  );
}

function AuthGating(props: { children: React.ReactNode }) {
  const { children } = props;
  const { octokit, setGitHubToken } = useOctokit();

  if (octokit == null) {
    return (
      <Button
        onClick={() => {
          const userInput = window.prompt(
            "What’s your GitHub personal access token?",
          );

          // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#githubs-token-formats
          if (
            !userInput?.startsWith("ghp_") &&
            !userInput?.startsWith("github_pat_")
          ) {
            window.alert("Invalid access token");
            return;
          }

          setGitHubToken(userInput);
        }}
      >
        Log in
      </Button>
    );
  }

  return children;
}

function GitHubView() {
  const [rawInput, setRawInput] = React.useState<string>("react+stars:>100");
  const [searchQ, setSearchQ] = React.useState<string>("react+stars:>100");

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-8">
        <form
          className="flex flex-grow gap-4"
          onSubmit={(event) => {
            event.preventDefault();

            setSearchQ(rawInput);
          }}
        >
          <input
            className="w-full max-w-[240px] rounded-md border px-3 py-1 text-sm shadow-sm"
            onChange={(event) => {
              const newInputValue = event.currentTarget.value;

              setRawInput(newInputValue);
            }}
            value={rawInput}
          />

          <Button type="submit">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </form>

        <UserAvatar />
      </div>

      <SearchResult key={searchQ} searchQ={searchQ} />
    </>
  );
}

function UserAvatar() {
  const query = useGitHubWhoAmIQuery();
  const { setGitHubToken } = useOctokit();

  const response = query.data;
  if (response == null) {
    return null;
  }

  return (
    <button
      className="rounded-full active:scale-95"
      onClick={() => {
        const userInput = window.confirm("Log out?");
        if (userInput) {
          setGitHubToken(null);
          window.location.reload();
        }
      }}
    >
      <NextImage
        src={response.data.avatar_url}
        alt="GitHub user avatar"
        width={32}
        height={32}
        className="-my-1 rounded-full shadow-sm"
      />
    </button>
  );
}

function SearchResult(props: { searchQ: string }) {
  const { searchQ } = props;

  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const query = useGitHubRepoSearchQuery({
    q: searchQ,
    pageNumber: currentPageNumber + 1,
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.error != null) {
    return <div>{String(query.error)}</div>;
  }

  const response = query.data;
  if (response == null) {
    return null;
  }

  const repoList = response.data.items;

  const totalItemCount = response.data.total_count;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const canGoBack = currentPageNumber * PAGE_SIZE > 0;
  const canGoForward = (currentPageNumber + 1) * PAGE_SIZE < totalItemCount;

  return (
    <>
      <div className="flex flex-col gap-6">
        {repoList.map((item) => {
          return <RepoItem key={item.id} data={item} />;
        })}
      </div>

      <PaginationControl
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        currentPageNumber={currentPageNumber}
        onNextClick={() => {
          setCurrentPageNumber((n) => n + 1);
        }}
        onPrevClick={() => {
          setCurrentPageNumber((n) => n - 1);
        }}
        totalPageCount={totalPageCount}
      />

      {canGoForward ? (
        <PrefetchPage searchQ={searchQ} pageNumber={currentPageNumber + 2} />
      ) : null}
    </>
  );
}

function RepoItem(props: { data: TRepoSearchResultItem }) {
  const { data } = props;

  assertNonNull(data.owner, "data.owner");

  const query = useGitHubRepoLatestReleaseQuery({
    owner: data.owner.login,
    repo: data.name,
  });

  const releaseInfo =
    query.data == null ? null : (
      <span>
        {" | "}
        {query.data.data.tag_name} (
        {formatRelativeTime(query.data.data.created_at)})
      </span>
    );

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-medium">
          <Link href={data.html_url} shouldOpenInNewTab={true}>
            {data.full_name}
          </Link>
        </h2>
        <StarCell
          owner={data.owner.login}
          repo={data.name}
          starCount={data.stargazers_count}
        />
      </div>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        Created {formatRelativeTime(data.created_at)}
        {releaseInfo}
      </p>
    </div>
  );
}

function StarCell(props: { owner: string; repo: string; starCount: number }) {
  const { owner, repo, starCount } = props;

  const starStatusQuery = useGitHubRepoStarStatusQuery({
    owner,
    repo,
  });

  const isLoading = starStatusQuery.data == null; // TODO
  const hasStarred = starStatusQuery.data === true;

  return (
    <div className="flex items-baseline gap-1 text-gray-600">
      <p className="text-sm">{starCount.toLocaleString("en-US")}</p>
      <StarIcon
        className={cx({
          "-mt-[1px] h-4 w-4 self-center": true,
          "text-gray-400": isLoading,
          "fill-orange-400 text-orange-400": hasStarred,
        })}
      />
    </div>
  );
}

function PrefetchPage(props: { searchQ: string; pageNumber: number }) {
  const { searchQ, pageNumber } = props;

  useGitHubRepoSearchQuery({
    q: searchQ,
    pageNumber,
  });

  return null;
}

function useGitHubRepoSearchQuery(input: { q: string; pageNumber: number }) {
  const { q, pageNumber } = input;
  const { octokit } = useOctokit();
  assertNonNull(octokit, "octokit");

  const cacheKey = ["octokit.search.repos", q, pageNumber];

  return useSWR(cacheKey, async () => {
    // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
    // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax
    // https://octokit.github.io/rest.js/v20#search-repos
    return await octokit.search.repos({
      q,
      sort: "stars",
      order: "desc",
      per_page: PAGE_SIZE,
      page: pageNumber,
    });
  });
}

function useGitHubRepoLatestReleaseQuery(input: {
  owner: string;
  repo: string;
}) {
  const { owner, repo } = input;
  const { octokit } = useOctokit();
  assertNonNull(octokit, "octokit");

  const cacheKey = ["octokit.repos.getLatestRelease", owner, repo];

  return useSWR(cacheKey, async () => {
    try {
      // https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#get-the-latest-release
      // https://octokit.github.io/rest.js/v20#repos-get-latest-release
      return await octokit.repos.getLatestRelease({
        owner,
        repo,
      });
    } catch (error) {
      if (isGitHubRequestError(error)) {
        if (error.status === 404) {
          return null; // No releases
        }
      }

      throw error; // Rethrow otherwise
    }
  });
}

function useGitHubRepoStarStatusQuery(input: { owner: string; repo: string }) {
  const { owner, repo } = input;
  const { octokit } = useOctokit();
  assertNonNull(octokit, "octokit");

  const cacheKey = [
    "octokit.activity.checkRepoIsStarredByAuthenticatedUser",
    owner,
    repo,
  ];

  return useSWR(cacheKey, async (): Promise<boolean> => {
    // https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28#check-if-a-repository-is-starred-by-the-authenticated-user
    // https://octokit.github.io/rest.js/v20#activity-check-repo-is-starred-by-authenticated-user
    try {
      const response =
        await octokit.activity.checkRepoIsStarredByAuthenticatedUser({
          owner,
          repo,
          headers: {
            "If-None-Match": "", // Disable caching
          },
        });

      return response.status === 204;
    } catch (error) {
      if (isGitHubRequestError(error)) {
        if (error.status === 404) {
          return false; // Not starred
        }
      }

      throw error; // Rethrow otherwise
    }
  });
}

function useGitHubWhoAmIQuery() {
  const { octokit } = useOctokit();
  assertNonNull(octokit, "octokit");

  const cacheKey = ["octokit.users.getAuthenticated"];

  return useSWR(cacheKey, async () => {
    try {
      // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user
      // https://octokit.github.io/rest.js/v20#users-get-authenticated
      return await octokit.users.getAuthenticated();
    } catch (error) {
      if (isGitHubRequestError(error)) {
        if (error.status === 401) {
          return null; // Not logged in: no current user
        }
        if (error.status === 403) {
          return null; // Rate limit reached: likely no access token
        }
      }

      throw error; // Rethrow otherwise
    }
  });
}
