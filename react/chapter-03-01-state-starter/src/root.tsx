import { storyList } from "./data";
import { formatRelativeTime } from "./helpers/time";

export function HackerNews() {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {storyList.map((item) => {
          const formattedTime = formatRelativeTime(item.time);

          return (
            <div key={item.id}>
              <p>
                <a className="hover:underline" href={item.url}>
                  {item.title}
                </a>
              </p>
              <p className="text-sm text-gray-600">
                {item.score} points by {item.by} {formattedTime}
                {" | "}
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
    </div>
  );
}
