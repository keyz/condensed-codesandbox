import repoList from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {repoList.map((item) => {
        return <p key={item.id}>{item.full_name}</p>;
      })}
    </div>
  );
}
