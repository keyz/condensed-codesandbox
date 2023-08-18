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
              <a href={item.url}>{item.title}</a>
            </p>
            <p>
              {item.score} points by {item.by} {formattedTime} |{" "}
              {item.descendants} comments
            </p>
          </div>
        );
      })}
    </div>
  );
}
