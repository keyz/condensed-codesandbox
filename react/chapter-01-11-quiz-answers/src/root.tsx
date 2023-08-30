import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale";
import data from "./data.json";

export function GitHubRoot() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {data.map((item) => {
        // See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
        const formattedCreatedAt = formatDistanceToNowStrict(
          new Date(item.created_at), // parse ISO 8601 date time string
          {
            addSuffix: true, // add "ago"
            locale: localeEnUs,
          },
        );

        return (
          <div key={item.id}>
            <p className="font-medium">
              <a className="hover:underline" href={item.html_url}>
                {item.full_name}
              </a>
            </p>
            <p>{item.description}</p>
            <p className="text-sm text-gray-600">
              <a
                className="hover:underline"
                href={`https://github.com/${item.full_name}/stargazers`}
              >
                {item.stargazers_count.toLocaleString("en-US")} stars
              </a>
              {" | "}
              created {formattedCreatedAt}
            </p>
          </div>
        );
      })}
    </div>
  );
}
