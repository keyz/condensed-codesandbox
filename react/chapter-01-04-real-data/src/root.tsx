import data from "./hn-top-stories.json";

export function HackerNews() {
  return (
    <div>
      {data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}
