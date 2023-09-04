export function AuthCallout() {
  const token =
    process.env.NEXT_PUBLIC_UNSAFE_LOCAL_ONLY_GITHUB_PERSONAL_ACCESS_TOKEN;

  if (token?.startsWith("ghp_")) {
    // Token found
    return null;
  }

  return (
    <div
      className="mb-6 rounded bg-red-100 px-4 py-3 text-red-700 shadow-sm"
      role="alert"
    >
      <p>No access token found. GitHub API calls will be rate limited.</p>
      <p>
        To authenticate, see instructions in file <code>.env.example</code>.
      </p>
    </div>
  );
}
