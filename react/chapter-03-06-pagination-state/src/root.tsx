import * as React from "react";
import { repoList, type TRepoSearchResultItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

const PAGE_SIZE = 8;

export function GitHubRoot() {
  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);

  const startIndex = currentPageNumber * PAGE_SIZE; // Inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // Exclusive

  const visibleWindow = repoList.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-6">
      {visibleWindow.map((item) => {
        return <RepoItem key={item.id} data={item} />;
      })}
    </div>
  );
}

function RepoItem(props: { data: TRepoSearchResultItem }) {
  const { data } = props;

  const [likeCount, setLikeCount] = React.useState<number>(0);

  const formattedCreatedAt = formatRelativeTime(data.created_at);

  return (
    <div>
      <h2 className="font-medium">
        <a className="hover:underline" href={data.html_url}>
          {data.full_name}
        </a>
      </h2>
      <p>{data.description}</p>
      <p className="text-sm text-gray-600">
        {data.stargazers_count.toLocaleString("en-US")} stars | created{" "}
        {formattedCreatedAt}
        {" | "}
        <button
          className="hover:underline"
          onClick={() => {
            setLikeCount((num) => num + 1);
          }}
        >
          like ({likeCount})
        </button>
      </p>
    </div>
  );
}
