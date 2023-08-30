import repoList from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {repoList.map((item) => {
        return <h2 key={item.id}>{item.full_name}</h2>;
      })}
    </div>
  );
}
