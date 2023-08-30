import { Octokit } from "@octokit/rest";
import * as React from "react";
import useSWR from "swr";
import { PaginationControl } from "./components/pagination";
import { formatRelativeTime } from "./helpers/time";
import type { TRepoSearchResultItem } from "./types";

const PAGE_SIZE = 8;

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
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const query = useGitHubRepoSearchQuery();
  const response = query.data;

  if (response == null) {
    return null;
  }

  const repoList = response.data.items;
  const totalItemCount = repoList.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // exclusive

  const canGoBack = startIndex > 0;
  const canGoNext = endIndex < totalItemCount;

  const visibleWindow = repoList.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item) => {
          return <RepoItem key={item.id} data={item} />;
        })}
      </div>

      <PaginationControl
        canGoBack={canGoBack}
        canGoNext={canGoNext}
        currentPageNumber={currentPageNumber}
        onNextClick={() => {
          setCurrentPageNumber((n) => n + 1);
        }}
        onPrevClick={() => {
          setCurrentPageNumber((n) => n - 1);
        }}
        totalPageCount={totalPageCount}
      />
    </div>
  );
}

function RepoItem(props: { data: TRepoSearchResultItem }) {
  const { data } = props;

  const formattedCreatedAt = formatRelativeTime(data.created_at);

  return (
    <div>
      <p className="font-medium">
        <a className="hover:underline" href={data.html_url}>
          {data.full_name}
        </a>
      </p>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        {data.stargazers_count.toLocaleString("en-US")} stars | created{" "}
        {formattedCreatedAt}
      </p>
    </div>
  );
}