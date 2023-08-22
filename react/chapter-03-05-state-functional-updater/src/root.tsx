import * as React from "react";
import { storyList, type TStoryItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

export function HackerNews() {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {storyList.map((item) => {
          return <NewsItem key={item.id} data={item} />;
        })}
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
            setLikeCount((num) => num + 1);
            setLikeCount((num) => num + 1);
          }}
        >
          like ({likeCount})
        </button>
      </p>
    </div>
  );
}
