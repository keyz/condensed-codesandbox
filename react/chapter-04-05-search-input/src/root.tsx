import { Octokit } from "@octokit/rest";
import * as React from "react";
import useSWR from "swr";
import { assertNonNull } from "./helpers/refinement";
import { formatRelativeTime } from "./helpers/time";
import type { TRepoSearchResultItem } from "./types";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_UNSAFE_LOCAL_ONLY_GITHUB_PERSONAL_ACCESS_TOKEN,
});

export function GitHubRoot() {
  const [searchQ, setSearchQ] = React.useState<string>("react+stars:>100");

  return (
    <>
      <div className="mb-6">
        <input
          className="w-60 rounded-md border px-3 py-1 text-sm shadow-sm"
          onChange={(event) => {
            const newInputValue = event.currentTarget.value;

            setSearchQ(newInputValue);
          }}
          value={searchQ}
        />
      </div>

      <SearchResult searchQ={searchQ} />
    </>
  );
}

function SearchResult(props: { searchQ: string }) {
  const { searchQ } = props;

  const query = useGitHubRepoSearchQuery(searchQ);

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

  return (
    <div className="flex flex-col gap-6">
      {repoList.map((item) => {
        return <RepoItem key={item.id} data={item} />;
      })}
    </div>
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
        {query.data.data.tag_name} (released{" "}
        {formatRelativeTime(query.data.data.created_at)})
      </span>
    );

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
        {formatRelativeTime(data.created_at)}
        {releaseInfo}
      </p>
    </div>
  );
}

function useGitHubRepoSearchQuery(q: string) {
  const cacheKey = ["octokit.search.repos", q];

  return useSWR(cacheKey, async () => {
    // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
    // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax
    return await octokit.search.repos({
      q,
      sort: "stars",
      order: "desc",
      per_page: 24,
      page: 1,
    });
  });
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
