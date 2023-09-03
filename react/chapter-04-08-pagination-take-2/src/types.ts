import type { RestEndpointMethodTypes } from "@octokit/rest";

export type TRepoSearchResultItem =
  RestEndpointMethodTypes["search"]["repos"]["response"]["data"]["items"][number];
