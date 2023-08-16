import StoryList from "./data/hn-top-stories.json";

export function HackerNews() {
  return (
    <div>
      {StoryList.map((story) => (
        <p key={story.id}>{story.title}</p>
      ))}
    </div>
  );
}
