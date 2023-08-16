import StoryList from "./data/hn-top-stories.json";

export function HackerNews() {
  return (
    <main>
      {StoryList.map((story) => (
        <p key={story.id}>{story.title}</p>
      ))}
    </main>
  );
}
