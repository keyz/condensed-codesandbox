import data from "./data.json";

export function GitHubRoot() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <a href={item.html_url}>{item.full_name}</a>
            </p>
            <p>{item.description}</p>
            <p>{item.stargazers_count} stars</p>
          </div>
        );
      })}
    </div>
  );
}
