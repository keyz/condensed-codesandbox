import * as React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale";
import { storyList, type TStoryItem } from "./data";

export function HackerNews() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {storyList.map((item) => {
        return <NewsItem key={item.id} data={item} />;
      })}
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
