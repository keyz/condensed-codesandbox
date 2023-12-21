import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale/en-US";
import repoList from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {repoList.map((item) => {
        // See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
        const formattedCreatedAt = formatDistanceToNowStrict(
          item.created_at, // Parse ISO 8601 date time string
          {
            addSuffix: true, // Add "ago"
            locale: localeEnUs,
          },
        );

        return (
          <div key={item.id}>
            <h2>
              <a href={item.html_url}>{item.full_name}</a>
            </h2>
            <p>{item.description}</p>
            <p>
              {item.stargazers_count} stars | created {formattedCreatedAt}
            </p>
          </div>
        );
      })}
    </div>
  );
}
