import { Octokit } from "@octokit/rest";
import * as React from "react";
import useSWR from "swr";
import { PaginationControl } from "./components/pagination";
import { assertNonNull } from "./helpers/refinement";
import { formatRelativeTime } from "./helpers/time";
import type { TRepoSearchResultItem } from "./types";

const PAGE_SIZE = 8;

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_UNSAFE_LOCAL_ONLY_GITHUB_PERSONAL_ACCESS_TOKEN,
});

export function GitHubRoot() {
  const [rawInput, setRawInput] = React.useState<string>("react+stars:>100");
  const [searchQ, setSearchQ] = React.useState<string>("react+stars:>100");

  return (
    <>
      <form
        className="mb-6 flex gap-4"
        onSubmit={(event) => {
          event.preventDefault();

          setSearchQ(rawInput);
        }}
      >
        <input
          className="w-60 rounded-md border px-3 py-1 text-sm shadow-sm"
          onChange={(event) => {
            const newInputValue = event.currentTarget.value;

            setRawInput(newInputValue);
          }}
          value={rawInput}
        />

        <button
          className="rounded-md border px-3 py-1 text-sm font-medium shadow-sm active:scale-95"
          type="submit"
        >
          Search
        </button>
      </form>

      <SearchResult searchQ={searchQ} />
    </>
  );
}

function useGitHubRepoSearchQuery(input: { q: string; pageNumber: number }) {
  const { q, pageNumber } = input;
  const cacheKey = ["octokit.search.repos", q, pageNumber];

  return useSWR(cacheKey, async () => {
    // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
    // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax
    return await octokit.search.repos({
      q,
      sort: "stars",
      order: "desc",
      per_page: PAGE_SIZE,
      page: pageNumber,
    });
  });
}

function SearchResult(props: { searchQ: string }) {
  const { searchQ } = props;

  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const query = useGitHubRepoSearchQuery({
    q: searchQ,
    pageNumber: currentPageNumber + 1,
  });
  const response = query.data;

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.error != null) {
    return <div>{String(query.error)}</div>;
  }

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
    </>
  );
}

function useGitHubRepoLatestReleaseQuery(input: {
  owner: string;
  repo: string;
}) {
  const { owner, repo } = input;
  const cacheKey = ["octokit.repos.getLatestRelease", owner, repo];

  return useSWR(cacheKey, async () => {
    // https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#get-the-latest-release
    return octokit.repos.getLatestRelease({
      owner,
      repo,
    });
  });
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
        {query.data.data.tag_name} (released{" "}
        {formatRelativeTime(query.data.data.created_at)})
      </span>
    );

  const formattedCreatedAt = formatRelativeTime(data.created_at);

  return (
    <div>
      <h2 className="font-medium">
        <a
          className="hover:underline"
          href={data.html_url}
          rel="noopener"
          target="_blank" // Open in new tab
        >
          {data.full_name}
        </a>
      </h2>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        {data.stargazers_count.toLocaleString("en-US")} stars | created{" "}
        {formattedCreatedAt}
        {releaseInfo}
      </p>
    </div>
  );
}
