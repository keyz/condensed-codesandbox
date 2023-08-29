import data from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}
