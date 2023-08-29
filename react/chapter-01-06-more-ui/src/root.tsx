import data from "./data.json";

export function GitHubRoot() {
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
