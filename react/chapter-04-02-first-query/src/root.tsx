import { Octokit } from "@octokit/rest";
import * as React from "react";
import useSWR from "swr";
import { formatRelativeTime } from "./helpers/time";
import type { TRepoSearchResultItem } from "./types";

const octokit = new Octokit();

export function GitHubRoot() {
  const query = useGitHubRepoSearchQuery();
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
      </p>
    </div>
  );
}

function useGitHubRepoSearchQuery() {
  const cacheKey = ["octokit.search.repos"];

  return useSWR(cacheKey, async () => {
    // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories
    // https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax
    return await octokit.search.repos({
      q: "react+stars:>100",
      sort: "stars",
      order: "desc",
      per_page: 24,
      page: 1,
    });
  });
}
