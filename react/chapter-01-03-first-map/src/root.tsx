const data = [
  { id: 10270250, name: "facebook/react" },
  { id: 29028775, name: "facebook/react-native" },
  { id: 70107786, name: "vercel/next.js" },
  { id: 63537249, name: "facebook/create-react-app" },
  { id: 23083156, name: "mui/material-ui" },
  { id: 34526884, name: "ant-design/ant-design" },
];

export function GitHubRoot() {
  return (
    <div>
      {data.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}
