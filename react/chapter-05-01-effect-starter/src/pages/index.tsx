import { AuthCallout } from "../components/auth-callout";
import { GitHubRoot } from "../root";

export default function HomePage() {
  return (
    <main className="p-8">
      <AuthCallout />
      <GitHubRoot />
    </main>
  );
}
