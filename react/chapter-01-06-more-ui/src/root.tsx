import data from "./hn-top-stories.json";

export function HackerNews() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>
              {item.score} points by {item.by} | {item.descendants} comments
            </p>
          </div>
        );
      })}
    </div>
  );
}
