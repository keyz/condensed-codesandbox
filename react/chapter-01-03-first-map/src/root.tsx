const repoList = [
  { id: 10270250, name: "facebook/react" },
  { id: 29028775, name: "facebook/react-native" },
  { id: 70107786, name: "vercel/next.js" },
  { id: 135786093, name: "typescript-cheatsheets/react" },
  { id: 174038031, name: "react-hook-form/react-hook-form" },
  { id: 585146387, name: "shadcn-ui/ui" },
];

export function GitHubRoot() {
  return (
    <div>
      {repoList.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}
