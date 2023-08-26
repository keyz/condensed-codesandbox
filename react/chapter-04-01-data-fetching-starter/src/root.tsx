import * as React from "react";
import cx from "classnames";
import { storyList, type TStoryItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

const PAGE_SIZE = 10;

export function HackerNews() {
  const data = storyList;

  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);
  const [likeCountMap, setLikeCountMap] = React.useState<Map<number, number>>(
    new Map(),
  );

  const totalItemCount = data.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // exclusive

  const canGoBack = startIndex > 0;
  const canGoNext = endIndex < totalItemCount;

  const visibleWindow = data.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item) => {
          return (
            <NewsItem
              key={item.id}
              data={item}
              likeCount={likeCountMap.get(item.id) ?? 0}
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

function NewsItem(props: {
  data: TStoryItem;
  likeCount: number;
  onLikeClick: () => void;
}) {
  const { data, likeCount, onLikeClick } = props;

  const formattedTime = formatRelativeTime(data.time);

  return (
    <div>
      <p>
        <a className="hover:underline" href={data.url}>
          {data.title}
        </a>
      </p>

      <p className="text-sm text-gray-600">
        {data.score} points by {data.by} {formattedTime}
        {" | "}
        <a
          className="hover:underline"
          href={`https://news.ycombinator.com/item?id=${data.id}`}
        >
          {data.descendants} comments
        </a>
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

function PaginationControl(props: {
  canGoBack: boolean;
  canGoNext: boolean;
  currentPageNumber: number;
  onNextClick: () => void;
  onPrevClick: () => void;
  totalPageCount: number;
}) {
  const {
    canGoBack,
    canGoNext,
    currentPageNumber,
    onNextClick,
    onPrevClick,
    totalPageCount,
  } = props;

  return (
    <div className="mt-12">
      <button
        disabled={!canGoBack}
        className={cx({
          "hover:underline": canGoBack,
          "text-gray-300": !canGoBack,
        })}
        onClick={onPrevClick}
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
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
}
