import * as React from "react";
import { storyList, type TStoryItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

const PAGE_SIZE = 10;

export function HackerNews() {
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const totalItemCount = storyList.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // exclusive

  const visibleWindow = storyList.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item, index) => {
          return <NewsItem key={index} data={item} />;
        })}
      </div>

      <div className="mt-12">
        <button
          className="hover:underline"
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
          className="hover:underline"
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

  const [likeCount, setLikeCount] = React.useState<number>(0);

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
            setLikeCount((num) => num + 1);
          }}
        >
          like ({likeCount})
        </button>
      </p>
    </div>
  );
}
