import { Octokit } from "@octokit/rest";
import * as React from "react";
import useSWR from "swr";
import { formatRelativeTime } from "./helpers/time";
import type { TRepoSearchResultItem } from "./types";

const octokit = new Octokit();

function useGitHubRepoSearchQuery() {
  return useSWR(["octokit.search.repos"], async () => {
    return await octokit.search.repos({
      q: "react+stars:>100",
      sort: "stars",
      order: "desc",
      per_page: 40,
      page: 1,
    });
  });
}

export function GitHubRoot() {
  const query = useGitHubRepoSearchQuery();
  const response = query.data;

  if (response == null) {
    return null;
  }

  const repoList = response.data.items;

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {repoList.map((item) => {
          return <RepoItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

function RepoItem(props: { data: TRepoSearchResultItem }) {
  const { data } = props;

  const formattedCreatedAt = formatRelativeTime(data.created_at);

  return (
    <div>
      <h2 className="font-medium">
        <a
          className="hover:underline"
          href={data.html_url}
          rel="noopener"
          target="_blank" // open in new tab
        >
          {data.full_name}
        </a>
      </h2>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        {data.stargazers_count.toLocaleString("en-US")} stars | created{" "}
        {formattedCreatedAt}
      </p>
    </div>
  );
}
