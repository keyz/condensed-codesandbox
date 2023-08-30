import repoList from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {repoList.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>;
      })}
    </div>
  );
}
