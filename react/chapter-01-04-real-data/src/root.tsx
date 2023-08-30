import data from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {data.map((item) => {
        return <p key={item.id}>{item.full_name}</p>;
      })}
    </div>
  );
}
