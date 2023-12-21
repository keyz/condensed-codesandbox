import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale/en-US";
import repoList from "./data.json";

export function GitHubRoot() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {repoList.map((item) => {
        // See https://date-fns.org/docs/formatDistanceToNowStrict
        const formattedCreatedAt = formatDistanceToNowStrict(
          item.created_at, // Parse ISO 8601 date time string
          {
            addSuffix: true, // Add "ago"
            locale: localeEnUs,
          },
        );

        return (
          <div key={item.id}>
            <h2 className="font-medium">
              <a className="hover:underline" href={item.html_url}>
                {item.full_name}
              </a>
            </h2>
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
