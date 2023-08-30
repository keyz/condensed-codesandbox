import * as React from "react";
import cx from "classnames";
import { repoList, type TRepoSearchResultItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

const PAGE_SIZE = 8;

export function GitHubRoot() {
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);
  const [likeCountMap, setLikeCountMap] = React.useState<Map<number, number>>(
    new Map(),
  );
  const [hiddenItemSet, setHiddenItemSet] = React.useState<Set<number>>(
    new Set(),
  );

  const filteredRepoList = repoList.filter(
    (item) => !hiddenItemSet.has(item.id),
  );

  const totalItemCount = filteredRepoList.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // exclusive

  const canGoBack = startIndex > 0;
  const canGoNext = endIndex < totalItemCount;

  const visibleWindow = filteredRepoList.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item) => {
          return (
            <RepoItem
              key={item.id}
              data={item}
              likeCount={likeCountMap.get(item.id) ?? 0}
              onHideClick={() => {
                setHiddenItemSet((set) => {
                  const copy = new Set(set);
                  copy.add(item.id);
                  return copy;
                });
              }}
              onLikeClick={() => {
                setLikeCountMap((map) => {
                  const copy = new Map(map);
                  const currentLikeCount = copy.get(item.id) ?? 0;

                  copy.set(item.id, currentLikeCount + 1);
                  return copy;
                });
              }}
            />
          );
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
          disabled={!canGoNext}
          className={cx({
            "hover:underline": canGoNext,
            "text-gray-300": !canGoNext,
          })}
          onClick={() => {
            setCurrentPageNumber((n) => n + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function RepoItem(props: {
  data: TRepoSearchResultItem;
  likeCount: number;
  onHideClick: () => void;
  onLikeClick: () => void;
}) {
  const { data, likeCount, onHideClick, onLikeClick } = props;

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
            onHideClick();
          }}
        >
          hide
        </button>
        {" | "}
        <button
          className="hover:underline"
          onClick={() => {
            onLikeClick();
          }}
        >
          like ({likeCount})
        </button>
      </p>
    </div>
  );
}
