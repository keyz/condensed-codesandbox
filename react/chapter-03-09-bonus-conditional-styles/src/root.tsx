import * as React from "react";
import cx from "classnames";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale";
import { storyList, type TStoryItem } from "./data";

const PAGE_SIZE = 10;

export function HackerNews() {
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const totalItemCount = storyList.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // exclusive

  const canGoBack = startIndex > 0;
  const canGoNext = endIndex < totalItemCount;

  const visibleWindow = storyList.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item) => {
          return <NewsItem key={item.id} data={item} />;
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

function NewsItem(props: { data: TStoryItem }) {
  const { data } = props;

  const [isHidden, setIsHidden] = React.useState<boolean>(false);

  if (isHidden) {
    return null;
  }

  // See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
  const formattedTime = formatDistanceToNowStrict(
    data.time * 1000, // seconds -> milliseconds
    {
      addSuffix: true, // add "ago"
      locale: localeEnUs,
    },
  );

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
        <button
          className="hover:underline"
          onClick={() => {
            setIsHidden(true);
          }}
        >
          hide
        </button>
        {" | "}
        <a
          className="hover:underline"
          href={`https://news.ycombinator.com/item?id=${data.id}`}
        >
          {data.descendants} comments
        </a>
      </p>
    </div>
  );
}
