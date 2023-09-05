import * as React from "react";
import { repoList, type TRepoSearchResultItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

export function GitHubRoot() {
  return (
    <div className="flex flex-col gap-6">
      {repoList.map((item) => {
        return <RepoItem key={item.id} data={item} />;
      })}
    </div>
  );
}

function RepoItem(props: { data: TRepoSearchResultItem }) {
  const { data } = props;

  return (
    <div>
      <h2 className="font-medium">
        <a
          className="hover:underline"
          href={data.html_url}
          rel="noopener"
          target="_blank" // Open in new tab
        >
          {data.full_name}
        </a>
      </h2>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        {data.stargazers_count.toLocaleString("en-US")} stars | created{" "}
        {formatRelativeTime(data.created_at)}
      </p>
    </div>
  );
}
