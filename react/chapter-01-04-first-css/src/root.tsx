const data = [
  {
    id: 37140013,
    title: "How Is LLaMa.cpp Possible?",
  },
  {
    id: 37142388,
    title: "NetMaker: Connect Everything with a WireGuard VPN",
  },
  {
    id: 37136898,
    title: "Opendream: A layer-based UI for Stable Diffusion",
  },
  {
    id: 37140159,
    title: "Modern CSV version 2",
  },
  {
    id: 37142426,
    title: "Diligere, Equity-Invest Are New Firms of U.K. Con Man",
  },
  {
    id: 37138807,
    title: "How should I read type system notation?",
  },
];

export function HackerNews() {
  return (
    <div className="flex flex-col gap-4 p-6">
      {data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}
