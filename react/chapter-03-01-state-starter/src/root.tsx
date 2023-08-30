import { repoList } from "./data";
import { formatRelativeTime } from "./helpers/time";

export function GitHubRoot() {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {repoList.map((item) => {
          const formattedCreatedAt = formatRelativeTime(item.created_at);

          return (
            <div key={item.id}>
              <p className="font-medium">
                <a className="hover:underline" href={item.html_url}>
                  {item.full_name}
                </a>
              </p>
              <p>{item.description}</p>
              <p className="text-sm text-gray-600">
                {item.stargazers_count.toLocaleString("en-US")} stars | created{" "}
                {formattedCreatedAt}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
