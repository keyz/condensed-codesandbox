import { Octokit } from "@octokit/rest";
import * as React from "react";

const LOCAL_STORAGE_KEY = "condensed-github-token";

type TContextValue = {
  octokit: Octokit | null;
  setGitHubToken: (token: string | null) => void;
};

const OctokitContext = React.createContext<TContextValue | null>(null);

export function OctokitProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  const [octokit, setOctokit] = React.useState<Octokit | null>(null);

  // Initial synchronization
  React.useEffect(() => {
    const token = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (token == null) {
      setOctokit(null);
    } else {
      setOctokit(new Octokit({ auth: token }));
    }
  }, []);

  // Double write
  const setGitHubToken = React.useCallback((token: string | null) => {
    if (token == null) {
      setOctokit(null);
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      setOctokit(new Octokit({ auth: token }));
      window.localStorage.setItem(LOCAL_STORAGE_KEY, token);
    }
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      octokit,
      setGitHubToken,
    };
  }, [octokit, setGitHubToken]);

  return (
    <OctokitContext.Provider value={contextValue}>
      {children}
    </OctokitContext.Provider>
  );
}

export function useOctokit(): TContextValue {
  const contextValue = React.useContext(OctokitContext);

  if (contextValue == null) {
    throw new Error(
      "No provider found. Did you forget to place a `<OctokitProvider>`?",
    );
  }

  return contextValue;
}
