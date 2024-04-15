import { AuthCallout } from "../components/auth-callout";
import { GitHubRoot } from "../root";

export default function HomePage() {
  return (
    <main className="m-auto max-w-2xl p-8">
      <AuthCallout />
      <GitHubRoot />
    </main>
  );
}
