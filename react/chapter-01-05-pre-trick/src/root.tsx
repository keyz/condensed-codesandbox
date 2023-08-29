import data from "./hn-top-stories.json";

export function GitHubRoot() {
  return (
    <div>
      {data.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>;
      })}
    </div>
  );
}
