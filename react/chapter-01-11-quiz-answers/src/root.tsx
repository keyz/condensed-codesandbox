import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import data from "./hn-top-stories.json";

export function HackerNews() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {data.map((item) => {
        const formattedTime = formatDistanceToNowStrict(
          item.time * 1000, // seconds -> milliseconds
          { addSuffix: true }, // add "ago"
        );

        return (
          <div key={item.id}>
            <p>
              <a className="hover:underline" href={item.url}>
                {item.title}
              </a>
            </p>
            <p className="text-sm text-gray-600">
              {item.score} points by {item.by} {formattedTime} |{" "}
              <a
                className="hover:underline"
                href={`https://news.ycombinator.com/item?id=${item.id}`}
              >
                {item.descendants} comments
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
}
