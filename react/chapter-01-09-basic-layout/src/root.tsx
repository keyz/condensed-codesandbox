import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale";
import data from "./data.json";

export function GitHubRoot() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {data.map((item) => {
        // See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
        const formattedTime = formatDistanceToNowStrict(
          item.time * 1000, // seconds -> milliseconds
          {
            addSuffix: true, // add "ago"
            locale: localeEnUs,
          },
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
