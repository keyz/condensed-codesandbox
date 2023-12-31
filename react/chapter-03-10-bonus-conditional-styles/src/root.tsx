import * as React from "react";
import cx from "classnames";
import { repoList, type TRepoSearchResultItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

const PAGE_SIZE = 8;

export function GitHubRoot() {
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const totalItemCount = repoList.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // Inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // Exclusive

  const canGoBack = startIndex > 0;
  const canGoForward = endIndex < totalItemCount;

  const visibleWindow = repoList.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item) => {
          return <RepoItem key={item.id} data={item} />;
        })}
      </div>

      <div className="mt-12">
        <button
          disabled={!canGoBack}
          className={cx({
            "hover:underline": canGoBack,
            "text-gray-300": !canGoBack,
          })}
          onClick={() => {
            setCurrentPageNumber((n) => n - 1);
          }}
        >
          Prev
        </button>

        <span className="mx-8">
          {currentPageNumber + 1} / {totalPageCount}
        </span>

        <button
          disabled={!canGoForward}
          className={cx({
            "hover:underline": canGoForward,
            "text-gray-300": !canGoForward,
          })}
          onClick={() => {
            setCurrentPageNumber((n) => n + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

function RepoItem(props: { data: TRepoSearchResultItem }) {
  const { data } = props;

  const [likeCount, setLikeCount] = React.useState<number>(0);

  const formattedCreatedAt = formatRelativeTime(data.created_at);

  return (
    <div>
      <h2 className="font-medium">
        <a className="hover:underline" href={data.html_url}>
          {data.full_name}
        </a>
      </h2>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        {data.stargazers_count.toLocaleString("en-US")} stars | created{" "}
        {formattedCreatedAt}
        {" | "}
        <button
          className="hover:underline"
          onClick={() => {
            setLikeCount((num) => num + 1);
          }}
        >
          like ({likeCount})
        </button>
      </p>
    </div>
  );
}
