import data from "./hn-top-stories.json";

export function HackerNews() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <a href={item.url}>{item.title}</a>
            </p>
            <p>
              {item.score} points by {item.by} | {item.descendants} comments
            </p>
          </div>
        );
      })}
    </div>
  );
}
