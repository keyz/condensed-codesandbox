import type { RestEndpointMethodTypes } from "@octokit/rest";

export type TRepoSearchResultItem =
  RestEndpointMethodTypes["search"]["repos"]["response"]["data"]["items"][number];

export const repoList: Array<TRepoSearchResultItem> = [
  {
    id: 28457823,
    node_id: "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
    name: "freeCodeCamp",
    full_name: "freeCodeCamp/freeCodeCamp",
    private: false,
    owner: {
      login: "freeCodeCamp",
      id: 9892522,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
      avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/freeCodeCamp",
      html_url: "https://github.com/freeCodeCamp",
      followers_url: "https://api.github.com/users/freeCodeCamp/followers",
      following_url:
        "https://api.github.com/users/freeCodeCamp/following{/other_user}",
      gists_url: "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/freeCodeCamp/subscriptions",
      organizations_url: "https://api.github.com/users/freeCodeCamp/orgs",
      repos_url: "https://api.github.com/users/freeCodeCamp/repos",
      events_url: "https://api.github.com/users/freeCodeCamp/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/freeCodeCamp/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
    description:
      "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    fork: false,
    url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp",
    forks_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks",
    keys_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams",
    hooks_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks",
    issue_events_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}",
    events_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events",
    assignees_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}",
    tags_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags",
    blobs_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages",
    stargazers_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers",
    contributors_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors",
    subscribers_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers",
    subscription_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription",
    commits_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges",
    archive_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads",
    issues_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}",
    releases_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments",
    created_at: "2014-12-24T17:49:19Z",
    updated_at: "2023-08-29T23:39:32Z",
    pushed_at: "2023-08-29T22:53:40Z",
    git_url: "git://github.com/freeCodeCamp/freeCodeCamp.git",
    ssh_url: "git@github.com:freeCodeCamp/freeCodeCamp.git",
    clone_url: "https://github.com/freeCodeCamp/freeCodeCamp.git",
    svn_url: "https://github.com/freeCodeCamp/freeCodeCamp",
    homepage: "http://contribute.freecodecamp.org/",
    size: 386439,
    stargazers_count: 371627,
    watchers_count: 371627,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 33267,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 265,
    license: {
      key: "bsd-3-clause",
      name: 'BSD 3-Clause "New" or "Revised" License',
      spdx_id: "BSD-3-Clause",
      url: "https://api.github.com/licenses/bsd-3-clause",
      node_id: "MDc6TGljZW5zZTU=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "careers",
      "certification",
      "community",
      "curriculum",
      "d3",
      "education",
      "freecodecamp",
      "hacktoberfest",
      "javascript",
      "learn-to-code",
      "math",
      "nodejs",
      "nonprofits",
      "programming",
      "react",
      "teachers",
    ],
    visibility: "public",
    forks: 33267,
    open_issues: 265,
    watchers: 371627,
    default_branch: "main",
    score: 1,
  },
  {
    id: 10270250,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
    name: "react",
    full_name: "facebook/react",
    private: false,
    owner: {
      login: "facebook",
      id: 69631,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/facebook",
      html_url: "https://github.com/facebook",
      followers_url: "https://api.github.com/users/facebook/followers",
      following_url:
        "https://api.github.com/users/facebook/following{/other_user}",
      gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
      organizations_url: "https://api.github.com/users/facebook/orgs",
      repos_url: "https://api.github.com/users/facebook/repos",
      events_url: "https://api.github.com/users/facebook/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/facebook/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/facebook/react",
    description: "The library for web and native user interfaces",
    fork: false,
    url: "https://api.github.com/repos/facebook/react",
    forks_url: "https://api.github.com/repos/facebook/react/forks",
    keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/facebook/react/teams",
    hooks_url: "https://api.github.com/repos/facebook/react/hooks",
    issue_events_url:
      "https://api.github.com/repos/facebook/react/issues/events{/number}",
    events_url: "https://api.github.com/repos/facebook/react/events",
    assignees_url:
      "https://api.github.com/repos/facebook/react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/facebook/react/branches{/branch}",
    tags_url: "https://api.github.com/repos/facebook/react/tags",
    blobs_url: "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/facebook/react/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/facebook/react/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/facebook/react/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/facebook/react/statuses/{sha}",
    languages_url: "https://api.github.com/repos/facebook/react/languages",
    stargazers_url: "https://api.github.com/repos/facebook/react/stargazers",
    contributors_url:
      "https://api.github.com/repos/facebook/react/contributors",
    subscribers_url: "https://api.github.com/repos/facebook/react/subscribers",
    subscription_url:
      "https://api.github.com/repos/facebook/react/subscription",
    commits_url: "https://api.github.com/repos/facebook/react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/facebook/react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/facebook/react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/facebook/react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/facebook/react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/facebook/react/merges",
    archive_url:
      "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/facebook/react/downloads",
    issues_url: "https://api.github.com/repos/facebook/react/issues{/number}",
    pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/facebook/react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
    releases_url: "https://api.github.com/repos/facebook/react/releases{/id}",
    deployments_url: "https://api.github.com/repos/facebook/react/deployments",
    created_at: "2013-05-24T16:15:54Z",
    updated_at: "2023-08-29T23:29:02Z",
    pushed_at: "2023-08-29T22:43:21Z",
    git_url: "git://github.com/facebook/react.git",
    ssh_url: "git@github.com:facebook/react.git",
    clone_url: "https://github.com/facebook/react.git",
    svn_url: "https://github.com/facebook/react",
    homepage: "https://react.dev",
    size: 340581,
    stargazers_count: 212354,
    watchers_count: 212354,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 44560,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1469,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["declarative", "frontend", "javascript", "library", "react", "ui"],
    visibility: "public",
    forks: 44560,
    open_issues: 1469,
    watchers: 212354,
    default_branch: "main",
    score: 1,
  },
  {
    id: 29028775,
    node_id: "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
    name: "react-native",
    full_name: "facebook/react-native",
    private: false,
    owner: {
      login: "facebook",
      id: 69631,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/facebook",
      html_url: "https://github.com/facebook",
      followers_url: "https://api.github.com/users/facebook/followers",
      following_url:
        "https://api.github.com/users/facebook/following{/other_user}",
      gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
      organizations_url: "https://api.github.com/users/facebook/orgs",
      repos_url: "https://api.github.com/users/facebook/repos",
      events_url: "https://api.github.com/users/facebook/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/facebook/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/facebook/react-native",
    description: "A framework for building native applications using React",
    fork: false,
    url: "https://api.github.com/repos/facebook/react-native",
    forks_url: "https://api.github.com/repos/facebook/react-native/forks",
    keys_url:
      "https://api.github.com/repos/facebook/react-native/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/facebook/react-native/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/facebook/react-native/teams",
    hooks_url: "https://api.github.com/repos/facebook/react-native/hooks",
    issue_events_url:
      "https://api.github.com/repos/facebook/react-native/issues/events{/number}",
    events_url: "https://api.github.com/repos/facebook/react-native/events",
    assignees_url:
      "https://api.github.com/repos/facebook/react-native/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/facebook/react-native/branches{/branch}",
    tags_url: "https://api.github.com/repos/facebook/react-native/tags",
    blobs_url:
      "https://api.github.com/repos/facebook/react-native/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/facebook/react-native/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/facebook/react-native/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/facebook/react-native/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/facebook/react-native/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/facebook/react-native/languages",
    stargazers_url:
      "https://api.github.com/repos/facebook/react-native/stargazers",
    contributors_url:
      "https://api.github.com/repos/facebook/react-native/contributors",
    subscribers_url:
      "https://api.github.com/repos/facebook/react-native/subscribers",
    subscription_url:
      "https://api.github.com/repos/facebook/react-native/subscription",
    commits_url:
      "https://api.github.com/repos/facebook/react-native/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/facebook/react-native/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/facebook/react-native/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/facebook/react-native/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/facebook/react-native/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/facebook/react-native/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/facebook/react-native/merges",
    archive_url:
      "https://api.github.com/repos/facebook/react-native/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/facebook/react-native/downloads",
    issues_url:
      "https://api.github.com/repos/facebook/react-native/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/facebook/react-native/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/facebook/react-native/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/facebook/react-native/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/facebook/react-native/labels{/name}",
    releases_url:
      "https://api.github.com/repos/facebook/react-native/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/facebook/react-native/deployments",
    created_at: "2015-01-09T18:10:16Z",
    updated_at: "2023-08-29T22:52:21Z",
    pushed_at: "2023-08-29T22:26:18Z",
    git_url: "git://github.com/facebook/react-native.git",
    ssh_url: "git@github.com:facebook/react-native.git",
    clone_url: "https://github.com/facebook/react-native.git",
    svn_url: "https://github.com/facebook/react-native",
    homepage: "https://reactnative.dev",
    size: 859765,
    stargazers_count: 111466,
    watchers_count: 111466,
    language: "C++",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 23731,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1720,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "android",
      "app-framework",
      "cross-platform",
      "ios",
      "mobile",
      "mobile-development",
      "react",
      "react-native",
    ],
    visibility: "public",
    forks: 23731,
    open_issues: 1720,
    watchers: 111466,
    default_branch: "main",
    score: 1,
  },
  {
    id: 70107786,
    node_id: "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
    name: "next.js",
    full_name: "vercel/next.js",
    private: false,
    owner: {
      login: "vercel",
      id: 14985020,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/14985020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vercel",
      html_url: "https://github.com/vercel",
      followers_url: "https://api.github.com/users/vercel/followers",
      following_url:
        "https://api.github.com/users/vercel/following{/other_user}",
      gists_url: "https://api.github.com/users/vercel/gists{/gist_id}",
      starred_url: "https://api.github.com/users/vercel/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/vercel/subscriptions",
      organizations_url: "https://api.github.com/users/vercel/orgs",
      repos_url: "https://api.github.com/users/vercel/repos",
      events_url: "https://api.github.com/users/vercel/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vercel/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/vercel/next.js",
    description: "The React Framework",
    fork: false,
    url: "https://api.github.com/repos/vercel/next.js",
    forks_url: "https://api.github.com/repos/vercel/next.js/forks",
    keys_url: "https://api.github.com/repos/vercel/next.js/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/vercel/next.js/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/vercel/next.js/teams",
    hooks_url: "https://api.github.com/repos/vercel/next.js/hooks",
    issue_events_url:
      "https://api.github.com/repos/vercel/next.js/issues/events{/number}",
    events_url: "https://api.github.com/repos/vercel/next.js/events",
    assignees_url:
      "https://api.github.com/repos/vercel/next.js/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/vercel/next.js/branches{/branch}",
    tags_url: "https://api.github.com/repos/vercel/next.js/tags",
    blobs_url: "https://api.github.com/repos/vercel/next.js/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/vercel/next.js/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/vercel/next.js/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/vercel/next.js/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/vercel/next.js/statuses/{sha}",
    languages_url: "https://api.github.com/repos/vercel/next.js/languages",
    stargazers_url: "https://api.github.com/repos/vercel/next.js/stargazers",
    contributors_url:
      "https://api.github.com/repos/vercel/next.js/contributors",
    subscribers_url: "https://api.github.com/repos/vercel/next.js/subscribers",
    subscription_url:
      "https://api.github.com/repos/vercel/next.js/subscription",
    commits_url: "https://api.github.com/repos/vercel/next.js/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/vercel/next.js/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/vercel/next.js/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/vercel/next.js/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/vercel/next.js/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/vercel/next.js/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/vercel/next.js/merges",
    archive_url:
      "https://api.github.com/repos/vercel/next.js/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/vercel/next.js/downloads",
    issues_url: "https://api.github.com/repos/vercel/next.js/issues{/number}",
    pulls_url: "https://api.github.com/repos/vercel/next.js/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/vercel/next.js/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/vercel/next.js/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/vercel/next.js/labels{/name}",
    releases_url: "https://api.github.com/repos/vercel/next.js/releases{/id}",
    deployments_url: "https://api.github.com/repos/vercel/next.js/deployments",
    created_at: "2016-10-05T23:32:51Z",
    updated_at: "2023-08-30T00:01:07Z",
    pushed_at: "2023-08-29T23:53:32Z",
    git_url: "git://github.com/vercel/next.js.git",
    ssh_url: "git@github.com:vercel/next.js.git",
    clone_url: "https://github.com/vercel/next.js.git",
    svn_url: "https://github.com/vercel/next.js",
    homepage: "https://nextjs.org",
    size: 1856362,
    stargazers_count: 110897,
    watchers_count: 110897,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 24619,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2412,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "blog",
      "browser",
      "compiler",
      "components",
      "hybrid",
      "nextjs",
      "node",
      "react",
      "server-rendering",
      "ssg",
      "static",
      "static-site-generator",
      "universal",
      "vercel",
    ],
    visibility: "public",
    forks: 24619,
    open_issues: 2412,
    watchers: 110897,
    default_branch: "canary",
    score: 1,
  },
  {
    id: 63537249,
    node_id: "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
    name: "create-react-app",
    full_name: "facebook/create-react-app",
    private: false,
    owner: {
      login: "facebook",
      id: 69631,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/facebook",
      html_url: "https://github.com/facebook",
      followers_url: "https://api.github.com/users/facebook/followers",
      following_url:
        "https://api.github.com/users/facebook/following{/other_user}",
      gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
      organizations_url: "https://api.github.com/users/facebook/orgs",
      repos_url: "https://api.github.com/users/facebook/repos",
      events_url: "https://api.github.com/users/facebook/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/facebook/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/facebook/create-react-app",
    description: "Set up a modern web app by running one command.",
    fork: false,
    url: "https://api.github.com/repos/facebook/create-react-app",
    forks_url: "https://api.github.com/repos/facebook/create-react-app/forks",
    keys_url:
      "https://api.github.com/repos/facebook/create-react-app/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/facebook/create-react-app/teams",
    hooks_url: "https://api.github.com/repos/facebook/create-react-app/hooks",
    issue_events_url:
      "https://api.github.com/repos/facebook/create-react-app/issues/events{/number}",
    events_url: "https://api.github.com/repos/facebook/create-react-app/events",
    assignees_url:
      "https://api.github.com/repos/facebook/create-react-app/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/facebook/create-react-app/branches{/branch}",
    tags_url: "https://api.github.com/repos/facebook/create-react-app/tags",
    blobs_url:
      "https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/facebook/create-react-app/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/facebook/create-react-app/languages",
    stargazers_url:
      "https://api.github.com/repos/facebook/create-react-app/stargazers",
    contributors_url:
      "https://api.github.com/repos/facebook/create-react-app/contributors",
    subscribers_url:
      "https://api.github.com/repos/facebook/create-react-app/subscribers",
    subscription_url:
      "https://api.github.com/repos/facebook/create-react-app/subscription",
    commits_url:
      "https://api.github.com/repos/facebook/create-react-app/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/facebook/create-react-app/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/facebook/create-react-app/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/facebook/create-react-app/merges",
    archive_url:
      "https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/facebook/create-react-app/downloads",
    issues_url:
      "https://api.github.com/repos/facebook/create-react-app/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/facebook/create-react-app/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/facebook/create-react-app/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/facebook/create-react-app/labels{/name}",
    releases_url:
      "https://api.github.com/repos/facebook/create-react-app/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/facebook/create-react-app/deployments",
    created_at: "2016-07-17T14:55:11Z",
    updated_at: "2023-08-29T22:14:41Z",
    pushed_at: "2023-08-27T07:21:39Z",
    git_url: "git://github.com/facebook/create-react-app.git",
    ssh_url: "git@github.com:facebook/create-react-app.git",
    clone_url: "https://github.com/facebook/create-react-app.git",
    svn_url: "https://github.com/facebook/create-react-app",
    homepage: "https://create-react-app.dev",
    size: 25116,
    stargazers_count: 100649,
    watchers_count: 100649,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 26661,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2097,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["build-tools", "react", "zero-configuration"],
    visibility: "public",
    forks: 26661,
    open_issues: 2097,
    watchers: 100649,
    default_branch: "main",
    score: 1,
  },
  {
    id: 23083156,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzA4MzE1Ng==",
    name: "material-ui",
    full_name: "mui/material-ui",
    private: false,
    owner: {
      login: "mui",
      id: 33663932,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMzNjYzOTMy",
      avatar_url: "https://avatars.githubusercontent.com/u/33663932?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mui",
      html_url: "https://github.com/mui",
      followers_url: "https://api.github.com/users/mui/followers",
      following_url: "https://api.github.com/users/mui/following{/other_user}",
      gists_url: "https://api.github.com/users/mui/gists{/gist_id}",
      starred_url: "https://api.github.com/users/mui/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mui/subscriptions",
      organizations_url: "https://api.github.com/users/mui/orgs",
      repos_url: "https://api.github.com/users/mui/repos",
      events_url: "https://api.github.com/users/mui/events{/privacy}",
      received_events_url: "https://api.github.com/users/mui/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/mui/material-ui",
    description:
      "MUI Core: Ready-to-use foundational React components, free forever. It includes Material UI, which implements Google's Material Design.",
    fork: false,
    url: "https://api.github.com/repos/mui/material-ui",
    forks_url: "https://api.github.com/repos/mui/material-ui/forks",
    keys_url: "https://api.github.com/repos/mui/material-ui/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/mui/material-ui/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/mui/material-ui/teams",
    hooks_url: "https://api.github.com/repos/mui/material-ui/hooks",
    issue_events_url:
      "https://api.github.com/repos/mui/material-ui/issues/events{/number}",
    events_url: "https://api.github.com/repos/mui/material-ui/events",
    assignees_url:
      "https://api.github.com/repos/mui/material-ui/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/mui/material-ui/branches{/branch}",
    tags_url: "https://api.github.com/repos/mui/material-ui/tags",
    blobs_url: "https://api.github.com/repos/mui/material-ui/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/mui/material-ui/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/mui/material-ui/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/mui/material-ui/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/mui/material-ui/statuses/{sha}",
    languages_url: "https://api.github.com/repos/mui/material-ui/languages",
    stargazers_url: "https://api.github.com/repos/mui/material-ui/stargazers",
    contributors_url:
      "https://api.github.com/repos/mui/material-ui/contributors",
    subscribers_url: "https://api.github.com/repos/mui/material-ui/subscribers",
    subscription_url:
      "https://api.github.com/repos/mui/material-ui/subscription",
    commits_url: "https://api.github.com/repos/mui/material-ui/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/mui/material-ui/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/mui/material-ui/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/mui/material-ui/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/mui/material-ui/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/mui/material-ui/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/mui/material-ui/merges",
    archive_url:
      "https://api.github.com/repos/mui/material-ui/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/mui/material-ui/downloads",
    issues_url: "https://api.github.com/repos/mui/material-ui/issues{/number}",
    pulls_url: "https://api.github.com/repos/mui/material-ui/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/mui/material-ui/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/mui/material-ui/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/mui/material-ui/labels{/name}",
    releases_url: "https://api.github.com/repos/mui/material-ui/releases{/id}",
    deployments_url: "https://api.github.com/repos/mui/material-ui/deployments",
    created_at: "2014-08-18T19:11:54Z",
    updated_at: "2023-08-29T21:53:12Z",
    pushed_at: "2023-08-29T22:32:44Z",
    git_url: "git://github.com/mui/material-ui.git",
    ssh_url: "git@github.com:mui/material-ui.git",
    clone_url: "https://github.com/mui/material-ui.git",
    svn_url: "https://github.com/mui/material-ui",
    homepage: "https://mui.com/core/",
    size: 431149,
    stargazers_count: 88401,
    watchers_count: 88401,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 30110,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1602,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: true,
    topics: [
      "design-systems",
      "hacktoberfest",
      "javascript",
      "material-design",
      "react",
      "react-components",
      "typescript",
    ],
    visibility: "public",
    forks: 30110,
    open_issues: 1602,
    watchers: 88401,
    default_branch: "master",
    score: 1,
  },
  {
    id: 34526884,
    node_id: "MDEwOlJlcG9zaXRvcnkzNDUyNjg4NA==",
    name: "ant-design",
    full_name: "ant-design/ant-design",
    private: false,
    owner: {
      login: "ant-design",
      id: 12101536,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEyMTAxNTM2",
      avatar_url: "https://avatars.githubusercontent.com/u/12101536?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ant-design",
      html_url: "https://github.com/ant-design",
      followers_url: "https://api.github.com/users/ant-design/followers",
      following_url:
        "https://api.github.com/users/ant-design/following{/other_user}",
      gists_url: "https://api.github.com/users/ant-design/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ant-design/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ant-design/subscriptions",
      organizations_url: "https://api.github.com/users/ant-design/orgs",
      repos_url: "https://api.github.com/users/ant-design/repos",
      events_url: "https://api.github.com/users/ant-design/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ant-design/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/ant-design/ant-design",
    description: "An enterprise-class UI design language and React UI library",
    fork: false,
    url: "https://api.github.com/repos/ant-design/ant-design",
    forks_url: "https://api.github.com/repos/ant-design/ant-design/forks",
    keys_url:
      "https://api.github.com/repos/ant-design/ant-design/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ant-design/ant-design/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ant-design/ant-design/teams",
    hooks_url: "https://api.github.com/repos/ant-design/ant-design/hooks",
    issue_events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/events{/number}",
    events_url: "https://api.github.com/repos/ant-design/ant-design/events",
    assignees_url:
      "https://api.github.com/repos/ant-design/ant-design/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ant-design/ant-design/branches{/branch}",
    tags_url: "https://api.github.com/repos/ant-design/ant-design/tags",
    blobs_url:
      "https://api.github.com/repos/ant-design/ant-design/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ant-design/ant-design/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ant-design/ant-design/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ant-design/ant-design/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ant-design/ant-design/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ant-design/ant-design/languages",
    stargazers_url:
      "https://api.github.com/repos/ant-design/ant-design/stargazers",
    contributors_url:
      "https://api.github.com/repos/ant-design/ant-design/contributors",
    subscribers_url:
      "https://api.github.com/repos/ant-design/ant-design/subscribers",
    subscription_url:
      "https://api.github.com/repos/ant-design/ant-design/subscription",
    commits_url:
      "https://api.github.com/repos/ant-design/ant-design/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ant-design/ant-design/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ant-design/ant-design/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ant-design/ant-design/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ant-design/ant-design/merges",
    archive_url:
      "https://api.github.com/repos/ant-design/ant-design/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ant-design/ant-design/downloads",
    issues_url:
      "https://api.github.com/repos/ant-design/ant-design/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ant-design/ant-design/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ant-design/ant-design/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ant-design/ant-design/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ant-design/ant-design/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ant-design/ant-design/deployments",
    created_at: "2015-04-24T15:37:24Z",
    updated_at: "2023-08-29T23:34:33Z",
    pushed_at: "2023-08-29T23:55:46Z",
    git_url: "git://github.com/ant-design/ant-design.git",
    ssh_url: "git@github.com:ant-design/ant-design.git",
    clone_url: "https://github.com/ant-design/ant-design.git",
    svn_url: "https://github.com/ant-design/ant-design",
    homepage: "https://ant.design",
    size: 168161,
    stargazers_count: 87277,
    watchers_count: 87277,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 41319,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 994,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: true,
    topics: [
      "ant-design",
      "antd",
      "design-systems",
      "react",
      "typescript",
      "ui-kit",
      "ui-library",
    ],
    visibility: "public",
    forks: 41319,
    open_issues: 994,
    watchers: 87277,
    default_branch: "master",
    score: 1,
  },
  {
    id: 54173593,
    node_id: "MDEwOlJlcG9zaXRvcnk1NDE3MzU5Mw==",
    name: "storybook",
    full_name: "storybookjs/storybook",
    private: false,
    owner: {
      login: "storybookjs",
      id: 22632046,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjIyNjMyMDQ2",
      avatar_url: "https://avatars.githubusercontent.com/u/22632046?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/storybookjs",
      html_url: "https://github.com/storybookjs",
      followers_url: "https://api.github.com/users/storybookjs/followers",
      following_url:
        "https://api.github.com/users/storybookjs/following{/other_user}",
      gists_url: "https://api.github.com/users/storybookjs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/storybookjs/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/storybookjs/subscriptions",
      organizations_url: "https://api.github.com/users/storybookjs/orgs",
      repos_url: "https://api.github.com/users/storybookjs/repos",
      events_url: "https://api.github.com/users/storybookjs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/storybookjs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/storybookjs/storybook",
    description:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Made for UI development, testing, and documentation. ",
    fork: false,
    url: "https://api.github.com/repos/storybookjs/storybook",
    forks_url: "https://api.github.com/repos/storybookjs/storybook/forks",
    keys_url:
      "https://api.github.com/repos/storybookjs/storybook/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/storybookjs/storybook/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/storybookjs/storybook/teams",
    hooks_url: "https://api.github.com/repos/storybookjs/storybook/hooks",
    issue_events_url:
      "https://api.github.com/repos/storybookjs/storybook/issues/events{/number}",
    events_url: "https://api.github.com/repos/storybookjs/storybook/events",
    assignees_url:
      "https://api.github.com/repos/storybookjs/storybook/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/storybookjs/storybook/branches{/branch}",
    tags_url: "https://api.github.com/repos/storybookjs/storybook/tags",
    blobs_url:
      "https://api.github.com/repos/storybookjs/storybook/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/storybookjs/storybook/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/storybookjs/storybook/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/storybookjs/storybook/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/storybookjs/storybook/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/storybookjs/storybook/languages",
    stargazers_url:
      "https://api.github.com/repos/storybookjs/storybook/stargazers",
    contributors_url:
      "https://api.github.com/repos/storybookjs/storybook/contributors",
    subscribers_url:
      "https://api.github.com/repos/storybookjs/storybook/subscribers",
    subscription_url:
      "https://api.github.com/repos/storybookjs/storybook/subscription",
    commits_url:
      "https://api.github.com/repos/storybookjs/storybook/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/storybookjs/storybook/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/storybookjs/storybook/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/storybookjs/storybook/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/storybookjs/storybook/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/storybookjs/storybook/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/storybookjs/storybook/merges",
    archive_url:
      "https://api.github.com/repos/storybookjs/storybook/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/storybookjs/storybook/downloads",
    issues_url:
      "https://api.github.com/repos/storybookjs/storybook/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/storybookjs/storybook/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/storybookjs/storybook/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/storybookjs/storybook/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/storybookjs/storybook/labels{/name}",
    releases_url:
      "https://api.github.com/repos/storybookjs/storybook/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/storybookjs/storybook/deployments",
    created_at: "2016-03-18T04:23:44Z",
    updated_at: "2023-08-30T00:01:05Z",
    pushed_at: "2023-08-29T21:34:54Z",
    git_url: "git://github.com/storybookjs/storybook.git",
    ssh_url: "git@github.com:storybookjs/storybook.git",
    clone_url: "https://github.com/storybookjs/storybook.git",
    svn_url: "https://github.com/storybookjs/storybook",
    homepage: "https://storybook.js.org",
    size: 716053,
    stargazers_count: 80191,
    watchers_count: 80191,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 8658,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1763,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "components",
      "design-systems",
      "documentation",
      "ember",
      "html",
      "javascript",
      "react",
      "react-native",
      "storybook",
      "styleguide",
      "svelte",
      "testing",
      "typescript",
      "ui",
      "ui-components",
      "vue",
      "web-components",
      "webpack",
    ],
    visibility: "public",
    forks: 8658,
    open_issues: 1763,
    watchers: 80191,
    default_branch: "next",
    score: 1,
  },
  {
    id: 52631841,
    node_id: "MDEwOlJlcG9zaXRvcnk1MjYzMTg0MQ==",
    name: "realworld",
    full_name: "gothinkster/realworld",
    private: false,
    owner: {
      login: "gothinkster",
      id: 8601733,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjg2MDE3MzM=",
      avatar_url: "https://avatars.githubusercontent.com/u/8601733?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/gothinkster",
      html_url: "https://github.com/gothinkster",
      followers_url: "https://api.github.com/users/gothinkster/followers",
      following_url:
        "https://api.github.com/users/gothinkster/following{/other_user}",
      gists_url: "https://api.github.com/users/gothinkster/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gothinkster/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/gothinkster/subscriptions",
      organizations_url: "https://api.github.com/users/gothinkster/orgs",
      repos_url: "https://api.github.com/users/gothinkster/repos",
      events_url: "https://api.github.com/users/gothinkster/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gothinkster/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/gothinkster/realworld",
    description:
      '"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
    fork: false,
    url: "https://api.github.com/repos/gothinkster/realworld",
    forks_url: "https://api.github.com/repos/gothinkster/realworld/forks",
    keys_url:
      "https://api.github.com/repos/gothinkster/realworld/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/gothinkster/realworld/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/gothinkster/realworld/teams",
    hooks_url: "https://api.github.com/repos/gothinkster/realworld/hooks",
    issue_events_url:
      "https://api.github.com/repos/gothinkster/realworld/issues/events{/number}",
    events_url: "https://api.github.com/repos/gothinkster/realworld/events",
    assignees_url:
      "https://api.github.com/repos/gothinkster/realworld/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/gothinkster/realworld/branches{/branch}",
    tags_url: "https://api.github.com/repos/gothinkster/realworld/tags",
    blobs_url:
      "https://api.github.com/repos/gothinkster/realworld/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/gothinkster/realworld/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/gothinkster/realworld/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/gothinkster/realworld/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/gothinkster/realworld/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/gothinkster/realworld/languages",
    stargazers_url:
      "https://api.github.com/repos/gothinkster/realworld/stargazers",
    contributors_url:
      "https://api.github.com/repos/gothinkster/realworld/contributors",
    subscribers_url:
      "https://api.github.com/repos/gothinkster/realworld/subscribers",
    subscription_url:
      "https://api.github.com/repos/gothinkster/realworld/subscription",
    commits_url:
      "https://api.github.com/repos/gothinkster/realworld/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/gothinkster/realworld/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/gothinkster/realworld/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/gothinkster/realworld/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/gothinkster/realworld/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/gothinkster/realworld/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/gothinkster/realworld/merges",
    archive_url:
      "https://api.github.com/repos/gothinkster/realworld/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/gothinkster/realworld/downloads",
    issues_url:
      "https://api.github.com/repos/gothinkster/realworld/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/gothinkster/realworld/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/gothinkster/realworld/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/gothinkster/realworld/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/gothinkster/realworld/labels{/name}",
    releases_url:
      "https://api.github.com/repos/gothinkster/realworld/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/gothinkster/realworld/deployments",
    created_at: "2016-02-26T20:49:53Z",
    updated_at: "2023-08-29T22:37:44Z",
    pushed_at: "2023-08-28T17:07:22Z",
    git_url: "git://github.com/gothinkster/realworld.git",
    ssh_url: "git@github.com:gothinkster/realworld.git",
    clone_url: "https://github.com/gothinkster/realworld.git",
    svn_url: "https://github.com/gothinkster/realworld",
    homepage: "https://www.realworld.how/",
    size: 37973,
    stargazers_count: 76131,
    watchers_count: 76131,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 7045,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 72,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 7045,
    open_issues: 72,
    watchers: 76131,
    default_branch: "main",
    score: 1,
  },
  {
    id: 22670857,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjY3MDg1Nw==",
    name: "awesome-react",
    full_name: "enaqx/awesome-react",
    private: false,
    owner: {
      login: "enaqx",
      id: 182219,
      node_id: "MDQ6VXNlcjE4MjIxOQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/182219?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/enaqx",
      html_url: "https://github.com/enaqx",
      followers_url: "https://api.github.com/users/enaqx/followers",
      following_url:
        "https://api.github.com/users/enaqx/following{/other_user}",
      gists_url: "https://api.github.com/users/enaqx/gists{/gist_id}",
      starred_url: "https://api.github.com/users/enaqx/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/enaqx/subscriptions",
      organizations_url: "https://api.github.com/users/enaqx/orgs",
      repos_url: "https://api.github.com/users/enaqx/repos",
      events_url: "https://api.github.com/users/enaqx/events{/privacy}",
      received_events_url: "https://api.github.com/users/enaqx/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/enaqx/awesome-react",
    description: "A collection of awesome things regarding React ecosystem",
    fork: false,
    url: "https://api.github.com/repos/enaqx/awesome-react",
    forks_url: "https://api.github.com/repos/enaqx/awesome-react/forks",
    keys_url: "https://api.github.com/repos/enaqx/awesome-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/enaqx/awesome-react/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/enaqx/awesome-react/teams",
    hooks_url: "https://api.github.com/repos/enaqx/awesome-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/enaqx/awesome-react/issues/events{/number}",
    events_url: "https://api.github.com/repos/enaqx/awesome-react/events",
    assignees_url:
      "https://api.github.com/repos/enaqx/awesome-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/enaqx/awesome-react/branches{/branch}",
    tags_url: "https://api.github.com/repos/enaqx/awesome-react/tags",
    blobs_url:
      "https://api.github.com/repos/enaqx/awesome-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/enaqx/awesome-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/enaqx/awesome-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/enaqx/awesome-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/enaqx/awesome-react/statuses/{sha}",
    languages_url: "https://api.github.com/repos/enaqx/awesome-react/languages",
    stargazers_url:
      "https://api.github.com/repos/enaqx/awesome-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/enaqx/awesome-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/enaqx/awesome-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/enaqx/awesome-react/subscription",
    commits_url:
      "https://api.github.com/repos/enaqx/awesome-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/enaqx/awesome-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/enaqx/awesome-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/enaqx/awesome-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/enaqx/awesome-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/enaqx/awesome-react/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/enaqx/awesome-react/merges",
    archive_url:
      "https://api.github.com/repos/enaqx/awesome-react/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/enaqx/awesome-react/downloads",
    issues_url:
      "https://api.github.com/repos/enaqx/awesome-react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/enaqx/awesome-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/enaqx/awesome-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/enaqx/awesome-react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/enaqx/awesome-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/enaqx/awesome-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/enaqx/awesome-react/deployments",
    created_at: "2014-08-06T05:31:44Z",
    updated_at: "2023-08-29T23:21:35Z",
    pushed_at: "2023-08-15T23:52:30Z",
    git_url: "git://github.com/enaqx/awesome-react.git",
    ssh_url: "git@github.com:enaqx/awesome-react.git",
    clone_url: "https://github.com/enaqx/awesome-react.git",
    svn_url: "https://github.com/enaqx/awesome-react",
    homepage: "",
    size: 2472,
    stargazers_count: 57762,
    watchers_count: 57762,
    language: null,
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 6856,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 12,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "awesome",
      "awesome-list",
      "javascript",
      "react",
      "react-apps",
      "react-native",
      "react-tutorial",
      "samples",
      "tutorial",
      "typescript",
    ],
    visibility: "public",
    forks: 6856,
    open_issues: 12,
    watchers: 57762,
    default_branch: "master",
    score: 1,
  },
  {
    id: 147350463,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDczNTA0NjM=",
    name: "33-js-concepts",
    full_name: "leonardomso/33-js-concepts",
    private: false,
    owner: {
      login: "leonardomso",
      id: 8030067,
      node_id: "MDQ6VXNlcjgwMzAwNjc=",
      avatar_url: "https://avatars.githubusercontent.com/u/8030067?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/leonardomso",
      html_url: "https://github.com/leonardomso",
      followers_url: "https://api.github.com/users/leonardomso/followers",
      following_url:
        "https://api.github.com/users/leonardomso/following{/other_user}",
      gists_url: "https://api.github.com/users/leonardomso/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/leonardomso/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/leonardomso/subscriptions",
      organizations_url: "https://api.github.com/users/leonardomso/orgs",
      repos_url: "https://api.github.com/users/leonardomso/repos",
      events_url: "https://api.github.com/users/leonardomso/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/leonardomso/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/leonardomso/33-js-concepts",
    description: "📜 33 JavaScript concepts every developer should know.",
    fork: false,
    url: "https://api.github.com/repos/leonardomso/33-js-concepts",
    forks_url: "https://api.github.com/repos/leonardomso/33-js-concepts/forks",
    keys_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/leonardomso/33-js-concepts/teams",
    hooks_url: "https://api.github.com/repos/leonardomso/33-js-concepts/hooks",
    issue_events_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/events",
    assignees_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/branches{/branch}",
    tags_url: "https://api.github.com/repos/leonardomso/33-js-concepts/tags",
    blobs_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/languages",
    stargazers_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/stargazers",
    contributors_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/contributors",
    subscribers_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/subscribers",
    subscription_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/subscription",
    commits_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/merges",
    archive_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/downloads",
    issues_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/labels{/name}",
    releases_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/leonardomso/33-js-concepts/deployments",
    created_at: "2018-09-04T13:27:04Z",
    updated_at: "2023-08-29T23:14:27Z",
    pushed_at: "2023-08-29T20:58:48Z",
    git_url: "git://github.com/leonardomso/33-js-concepts.git",
    ssh_url: "git@github.com:leonardomso/33-js-concepts.git",
    clone_url: "https://github.com/leonardomso/33-js-concepts.git",
    svn_url: "https://github.com/leonardomso/33-js-concepts",
    homepage: "",
    size: 850,
    stargazers_count: 57444,
    watchers_count: 57444,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 8098,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 74,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "concepts",
      "es6",
      "es6-javascript",
      "hacktoberfest",
      "javascript",
      "javascript-closures",
      "javascript-engines",
      "javascript-programming",
      "nodejs",
      "primitive-types",
      "programming",
      "react",
    ],
    visibility: "public",
    forks: 8098,
    open_issues: 74,
    watchers: 57444,
    default_branch: "master",
    score: 1,
  },
  {
    id: 36040894,
    node_id: "MDEwOlJlcG9zaXRvcnkzNjA0MDg5NA==",
    name: "gatsby",
    full_name: "gatsbyjs/gatsby",
    private: false,
    owner: {
      login: "gatsbyjs",
      id: 12551863,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEyNTUxODYz",
      avatar_url: "https://avatars.githubusercontent.com/u/12551863?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/gatsbyjs",
      html_url: "https://github.com/gatsbyjs",
      followers_url: "https://api.github.com/users/gatsbyjs/followers",
      following_url:
        "https://api.github.com/users/gatsbyjs/following{/other_user}",
      gists_url: "https://api.github.com/users/gatsbyjs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gatsbyjs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/gatsbyjs/subscriptions",
      organizations_url: "https://api.github.com/users/gatsbyjs/orgs",
      repos_url: "https://api.github.com/users/gatsbyjs/repos",
      events_url: "https://api.github.com/users/gatsbyjs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gatsbyjs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/gatsbyjs/gatsby",
    description:
      "The best React-based framework with performance, scalability and security built in.",
    fork: false,
    url: "https://api.github.com/repos/gatsbyjs/gatsby",
    forks_url: "https://api.github.com/repos/gatsbyjs/gatsby/forks",
    keys_url: "https://api.github.com/repos/gatsbyjs/gatsby/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/gatsbyjs/gatsby/teams",
    hooks_url: "https://api.github.com/repos/gatsbyjs/gatsby/hooks",
    issue_events_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/issues/events{/number}",
    events_url: "https://api.github.com/repos/gatsbyjs/gatsby/events",
    assignees_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/branches{/branch}",
    tags_url: "https://api.github.com/repos/gatsbyjs/gatsby/tags",
    blobs_url: "https://api.github.com/repos/gatsbyjs/gatsby/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/gatsbyjs/gatsby/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/gatsbyjs/gatsby/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/gatsbyjs/gatsby/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/gatsbyjs/gatsby/statuses/{sha}",
    languages_url: "https://api.github.com/repos/gatsbyjs/gatsby/languages",
    stargazers_url: "https://api.github.com/repos/gatsbyjs/gatsby/stargazers",
    contributors_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/contributors",
    subscribers_url: "https://api.github.com/repos/gatsbyjs/gatsby/subscribers",
    subscription_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/subscription",
    commits_url: "https://api.github.com/repos/gatsbyjs/gatsby/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/gatsbyjs/gatsby/merges",
    archive_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/gatsbyjs/gatsby/downloads",
    issues_url: "https://api.github.com/repos/gatsbyjs/gatsby/issues{/number}",
    pulls_url: "https://api.github.com/repos/gatsbyjs/gatsby/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/gatsbyjs/gatsby/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/gatsbyjs/gatsby/labels{/name}",
    releases_url: "https://api.github.com/repos/gatsbyjs/gatsby/releases{/id}",
    deployments_url: "https://api.github.com/repos/gatsbyjs/gatsby/deployments",
    created_at: "2015-05-21T22:43:05Z",
    updated_at: "2023-08-29T21:32:48Z",
    pushed_at: "2023-08-29T22:11:55Z",
    git_url: "git://github.com/gatsbyjs/gatsby.git",
    ssh_url: "git@github.com:gatsbyjs/gatsby.git",
    clone_url: "https://github.com/gatsbyjs/gatsby.git",
    svn_url: "https://github.com/gatsbyjs/gatsby",
    homepage: "https://www.gatsbyjs.com",
    size: 1123607,
    stargazers_count: 54707,
    watchers_count: 54707,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 10569,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 239,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "blog",
      "compiler",
      "gatsby",
      "graphql",
      "react",
      "static-site-generator",
      "web-app",
    ],
    visibility: "public",
    forks: 10569,
    open_issues: 239,
    watchers: 54707,
    default_branch: "master",
    score: 1,
  },
  {
    id: 39464018,
    node_id: "MDEwOlJlcG9zaXRvcnkzOTQ2NDAxOA==",
    name: "superset",
    full_name: "apache/superset",
    private: false,
    owner: {
      login: "apache",
      id: 47359,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ3MzU5",
      avatar_url: "https://avatars.githubusercontent.com/u/47359?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/apache",
      html_url: "https://github.com/apache",
      followers_url: "https://api.github.com/users/apache/followers",
      following_url:
        "https://api.github.com/users/apache/following{/other_user}",
      gists_url: "https://api.github.com/users/apache/gists{/gist_id}",
      starred_url: "https://api.github.com/users/apache/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/apache/subscriptions",
      organizations_url: "https://api.github.com/users/apache/orgs",
      repos_url: "https://api.github.com/users/apache/repos",
      events_url: "https://api.github.com/users/apache/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/apache/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/apache/superset",
    description:
      "Apache Superset is a Data Visualization and Data Exploration Platform",
    fork: false,
    url: "https://api.github.com/repos/apache/superset",
    forks_url: "https://api.github.com/repos/apache/superset/forks",
    keys_url: "https://api.github.com/repos/apache/superset/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/apache/superset/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/apache/superset/teams",
    hooks_url: "https://api.github.com/repos/apache/superset/hooks",
    issue_events_url:
      "https://api.github.com/repos/apache/superset/issues/events{/number}",
    events_url: "https://api.github.com/repos/apache/superset/events",
    assignees_url:
      "https://api.github.com/repos/apache/superset/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/apache/superset/branches{/branch}",
    tags_url: "https://api.github.com/repos/apache/superset/tags",
    blobs_url: "https://api.github.com/repos/apache/superset/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/apache/superset/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/apache/superset/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/apache/superset/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/apache/superset/statuses/{sha}",
    languages_url: "https://api.github.com/repos/apache/superset/languages",
    stargazers_url: "https://api.github.com/repos/apache/superset/stargazers",
    contributors_url:
      "https://api.github.com/repos/apache/superset/contributors",
    subscribers_url: "https://api.github.com/repos/apache/superset/subscribers",
    subscription_url:
      "https://api.github.com/repos/apache/superset/subscription",
    commits_url: "https://api.github.com/repos/apache/superset/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/apache/superset/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/apache/superset/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/apache/superset/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/apache/superset/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/apache/superset/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/apache/superset/merges",
    archive_url:
      "https://api.github.com/repos/apache/superset/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/apache/superset/downloads",
    issues_url: "https://api.github.com/repos/apache/superset/issues{/number}",
    pulls_url: "https://api.github.com/repos/apache/superset/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/apache/superset/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/apache/superset/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/apache/superset/labels{/name}",
    releases_url: "https://api.github.com/repos/apache/superset/releases{/id}",
    deployments_url: "https://api.github.com/repos/apache/superset/deployments",
    created_at: "2015-07-21T18:55:34Z",
    updated_at: "2023-08-29T22:44:05Z",
    pushed_at: "2023-08-29T22:22:37Z",
    git_url: "git://github.com/apache/superset.git",
    ssh_url: "git@github.com:apache/superset.git",
    clone_url: "https://github.com/apache/superset.git",
    svn_url: "https://github.com/apache/superset",
    homepage: "https://superset.apache.org/",
    size: 529059,
    stargazers_count: 53956,
    watchers_count: 53956,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 11181,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1446,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "analytics",
      "apache",
      "apache-superset",
      "asf",
      "bi",
      "business-analytics",
      "business-intelligence",
      "data-analysis",
      "data-analytics",
      "data-engineering",
      "data-science",
      "data-visualization",
      "data-viz",
      "flask",
      "python",
      "react",
      "sql-editor",
      "superset",
    ],
    visibility: "public",
    forks: 11181,
    open_issues: 1446,
    watchers: 53956,
    default_branch: "master",
    score: 1,
  },
  {
    id: 19872456,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTg3MjQ1Ng==",
    name: "react-router",
    full_name: "remix-run/react-router",
    private: false,
    owner: {
      login: "remix-run",
      id: 64235328,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY0MjM1MzI4",
      avatar_url: "https://avatars.githubusercontent.com/u/64235328?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/remix-run",
      html_url: "https://github.com/remix-run",
      followers_url: "https://api.github.com/users/remix-run/followers",
      following_url:
        "https://api.github.com/users/remix-run/following{/other_user}",
      gists_url: "https://api.github.com/users/remix-run/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/remix-run/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/remix-run/subscriptions",
      organizations_url: "https://api.github.com/users/remix-run/orgs",
      repos_url: "https://api.github.com/users/remix-run/repos",
      events_url: "https://api.github.com/users/remix-run/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/remix-run/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/remix-run/react-router",
    description: "Declarative routing for React",
    fork: false,
    url: "https://api.github.com/repos/remix-run/react-router",
    forks_url: "https://api.github.com/repos/remix-run/react-router/forks",
    keys_url:
      "https://api.github.com/repos/remix-run/react-router/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/remix-run/react-router/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/remix-run/react-router/teams",
    hooks_url: "https://api.github.com/repos/remix-run/react-router/hooks",
    issue_events_url:
      "https://api.github.com/repos/remix-run/react-router/issues/events{/number}",
    events_url: "https://api.github.com/repos/remix-run/react-router/events",
    assignees_url:
      "https://api.github.com/repos/remix-run/react-router/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/remix-run/react-router/branches{/branch}",
    tags_url: "https://api.github.com/repos/remix-run/react-router/tags",
    blobs_url:
      "https://api.github.com/repos/remix-run/react-router/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/remix-run/react-router/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/remix-run/react-router/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/remix-run/react-router/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/remix-run/react-router/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/remix-run/react-router/languages",
    stargazers_url:
      "https://api.github.com/repos/remix-run/react-router/stargazers",
    contributors_url:
      "https://api.github.com/repos/remix-run/react-router/contributors",
    subscribers_url:
      "https://api.github.com/repos/remix-run/react-router/subscribers",
    subscription_url:
      "https://api.github.com/repos/remix-run/react-router/subscription",
    commits_url:
      "https://api.github.com/repos/remix-run/react-router/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/remix-run/react-router/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/remix-run/react-router/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/remix-run/react-router/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/remix-run/react-router/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/remix-run/react-router/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/remix-run/react-router/merges",
    archive_url:
      "https://api.github.com/repos/remix-run/react-router/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/remix-run/react-router/downloads",
    issues_url:
      "https://api.github.com/repos/remix-run/react-router/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/remix-run/react-router/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/remix-run/react-router/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/remix-run/react-router/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/remix-run/react-router/labels{/name}",
    releases_url:
      "https://api.github.com/repos/remix-run/react-router/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/remix-run/react-router/deployments",
    created_at: "2014-05-16T22:22:51Z",
    updated_at: "2023-08-29T22:48:28Z",
    pushed_at: "2023-08-29T21:38:19Z",
    git_url: "git://github.com/remix-run/react-router.git",
    ssh_url: "git@github.com:remix-run/react-router.git",
    clone_url: "https://github.com/remix-run/react-router.git",
    svn_url: "https://github.com/remix-run/react-router",
    homepage: "https://reactrouter.com",
    size: 22021,
    stargazers_count: 50901,
    watchers_count: 50901,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 10128,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 48,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 10128,
    open_issues: 48,
    watchers: 50901,
    default_branch: "main",
    score: 1,
  },
  {
    id: 12256376,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjI1NjM3Ng==",
    name: "ionic-framework",
    full_name: "ionic-team/ionic-framework",
    private: false,
    owner: {
      login: "ionic-team",
      id: 3171503,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMxNzE1MDM=",
      avatar_url: "https://avatars.githubusercontent.com/u/3171503?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ionic-team",
      html_url: "https://github.com/ionic-team",
      followers_url: "https://api.github.com/users/ionic-team/followers",
      following_url:
        "https://api.github.com/users/ionic-team/following{/other_user}",
      gists_url: "https://api.github.com/users/ionic-team/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ionic-team/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ionic-team/subscriptions",
      organizations_url: "https://api.github.com/users/ionic-team/orgs",
      repos_url: "https://api.github.com/users/ionic-team/repos",
      events_url: "https://api.github.com/users/ionic-team/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ionic-team/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/ionic-team/ionic-framework",
    description:
      "A powerful cross-platform UI toolkit for building native-quality iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript.",
    fork: false,
    url: "https://api.github.com/repos/ionic-team/ionic-framework",
    forks_url: "https://api.github.com/repos/ionic-team/ionic-framework/forks",
    keys_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ionic-team/ionic-framework/teams",
    hooks_url: "https://api.github.com/repos/ionic-team/ionic-framework/hooks",
    issue_events_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/events",
    assignees_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/branches{/branch}",
    tags_url: "https://api.github.com/repos/ionic-team/ionic-framework/tags",
    blobs_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/languages",
    stargazers_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/stargazers",
    contributors_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/contributors",
    subscribers_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/subscribers",
    subscription_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/subscription",
    commits_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/merges",
    archive_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/downloads",
    issues_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ionic-team/ionic-framework/deployments",
    created_at: "2013-08-20T23:06:02Z",
    updated_at: "2023-08-29T18:28:01Z",
    pushed_at: "2023-08-30T00:03:25Z",
    git_url: "git://github.com/ionic-team/ionic-framework.git",
    ssh_url: "git@github.com:ionic-team/ionic-framework.git",
    clone_url: "https://github.com/ionic-team/ionic-framework.git",
    svn_url: "https://github.com/ionic-team/ionic-framework",
    homepage: "https://ionicframework.com",
    size: 1106066,
    stargazers_count: 49469,
    watchers_count: 49469,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 13666,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 440,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "capacitor",
      "framework",
      "frontend",
      "ionic",
      "ios",
      "javascript",
      "material-design",
      "mobile",
      "pwa",
      "react",
      "stencil",
      "stenciljs",
      "typescript",
      "vue",
      "web",
      "webcomponents",
    ],
    visibility: "public",
    forks: 13666,
    open_issues: 440,
    watchers: 49469,
    default_branch: "main",
    score: 1,
  },
  {
    id: 94911145,
    node_id: "MDEwOlJlcG9zaXRvcnk5NDkxMTE0NQ==",
    name: "docusaurus",
    full_name: "facebook/docusaurus",
    private: false,
    owner: {
      login: "facebook",
      id: 69631,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/facebook",
      html_url: "https://github.com/facebook",
      followers_url: "https://api.github.com/users/facebook/followers",
      following_url:
        "https://api.github.com/users/facebook/following{/other_user}",
      gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
      organizations_url: "https://api.github.com/users/facebook/orgs",
      repos_url: "https://api.github.com/users/facebook/repos",
      events_url: "https://api.github.com/users/facebook/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/facebook/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/facebook/docusaurus",
    description: "Easy to maintain open source documentation websites.",
    fork: false,
    url: "https://api.github.com/repos/facebook/docusaurus",
    forks_url: "https://api.github.com/repos/facebook/docusaurus/forks",
    keys_url: "https://api.github.com/repos/facebook/docusaurus/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/facebook/docusaurus/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/facebook/docusaurus/teams",
    hooks_url: "https://api.github.com/repos/facebook/docusaurus/hooks",
    issue_events_url:
      "https://api.github.com/repos/facebook/docusaurus/issues/events{/number}",
    events_url: "https://api.github.com/repos/facebook/docusaurus/events",
    assignees_url:
      "https://api.github.com/repos/facebook/docusaurus/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/facebook/docusaurus/branches{/branch}",
    tags_url: "https://api.github.com/repos/facebook/docusaurus/tags",
    blobs_url:
      "https://api.github.com/repos/facebook/docusaurus/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/facebook/docusaurus/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/facebook/docusaurus/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/facebook/docusaurus/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/facebook/docusaurus/statuses/{sha}",
    languages_url: "https://api.github.com/repos/facebook/docusaurus/languages",
    stargazers_url:
      "https://api.github.com/repos/facebook/docusaurus/stargazers",
    contributors_url:
      "https://api.github.com/repos/facebook/docusaurus/contributors",
    subscribers_url:
      "https://api.github.com/repos/facebook/docusaurus/subscribers",
    subscription_url:
      "https://api.github.com/repos/facebook/docusaurus/subscription",
    commits_url:
      "https://api.github.com/repos/facebook/docusaurus/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/facebook/docusaurus/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/facebook/docusaurus/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/facebook/docusaurus/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/facebook/docusaurus/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/facebook/docusaurus/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/facebook/docusaurus/merges",
    archive_url:
      "https://api.github.com/repos/facebook/docusaurus/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/facebook/docusaurus/downloads",
    issues_url:
      "https://api.github.com/repos/facebook/docusaurus/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/facebook/docusaurus/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/facebook/docusaurus/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/facebook/docusaurus/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/facebook/docusaurus/labels{/name}",
    releases_url:
      "https://api.github.com/repos/facebook/docusaurus/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/facebook/docusaurus/deployments",
    created_at: "2017-06-20T16:13:53Z",
    updated_at: "2023-08-29T22:18:42Z",
    pushed_at: "2023-08-29T06:38:55Z",
    git_url: "git://github.com/facebook/docusaurus.git",
    ssh_url: "git@github.com:facebook/docusaurus.git",
    clone_url: "https://github.com/facebook/docusaurus.git",
    svn_url: "https://github.com/facebook/docusaurus",
    homepage: "https://docusaurus.io",
    size: 246496,
    stargazers_count: 47265,
    watchers_count: 47265,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 7276,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 322,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "documentation",
      "hacktoberfest",
      "javascript",
      "open-source",
      "react",
      "website",
    ],
    visibility: "public",
    forks: 7276,
    open_issues: 322,
    watchers: 47265,
    default_branch: "main",
    score: 1,
  },
  {
    id: 3214406,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjE0NDA2",
    name: "meteor",
    full_name: "meteor/meteor",
    private: false,
    owner: {
      login: "meteor",
      id: 789528,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc4OTUyOA==",
      avatar_url: "https://avatars.githubusercontent.com/u/789528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/meteor",
      html_url: "https://github.com/meteor",
      followers_url: "https://api.github.com/users/meteor/followers",
      following_url:
        "https://api.github.com/users/meteor/following{/other_user}",
      gists_url: "https://api.github.com/users/meteor/gists{/gist_id}",
      starred_url: "https://api.github.com/users/meteor/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/meteor/subscriptions",
      organizations_url: "https://api.github.com/users/meteor/orgs",
      repos_url: "https://api.github.com/users/meteor/repos",
      events_url: "https://api.github.com/users/meteor/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/meteor/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/meteor/meteor",
    description: "Meteor, the JavaScript App Platform",
    fork: false,
    url: "https://api.github.com/repos/meteor/meteor",
    forks_url: "https://api.github.com/repos/meteor/meteor/forks",
    keys_url: "https://api.github.com/repos/meteor/meteor/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/meteor/meteor/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/meteor/meteor/teams",
    hooks_url: "https://api.github.com/repos/meteor/meteor/hooks",
    issue_events_url:
      "https://api.github.com/repos/meteor/meteor/issues/events{/number}",
    events_url: "https://api.github.com/repos/meteor/meteor/events",
    assignees_url:
      "https://api.github.com/repos/meteor/meteor/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/meteor/meteor/branches{/branch}",
    tags_url: "https://api.github.com/repos/meteor/meteor/tags",
    blobs_url: "https://api.github.com/repos/meteor/meteor/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/meteor/meteor/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/meteor/meteor/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/meteor/meteor/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/meteor/meteor/statuses/{sha}",
    languages_url: "https://api.github.com/repos/meteor/meteor/languages",
    stargazers_url: "https://api.github.com/repos/meteor/meteor/stargazers",
    contributors_url: "https://api.github.com/repos/meteor/meteor/contributors",
    subscribers_url: "https://api.github.com/repos/meteor/meteor/subscribers",
    subscription_url: "https://api.github.com/repos/meteor/meteor/subscription",
    commits_url: "https://api.github.com/repos/meteor/meteor/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/meteor/meteor/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/meteor/meteor/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/meteor/meteor/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/meteor/meteor/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/meteor/meteor/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/meteor/meteor/merges",
    archive_url:
      "https://api.github.com/repos/meteor/meteor/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/meteor/meteor/downloads",
    issues_url: "https://api.github.com/repos/meteor/meteor/issues{/number}",
    pulls_url: "https://api.github.com/repos/meteor/meteor/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/meteor/meteor/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/meteor/meteor/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/meteor/meteor/labels{/name}",
    releases_url: "https://api.github.com/repos/meteor/meteor/releases{/id}",
    deployments_url: "https://api.github.com/repos/meteor/meteor/deployments",
    created_at: "2012-01-19T01:58:17Z",
    updated_at: "2023-08-29T15:11:38Z",
    pushed_at: "2023-08-29T22:41:23Z",
    git_url: "git://github.com/meteor/meteor.git",
    ssh_url: "git@github.com:meteor/meteor.git",
    clone_url: "https://github.com/meteor/meteor.git",
    svn_url: "https://github.com/meteor/meteor",
    homepage: "https://meteor.com",
    size: 120628,
    stargazers_count: 43679,
    watchers_count: 43679,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 5296,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 267,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "build-system",
      "framework",
      "javascript",
      "meteor",
      "mongodb",
      "nodejs",
      "npm",
      "react",
      "reactive-programming",
      "realtime",
      "rpc",
      "zero-configuration",
    ],
    visibility: "public",
    forks: 5296,
    open_issues: 267,
    watchers: 43679,
    default_branch: "devel",
    score: 1,
  },
  {
    id: 357728969,
    node_id: "MDEwOlJlcG9zaXRvcnkzNTc3Mjg5Njk=",
    name: "bun",
    full_name: "oven-sh/bun",
    private: false,
    owner: {
      login: "oven-sh",
      id: 108928776,
      node_id: "O_kgDOBn4fCA",
      avatar_url: "https://avatars.githubusercontent.com/u/108928776?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/oven-sh",
      html_url: "https://github.com/oven-sh",
      followers_url: "https://api.github.com/users/oven-sh/followers",
      following_url:
        "https://api.github.com/users/oven-sh/following{/other_user}",
      gists_url: "https://api.github.com/users/oven-sh/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/oven-sh/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/oven-sh/subscriptions",
      organizations_url: "https://api.github.com/users/oven-sh/orgs",
      repos_url: "https://api.github.com/users/oven-sh/repos",
      events_url: "https://api.github.com/users/oven-sh/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/oven-sh/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/oven-sh/bun",
    description:
      "Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one",
    fork: false,
    url: "https://api.github.com/repos/oven-sh/bun",
    forks_url: "https://api.github.com/repos/oven-sh/bun/forks",
    keys_url: "https://api.github.com/repos/oven-sh/bun/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/oven-sh/bun/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/oven-sh/bun/teams",
    hooks_url: "https://api.github.com/repos/oven-sh/bun/hooks",
    issue_events_url:
      "https://api.github.com/repos/oven-sh/bun/issues/events{/number}",
    events_url: "https://api.github.com/repos/oven-sh/bun/events",
    assignees_url: "https://api.github.com/repos/oven-sh/bun/assignees{/user}",
    branches_url: "https://api.github.com/repos/oven-sh/bun/branches{/branch}",
    tags_url: "https://api.github.com/repos/oven-sh/bun/tags",
    blobs_url: "https://api.github.com/repos/oven-sh/bun/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/oven-sh/bun/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/oven-sh/bun/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/oven-sh/bun/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/oven-sh/bun/statuses/{sha}",
    languages_url: "https://api.github.com/repos/oven-sh/bun/languages",
    stargazers_url: "https://api.github.com/repos/oven-sh/bun/stargazers",
    contributors_url: "https://api.github.com/repos/oven-sh/bun/contributors",
    subscribers_url: "https://api.github.com/repos/oven-sh/bun/subscribers",
    subscription_url: "https://api.github.com/repos/oven-sh/bun/subscription",
    commits_url: "https://api.github.com/repos/oven-sh/bun/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/oven-sh/bun/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/oven-sh/bun/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/oven-sh/bun/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/oven-sh/bun/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/oven-sh/bun/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/oven-sh/bun/merges",
    archive_url:
      "https://api.github.com/repos/oven-sh/bun/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/oven-sh/bun/downloads",
    issues_url: "https://api.github.com/repos/oven-sh/bun/issues{/number}",
    pulls_url: "https://api.github.com/repos/oven-sh/bun/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/oven-sh/bun/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/oven-sh/bun/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/oven-sh/bun/labels{/name}",
    releases_url: "https://api.github.com/repos/oven-sh/bun/releases{/id}",
    deployments_url: "https://api.github.com/repos/oven-sh/bun/deployments",
    created_at: "2021-04-14T00:48:17Z",
    updated_at: "2023-08-29T23:28:59Z",
    pushed_at: "2023-08-29T22:43:41Z",
    git_url: "git://github.com/oven-sh/bun.git",
    ssh_url: "git@github.com:oven-sh/bun.git",
    clone_url: "https://github.com/oven-sh/bun.git",
    svn_url: "https://github.com/oven-sh/bun",
    homepage: "https://bun.sh",
    size: 113854,
    stargazers_count: 43474,
    watchers_count: 43474,
    language: "Zig",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1223,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1052,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "bun",
      "bundler",
      "javascript",
      "javascriptcore",
      "jsx",
      "nodejs",
      "npm",
      "react",
      "transpiler",
      "typescript",
      "zig",
      "ziglang",
    ],
    visibility: "public",
    forks: 1223,
    open_issues: 1052,
    watchers: 43474,
    default_branch: "main",
    score: 1,
  },
  {
    id: 135786093,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=",
    name: "react",
    full_name: "typescript-cheatsheets/react",
    private: false,
    owner: {
      login: "typescript-cheatsheets",
      id: 50188264,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjUwMTg4MjY0",
      avatar_url: "https://avatars.githubusercontent.com/u/50188264?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/typescript-cheatsheets",
      html_url: "https://github.com/typescript-cheatsheets",
      followers_url:
        "https://api.github.com/users/typescript-cheatsheets/followers",
      following_url:
        "https://api.github.com/users/typescript-cheatsheets/following{/other_user}",
      gists_url:
        "https://api.github.com/users/typescript-cheatsheets/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/typescript-cheatsheets/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/typescript-cheatsheets/subscriptions",
      organizations_url:
        "https://api.github.com/users/typescript-cheatsheets/orgs",
      repos_url: "https://api.github.com/users/typescript-cheatsheets/repos",
      events_url:
        "https://api.github.com/users/typescript-cheatsheets/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/typescript-cheatsheets/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/typescript-cheatsheets/react",
    description:
      "Cheatsheets for experienced React developers getting started with TypeScript",
    fork: false,
    url: "https://api.github.com/repos/typescript-cheatsheets/react",
    forks_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/forks",
    keys_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/teams",
    hooks_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/hooks",
    issue_events_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/events",
    assignees_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/branches{/branch}",
    tags_url: "https://api.github.com/repos/typescript-cheatsheets/react/tags",
    blobs_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/languages",
    stargazers_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/stargazers",
    contributors_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/contributors",
    subscribers_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/subscribers",
    subscription_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/subscription",
    commits_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/merges",
    archive_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/downloads",
    issues_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/typescript-cheatsheets/react/deployments",
    created_at: "2018-06-02T04:08:16Z",
    updated_at: "2023-08-29T22:39:29Z",
    pushed_at: "2023-08-23T04:42:26Z",
    git_url: "git://github.com/typescript-cheatsheets/react.git",
    ssh_url: "git@github.com:typescript-cheatsheets/react.git",
    clone_url: "https://github.com/typescript-cheatsheets/react.git",
    svn_url: "https://github.com/typescript-cheatsheets/react",
    homepage: "https://react-typescript-cheatsheet.netlify.app",
    size: 3037,
    stargazers_count: 42035,
    watchers_count: 42035,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 3865,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cheatsheet",
      "guide",
      "hacktoberfest",
      "hacktoberfest2022",
      "react",
      "typescript",
    ],
    visibility: "public",
    forks: 3865,
    open_issues: 3,
    watchers: 42035,
    default_branch: "main",
    score: 1,
  },
  {
    id: 62367558,
    node_id: "MDEwOlJlcG9zaXRvcnk2MjM2NzU1OA==",
    name: "hyper",
    full_name: "vercel/hyper",
    private: false,
    owner: {
      login: "vercel",
      id: 14985020,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/14985020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vercel",
      html_url: "https://github.com/vercel",
      followers_url: "https://api.github.com/users/vercel/followers",
      following_url:
        "https://api.github.com/users/vercel/following{/other_user}",
      gists_url: "https://api.github.com/users/vercel/gists{/gist_id}",
      starred_url: "https://api.github.com/users/vercel/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/vercel/subscriptions",
      organizations_url: "https://api.github.com/users/vercel/orgs",
      repos_url: "https://api.github.com/users/vercel/repos",
      events_url: "https://api.github.com/users/vercel/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vercel/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/vercel/hyper",
    description: "A terminal built on web technologies",
    fork: false,
    url: "https://api.github.com/repos/vercel/hyper",
    forks_url: "https://api.github.com/repos/vercel/hyper/forks",
    keys_url: "https://api.github.com/repos/vercel/hyper/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/vercel/hyper/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/vercel/hyper/teams",
    hooks_url: "https://api.github.com/repos/vercel/hyper/hooks",
    issue_events_url:
      "https://api.github.com/repos/vercel/hyper/issues/events{/number}",
    events_url: "https://api.github.com/repos/vercel/hyper/events",
    assignees_url: "https://api.github.com/repos/vercel/hyper/assignees{/user}",
    branches_url: "https://api.github.com/repos/vercel/hyper/branches{/branch}",
    tags_url: "https://api.github.com/repos/vercel/hyper/tags",
    blobs_url: "https://api.github.com/repos/vercel/hyper/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/vercel/hyper/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/vercel/hyper/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/vercel/hyper/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/vercel/hyper/statuses/{sha}",
    languages_url: "https://api.github.com/repos/vercel/hyper/languages",
    stargazers_url: "https://api.github.com/repos/vercel/hyper/stargazers",
    contributors_url: "https://api.github.com/repos/vercel/hyper/contributors",
    subscribers_url: "https://api.github.com/repos/vercel/hyper/subscribers",
    subscription_url: "https://api.github.com/repos/vercel/hyper/subscription",
    commits_url: "https://api.github.com/repos/vercel/hyper/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/vercel/hyper/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/vercel/hyper/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/vercel/hyper/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/vercel/hyper/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/vercel/hyper/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/vercel/hyper/merges",
    archive_url:
      "https://api.github.com/repos/vercel/hyper/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/vercel/hyper/downloads",
    issues_url: "https://api.github.com/repos/vercel/hyper/issues{/number}",
    pulls_url: "https://api.github.com/repos/vercel/hyper/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/vercel/hyper/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/vercel/hyper/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/vercel/hyper/labels{/name}",
    releases_url: "https://api.github.com/repos/vercel/hyper/releases{/id}",
    deployments_url: "https://api.github.com/repos/vercel/hyper/deployments",
    created_at: "2016-07-01T06:01:21Z",
    updated_at: "2023-08-29T21:55:20Z",
    pushed_at: "2023-08-29T06:45:34Z",
    git_url: "git://github.com/vercel/hyper.git",
    ssh_url: "git@github.com:vercel/hyper.git",
    clone_url: "https://github.com/vercel/hyper.git",
    svn_url: "https://github.com/vercel/hyper",
    homepage: "https://hyper.is",
    size: 22154,
    stargazers_count: 41407,
    watchers_count: 41407,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 3499,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 870,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "css",
      "html",
      "hyper",
      "javascript",
      "linux",
      "macos",
      "react",
      "terminal",
      "terminal-emulators",
    ],
    visibility: "public",
    forks: 3499,
    open_issues: 870,
    watchers: 41407,
    default_branch: "canary",
    score: 1,
  },
  {
    id: 65794292,
    node_id: "MDEwOlJlcG9zaXRvcnk2NTc5NDI5Mg==",
    name: "styled-components",
    full_name: "styled-components/styled-components",
    private: false,
    owner: {
      login: "styled-components",
      id: 20658825,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjIwNjU4ODI1",
      avatar_url: "https://avatars.githubusercontent.com/u/20658825?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/styled-components",
      html_url: "https://github.com/styled-components",
      followers_url: "https://api.github.com/users/styled-components/followers",
      following_url:
        "https://api.github.com/users/styled-components/following{/other_user}",
      gists_url:
        "https://api.github.com/users/styled-components/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/styled-components/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/styled-components/subscriptions",
      organizations_url: "https://api.github.com/users/styled-components/orgs",
      repos_url: "https://api.github.com/users/styled-components/repos",
      events_url:
        "https://api.github.com/users/styled-components/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/styled-components/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/styled-components/styled-components",
    description:
      "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅",
    fork: false,
    url: "https://api.github.com/repos/styled-components/styled-components",
    forks_url:
      "https://api.github.com/repos/styled-components/styled-components/forks",
    keys_url:
      "https://api.github.com/repos/styled-components/styled-components/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/styled-components/styled-components/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/styled-components/styled-components/teams",
    hooks_url:
      "https://api.github.com/repos/styled-components/styled-components/hooks",
    issue_events_url:
      "https://api.github.com/repos/styled-components/styled-components/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/styled-components/styled-components/events",
    assignees_url:
      "https://api.github.com/repos/styled-components/styled-components/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/styled-components/styled-components/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/styled-components/styled-components/tags",
    blobs_url:
      "https://api.github.com/repos/styled-components/styled-components/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/styled-components/styled-components/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/styled-components/styled-components/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/styled-components/styled-components/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/styled-components/styled-components/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/styled-components/styled-components/languages",
    stargazers_url:
      "https://api.github.com/repos/styled-components/styled-components/stargazers",
    contributors_url:
      "https://api.github.com/repos/styled-components/styled-components/contributors",
    subscribers_url:
      "https://api.github.com/repos/styled-components/styled-components/subscribers",
    subscription_url:
      "https://api.github.com/repos/styled-components/styled-components/subscription",
    commits_url:
      "https://api.github.com/repos/styled-components/styled-components/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/styled-components/styled-components/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/styled-components/styled-components/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/styled-components/styled-components/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/styled-components/styled-components/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/styled-components/styled-components/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/styled-components/styled-components/merges",
    archive_url:
      "https://api.github.com/repos/styled-components/styled-components/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/styled-components/styled-components/downloads",
    issues_url:
      "https://api.github.com/repos/styled-components/styled-components/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/styled-components/styled-components/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/styled-components/styled-components/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/styled-components/styled-components/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/styled-components/styled-components/labels{/name}",
    releases_url:
      "https://api.github.com/repos/styled-components/styled-components/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/styled-components/styled-components/deployments",
    created_at: "2016-08-16T06:41:32Z",
    updated_at: "2023-08-29T22:17:00Z",
    pushed_at: "2023-08-25T07:25:30Z",
    git_url: "git://github.com/styled-components/styled-components.git",
    ssh_url: "git@github.com:styled-components/styled-components.git",
    clone_url: "https://github.com/styled-components/styled-components.git",
    svn_url: "https://github.com/styled-components/styled-components",
    homepage: "https://styled-components.com",
    size: 34421,
    stargazers_count: 39429,
    watchers_count: 39429,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 2489,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 209,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["css", "css-in-js", "react", "styled-components"],
    visibility: "public",
    forks: 2489,
    open_issues: 209,
    watchers: 39429,
    default_branch: "main",
    score: 1,
  },
  {
    id: 154950925,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTQ5NTA5MjU=",
    name: "react-use",
    full_name: "streamich/react-use",
    private: false,
    owner: {
      login: "streamich",
      id: 9773803,
      node_id: "MDQ6VXNlcjk3NzM4MDM=",
      avatar_url: "https://avatars.githubusercontent.com/u/9773803?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/streamich",
      html_url: "https://github.com/streamich",
      followers_url: "https://api.github.com/users/streamich/followers",
      following_url:
        "https://api.github.com/users/streamich/following{/other_user}",
      gists_url: "https://api.github.com/users/streamich/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/streamich/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/streamich/subscriptions",
      organizations_url: "https://api.github.com/users/streamich/orgs",
      repos_url: "https://api.github.com/users/streamich/repos",
      events_url: "https://api.github.com/users/streamich/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/streamich/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/streamich/react-use",
    description: "React Hooks — 👍",
    fork: false,
    url: "https://api.github.com/repos/streamich/react-use",
    forks_url: "https://api.github.com/repos/streamich/react-use/forks",
    keys_url: "https://api.github.com/repos/streamich/react-use/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/streamich/react-use/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/streamich/react-use/teams",
    hooks_url: "https://api.github.com/repos/streamich/react-use/hooks",
    issue_events_url:
      "https://api.github.com/repos/streamich/react-use/issues/events{/number}",
    events_url: "https://api.github.com/repos/streamich/react-use/events",
    assignees_url:
      "https://api.github.com/repos/streamich/react-use/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/streamich/react-use/branches{/branch}",
    tags_url: "https://api.github.com/repos/streamich/react-use/tags",
    blobs_url:
      "https://api.github.com/repos/streamich/react-use/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/streamich/react-use/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/streamich/react-use/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/streamich/react-use/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/streamich/react-use/statuses/{sha}",
    languages_url: "https://api.github.com/repos/streamich/react-use/languages",
    stargazers_url:
      "https://api.github.com/repos/streamich/react-use/stargazers",
    contributors_url:
      "https://api.github.com/repos/streamich/react-use/contributors",
    subscribers_url:
      "https://api.github.com/repos/streamich/react-use/subscribers",
    subscription_url:
      "https://api.github.com/repos/streamich/react-use/subscription",
    commits_url:
      "https://api.github.com/repos/streamich/react-use/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/streamich/react-use/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/streamich/react-use/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/streamich/react-use/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/streamich/react-use/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/streamich/react-use/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/streamich/react-use/merges",
    archive_url:
      "https://api.github.com/repos/streamich/react-use/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/streamich/react-use/downloads",
    issues_url:
      "https://api.github.com/repos/streamich/react-use/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/streamich/react-use/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/streamich/react-use/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/streamich/react-use/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/streamich/react-use/labels{/name}",
    releases_url:
      "https://api.github.com/repos/streamich/react-use/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/streamich/react-use/deployments",
    created_at: "2018-10-27T10:16:05Z",
    updated_at: "2023-08-29T19:51:18Z",
    pushed_at: "2023-08-27T11:51:51Z",
    git_url: "git://github.com/streamich/react-use.git",
    ssh_url: "git@github.com:streamich/react-use.git",
    clone_url: "https://github.com/streamich/react-use.git",
    svn_url: "https://github.com/streamich/react-use",
    homepage: "http://streamich.github.io/react-use",
    size: 83874,
    stargazers_count: 37904,
    watchers_count: 37904,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 3003,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 567,
    license: {
      key: "unlicense",
      name: "The Unlicense",
      spdx_id: "Unlicense",
      url: "https://api.github.com/licenses/unlicense",
      node_id: "MDc6TGljZW5zZTE1",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 3003,
    open_issues: 567,
    watchers: 37904,
    default_branch: "master",
    score: 1,
  },
  {
    id: 61893399,
    node_id: "MDEwOlJlcG9zaXRvcnk2MTg5MzM5OQ==",
    name: "awesome-react-components",
    full_name: "brillout/awesome-react-components",
    private: false,
    owner: {
      login: "brillout",
      id: 1005638,
      node_id: "MDQ6VXNlcjEwMDU2Mzg=",
      avatar_url: "https://avatars.githubusercontent.com/u/1005638?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/brillout",
      html_url: "https://github.com/brillout",
      followers_url: "https://api.github.com/users/brillout/followers",
      following_url:
        "https://api.github.com/users/brillout/following{/other_user}",
      gists_url: "https://api.github.com/users/brillout/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/brillout/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/brillout/subscriptions",
      organizations_url: "https://api.github.com/users/brillout/orgs",
      repos_url: "https://api.github.com/users/brillout/repos",
      events_url: "https://api.github.com/users/brillout/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/brillout/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/brillout/awesome-react-components",
    description: "Curated List of React Components & Libraries.",
    fork: false,
    url: "https://api.github.com/repos/brillout/awesome-react-components",
    forks_url:
      "https://api.github.com/repos/brillout/awesome-react-components/forks",
    keys_url:
      "https://api.github.com/repos/brillout/awesome-react-components/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/brillout/awesome-react-components/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/brillout/awesome-react-components/teams",
    hooks_url:
      "https://api.github.com/repos/brillout/awesome-react-components/hooks",
    issue_events_url:
      "https://api.github.com/repos/brillout/awesome-react-components/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/brillout/awesome-react-components/events",
    assignees_url:
      "https://api.github.com/repos/brillout/awesome-react-components/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/brillout/awesome-react-components/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/brillout/awesome-react-components/tags",
    blobs_url:
      "https://api.github.com/repos/brillout/awesome-react-components/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/brillout/awesome-react-components/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/brillout/awesome-react-components/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/brillout/awesome-react-components/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/brillout/awesome-react-components/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/brillout/awesome-react-components/languages",
    stargazers_url:
      "https://api.github.com/repos/brillout/awesome-react-components/stargazers",
    contributors_url:
      "https://api.github.com/repos/brillout/awesome-react-components/contributors",
    subscribers_url:
      "https://api.github.com/repos/brillout/awesome-react-components/subscribers",
    subscription_url:
      "https://api.github.com/repos/brillout/awesome-react-components/subscription",
    commits_url:
      "https://api.github.com/repos/brillout/awesome-react-components/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/brillout/awesome-react-components/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/brillout/awesome-react-components/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/brillout/awesome-react-components/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/brillout/awesome-react-components/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/brillout/awesome-react-components/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/brillout/awesome-react-components/merges",
    archive_url:
      "https://api.github.com/repos/brillout/awesome-react-components/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/brillout/awesome-react-components/downloads",
    issues_url:
      "https://api.github.com/repos/brillout/awesome-react-components/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/brillout/awesome-react-components/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/brillout/awesome-react-components/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/brillout/awesome-react-components/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/brillout/awesome-react-components/labels{/name}",
    releases_url:
      "https://api.github.com/repos/brillout/awesome-react-components/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/brillout/awesome-react-components/deployments",
    created_at: "2016-06-24T15:19:33Z",
    updated_at: "2023-08-29T23:18:12Z",
    pushed_at: "2023-08-24T14:17:02Z",
    git_url: "git://github.com/brillout/awesome-react-components.git",
    ssh_url: "git@github.com:brillout/awesome-react-components.git",
    clone_url: "https://github.com/brillout/awesome-react-components.git",
    svn_url: "https://github.com/brillout/awesome-react-components",
    homepage: "",
    size: 1005,
    stargazers_count: 36946,
    watchers_count: 36946,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 3179,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: {
      key: "cc0-1.0",
      name: "Creative Commons Zero v1.0 Universal",
      spdx_id: "CC0-1.0",
      url: "https://api.github.com/licenses/cc0-1.0",
      node_id: "MDc6TGljZW5zZTY=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "awesome",
      "awesome-list",
      "react",
      "react-component",
      "react-components",
    ],
    visibility: "public",
    forks: 3179,
    open_issues: 2,
    watchers: 36946,
    default_branch: "master",
    score: 1,
  },
  {
    id: 174038031,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQwMzgwMzE=",
    name: "react-hook-form",
    full_name: "react-hook-form/react-hook-form",
    private: false,
    owner: {
      login: "react-hook-form",
      id: 53986236,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjUzOTg2MjM2",
      avatar_url: "https://avatars.githubusercontent.com/u/53986236?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/react-hook-form",
      html_url: "https://github.com/react-hook-form",
      followers_url: "https://api.github.com/users/react-hook-form/followers",
      following_url:
        "https://api.github.com/users/react-hook-form/following{/other_user}",
      gists_url: "https://api.github.com/users/react-hook-form/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/react-hook-form/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/react-hook-form/subscriptions",
      organizations_url: "https://api.github.com/users/react-hook-form/orgs",
      repos_url: "https://api.github.com/users/react-hook-form/repos",
      events_url:
        "https://api.github.com/users/react-hook-form/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/react-hook-form/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/react-hook-form/react-hook-form",
    description:
      "📋 React Hooks for form state management and validation (Web + React Native)",
    fork: false,
    url: "https://api.github.com/repos/react-hook-form/react-hook-form",
    forks_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/forks",
    keys_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/teams",
    hooks_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/hooks",
    issue_events_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/events",
    assignees_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/tags",
    blobs_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/languages",
    stargazers_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/stargazers",
    contributors_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/contributors",
    subscribers_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/subscribers",
    subscription_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/subscription",
    commits_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/merges",
    archive_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/downloads",
    issues_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/labels{/name}",
    releases_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/react-hook-form/react-hook-form/deployments",
    created_at: "2019-03-05T23:47:10Z",
    updated_at: "2023-08-29T22:56:56Z",
    pushed_at: "2023-08-27T18:23:35Z",
    git_url: "git://github.com/react-hook-form/react-hook-form.git",
    ssh_url: "git@github.com:react-hook-form/react-hook-form.git",
    clone_url: "https://github.com/react-hook-form/react-hook-form.git",
    svn_url: "https://github.com/react-hook-form/react-hook-form",
    homepage: "https://react-hook-form.com",
    size: 27849,
    stargazers_count: 36520,
    watchers_count: 36520,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1823,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 26,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "dx",
      "form-builder",
      "forms",
      "react-hooks",
      "react-native",
      "reactjs",
      "typescript",
      "ux",
      "validation",
    ],
    visibility: "public",
    forks: 1823,
    open_issues: 26,
    watchers: 36520,
    default_branch: "master",
    score: 1,
  },
  {
    id: 69629434,
    node_id: "MDEwOlJlcG9zaXRvcnk2OTYyOTQzNA==",
    name: "freecodecamp.cn",
    full_name: "FreeCodeCampChina/freecodecamp.cn",
    private: false,
    owner: {
      login: "FreeCodeCampChina",
      id: 18478284,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE4NDc4Mjg0",
      avatar_url: "https://avatars.githubusercontent.com/u/18478284?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/FreeCodeCampChina",
      html_url: "https://github.com/FreeCodeCampChina",
      followers_url: "https://api.github.com/users/FreeCodeCampChina/followers",
      following_url:
        "https://api.github.com/users/FreeCodeCampChina/following{/other_user}",
      gists_url:
        "https://api.github.com/users/FreeCodeCampChina/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/FreeCodeCampChina/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/FreeCodeCampChina/subscriptions",
      organizations_url: "https://api.github.com/users/FreeCodeCampChina/orgs",
      repos_url: "https://api.github.com/users/FreeCodeCampChina/repos",
      events_url:
        "https://api.github.com/users/FreeCodeCampChina/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/FreeCodeCampChina/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/FreeCodeCampChina/freecodecamp.cn",
    description:
      "FCC China open source codebase and curriculum. Learn to code and help nonprofits.",
    fork: false,
    url: "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn",
    forks_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/forks",
    keys_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/teams",
    hooks_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/hooks",
    issue_events_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/events",
    assignees_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/tags",
    blobs_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/languages",
    stargazers_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/stargazers",
    contributors_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/contributors",
    subscribers_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/subscribers",
    subscription_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/subscription",
    commits_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/merges",
    archive_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/downloads",
    issues_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/labels{/name}",
    releases_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/FreeCodeCampChina/freecodecamp.cn/deployments",
    created_at: "2016-09-30T03:13:43Z",
    updated_at: "2023-08-29T22:29:16Z",
    pushed_at: "2023-07-16T16:48:59Z",
    git_url: "git://github.com/FreeCodeCampChina/freecodecamp.cn.git",
    ssh_url: "git@github.com:FreeCodeCampChina/freecodecamp.cn.git",
    clone_url: "https://github.com/FreeCodeCampChina/freecodecamp.cn.git",
    svn_url: "https://github.com/FreeCodeCampChina/freecodecamp.cn",
    homepage: "https://fcc.asia/",
    size: 30959,
    stargazers_count: 36450,
    watchers_count: 36450,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1371,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 152,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "career",
      "certification",
      "cn-freecodecamp",
      "community",
      "curriculum",
      "d3",
      "education",
      "freecodecamp",
      "javascript",
      "learn-to-code",
      "math",
      "nodejs",
      "nonprofits",
      "react",
    ],
    visibility: "public",
    forks: 1371,
    open_issues: 152,
    watchers: 36450,
    default_branch: "dev",
    score: 1,
  },
  {
    id: 207645083,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDc2NDUwODM=",
    name: "query",
    full_name: "TanStack/query",
    private: false,
    owner: {
      login: "TanStack",
      id: 72518640,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjcyNTE4NjQw",
      avatar_url: "https://avatars.githubusercontent.com/u/72518640?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/TanStack",
      html_url: "https://github.com/TanStack",
      followers_url: "https://api.github.com/users/TanStack/followers",
      following_url:
        "https://api.github.com/users/TanStack/following{/other_user}",
      gists_url: "https://api.github.com/users/TanStack/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/TanStack/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/TanStack/subscriptions",
      organizations_url: "https://api.github.com/users/TanStack/orgs",
      repos_url: "https://api.github.com/users/TanStack/repos",
      events_url: "https://api.github.com/users/TanStack/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/TanStack/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/TanStack/query",
    description:
      "🤖 Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and Vue Query.",
    fork: false,
    url: "https://api.github.com/repos/TanStack/query",
    forks_url: "https://api.github.com/repos/TanStack/query/forks",
    keys_url: "https://api.github.com/repos/TanStack/query/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/TanStack/query/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/TanStack/query/teams",
    hooks_url: "https://api.github.com/repos/TanStack/query/hooks",
    issue_events_url:
      "https://api.github.com/repos/TanStack/query/issues/events{/number}",
    events_url: "https://api.github.com/repos/TanStack/query/events",
    assignees_url:
      "https://api.github.com/repos/TanStack/query/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/TanStack/query/branches{/branch}",
    tags_url: "https://api.github.com/repos/TanStack/query/tags",
    blobs_url: "https://api.github.com/repos/TanStack/query/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/TanStack/query/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/TanStack/query/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/TanStack/query/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/TanStack/query/statuses/{sha}",
    languages_url: "https://api.github.com/repos/TanStack/query/languages",
    stargazers_url: "https://api.github.com/repos/TanStack/query/stargazers",
    contributors_url:
      "https://api.github.com/repos/TanStack/query/contributors",
    subscribers_url: "https://api.github.com/repos/TanStack/query/subscribers",
    subscription_url:
      "https://api.github.com/repos/TanStack/query/subscription",
    commits_url: "https://api.github.com/repos/TanStack/query/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/TanStack/query/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/TanStack/query/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/TanStack/query/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/TanStack/query/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/TanStack/query/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/TanStack/query/merges",
    archive_url:
      "https://api.github.com/repos/TanStack/query/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/TanStack/query/downloads",
    issues_url: "https://api.github.com/repos/TanStack/query/issues{/number}",
    pulls_url: "https://api.github.com/repos/TanStack/query/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/TanStack/query/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/TanStack/query/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/TanStack/query/labels{/name}",
    releases_url: "https://api.github.com/repos/TanStack/query/releases{/id}",
    deployments_url: "https://api.github.com/repos/TanStack/query/deployments",
    created_at: "2019-09-10T19:23:58Z",
    updated_at: "2023-08-29T22:11:14Z",
    pushed_at: "2023-08-29T18:47:22Z",
    git_url: "git://github.com/TanStack/query.git",
    ssh_url: "git@github.com:TanStack/query.git",
    clone_url: "https://github.com/TanStack/query.git",
    svn_url: "https://github.com/TanStack/query",
    homepage: "https://tanstack.com/query",
    size: 36821,
    stargazers_count: 36055,
    watchers_count: 36055,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 2355,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 43,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "async",
      "cache",
      "data",
      "fetch",
      "graphql",
      "hooks",
      "query",
      "react",
      "rest",
      "stale",
      "stale-while-revalidate",
      "update",
    ],
    visibility: "public",
    forks: 2355,
    open_issues: 43,
    watchers: 36055,
    default_branch: "main",
    score: 1,
  },
  {
    id: 61137153,
    node_id: "MDEwOlJlcG9zaXRvcnk2MTEzNzE1Mw==",
    name: "esbuild",
    full_name: "evanw/esbuild",
    private: false,
    owner: {
      login: "evanw",
      id: 406394,
      node_id: "MDQ6VXNlcjQwNjM5NA==",
      avatar_url: "https://avatars.githubusercontent.com/u/406394?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/evanw",
      html_url: "https://github.com/evanw",
      followers_url: "https://api.github.com/users/evanw/followers",
      following_url:
        "https://api.github.com/users/evanw/following{/other_user}",
      gists_url: "https://api.github.com/users/evanw/gists{/gist_id}",
      starred_url: "https://api.github.com/users/evanw/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/evanw/subscriptions",
      organizations_url: "https://api.github.com/users/evanw/orgs",
      repos_url: "https://api.github.com/users/evanw/repos",
      events_url: "https://api.github.com/users/evanw/events{/privacy}",
      received_events_url: "https://api.github.com/users/evanw/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/evanw/esbuild",
    description: "An extremely fast bundler for the web",
    fork: false,
    url: "https://api.github.com/repos/evanw/esbuild",
    forks_url: "https://api.github.com/repos/evanw/esbuild/forks",
    keys_url: "https://api.github.com/repos/evanw/esbuild/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/evanw/esbuild/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/evanw/esbuild/teams",
    hooks_url: "https://api.github.com/repos/evanw/esbuild/hooks",
    issue_events_url:
      "https://api.github.com/repos/evanw/esbuild/issues/events{/number}",
    events_url: "https://api.github.com/repos/evanw/esbuild/events",
    assignees_url:
      "https://api.github.com/repos/evanw/esbuild/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/evanw/esbuild/branches{/branch}",
    tags_url: "https://api.github.com/repos/evanw/esbuild/tags",
    blobs_url: "https://api.github.com/repos/evanw/esbuild/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/evanw/esbuild/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/evanw/esbuild/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/evanw/esbuild/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/evanw/esbuild/statuses/{sha}",
    languages_url: "https://api.github.com/repos/evanw/esbuild/languages",
    stargazers_url: "https://api.github.com/repos/evanw/esbuild/stargazers",
    contributors_url: "https://api.github.com/repos/evanw/esbuild/contributors",
    subscribers_url: "https://api.github.com/repos/evanw/esbuild/subscribers",
    subscription_url: "https://api.github.com/repos/evanw/esbuild/subscription",
    commits_url: "https://api.github.com/repos/evanw/esbuild/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/evanw/esbuild/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/evanw/esbuild/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/evanw/esbuild/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/evanw/esbuild/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/evanw/esbuild/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/evanw/esbuild/merges",
    archive_url:
      "https://api.github.com/repos/evanw/esbuild/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/evanw/esbuild/downloads",
    issues_url: "https://api.github.com/repos/evanw/esbuild/issues{/number}",
    pulls_url: "https://api.github.com/repos/evanw/esbuild/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/evanw/esbuild/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/evanw/esbuild/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/evanw/esbuild/labels{/name}",
    releases_url: "https://api.github.com/repos/evanw/esbuild/releases{/id}",
    deployments_url: "https://api.github.com/repos/evanw/esbuild/deployments",
    created_at: "2016-06-14T16:08:50Z",
    updated_at: "2023-08-29T22:19:11Z",
    pushed_at: "2023-08-28T10:08:25Z",
    git_url: "git://github.com/evanw/esbuild.git",
    ssh_url: "git@github.com:evanw/esbuild.git",
    clone_url: "https://github.com/evanw/esbuild.git",
    svn_url: "https://github.com/evanw/esbuild",
    homepage: "https://esbuild.github.io/",
    size: 19083,
    stargazers_count: 35900,
    watchers_count: 35900,
    language: "Go",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1045,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 332,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "bundler",
      "commonjs",
      "compiler",
      "css",
      "esm",
      "javascript",
      "jsx",
      "minifier",
      "react",
      "tsx",
      "typescript",
    ],
    visibility: "public",
    forks: 1045,
    open_issues: 332,
    watchers: 35900,
    default_branch: "main",
    score: 1,
  },
  {
    id: 42283287,
    node_id: "MDEwOlJlcG9zaXRvcnk0MjI4MzI4Nw==",
    name: "preact",
    full_name: "preactjs/preact",
    private: false,
    owner: {
      login: "preactjs",
      id: 26872990,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjI2ODcyOTkw",
      avatar_url: "https://avatars.githubusercontent.com/u/26872990?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/preactjs",
      html_url: "https://github.com/preactjs",
      followers_url: "https://api.github.com/users/preactjs/followers",
      following_url:
        "https://api.github.com/users/preactjs/following{/other_user}",
      gists_url: "https://api.github.com/users/preactjs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/preactjs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/preactjs/subscriptions",
      organizations_url: "https://api.github.com/users/preactjs/orgs",
      repos_url: "https://api.github.com/users/preactjs/repos",
      events_url: "https://api.github.com/users/preactjs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/preactjs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/preactjs/preact",
    description:
      "⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.",
    fork: false,
    url: "https://api.github.com/repos/preactjs/preact",
    forks_url: "https://api.github.com/repos/preactjs/preact/forks",
    keys_url: "https://api.github.com/repos/preactjs/preact/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/preactjs/preact/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/preactjs/preact/teams",
    hooks_url: "https://api.github.com/repos/preactjs/preact/hooks",
    issue_events_url:
      "https://api.github.com/repos/preactjs/preact/issues/events{/number}",
    events_url: "https://api.github.com/repos/preactjs/preact/events",
    assignees_url:
      "https://api.github.com/repos/preactjs/preact/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/preactjs/preact/branches{/branch}",
    tags_url: "https://api.github.com/repos/preactjs/preact/tags",
    blobs_url: "https://api.github.com/repos/preactjs/preact/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/preactjs/preact/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/preactjs/preact/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/preactjs/preact/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/preactjs/preact/statuses/{sha}",
    languages_url: "https://api.github.com/repos/preactjs/preact/languages",
    stargazers_url: "https://api.github.com/repos/preactjs/preact/stargazers",
    contributors_url:
      "https://api.github.com/repos/preactjs/preact/contributors",
    subscribers_url: "https://api.github.com/repos/preactjs/preact/subscribers",
    subscription_url:
      "https://api.github.com/repos/preactjs/preact/subscription",
    commits_url: "https://api.github.com/repos/preactjs/preact/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/preactjs/preact/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/preactjs/preact/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/preactjs/preact/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/preactjs/preact/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/preactjs/preact/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/preactjs/preact/merges",
    archive_url:
      "https://api.github.com/repos/preactjs/preact/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/preactjs/preact/downloads",
    issues_url: "https://api.github.com/repos/preactjs/preact/issues{/number}",
    pulls_url: "https://api.github.com/repos/preactjs/preact/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/preactjs/preact/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/preactjs/preact/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/preactjs/preact/labels{/name}",
    releases_url: "https://api.github.com/repos/preactjs/preact/releases{/id}",
    deployments_url: "https://api.github.com/repos/preactjs/preact/deployments",
    created_at: "2015-09-11T02:40:18Z",
    updated_at: "2023-08-29T16:38:57Z",
    pushed_at: "2023-08-29T20:13:48Z",
    git_url: "git://github.com/preactjs/preact.git",
    ssh_url: "git@github.com:preactjs/preact.git",
    clone_url: "https://github.com/preactjs/preact.git",
    svn_url: "https://github.com/preactjs/preact",
    homepage: "https://preactjs.com",
    size: 15131,
    stargazers_count: 34936,
    watchers_count: 34936,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 1937,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 247,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "components",
      "dom",
      "jsx",
      "preact",
      "react",
      "vdom",
      "virtual-dom",
    ],
    visibility: "public",
    forks: 1937,
    open_issues: 247,
    watchers: 34936,
    default_branch: "main",
    score: 1,
  },
  {
    id: 101394335,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDEzOTQzMzU=",
    name: "ant-design-pro",
    full_name: "ant-design/ant-design-pro",
    private: false,
    owner: {
      login: "ant-design",
      id: 12101536,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEyMTAxNTM2",
      avatar_url: "https://avatars.githubusercontent.com/u/12101536?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ant-design",
      html_url: "https://github.com/ant-design",
      followers_url: "https://api.github.com/users/ant-design/followers",
      following_url:
        "https://api.github.com/users/ant-design/following{/other_user}",
      gists_url: "https://api.github.com/users/ant-design/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ant-design/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ant-design/subscriptions",
      organizations_url: "https://api.github.com/users/ant-design/orgs",
      repos_url: "https://api.github.com/users/ant-design/repos",
      events_url: "https://api.github.com/users/ant-design/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ant-design/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/ant-design/ant-design-pro",
    description: "👨🏻‍💻👩🏻‍💻 Use Ant Design like a Pro!",
    fork: false,
    url: "https://api.github.com/repos/ant-design/ant-design-pro",
    forks_url: "https://api.github.com/repos/ant-design/ant-design-pro/forks",
    keys_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ant-design/ant-design-pro/teams",
    hooks_url: "https://api.github.com/repos/ant-design/ant-design-pro/hooks",
    issue_events_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/issues/events{/number}",
    events_url: "https://api.github.com/repos/ant-design/ant-design-pro/events",
    assignees_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/branches{/branch}",
    tags_url: "https://api.github.com/repos/ant-design/ant-design-pro/tags",
    blobs_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/languages",
    stargazers_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/stargazers",
    contributors_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/contributors",
    subscribers_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/subscribers",
    subscription_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/subscription",
    commits_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ant-design/ant-design-pro/merges",
    archive_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/downloads",
    issues_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ant-design/ant-design-pro/deployments",
    created_at: "2017-08-25T10:40:44Z",
    updated_at: "2023-08-29T19:31:39Z",
    pushed_at: "2023-08-29T12:16:07Z",
    git_url: "git://github.com/ant-design/ant-design-pro.git",
    ssh_url: "git@github.com:ant-design/ant-design-pro.git",
    clone_url: "https://github.com/ant-design/ant-design-pro.git",
    svn_url: "https://github.com/ant-design/ant-design-pro",
    homepage: "https://pro.ant.design",
    size: 7770,
    stargazers_count: 34778,
    watchers_count: 34778,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 7994,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 361,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: true,
    web_commit_signoff_required: false,
    topics: [
      "admin",
      "ant-design",
      "antd",
      "antv",
      "boilerplate",
      "dashboard",
      "enterprise",
      "react",
      "umi",
    ],
    visibility: "public",
    forks: 7994,
    open_issues: 361,
    watchers: 34778,
    default_branch: "master",
    score: 1,
  },
  {
    id: 180328715,
    node_id: "MDEwOlJlcG9zaXRvcnkxODAzMjg3MTU=",
    name: "zustand",
    full_name: "pmndrs/zustand",
    private: false,
    owner: {
      login: "pmndrs",
      id: 45790596,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ1NzkwNTk2",
      avatar_url: "https://avatars.githubusercontent.com/u/45790596?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/pmndrs",
      html_url: "https://github.com/pmndrs",
      followers_url: "https://api.github.com/users/pmndrs/followers",
      following_url:
        "https://api.github.com/users/pmndrs/following{/other_user}",
      gists_url: "https://api.github.com/users/pmndrs/gists{/gist_id}",
      starred_url: "https://api.github.com/users/pmndrs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/pmndrs/subscriptions",
      organizations_url: "https://api.github.com/users/pmndrs/orgs",
      repos_url: "https://api.github.com/users/pmndrs/repos",
      events_url: "https://api.github.com/users/pmndrs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/pmndrs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/pmndrs/zustand",
    description: "🐻 Bear necessities for state management in React",
    fork: false,
    url: "https://api.github.com/repos/pmndrs/zustand",
    forks_url: "https://api.github.com/repos/pmndrs/zustand/forks",
    keys_url: "https://api.github.com/repos/pmndrs/zustand/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/pmndrs/zustand/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/pmndrs/zustand/teams",
    hooks_url: "https://api.github.com/repos/pmndrs/zustand/hooks",
    issue_events_url:
      "https://api.github.com/repos/pmndrs/zustand/issues/events{/number}",
    events_url: "https://api.github.com/repos/pmndrs/zustand/events",
    assignees_url:
      "https://api.github.com/repos/pmndrs/zustand/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/pmndrs/zustand/branches{/branch}",
    tags_url: "https://api.github.com/repos/pmndrs/zustand/tags",
    blobs_url: "https://api.github.com/repos/pmndrs/zustand/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/pmndrs/zustand/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/pmndrs/zustand/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/pmndrs/zustand/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/pmndrs/zustand/statuses/{sha}",
    languages_url: "https://api.github.com/repos/pmndrs/zustand/languages",
    stargazers_url: "https://api.github.com/repos/pmndrs/zustand/stargazers",
    contributors_url:
      "https://api.github.com/repos/pmndrs/zustand/contributors",
    subscribers_url: "https://api.github.com/repos/pmndrs/zustand/subscribers",
    subscription_url:
      "https://api.github.com/repos/pmndrs/zustand/subscription",
    commits_url: "https://api.github.com/repos/pmndrs/zustand/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/pmndrs/zustand/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/pmndrs/zustand/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/pmndrs/zustand/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/pmndrs/zustand/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/pmndrs/zustand/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/pmndrs/zustand/merges",
    archive_url:
      "https://api.github.com/repos/pmndrs/zustand/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/pmndrs/zustand/downloads",
    issues_url: "https://api.github.com/repos/pmndrs/zustand/issues{/number}",
    pulls_url: "https://api.github.com/repos/pmndrs/zustand/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/pmndrs/zustand/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/pmndrs/zustand/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/pmndrs/zustand/labels{/name}",
    releases_url: "https://api.github.com/repos/pmndrs/zustand/releases{/id}",
    deployments_url: "https://api.github.com/repos/pmndrs/zustand/deployments",
    created_at: "2019-04-09T09:10:06Z",
    updated_at: "2023-08-29T23:58:35Z",
    pushed_at: "2023-08-28T22:27:58Z",
    git_url: "git://github.com/pmndrs/zustand.git",
    ssh_url: "git@github.com:pmndrs/zustand.git",
    clone_url: "https://github.com/pmndrs/zustand.git",
    svn_url: "https://github.com/pmndrs/zustand",
    homepage: "https://zustand-demo.pmnd.rs/",
    size: 6271,
    stargazers_count: 34526,
    watchers_count: 34526,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 1066,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1066,
    open_issues: 4,
    watchers: 34526,
    default_branch: "main",
    score: 1,
  },
  {
    id: 70198875,
    node_id: "MDEwOlJlcG9zaXRvcnk3MDE5ODg3NQ==",
    name: "lottie-android",
    full_name: "airbnb/lottie-android",
    private: false,
    owner: {
      login: "airbnb",
      id: 698437,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==",
      avatar_url: "https://avatars.githubusercontent.com/u/698437?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/airbnb",
      html_url: "https://github.com/airbnb",
      followers_url: "https://api.github.com/users/airbnb/followers",
      following_url:
        "https://api.github.com/users/airbnb/following{/other_user}",
      gists_url: "https://api.github.com/users/airbnb/gists{/gist_id}",
      starred_url: "https://api.github.com/users/airbnb/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/airbnb/subscriptions",
      organizations_url: "https://api.github.com/users/airbnb/orgs",
      repos_url: "https://api.github.com/users/airbnb/repos",
      events_url: "https://api.github.com/users/airbnb/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/airbnb/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/airbnb/lottie-android",
    description:
      "Render After Effects animations natively on Android and iOS, Web, and React Native",
    fork: false,
    url: "https://api.github.com/repos/airbnb/lottie-android",
    forks_url: "https://api.github.com/repos/airbnb/lottie-android/forks",
    keys_url:
      "https://api.github.com/repos/airbnb/lottie-android/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/airbnb/lottie-android/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/airbnb/lottie-android/teams",
    hooks_url: "https://api.github.com/repos/airbnb/lottie-android/hooks",
    issue_events_url:
      "https://api.github.com/repos/airbnb/lottie-android/issues/events{/number}",
    events_url: "https://api.github.com/repos/airbnb/lottie-android/events",
    assignees_url:
      "https://api.github.com/repos/airbnb/lottie-android/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/airbnb/lottie-android/branches{/branch}",
    tags_url: "https://api.github.com/repos/airbnb/lottie-android/tags",
    blobs_url:
      "https://api.github.com/repos/airbnb/lottie-android/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/airbnb/lottie-android/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/airbnb/lottie-android/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/airbnb/lottie-android/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/airbnb/lottie-android/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/airbnb/lottie-android/languages",
    stargazers_url:
      "https://api.github.com/repos/airbnb/lottie-android/stargazers",
    contributors_url:
      "https://api.github.com/repos/airbnb/lottie-android/contributors",
    subscribers_url:
      "https://api.github.com/repos/airbnb/lottie-android/subscribers",
    subscription_url:
      "https://api.github.com/repos/airbnb/lottie-android/subscription",
    commits_url:
      "https://api.github.com/repos/airbnb/lottie-android/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/airbnb/lottie-android/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/airbnb/lottie-android/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/airbnb/lottie-android/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/airbnb/lottie-android/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/airbnb/lottie-android/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/airbnb/lottie-android/merges",
    archive_url:
      "https://api.github.com/repos/airbnb/lottie-android/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/airbnb/lottie-android/downloads",
    issues_url:
      "https://api.github.com/repos/airbnb/lottie-android/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/airbnb/lottie-android/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/airbnb/lottie-android/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/airbnb/lottie-android/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/airbnb/lottie-android/labels{/name}",
    releases_url:
      "https://api.github.com/repos/airbnb/lottie-android/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/airbnb/lottie-android/deployments",
    created_at: "2016-10-06T22:42:42Z",
    updated_at: "2023-08-29T08:54:18Z",
    pushed_at: "2023-08-19T20:59:51Z",
    git_url: "git://github.com/airbnb/lottie-android.git",
    ssh_url: "git@github.com:airbnb/lottie-android.git",
    clone_url: "https://github.com/airbnb/lottie-android.git",
    svn_url: "https://github.com/airbnb/lottie-android",
    homepage: "http://airbnb.io/lottie/",
    size: 136550,
    stargazers_count: 34199,
    watchers_count: 34199,
    language: "Java",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 5378,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 39,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["after-effects", "airbnb", "android", "animation", "lottie"],
    visibility: "public",
    forks: 5378,
    open_issues: 39,
    watchers: 34199,
    default_branch: "master",
    score: 1,
  },
  {
    id: 202890778,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDI4OTA3Nzg=",
    name: "chakra-ui",
    full_name: "chakra-ui/chakra-ui",
    private: false,
    owner: {
      login: "chakra-ui",
      id: 54212428,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjU0MjEyNDI4",
      avatar_url: "https://avatars.githubusercontent.com/u/54212428?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chakra-ui",
      html_url: "https://github.com/chakra-ui",
      followers_url: "https://api.github.com/users/chakra-ui/followers",
      following_url:
        "https://api.github.com/users/chakra-ui/following{/other_user}",
      gists_url: "https://api.github.com/users/chakra-ui/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chakra-ui/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/chakra-ui/subscriptions",
      organizations_url: "https://api.github.com/users/chakra-ui/orgs",
      repos_url: "https://api.github.com/users/chakra-ui/repos",
      events_url: "https://api.github.com/users/chakra-ui/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chakra-ui/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/chakra-ui/chakra-ui",
    description:
      "⚡️ Simple, Modular & Accessible UI Components for your React Applications",
    fork: false,
    url: "https://api.github.com/repos/chakra-ui/chakra-ui",
    forks_url: "https://api.github.com/repos/chakra-ui/chakra-ui/forks",
    keys_url: "https://api.github.com/repos/chakra-ui/chakra-ui/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/chakra-ui/chakra-ui/teams",
    hooks_url: "https://api.github.com/repos/chakra-ui/chakra-ui/hooks",
    issue_events_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/issues/events{/number}",
    events_url: "https://api.github.com/repos/chakra-ui/chakra-ui/events",
    assignees_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/branches{/branch}",
    tags_url: "https://api.github.com/repos/chakra-ui/chakra-ui/tags",
    blobs_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/statuses/{sha}",
    languages_url: "https://api.github.com/repos/chakra-ui/chakra-ui/languages",
    stargazers_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/stargazers",
    contributors_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/contributors",
    subscribers_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/subscribers",
    subscription_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/subscription",
    commits_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/chakra-ui/chakra-ui/merges",
    archive_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/chakra-ui/chakra-ui/downloads",
    issues_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/labels{/name}",
    releases_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/chakra-ui/chakra-ui/deployments",
    created_at: "2019-08-17T14:27:54Z",
    updated_at: "2023-08-29T20:59:29Z",
    pushed_at: "2023-08-28T05:11:07Z",
    git_url: "git://github.com/chakra-ui/chakra-ui.git",
    ssh_url: "git@github.com:chakra-ui/chakra-ui.git",
    clone_url: "https://github.com/chakra-ui/chakra-ui.git",
    svn_url: "https://github.com/chakra-ui/chakra-ui",
    homepage: "https://chakra-ui.com",
    size: 126006,
    stargazers_count: 34160,
    watchers_count: 34160,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 3013,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 197,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "a11y",
      "accessible",
      "chakra-ui",
      "dark-mode",
      "react",
      "react-components",
      "reactjs",
      "ui-components",
      "ui-library",
      "uikit",
      "wai-aria",
    ],
    visibility: "public",
    forks: 3013,
    open_issues: 197,
    watchers: 34160,
    default_branch: "main",
    score: 1,
  },
  {
    id: 6988020,
    node_id: "MDEwOlJlcG9zaXRvcnk2OTg4MDIw",
    name: "sheetjs",
    full_name: "SheetJS/sheetjs",
    private: false,
    owner: {
      login: "SheetJS",
      id: 5826089,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjU4MjYwODk=",
      avatar_url: "https://avatars.githubusercontent.com/u/5826089?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/SheetJS",
      html_url: "https://github.com/SheetJS",
      followers_url: "https://api.github.com/users/SheetJS/followers",
      following_url:
        "https://api.github.com/users/SheetJS/following{/other_user}",
      gists_url: "https://api.github.com/users/SheetJS/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/SheetJS/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/SheetJS/subscriptions",
      organizations_url: "https://api.github.com/users/SheetJS/orgs",
      repos_url: "https://api.github.com/users/SheetJS/repos",
      events_url: "https://api.github.com/users/SheetJS/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/SheetJS/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/SheetJS/sheetjs",
    description:
      "📗 SheetJS Spreadsheet Data Toolkit -- New home https://git.sheetjs.com/SheetJS/sheetjs",
    fork: false,
    url: "https://api.github.com/repos/SheetJS/sheetjs",
    forks_url: "https://api.github.com/repos/SheetJS/sheetjs/forks",
    keys_url: "https://api.github.com/repos/SheetJS/sheetjs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/SheetJS/sheetjs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/SheetJS/sheetjs/teams",
    hooks_url: "https://api.github.com/repos/SheetJS/sheetjs/hooks",
    issue_events_url:
      "https://api.github.com/repos/SheetJS/sheetjs/issues/events{/number}",
    events_url: "https://api.github.com/repos/SheetJS/sheetjs/events",
    assignees_url:
      "https://api.github.com/repos/SheetJS/sheetjs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/SheetJS/sheetjs/branches{/branch}",
    tags_url: "https://api.github.com/repos/SheetJS/sheetjs/tags",
    blobs_url: "https://api.github.com/repos/SheetJS/sheetjs/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/SheetJS/sheetjs/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/SheetJS/sheetjs/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/SheetJS/sheetjs/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/SheetJS/sheetjs/statuses/{sha}",
    languages_url: "https://api.github.com/repos/SheetJS/sheetjs/languages",
    stargazers_url: "https://api.github.com/repos/SheetJS/sheetjs/stargazers",
    contributors_url:
      "https://api.github.com/repos/SheetJS/sheetjs/contributors",
    subscribers_url: "https://api.github.com/repos/SheetJS/sheetjs/subscribers",
    subscription_url:
      "https://api.github.com/repos/SheetJS/sheetjs/subscription",
    commits_url: "https://api.github.com/repos/SheetJS/sheetjs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/SheetJS/sheetjs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/SheetJS/sheetjs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/SheetJS/sheetjs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/SheetJS/sheetjs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/SheetJS/sheetjs/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/SheetJS/sheetjs/merges",
    archive_url:
      "https://api.github.com/repos/SheetJS/sheetjs/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/SheetJS/sheetjs/downloads",
    issues_url: "https://api.github.com/repos/SheetJS/sheetjs/issues{/number}",
    pulls_url: "https://api.github.com/repos/SheetJS/sheetjs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/SheetJS/sheetjs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/SheetJS/sheetjs/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/SheetJS/sheetjs/labels{/name}",
    releases_url: "https://api.github.com/repos/SheetJS/sheetjs/releases{/id}",
    deployments_url: "https://api.github.com/repos/SheetJS/sheetjs/deployments",
    created_at: "2012-12-03T19:25:52Z",
    updated_at: "2023-08-29T20:30:21Z",
    pushed_at: "2023-08-04T16:07:42Z",
    git_url: "git://github.com/SheetJS/sheetjs.git",
    ssh_url: "git@github.com:SheetJS/sheetjs.git",
    clone_url: "https://github.com/SheetJS/sheetjs.git",
    svn_url: "https://github.com/SheetJS/sheetjs",
    homepage: "https://sheetjs.com/",
    size: 106471,
    stargazers_count: 33455,
    watchers_count: 33455,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 8070,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 130,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "bun",
      "csv",
      "data",
      "database",
      "deno",
      "excel",
      "grid",
      "html",
      "html5",
      "ios",
      "javascript",
      "json",
      "nodejs",
      "react",
      "spreadsheet",
      "table",
      "vue",
      "xlsx",
      "xml",
    ],
    visibility: "public",
    forks: 8070,
    open_issues: 130,
    watchers: 33455,
    default_branch: "github",
    score: 1,
  },
  {
    id: 32948863,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjk0ODg2Mw==",
    name: "awesome-react-native",
    full_name: "jondot/awesome-react-native",
    private: false,
    owner: {
      login: "jondot",
      id: 83390,
      node_id: "MDQ6VXNlcjgzMzkw",
      avatar_url: "https://avatars.githubusercontent.com/u/83390?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jondot",
      html_url: "https://github.com/jondot",
      followers_url: "https://api.github.com/users/jondot/followers",
      following_url:
        "https://api.github.com/users/jondot/following{/other_user}",
      gists_url: "https://api.github.com/users/jondot/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jondot/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jondot/subscriptions",
      organizations_url: "https://api.github.com/users/jondot/orgs",
      repos_url: "https://api.github.com/users/jondot/repos",
      events_url: "https://api.github.com/users/jondot/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jondot/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/jondot/awesome-react-native",
    description:
      "Awesome React Native components, news, tools, and learning material!",
    fork: false,
    url: "https://api.github.com/repos/jondot/awesome-react-native",
    forks_url: "https://api.github.com/repos/jondot/awesome-react-native/forks",
    keys_url:
      "https://api.github.com/repos/jondot/awesome-react-native/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jondot/awesome-react-native/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jondot/awesome-react-native/teams",
    hooks_url: "https://api.github.com/repos/jondot/awesome-react-native/hooks",
    issue_events_url:
      "https://api.github.com/repos/jondot/awesome-react-native/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/jondot/awesome-react-native/events",
    assignees_url:
      "https://api.github.com/repos/jondot/awesome-react-native/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jondot/awesome-react-native/branches{/branch}",
    tags_url: "https://api.github.com/repos/jondot/awesome-react-native/tags",
    blobs_url:
      "https://api.github.com/repos/jondot/awesome-react-native/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/jondot/awesome-react-native/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/jondot/awesome-react-native/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/jondot/awesome-react-native/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/jondot/awesome-react-native/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/jondot/awesome-react-native/languages",
    stargazers_url:
      "https://api.github.com/repos/jondot/awesome-react-native/stargazers",
    contributors_url:
      "https://api.github.com/repos/jondot/awesome-react-native/contributors",
    subscribers_url:
      "https://api.github.com/repos/jondot/awesome-react-native/subscribers",
    subscription_url:
      "https://api.github.com/repos/jondot/awesome-react-native/subscription",
    commits_url:
      "https://api.github.com/repos/jondot/awesome-react-native/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jondot/awesome-react-native/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jondot/awesome-react-native/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jondot/awesome-react-native/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/jondot/awesome-react-native/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jondot/awesome-react-native/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/jondot/awesome-react-native/merges",
    archive_url:
      "https://api.github.com/repos/jondot/awesome-react-native/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/jondot/awesome-react-native/downloads",
    issues_url:
      "https://api.github.com/repos/jondot/awesome-react-native/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/jondot/awesome-react-native/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jondot/awesome-react-native/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jondot/awesome-react-native/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/jondot/awesome-react-native/labels{/name}",
    releases_url:
      "https://api.github.com/repos/jondot/awesome-react-native/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/jondot/awesome-react-native/deployments",
    created_at: "2015-03-26T19:58:06Z",
    updated_at: "2023-08-29T16:47:28Z",
    pushed_at: "2023-06-26T03:24:09Z",
    git_url: "git://github.com/jondot/awesome-react-native.git",
    ssh_url: "git@github.com:jondot/awesome-react-native.git",
    clone_url: "https://github.com/jondot/awesome-react-native.git",
    svn_url: "https://github.com/jondot/awesome-react-native",
    homepage: "http://www.awesome-react-native.com",
    size: 5250,
    stargazers_count: 33245,
    watchers_count: 33245,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 4007,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 78,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["awesome-list", "mobile", "react", "react-native"],
    visibility: "public",
    forks: 4007,
    open_issues: 78,
    watchers: 33245,
    default_branch: "master",
    score: 1,
  },
  {
    id: 94367677,
    node_id: "MDEwOlJlcG9zaXRvcnk5NDM2NzY3Nw==",
    name: "formik",
    full_name: "jaredpalmer/formik",
    private: false,
    owner: {
      login: "jaredpalmer",
      id: 4060187,
      node_id: "MDQ6VXNlcjQwNjAxODc=",
      avatar_url: "https://avatars.githubusercontent.com/u/4060187?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jaredpalmer",
      html_url: "https://github.com/jaredpalmer",
      followers_url: "https://api.github.com/users/jaredpalmer/followers",
      following_url:
        "https://api.github.com/users/jaredpalmer/following{/other_user}",
      gists_url: "https://api.github.com/users/jaredpalmer/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jaredpalmer/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/jaredpalmer/subscriptions",
      organizations_url: "https://api.github.com/users/jaredpalmer/orgs",
      repos_url: "https://api.github.com/users/jaredpalmer/repos",
      events_url: "https://api.github.com/users/jaredpalmer/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jaredpalmer/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/jaredpalmer/formik",
    description: "Build forms in React, without the tears 😭 ",
    fork: false,
    url: "https://api.github.com/repos/jaredpalmer/formik",
    forks_url: "https://api.github.com/repos/jaredpalmer/formik/forks",
    keys_url: "https://api.github.com/repos/jaredpalmer/formik/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jaredpalmer/formik/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jaredpalmer/formik/teams",
    hooks_url: "https://api.github.com/repos/jaredpalmer/formik/hooks",
    issue_events_url:
      "https://api.github.com/repos/jaredpalmer/formik/issues/events{/number}",
    events_url: "https://api.github.com/repos/jaredpalmer/formik/events",
    assignees_url:
      "https://api.github.com/repos/jaredpalmer/formik/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jaredpalmer/formik/branches{/branch}",
    tags_url: "https://api.github.com/repos/jaredpalmer/formik/tags",
    blobs_url:
      "https://api.github.com/repos/jaredpalmer/formik/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/jaredpalmer/formik/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/jaredpalmer/formik/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/jaredpalmer/formik/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/jaredpalmer/formik/statuses/{sha}",
    languages_url: "https://api.github.com/repos/jaredpalmer/formik/languages",
    stargazers_url:
      "https://api.github.com/repos/jaredpalmer/formik/stargazers",
    contributors_url:
      "https://api.github.com/repos/jaredpalmer/formik/contributors",
    subscribers_url:
      "https://api.github.com/repos/jaredpalmer/formik/subscribers",
    subscription_url:
      "https://api.github.com/repos/jaredpalmer/formik/subscription",
    commits_url:
      "https://api.github.com/repos/jaredpalmer/formik/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jaredpalmer/formik/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jaredpalmer/formik/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jaredpalmer/formik/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/jaredpalmer/formik/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jaredpalmer/formik/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/jaredpalmer/formik/merges",
    archive_url:
      "https://api.github.com/repos/jaredpalmer/formik/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/jaredpalmer/formik/downloads",
    issues_url:
      "https://api.github.com/repos/jaredpalmer/formik/issues{/number}",
    pulls_url: "https://api.github.com/repos/jaredpalmer/formik/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jaredpalmer/formik/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jaredpalmer/formik/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/jaredpalmer/formik/labels{/name}",
    releases_url:
      "https://api.github.com/repos/jaredpalmer/formik/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/jaredpalmer/formik/deployments",
    created_at: "2017-06-14T19:50:59Z",
    updated_at: "2023-08-28T19:03:37Z",
    pushed_at: "2023-08-21T09:43:05Z",
    git_url: "git://github.com/jaredpalmer/formik.git",
    ssh_url: "git@github.com:jaredpalmer/formik.git",
    clone_url: "https://github.com/jaredpalmer/formik.git",
    svn_url: "https://github.com/jaredpalmer/formik",
    homepage: "https://formik.org",
    size: 15506,
    stargazers_count: 32766,
    watchers_count: 32766,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 2727,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 788,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "form",
      "formik",
      "forms",
      "higher-order-component",
      "hooks",
      "react",
      "react-hooks",
      "react-native",
      "render-props",
    ],
    visibility: "public",
    forks: 2727,
    open_issues: 788,
    watchers: 32766,
    default_branch: "main",
    score: 1,
  },
  {
    id: 135614069,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzU2MTQwNjk=",
    name: "reactjs-interview-questions",
    full_name: "sudheerj/reactjs-interview-questions",
    private: false,
    owner: {
      login: "sudheerj",
      id: 3127317,
      node_id: "MDQ6VXNlcjMxMjczMTc=",
      avatar_url: "https://avatars.githubusercontent.com/u/3127317?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sudheerj",
      html_url: "https://github.com/sudheerj",
      followers_url: "https://api.github.com/users/sudheerj/followers",
      following_url:
        "https://api.github.com/users/sudheerj/following{/other_user}",
      gists_url: "https://api.github.com/users/sudheerj/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sudheerj/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/sudheerj/subscriptions",
      organizations_url: "https://api.github.com/users/sudheerj/orgs",
      repos_url: "https://api.github.com/users/sudheerj/repos",
      events_url: "https://api.github.com/users/sudheerj/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sudheerj/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/sudheerj/reactjs-interview-questions",
    description:
      "List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!",
    fork: false,
    url: "https://api.github.com/repos/sudheerj/reactjs-interview-questions",
    forks_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/forks",
    keys_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/teams",
    hooks_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/hooks",
    issue_events_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/events",
    assignees_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/tags",
    blobs_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/languages",
    stargazers_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/stargazers",
    contributors_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/contributors",
    subscribers_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/subscribers",
    subscription_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/subscription",
    commits_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/merges",
    archive_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/downloads",
    issues_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/labels{/name}",
    releases_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/sudheerj/reactjs-interview-questions/deployments",
    created_at: "2018-05-31T17:17:01Z",
    updated_at: "2023-08-29T22:35:13Z",
    pushed_at: "2023-08-14T16:17:14Z",
    git_url: "git://github.com/sudheerj/reactjs-interview-questions.git",
    ssh_url: "git@github.com:sudheerj/reactjs-interview-questions.git",
    clone_url: "https://github.com/sudheerj/reactjs-interview-questions.git",
    svn_url: "https://github.com/sudheerj/reactjs-interview-questions",
    homepage: "",
    size: 1875,
    stargazers_count: 31503,
    watchers_count: 31503,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 7731,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 17,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "interview-preparation",
      "interview-questions",
      "javascript",
      "javascript-applications",
      "javascript-framework",
      "javascript-interview-questions",
      "react",
      "react-interview-questions",
      "react-native",
      "react-router",
      "react16",
      "reactjs",
      "redux",
    ],
    visibility: "public",
    forks: 7731,
    open_issues: 17,
    watchers: 31503,
    default_branch: "master",
    score: 1,
  },
  {
    id: 99761907,
    node_id: "MDEwOlJlcG9zaXRvcnk5OTc2MTkwNw==",
    name: "react-beautiful-dnd",
    full_name: "atlassian/react-beautiful-dnd",
    private: false,
    owner: {
      login: "atlassian",
      id: 168166,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE2ODE2Ng==",
      avatar_url: "https://avatars.githubusercontent.com/u/168166?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/atlassian",
      html_url: "https://github.com/atlassian",
      followers_url: "https://api.github.com/users/atlassian/followers",
      following_url:
        "https://api.github.com/users/atlassian/following{/other_user}",
      gists_url: "https://api.github.com/users/atlassian/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/atlassian/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/atlassian/subscriptions",
      organizations_url: "https://api.github.com/users/atlassian/orgs",
      repos_url: "https://api.github.com/users/atlassian/repos",
      events_url: "https://api.github.com/users/atlassian/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/atlassian/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/atlassian/react-beautiful-dnd",
    description: "Beautiful and accessible drag and drop for lists with React",
    fork: false,
    url: "https://api.github.com/repos/atlassian/react-beautiful-dnd",
    forks_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/forks",
    keys_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/teams",
    hooks_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/hooks",
    issue_events_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/events",
    assignees_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/branches{/branch}",
    tags_url: "https://api.github.com/repos/atlassian/react-beautiful-dnd/tags",
    blobs_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/languages",
    stargazers_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/stargazers",
    contributors_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/contributors",
    subscribers_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/subscribers",
    subscription_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/subscription",
    commits_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/merges",
    archive_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/downloads",
    issues_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/labels{/name}",
    releases_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/atlassian/react-beautiful-dnd/deployments",
    created_at: "2017-08-09T03:37:15Z",
    updated_at: "2023-08-29T07:17:31Z",
    pushed_at: "2023-08-27T11:38:00Z",
    git_url: "git://github.com/atlassian/react-beautiful-dnd.git",
    ssh_url: "git@github.com:atlassian/react-beautiful-dnd.git",
    clone_url: "https://github.com/atlassian/react-beautiful-dnd.git",
    svn_url: "https://github.com/atlassian/react-beautiful-dnd",
    homepage: "https://react-beautiful-dnd.netlify.com",
    size: 14778,
    stargazers_count: 30743,
    watchers_count: 30743,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 2455,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 588,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["dnd", "drag", "drag-and-drop", "react", "reordering", "sortable"],
    visibility: "public",
    forks: 2455,
    open_issues: 588,
    watchers: 30743,
    default_branch: "master",
    score: 1,
  },
  {
    id: 585146387,
    node_id: "R_kgDOIuCgEw",
    name: "ui",
    full_name: "shadcn-ui/ui",
    private: false,
    owner: {
      login: "shadcn-ui",
      id: 139895814,
      node_id: "O_kgDOCFakBg",
      avatar_url: "https://avatars.githubusercontent.com/u/139895814?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/shadcn-ui",
      html_url: "https://github.com/shadcn-ui",
      followers_url: "https://api.github.com/users/shadcn-ui/followers",
      following_url:
        "https://api.github.com/users/shadcn-ui/following{/other_user}",
      gists_url: "https://api.github.com/users/shadcn-ui/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/shadcn-ui/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/shadcn-ui/subscriptions",
      organizations_url: "https://api.github.com/users/shadcn-ui/orgs",
      repos_url: "https://api.github.com/users/shadcn-ui/repos",
      events_url: "https://api.github.com/users/shadcn-ui/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/shadcn-ui/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/shadcn-ui/ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    fork: false,
    url: "https://api.github.com/repos/shadcn-ui/ui",
    forks_url: "https://api.github.com/repos/shadcn-ui/ui/forks",
    keys_url: "https://api.github.com/repos/shadcn-ui/ui/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/shadcn-ui/ui/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/shadcn-ui/ui/teams",
    hooks_url: "https://api.github.com/repos/shadcn-ui/ui/hooks",
    issue_events_url:
      "https://api.github.com/repos/shadcn-ui/ui/issues/events{/number}",
    events_url: "https://api.github.com/repos/shadcn-ui/ui/events",
    assignees_url: "https://api.github.com/repos/shadcn-ui/ui/assignees{/user}",
    branches_url: "https://api.github.com/repos/shadcn-ui/ui/branches{/branch}",
    tags_url: "https://api.github.com/repos/shadcn-ui/ui/tags",
    blobs_url: "https://api.github.com/repos/shadcn-ui/ui/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/shadcn-ui/ui/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/shadcn-ui/ui/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/shadcn-ui/ui/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/shadcn-ui/ui/statuses/{sha}",
    languages_url: "https://api.github.com/repos/shadcn-ui/ui/languages",
    stargazers_url: "https://api.github.com/repos/shadcn-ui/ui/stargazers",
    contributors_url: "https://api.github.com/repos/shadcn-ui/ui/contributors",
    subscribers_url: "https://api.github.com/repos/shadcn-ui/ui/subscribers",
    subscription_url: "https://api.github.com/repos/shadcn-ui/ui/subscription",
    commits_url: "https://api.github.com/repos/shadcn-ui/ui/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/shadcn-ui/ui/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/shadcn-ui/ui/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/shadcn-ui/ui/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/shadcn-ui/ui/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/shadcn-ui/ui/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/shadcn-ui/ui/merges",
    archive_url:
      "https://api.github.com/repos/shadcn-ui/ui/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/shadcn-ui/ui/downloads",
    issues_url: "https://api.github.com/repos/shadcn-ui/ui/issues{/number}",
    pulls_url: "https://api.github.com/repos/shadcn-ui/ui/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/shadcn-ui/ui/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/shadcn-ui/ui/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/shadcn-ui/ui/labels{/name}",
    releases_url: "https://api.github.com/repos/shadcn-ui/ui/releases{/id}",
    deployments_url: "https://api.github.com/repos/shadcn-ui/ui/deployments",
    created_at: "2023-01-04T12:43:27Z",
    updated_at: "2023-08-29T23:59:23Z",
    pushed_at: "2023-08-29T16:53:30Z",
    git_url: "git://github.com/shadcn-ui/ui.git",
    ssh_url: "git@github.com:shadcn-ui/ui.git",
    clone_url: "https://github.com/shadcn-ui/ui.git",
    svn_url: "https://github.com/shadcn-ui/ui",
    homepage: "https://ui.shadcn.com",
    size: 7286,
    stargazers_count: 29249,
    watchers_count: 29249,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1423,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 665,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["components", "nextjs", "radix-ui", "react", "tailwindcss", "ui"],
    visibility: "public",
    forks: 1423,
    open_issues: 665,
    watchers: 29249,
    default_branch: "main",
    score: 1,
  },
  {
    id: 30969188,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDk2OTE4OA==",
    name: "react-boilerplate",
    full_name: "react-boilerplate/react-boilerplate",
    private: false,
    owner: {
      login: "react-boilerplate",
      id: 25323389,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjI1MzIzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/25323389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/react-boilerplate",
      html_url: "https://github.com/react-boilerplate",
      followers_url: "https://api.github.com/users/react-boilerplate/followers",
      following_url:
        "https://api.github.com/users/react-boilerplate/following{/other_user}",
      gists_url:
        "https://api.github.com/users/react-boilerplate/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/react-boilerplate/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/react-boilerplate/subscriptions",
      organizations_url: "https://api.github.com/users/react-boilerplate/orgs",
      repos_url: "https://api.github.com/users/react-boilerplate/repos",
      events_url:
        "https://api.github.com/users/react-boilerplate/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/react-boilerplate/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/react-boilerplate/react-boilerplate",
    description:
      ":fire: A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.",
    fork: false,
    url: "https://api.github.com/repos/react-boilerplate/react-boilerplate",
    forks_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/forks",
    keys_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/teams",
    hooks_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/hooks",
    issue_events_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/events",
    assignees_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/tags",
    blobs_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/languages",
    stargazers_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/stargazers",
    contributors_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/contributors",
    subscribers_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/subscribers",
    subscription_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/subscription",
    commits_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/merges",
    archive_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/downloads",
    issues_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/labels{/name}",
    releases_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/react-boilerplate/react-boilerplate/deployments",
    created_at: "2015-02-18T14:36:32Z",
    updated_at: "2023-08-29T23:14:29Z",
    pushed_at: "2023-03-23T21:35:09Z",
    git_url: "git://github.com/react-boilerplate/react-boilerplate.git",
    ssh_url: "git@github.com:react-boilerplate/react-boilerplate.git",
    clone_url: "https://github.com/react-boilerplate/react-boilerplate.git",
    svn_url: "https://github.com/react-boilerplate/react-boilerplate",
    homepage: "https://www.reactboilerplate.com",
    size: 8943,
    stargazers_count: 29232,
    watchers_count: 29232,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 6201,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 121,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: true,
    web_commit_signoff_required: false,
    topics: [
      "i18n",
      "immer",
      "offline-first",
      "react",
      "react-boilerplate",
      "redux",
      "redux-saga",
      "scaffolding",
      "styled-components",
      "webpack4",
    ],
    visibility: "public",
    forks: 6201,
    open_issues: 121,
    watchers: 29232,
    default_branch: "master",
    score: 1,
  },
  {
    id: 31085130,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTA4NTEzMA==",
    name: "lottie-web",
    full_name: "airbnb/lottie-web",
    private: false,
    owner: {
      login: "airbnb",
      id: 698437,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==",
      avatar_url: "https://avatars.githubusercontent.com/u/698437?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/airbnb",
      html_url: "https://github.com/airbnb",
      followers_url: "https://api.github.com/users/airbnb/followers",
      following_url:
        "https://api.github.com/users/airbnb/following{/other_user}",
      gists_url: "https://api.github.com/users/airbnb/gists{/gist_id}",
      starred_url: "https://api.github.com/users/airbnb/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/airbnb/subscriptions",
      organizations_url: "https://api.github.com/users/airbnb/orgs",
      repos_url: "https://api.github.com/users/airbnb/repos",
      events_url: "https://api.github.com/users/airbnb/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/airbnb/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/airbnb/lottie-web",
    description:
      "Render After Effects animations natively on Web, Android and iOS, and React Native. http://airbnb.io/lottie/",
    fork: false,
    url: "https://api.github.com/repos/airbnb/lottie-web",
    forks_url: "https://api.github.com/repos/airbnb/lottie-web/forks",
    keys_url: "https://api.github.com/repos/airbnb/lottie-web/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/airbnb/lottie-web/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/airbnb/lottie-web/teams",
    hooks_url: "https://api.github.com/repos/airbnb/lottie-web/hooks",
    issue_events_url:
      "https://api.github.com/repos/airbnb/lottie-web/issues/events{/number}",
    events_url: "https://api.github.com/repos/airbnb/lottie-web/events",
    assignees_url:
      "https://api.github.com/repos/airbnb/lottie-web/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/airbnb/lottie-web/branches{/branch}",
    tags_url: "https://api.github.com/repos/airbnb/lottie-web/tags",
    blobs_url: "https://api.github.com/repos/airbnb/lottie-web/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/airbnb/lottie-web/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/airbnb/lottie-web/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/airbnb/lottie-web/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/airbnb/lottie-web/statuses/{sha}",
    languages_url: "https://api.github.com/repos/airbnb/lottie-web/languages",
    stargazers_url: "https://api.github.com/repos/airbnb/lottie-web/stargazers",
    contributors_url:
      "https://api.github.com/repos/airbnb/lottie-web/contributors",
    subscribers_url:
      "https://api.github.com/repos/airbnb/lottie-web/subscribers",
    subscription_url:
      "https://api.github.com/repos/airbnb/lottie-web/subscription",
    commits_url: "https://api.github.com/repos/airbnb/lottie-web/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/airbnb/lottie-web/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/airbnb/lottie-web/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/airbnb/lottie-web/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/airbnb/lottie-web/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/airbnb/lottie-web/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/airbnb/lottie-web/merges",
    archive_url:
      "https://api.github.com/repos/airbnb/lottie-web/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/airbnb/lottie-web/downloads",
    issues_url:
      "https://api.github.com/repos/airbnb/lottie-web/issues{/number}",
    pulls_url: "https://api.github.com/repos/airbnb/lottie-web/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/airbnb/lottie-web/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/airbnb/lottie-web/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/airbnb/lottie-web/labels{/name}",
    releases_url:
      "https://api.github.com/repos/airbnb/lottie-web/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/airbnb/lottie-web/deployments",
    created_at: "2015-02-20T21:02:59Z",
    updated_at: "2023-08-29T12:20:18Z",
    pushed_at: "2023-08-13T23:04:12Z",
    git_url: "git://github.com/airbnb/lottie-web.git",
    ssh_url: "git@github.com:airbnb/lottie-web.git",
    clone_url: "https://github.com/airbnb/lottie-web.git",
    svn_url: "https://github.com/airbnb/lottie-web",
    homepage: "",
    size: 411088,
    stargazers_count: 28839,
    watchers_count: 28839,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2858,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 720,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2858,
    open_issues: 720,
    watchers: 28839,
    default_branch: "master",
    score: 1,
  },
  {
    id: 275993885,
    node_id: "MDEwOlJlcG9zaXRvcnkyNzU5OTM4ODU=",
    name: "appsmith",
    full_name: "appsmithorg/appsmith",
    private: false,
    owner: {
      login: "appsmithorg",
      id: 67620218,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY3NjIwMjE4",
      avatar_url: "https://avatars.githubusercontent.com/u/67620218?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/appsmithorg",
      html_url: "https://github.com/appsmithorg",
      followers_url: "https://api.github.com/users/appsmithorg/followers",
      following_url:
        "https://api.github.com/users/appsmithorg/following{/other_user}",
      gists_url: "https://api.github.com/users/appsmithorg/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/appsmithorg/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/appsmithorg/subscriptions",
      organizations_url: "https://api.github.com/users/appsmithorg/orgs",
      repos_url: "https://api.github.com/users/appsmithorg/repos",
      events_url: "https://api.github.com/users/appsmithorg/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/appsmithorg/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/appsmithorg/appsmith",
    description:
      "Framework to build admin panels, internal tools, and dashboards. Integrates with 15+ databases and any API.",
    fork: false,
    url: "https://api.github.com/repos/appsmithorg/appsmith",
    forks_url: "https://api.github.com/repos/appsmithorg/appsmith/forks",
    keys_url: "https://api.github.com/repos/appsmithorg/appsmith/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/appsmithorg/appsmith/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/appsmithorg/appsmith/teams",
    hooks_url: "https://api.github.com/repos/appsmithorg/appsmith/hooks",
    issue_events_url:
      "https://api.github.com/repos/appsmithorg/appsmith/issues/events{/number}",
    events_url: "https://api.github.com/repos/appsmithorg/appsmith/events",
    assignees_url:
      "https://api.github.com/repos/appsmithorg/appsmith/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/appsmithorg/appsmith/branches{/branch}",
    tags_url: "https://api.github.com/repos/appsmithorg/appsmith/tags",
    blobs_url:
      "https://api.github.com/repos/appsmithorg/appsmith/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/appsmithorg/appsmith/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/appsmithorg/appsmith/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/appsmithorg/appsmith/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/appsmithorg/appsmith/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/appsmithorg/appsmith/languages",
    stargazers_url:
      "https://api.github.com/repos/appsmithorg/appsmith/stargazers",
    contributors_url:
      "https://api.github.com/repos/appsmithorg/appsmith/contributors",
    subscribers_url:
      "https://api.github.com/repos/appsmithorg/appsmith/subscribers",
    subscription_url:
      "https://api.github.com/repos/appsmithorg/appsmith/subscription",
    commits_url:
      "https://api.github.com/repos/appsmithorg/appsmith/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/appsmithorg/appsmith/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/appsmithorg/appsmith/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/appsmithorg/appsmith/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/appsmithorg/appsmith/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/appsmithorg/appsmith/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/appsmithorg/appsmith/merges",
    archive_url:
      "https://api.github.com/repos/appsmithorg/appsmith/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/appsmithorg/appsmith/downloads",
    issues_url:
      "https://api.github.com/repos/appsmithorg/appsmith/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/appsmithorg/appsmith/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/appsmithorg/appsmith/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/appsmithorg/appsmith/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/appsmithorg/appsmith/labels{/name}",
    releases_url:
      "https://api.github.com/repos/appsmithorg/appsmith/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/appsmithorg/appsmith/deployments",
    created_at: "2020-06-30T04:07:36Z",
    updated_at: "2023-08-29T22:48:25Z",
    pushed_at: "2023-08-29T20:07:31Z",
    git_url: "git://github.com/appsmithorg/appsmith.git",
    ssh_url: "git@github.com:appsmithorg/appsmith.git",
    clone_url: "https://github.com/appsmithorg/appsmith.git",
    svn_url: "https://github.com/appsmithorg/appsmith",
    homepage: "https://www.appsmith.com",
    size: 514543,
    stargazers_count: 28835,
    watchers_count: 28835,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 2951,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 3620,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "admin-dashboard",
      "admin-panels",
      "app-builder",
      "automation",
      "crud",
      "custom-internal",
      "developer-tools",
      "gui",
      "gui-application",
      "hacktoberfest",
      "internal-tools",
      "java",
      "javascript",
      "low-code",
      "low-code-framework",
      "react",
      "self-hosted",
      "typescript",
      "webdevelopment",
      "workflows",
    ],
    visibility: "public",
    forks: 2951,
    open_issues: 3620,
    watchers: 28835,
    default_branch: "release",
    score: 1,
  },
  {
    id: 280557054,
    node_id: "MDEwOlJlcG9zaXRvcnkyODA1NTcwNTQ=",
    name: "trpc",
    full_name: "trpc/trpc",
    private: false,
    owner: {
      login: "trpc",
      id: 78011399,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc4MDExMzk5",
      avatar_url: "https://avatars.githubusercontent.com/u/78011399?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/trpc",
      html_url: "https://github.com/trpc",
      followers_url: "https://api.github.com/users/trpc/followers",
      following_url: "https://api.github.com/users/trpc/following{/other_user}",
      gists_url: "https://api.github.com/users/trpc/gists{/gist_id}",
      starred_url: "https://api.github.com/users/trpc/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/trpc/subscriptions",
      organizations_url: "https://api.github.com/users/trpc/orgs",
      repos_url: "https://api.github.com/users/trpc/repos",
      events_url: "https://api.github.com/users/trpc/events{/privacy}",
      received_events_url: "https://api.github.com/users/trpc/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/trpc/trpc",
    description:
      "🧙‍♀️  Move Fast and Break Nothing. End-to-end typesafe APIs made easy. ",
    fork: false,
    url: "https://api.github.com/repos/trpc/trpc",
    forks_url: "https://api.github.com/repos/trpc/trpc/forks",
    keys_url: "https://api.github.com/repos/trpc/trpc/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/trpc/trpc/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/trpc/trpc/teams",
    hooks_url: "https://api.github.com/repos/trpc/trpc/hooks",
    issue_events_url:
      "https://api.github.com/repos/trpc/trpc/issues/events{/number}",
    events_url: "https://api.github.com/repos/trpc/trpc/events",
    assignees_url: "https://api.github.com/repos/trpc/trpc/assignees{/user}",
    branches_url: "https://api.github.com/repos/trpc/trpc/branches{/branch}",
    tags_url: "https://api.github.com/repos/trpc/trpc/tags",
    blobs_url: "https://api.github.com/repos/trpc/trpc/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/trpc/trpc/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/trpc/trpc/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/trpc/trpc/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/trpc/trpc/statuses/{sha}",
    languages_url: "https://api.github.com/repos/trpc/trpc/languages",
    stargazers_url: "https://api.github.com/repos/trpc/trpc/stargazers",
    contributors_url: "https://api.github.com/repos/trpc/trpc/contributors",
    subscribers_url: "https://api.github.com/repos/trpc/trpc/subscribers",
    subscription_url: "https://api.github.com/repos/trpc/trpc/subscription",
    commits_url: "https://api.github.com/repos/trpc/trpc/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/trpc/trpc/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/trpc/trpc/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/trpc/trpc/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/trpc/trpc/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/trpc/trpc/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/trpc/trpc/merges",
    archive_url:
      "https://api.github.com/repos/trpc/trpc/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/trpc/trpc/downloads",
    issues_url: "https://api.github.com/repos/trpc/trpc/issues{/number}",
    pulls_url: "https://api.github.com/repos/trpc/trpc/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/trpc/trpc/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/trpc/trpc/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/trpc/trpc/labels{/name}",
    releases_url: "https://api.github.com/repos/trpc/trpc/releases{/id}",
    deployments_url: "https://api.github.com/repos/trpc/trpc/deployments",
    created_at: "2020-07-18T01:17:11Z",
    updated_at: "2023-08-29T23:24:29Z",
    pushed_at: "2023-08-28T06:13:40Z",
    git_url: "git://github.com/trpc/trpc.git",
    ssh_url: "git@github.com:trpc/trpc.git",
    clone_url: "https://github.com/trpc/trpc.git",
    svn_url: "https://github.com/trpc/trpc",
    homepage: "https://tRPC.io",
    size: 32911,
    stargazers_count: 28333,
    watchers_count: 28333,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 983,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 100,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["api", "next", "nextjs", "prisma", "react", "typescript"],
    visibility: "public",
    forks: 983,
    open_issues: 100,
    watchers: 28333,
    default_branch: "main",
    score: 1,
  },
  {
    id: 1844251,
    node_id: "MDEwOlJlcG9zaXRvcnkxODQ0MjUx",
    name: "todomvc",
    full_name: "tastejs/todomvc",
    private: false,
    owner: {
      login: "tastejs",
      id: 1733746,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE3MzM3NDY=",
      avatar_url: "https://avatars.githubusercontent.com/u/1733746?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tastejs",
      html_url: "https://github.com/tastejs",
      followers_url: "https://api.github.com/users/tastejs/followers",
      following_url:
        "https://api.github.com/users/tastejs/following{/other_user}",
      gists_url: "https://api.github.com/users/tastejs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tastejs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tastejs/subscriptions",
      organizations_url: "https://api.github.com/users/tastejs/orgs",
      repos_url: "https://api.github.com/users/tastejs/repos",
      events_url: "https://api.github.com/users/tastejs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tastejs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/tastejs/todomvc",
    description:
      "Helping you select an MV* framework - Todo apps for React.js, Ember.js, Angular, and many more",
    fork: false,
    url: "https://api.github.com/repos/tastejs/todomvc",
    forks_url: "https://api.github.com/repos/tastejs/todomvc/forks",
    keys_url: "https://api.github.com/repos/tastejs/todomvc/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tastejs/todomvc/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tastejs/todomvc/teams",
    hooks_url: "https://api.github.com/repos/tastejs/todomvc/hooks",
    issue_events_url:
      "https://api.github.com/repos/tastejs/todomvc/issues/events{/number}",
    events_url: "https://api.github.com/repos/tastejs/todomvc/events",
    assignees_url:
      "https://api.github.com/repos/tastejs/todomvc/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tastejs/todomvc/branches{/branch}",
    tags_url: "https://api.github.com/repos/tastejs/todomvc/tags",
    blobs_url: "https://api.github.com/repos/tastejs/todomvc/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/tastejs/todomvc/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/tastejs/todomvc/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/tastejs/todomvc/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/tastejs/todomvc/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tastejs/todomvc/languages",
    stargazers_url: "https://api.github.com/repos/tastejs/todomvc/stargazers",
    contributors_url:
      "https://api.github.com/repos/tastejs/todomvc/contributors",
    subscribers_url: "https://api.github.com/repos/tastejs/todomvc/subscribers",
    subscription_url:
      "https://api.github.com/repos/tastejs/todomvc/subscription",
    commits_url: "https://api.github.com/repos/tastejs/todomvc/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tastejs/todomvc/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tastejs/todomvc/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tastejs/todomvc/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tastejs/todomvc/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tastejs/todomvc/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tastejs/todomvc/merges",
    archive_url:
      "https://api.github.com/repos/tastejs/todomvc/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tastejs/todomvc/downloads",
    issues_url: "https://api.github.com/repos/tastejs/todomvc/issues{/number}",
    pulls_url: "https://api.github.com/repos/tastejs/todomvc/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tastejs/todomvc/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tastejs/todomvc/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/tastejs/todomvc/labels{/name}",
    releases_url: "https://api.github.com/repos/tastejs/todomvc/releases{/id}",
    deployments_url: "https://api.github.com/repos/tastejs/todomvc/deployments",
    created_at: "2011-06-03T19:56:33Z",
    updated_at: "2023-08-29T14:09:00Z",
    pushed_at: "2023-07-15T10:46:43Z",
    git_url: "git://github.com/tastejs/todomvc.git",
    ssh_url: "git@github.com:tastejs/todomvc.git",
    clone_url: "https://github.com/tastejs/todomvc.git",
    svn_url: "https://github.com/tastejs/todomvc",
    homepage: "http://todomvc.com",
    size: 73004,
    stargazers_count: 28299,
    watchers_count: 28299,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 13933,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 194,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 13933,
    open_issues: 194,
    watchers: 28299,
    default_branch: "master",
    score: 1,
  },
  {
    id: 61412022,
    node_id: "MDEwOlJlcG9zaXRvcnk2MTQxMjAyMg==",
    name: "slate",
    full_name: "ianstormtaylor/slate",
    private: false,
    owner: {
      login: "ianstormtaylor",
      id: 311752,
      node_id: "MDQ6VXNlcjMxMTc1Mg==",
      avatar_url: "https://avatars.githubusercontent.com/u/311752?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ianstormtaylor",
      html_url: "https://github.com/ianstormtaylor",
      followers_url: "https://api.github.com/users/ianstormtaylor/followers",
      following_url:
        "https://api.github.com/users/ianstormtaylor/following{/other_user}",
      gists_url: "https://api.github.com/users/ianstormtaylor/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ianstormtaylor/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ianstormtaylor/subscriptions",
      organizations_url: "https://api.github.com/users/ianstormtaylor/orgs",
      repos_url: "https://api.github.com/users/ianstormtaylor/repos",
      events_url:
        "https://api.github.com/users/ianstormtaylor/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ianstormtaylor/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ianstormtaylor/slate",
    description:
      "A completely customizable framework for building rich text editors. (Currently in beta.)",
    fork: false,
    url: "https://api.github.com/repos/ianstormtaylor/slate",
    forks_url: "https://api.github.com/repos/ianstormtaylor/slate/forks",
    keys_url: "https://api.github.com/repos/ianstormtaylor/slate/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ianstormtaylor/slate/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ianstormtaylor/slate/teams",
    hooks_url: "https://api.github.com/repos/ianstormtaylor/slate/hooks",
    issue_events_url:
      "https://api.github.com/repos/ianstormtaylor/slate/issues/events{/number}",
    events_url: "https://api.github.com/repos/ianstormtaylor/slate/events",
    assignees_url:
      "https://api.github.com/repos/ianstormtaylor/slate/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ianstormtaylor/slate/branches{/branch}",
    tags_url: "https://api.github.com/repos/ianstormtaylor/slate/tags",
    blobs_url:
      "https://api.github.com/repos/ianstormtaylor/slate/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ianstormtaylor/slate/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ianstormtaylor/slate/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ianstormtaylor/slate/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ianstormtaylor/slate/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ianstormtaylor/slate/languages",
    stargazers_url:
      "https://api.github.com/repos/ianstormtaylor/slate/stargazers",
    contributors_url:
      "https://api.github.com/repos/ianstormtaylor/slate/contributors",
    subscribers_url:
      "https://api.github.com/repos/ianstormtaylor/slate/subscribers",
    subscription_url:
      "https://api.github.com/repos/ianstormtaylor/slate/subscription",
    commits_url:
      "https://api.github.com/repos/ianstormtaylor/slate/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ianstormtaylor/slate/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ianstormtaylor/slate/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ianstormtaylor/slate/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ianstormtaylor/slate/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ianstormtaylor/slate/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ianstormtaylor/slate/merges",
    archive_url:
      "https://api.github.com/repos/ianstormtaylor/slate/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ianstormtaylor/slate/downloads",
    issues_url:
      "https://api.github.com/repos/ianstormtaylor/slate/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ianstormtaylor/slate/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ianstormtaylor/slate/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ianstormtaylor/slate/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ianstormtaylor/slate/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ianstormtaylor/slate/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ianstormtaylor/slate/deployments",
    created_at: "2016-06-18T01:52:42Z",
    updated_at: "2023-08-29T15:39:32Z",
    pushed_at: "2023-08-29T12:06:09Z",
    git_url: "git://github.com/ianstormtaylor/slate.git",
    ssh_url: "git@github.com:ianstormtaylor/slate.git",
    clone_url: "https://github.com/ianstormtaylor/slate.git",
    svn_url: "https://github.com/ianstormtaylor/slate",
    homepage: "http://slatejs.org",
    size: 21403,
    stargazers_count: 27752,
    watchers_count: 27752,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 3196,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 612,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "browser",
      "editor",
      "framework",
      "javascript",
      "react",
      "rich-text",
      "slate",
      "text-editor",
    ],
    visibility: "public",
    forks: 3196,
    open_issues: 612,
    watchers: 27752,
    default_branch: "main",
    score: 1,
  },
  {
    id: 218115303,
    node_id: "MDEwOlJlcG9zaXRvcnkyMTgxMTUzMDM=",
    name: "swr",
    full_name: "vercel/swr",
    private: false,
    owner: {
      login: "vercel",
      id: 14985020,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/14985020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vercel",
      html_url: "https://github.com/vercel",
      followers_url: "https://api.github.com/users/vercel/followers",
      following_url:
        "https://api.github.com/users/vercel/following{/other_user}",
      gists_url: "https://api.github.com/users/vercel/gists{/gist_id}",
      starred_url: "https://api.github.com/users/vercel/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/vercel/subscriptions",
      organizations_url: "https://api.github.com/users/vercel/orgs",
      repos_url: "https://api.github.com/users/vercel/repos",
      events_url: "https://api.github.com/users/vercel/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vercel/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/vercel/swr",
    description: "React Hooks for Data Fetching",
    fork: false,
    url: "https://api.github.com/repos/vercel/swr",
    forks_url: "https://api.github.com/repos/vercel/swr/forks",
    keys_url: "https://api.github.com/repos/vercel/swr/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/vercel/swr/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/vercel/swr/teams",
    hooks_url: "https://api.github.com/repos/vercel/swr/hooks",
    issue_events_url:
      "https://api.github.com/repos/vercel/swr/issues/events{/number}",
    events_url: "https://api.github.com/repos/vercel/swr/events",
    assignees_url: "https://api.github.com/repos/vercel/swr/assignees{/user}",
    branches_url: "https://api.github.com/repos/vercel/swr/branches{/branch}",
    tags_url: "https://api.github.com/repos/vercel/swr/tags",
    blobs_url: "https://api.github.com/repos/vercel/swr/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/vercel/swr/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/vercel/swr/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/vercel/swr/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/vercel/swr/statuses/{sha}",
    languages_url: "https://api.github.com/repos/vercel/swr/languages",
    stargazers_url: "https://api.github.com/repos/vercel/swr/stargazers",
    contributors_url: "https://api.github.com/repos/vercel/swr/contributors",
    subscribers_url: "https://api.github.com/repos/vercel/swr/subscribers",
    subscription_url: "https://api.github.com/repos/vercel/swr/subscription",
    commits_url: "https://api.github.com/repos/vercel/swr/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/vercel/swr/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/vercel/swr/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/vercel/swr/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/vercel/swr/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/vercel/swr/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/vercel/swr/merges",
    archive_url:
      "https://api.github.com/repos/vercel/swr/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/vercel/swr/downloads",
    issues_url: "https://api.github.com/repos/vercel/swr/issues{/number}",
    pulls_url: "https://api.github.com/repos/vercel/swr/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/vercel/swr/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/vercel/swr/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/vercel/swr/labels{/name}",
    releases_url: "https://api.github.com/repos/vercel/swr/releases{/id}",
    deployments_url: "https://api.github.com/repos/vercel/swr/deployments",
    created_at: "2019-10-28T18:16:01Z",
    updated_at: "2023-08-29T20:17:42Z",
    pushed_at: "2023-08-27T12:32:46Z",
    git_url: "git://github.com/vercel/swr.git",
    ssh_url: "git@github.com:vercel/swr.git",
    clone_url: "https://github.com/vercel/swr.git",
    svn_url: "https://github.com/vercel/swr",
    homepage: "https://swr.vercel.app",
    size: 3429,
    stargazers_count: 27729,
    watchers_count: 27729,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1118,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 78,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cache",
      "data",
      "data-fetching",
      "fetch",
      "hook",
      "hooks",
      "nextjs",
      "react",
      "react-native",
      "stale-while-revalidate",
      "suspense",
      "swr",
      "vercel",
    ],
    visibility: "public",
    forks: 1118,
    open_issues: 78,
    watchers: 27729,
    default_branch: "main",
    score: 1,
  },
  {
    id: 32215970,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjIxNTk3MA==",
    name: "mobx",
    full_name: "mobxjs/mobx",
    private: false,
    owner: {
      login: "mobxjs",
      id: 17475736,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE3NDc1NzM2",
      avatar_url: "https://avatars.githubusercontent.com/u/17475736?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mobxjs",
      html_url: "https://github.com/mobxjs",
      followers_url: "https://api.github.com/users/mobxjs/followers",
      following_url:
        "https://api.github.com/users/mobxjs/following{/other_user}",
      gists_url: "https://api.github.com/users/mobxjs/gists{/gist_id}",
      starred_url: "https://api.github.com/users/mobxjs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mobxjs/subscriptions",
      organizations_url: "https://api.github.com/users/mobxjs/orgs",
      repos_url: "https://api.github.com/users/mobxjs/repos",
      events_url: "https://api.github.com/users/mobxjs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mobxjs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/mobxjs/mobx",
    description: "Simple, scalable state management.",
    fork: false,
    url: "https://api.github.com/repos/mobxjs/mobx",
    forks_url: "https://api.github.com/repos/mobxjs/mobx/forks",
    keys_url: "https://api.github.com/repos/mobxjs/mobx/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/mobxjs/mobx/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/mobxjs/mobx/teams",
    hooks_url: "https://api.github.com/repos/mobxjs/mobx/hooks",
    issue_events_url:
      "https://api.github.com/repos/mobxjs/mobx/issues/events{/number}",
    events_url: "https://api.github.com/repos/mobxjs/mobx/events",
    assignees_url: "https://api.github.com/repos/mobxjs/mobx/assignees{/user}",
    branches_url: "https://api.github.com/repos/mobxjs/mobx/branches{/branch}",
    tags_url: "https://api.github.com/repos/mobxjs/mobx/tags",
    blobs_url: "https://api.github.com/repos/mobxjs/mobx/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/mobxjs/mobx/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/mobxjs/mobx/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/mobxjs/mobx/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/mobxjs/mobx/statuses/{sha}",
    languages_url: "https://api.github.com/repos/mobxjs/mobx/languages",
    stargazers_url: "https://api.github.com/repos/mobxjs/mobx/stargazers",
    contributors_url: "https://api.github.com/repos/mobxjs/mobx/contributors",
    subscribers_url: "https://api.github.com/repos/mobxjs/mobx/subscribers",
    subscription_url: "https://api.github.com/repos/mobxjs/mobx/subscription",
    commits_url: "https://api.github.com/repos/mobxjs/mobx/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/mobxjs/mobx/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/mobxjs/mobx/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/mobxjs/mobx/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/mobxjs/mobx/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/mobxjs/mobx/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/mobxjs/mobx/merges",
    archive_url:
      "https://api.github.com/repos/mobxjs/mobx/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/mobxjs/mobx/downloads",
    issues_url: "https://api.github.com/repos/mobxjs/mobx/issues{/number}",
    pulls_url: "https://api.github.com/repos/mobxjs/mobx/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/mobxjs/mobx/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/mobxjs/mobx/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/mobxjs/mobx/labels{/name}",
    releases_url: "https://api.github.com/repos/mobxjs/mobx/releases{/id}",
    deployments_url: "https://api.github.com/repos/mobxjs/mobx/deployments",
    created_at: "2015-03-14T14:31:38Z",
    updated_at: "2023-08-29T08:55:50Z",
    pushed_at: "2023-08-29T18:23:39Z",
    git_url: "git://github.com/mobxjs/mobx.git",
    ssh_url: "git@github.com:mobxjs/mobx.git",
    clone_url: "https://github.com/mobxjs/mobx.git",
    svn_url: "https://github.com/mobxjs/mobx",
    homepage: "http://mobx.js.org",
    size: 19426,
    stargazers_count: 26685,
    watchers_count: 26685,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 1778,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 36,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "javascript",
      "mobx",
      "react",
      "reactive-programming",
      "typescript",
    ],
    visibility: "public",
    forks: 1778,
    open_issues: 36,
    watchers: 26685,
    default_branch: "main",
    score: 1,
  },
  {
    id: 23338716,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzMzODcxNg==",
    name: "react-select",
    full_name: "JedWatson/react-select",
    private: false,
    owner: {
      login: "JedWatson",
      id: 872310,
      node_id: "MDQ6VXNlcjg3MjMxMA==",
      avatar_url: "https://avatars.githubusercontent.com/u/872310?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/JedWatson",
      html_url: "https://github.com/JedWatson",
      followers_url: "https://api.github.com/users/JedWatson/followers",
      following_url:
        "https://api.github.com/users/JedWatson/following{/other_user}",
      gists_url: "https://api.github.com/users/JedWatson/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/JedWatson/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/JedWatson/subscriptions",
      organizations_url: "https://api.github.com/users/JedWatson/orgs",
      repos_url: "https://api.github.com/users/JedWatson/repos",
      events_url: "https://api.github.com/users/JedWatson/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/JedWatson/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/JedWatson/react-select",
    description: "The Select Component for React.js",
    fork: false,
    url: "https://api.github.com/repos/JedWatson/react-select",
    forks_url: "https://api.github.com/repos/JedWatson/react-select/forks",
    keys_url:
      "https://api.github.com/repos/JedWatson/react-select/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/JedWatson/react-select/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/JedWatson/react-select/teams",
    hooks_url: "https://api.github.com/repos/JedWatson/react-select/hooks",
    issue_events_url:
      "https://api.github.com/repos/JedWatson/react-select/issues/events{/number}",
    events_url: "https://api.github.com/repos/JedWatson/react-select/events",
    assignees_url:
      "https://api.github.com/repos/JedWatson/react-select/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/JedWatson/react-select/branches{/branch}",
    tags_url: "https://api.github.com/repos/JedWatson/react-select/tags",
    blobs_url:
      "https://api.github.com/repos/JedWatson/react-select/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/JedWatson/react-select/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/JedWatson/react-select/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/JedWatson/react-select/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/JedWatson/react-select/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/JedWatson/react-select/languages",
    stargazers_url:
      "https://api.github.com/repos/JedWatson/react-select/stargazers",
    contributors_url:
      "https://api.github.com/repos/JedWatson/react-select/contributors",
    subscribers_url:
      "https://api.github.com/repos/JedWatson/react-select/subscribers",
    subscription_url:
      "https://api.github.com/repos/JedWatson/react-select/subscription",
    commits_url:
      "https://api.github.com/repos/JedWatson/react-select/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/JedWatson/react-select/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/JedWatson/react-select/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/JedWatson/react-select/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/JedWatson/react-select/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/JedWatson/react-select/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/JedWatson/react-select/merges",
    archive_url:
      "https://api.github.com/repos/JedWatson/react-select/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/JedWatson/react-select/downloads",
    issues_url:
      "https://api.github.com/repos/JedWatson/react-select/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/JedWatson/react-select/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/JedWatson/react-select/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/JedWatson/react-select/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/JedWatson/react-select/labels{/name}",
    releases_url:
      "https://api.github.com/repos/JedWatson/react-select/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/JedWatson/react-select/deployments",
    created_at: "2014-08-26T04:27:45Z",
    updated_at: "2023-08-29T15:27:07Z",
    pushed_at: "2023-08-23T18:35:33Z",
    git_url: "git://github.com/JedWatson/react-select.git",
    ssh_url: "git@github.com:JedWatson/react-select.git",
    clone_url: "https://github.com/JedWatson/react-select.git",
    svn_url: "https://github.com/JedWatson/react-select",
    homepage: "https://react-select.com/",
    size: 19449,
    stargazers_count: 26521,
    watchers_count: 26521,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 4075,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 336,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 4075,
    open_issues: 336,
    watchers: 26521,
    default_branch: "master",
    score: 1,
  },
  {
    id: 124257233,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjQyNTcyMzM=",
    name: "react-spring",
    full_name: "pmndrs/react-spring",
    private: false,
    owner: {
      login: "pmndrs",
      id: 45790596,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ1NzkwNTk2",
      avatar_url: "https://avatars.githubusercontent.com/u/45790596?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/pmndrs",
      html_url: "https://github.com/pmndrs",
      followers_url: "https://api.github.com/users/pmndrs/followers",
      following_url:
        "https://api.github.com/users/pmndrs/following{/other_user}",
      gists_url: "https://api.github.com/users/pmndrs/gists{/gist_id}",
      starred_url: "https://api.github.com/users/pmndrs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/pmndrs/subscriptions",
      organizations_url: "https://api.github.com/users/pmndrs/orgs",
      repos_url: "https://api.github.com/users/pmndrs/repos",
      events_url: "https://api.github.com/users/pmndrs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/pmndrs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/pmndrs/react-spring",
    description: "✌️ A spring physics based React animation library",
    fork: false,
    url: "https://api.github.com/repos/pmndrs/react-spring",
    forks_url: "https://api.github.com/repos/pmndrs/react-spring/forks",
    keys_url: "https://api.github.com/repos/pmndrs/react-spring/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/pmndrs/react-spring/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/pmndrs/react-spring/teams",
    hooks_url: "https://api.github.com/repos/pmndrs/react-spring/hooks",
    issue_events_url:
      "https://api.github.com/repos/pmndrs/react-spring/issues/events{/number}",
    events_url: "https://api.github.com/repos/pmndrs/react-spring/events",
    assignees_url:
      "https://api.github.com/repos/pmndrs/react-spring/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/pmndrs/react-spring/branches{/branch}",
    tags_url: "https://api.github.com/repos/pmndrs/react-spring/tags",
    blobs_url:
      "https://api.github.com/repos/pmndrs/react-spring/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/pmndrs/react-spring/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/pmndrs/react-spring/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/pmndrs/react-spring/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/pmndrs/react-spring/statuses/{sha}",
    languages_url: "https://api.github.com/repos/pmndrs/react-spring/languages",
    stargazers_url:
      "https://api.github.com/repos/pmndrs/react-spring/stargazers",
    contributors_url:
      "https://api.github.com/repos/pmndrs/react-spring/contributors",
    subscribers_url:
      "https://api.github.com/repos/pmndrs/react-spring/subscribers",
    subscription_url:
      "https://api.github.com/repos/pmndrs/react-spring/subscription",
    commits_url:
      "https://api.github.com/repos/pmndrs/react-spring/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/pmndrs/react-spring/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/pmndrs/react-spring/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/pmndrs/react-spring/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/pmndrs/react-spring/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/pmndrs/react-spring/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/pmndrs/react-spring/merges",
    archive_url:
      "https://api.github.com/repos/pmndrs/react-spring/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/pmndrs/react-spring/downloads",
    issues_url:
      "https://api.github.com/repos/pmndrs/react-spring/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/pmndrs/react-spring/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/pmndrs/react-spring/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/pmndrs/react-spring/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/pmndrs/react-spring/labels{/name}",
    releases_url:
      "https://api.github.com/repos/pmndrs/react-spring/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/pmndrs/react-spring/deployments",
    created_at: "2018-03-07T15:39:32Z",
    updated_at: "2023-08-29T15:24:49Z",
    pushed_at: "2023-08-29T19:12:09Z",
    git_url: "git://github.com/pmndrs/react-spring.git",
    ssh_url: "git@github.com:pmndrs/react-spring.git",
    clone_url: "https://github.com/pmndrs/react-spring.git",
    svn_url: "https://github.com/pmndrs/react-spring",
    homepage: "http://www.react-spring.dev/",
    size: 672453,
    stargazers_count: 26250,
    watchers_count: 26250,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1158,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 87,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "animation-library",
      "react",
      "react-spring",
      "spring-physics",
      "springs",
    ],
    visibility: "public",
    forks: 1158,
    open_issues: 87,
    watchers: 26250,
    default_branch: "main",
    score: 1,
  },
  {
    id: 37448451,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzQ0ODQ1MQ==",
    name: "mattermost",
    full_name: "mattermost/mattermost",
    private: false,
    owner: {
      login: "mattermost",
      id: 9828093,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjk4MjgwOTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/9828093?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mattermost",
      html_url: "https://github.com/mattermost",
      followers_url: "https://api.github.com/users/mattermost/followers",
      following_url:
        "https://api.github.com/users/mattermost/following{/other_user}",
      gists_url: "https://api.github.com/users/mattermost/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mattermost/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/mattermost/subscriptions",
      organizations_url: "https://api.github.com/users/mattermost/orgs",
      repos_url: "https://api.github.com/users/mattermost/repos",
      events_url: "https://api.github.com/users/mattermost/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mattermost/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/mattermost/mattermost",
    description:
      "Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",
    fork: false,
    url: "https://api.github.com/repos/mattermost/mattermost",
    forks_url: "https://api.github.com/repos/mattermost/mattermost/forks",
    keys_url:
      "https://api.github.com/repos/mattermost/mattermost/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/mattermost/mattermost/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/mattermost/mattermost/teams",
    hooks_url: "https://api.github.com/repos/mattermost/mattermost/hooks",
    issue_events_url:
      "https://api.github.com/repos/mattermost/mattermost/issues/events{/number}",
    events_url: "https://api.github.com/repos/mattermost/mattermost/events",
    assignees_url:
      "https://api.github.com/repos/mattermost/mattermost/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/mattermost/mattermost/branches{/branch}",
    tags_url: "https://api.github.com/repos/mattermost/mattermost/tags",
    blobs_url:
      "https://api.github.com/repos/mattermost/mattermost/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/mattermost/mattermost/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/mattermost/mattermost/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/mattermost/mattermost/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/mattermost/mattermost/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/mattermost/mattermost/languages",
    stargazers_url:
      "https://api.github.com/repos/mattermost/mattermost/stargazers",
    contributors_url:
      "https://api.github.com/repos/mattermost/mattermost/contributors",
    subscribers_url:
      "https://api.github.com/repos/mattermost/mattermost/subscribers",
    subscription_url:
      "https://api.github.com/repos/mattermost/mattermost/subscription",
    commits_url:
      "https://api.github.com/repos/mattermost/mattermost/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/mattermost/mattermost/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/mattermost/mattermost/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/mattermost/mattermost/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/mattermost/mattermost/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/mattermost/mattermost/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/mattermost/mattermost/merges",
    archive_url:
      "https://api.github.com/repos/mattermost/mattermost/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/mattermost/mattermost/downloads",
    issues_url:
      "https://api.github.com/repos/mattermost/mattermost/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/mattermost/mattermost/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/mattermost/mattermost/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/mattermost/mattermost/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/mattermost/mattermost/labels{/name}",
    releases_url:
      "https://api.github.com/repos/mattermost/mattermost/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/mattermost/mattermost/deployments",
    created_at: "2015-06-15T06:50:02Z",
    updated_at: "2023-08-29T23:01:08Z",
    pushed_at: "2023-08-29T21:51:37Z",
    git_url: "git://github.com/mattermost/mattermost.git",
    ssh_url: "git@github.com:mattermost/mattermost.git",
    clone_url: "https://github.com/mattermost/mattermost.git",
    svn_url: "https://github.com/mattermost/mattermost",
    homepage: "https://mattermost.com",
    size: 736888,
    stargazers_count: 26194,
    watchers_count: 26194,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 6343,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 819,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "collaboration",
      "golang",
      "hacktoberfest",
      "mattermost",
      "monorepo",
      "react",
      "react-native",
    ],
    visibility: "public",
    forks: 6343,
    open_issues: 819,
    watchers: 26194,
    default_branch: "master",
    score: 1,
  },
  {
    id: 196760810,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTY3NjA4MTA=",
    name: "linkedin-skill-assessments-quizzes",
    full_name: "Ebazhanov/linkedin-skill-assessments-quizzes",
    private: false,
    owner: {
      login: "Ebazhanov",
      id: 13170022,
      node_id: "MDQ6VXNlcjEzMTcwMDIy",
      avatar_url: "https://avatars.githubusercontent.com/u/13170022?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Ebazhanov",
      html_url: "https://github.com/Ebazhanov",
      followers_url: "https://api.github.com/users/Ebazhanov/followers",
      following_url:
        "https://api.github.com/users/Ebazhanov/following{/other_user}",
      gists_url: "https://api.github.com/users/Ebazhanov/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Ebazhanov/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Ebazhanov/subscriptions",
      organizations_url: "https://api.github.com/users/Ebazhanov/orgs",
      repos_url: "https://api.github.com/users/Ebazhanov/repos",
      events_url: "https://api.github.com/users/Ebazhanov/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Ebazhanov/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes",
    description:
      "Full reference of LinkedIn answers 2023 for skill assessments (aws-lambda, rest-api, javascript, react, git, html, jquery, mongodb, java, Go, python, machine-learning, power-point) linkedin excel test lösungen, linkedin machine learning test LinkedIn test questions and answers ",
    fork: false,
    url: "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes",
    forks_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/forks",
    keys_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/teams",
    hooks_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/hooks",
    issue_events_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/events",
    assignees_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/tags",
    blobs_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/languages",
    stargazers_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/stargazers",
    contributors_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/contributors",
    subscribers_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/subscribers",
    subscription_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/subscription",
    commits_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/merges",
    archive_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/downloads",
    issues_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Ebazhanov/linkedin-skill-assessments-quizzes/deployments",
    created_at: "2019-07-13T19:52:56Z",
    updated_at: "2023-08-29T22:39:37Z",
    pushed_at: "2023-08-29T22:23:56Z",
    git_url:
      "git://github.com/Ebazhanov/linkedin-skill-assessments-quizzes.git",
    ssh_url: "git@github.com:Ebazhanov/linkedin-skill-assessments-quizzes.git",
    clone_url:
      "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes.git",
    svn_url: "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes",
    homepage: "https://ebazhanov.github.io/linkedin-skill-assessments-quizzes/",
    size: 144598,
    stargazers_count: 26171,
    watchers_count: 26171,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 13292,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 87,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "2023",
      "answers",
      "assessment",
      "english",
      "exam",
      "france",
      "free",
      "german",
      "golang",
      "hacktoberfest",
      "hacktoberfest2020",
      "hacktoberfest2021",
      "hacktoberfest2022",
      "italy",
      "linkedin",
      "linkedin-questions",
      "quiz",
      "quiz-questions",
      "skills",
      "spain",
    ],
    visibility: "public",
    forks: 13292,
    open_issues: 87,
    watchers: 26171,
    default_branch: "main",
    score: 1,
  },
  {
    id: 13124802,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzEyNDgwMg==",
    name: "influxdb",
    full_name: "influxdata/influxdb",
    private: false,
    owner: {
      login: "influxdata",
      id: 5713248,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjU3MTMyNDg=",
      avatar_url: "https://avatars.githubusercontent.com/u/5713248?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/influxdata",
      html_url: "https://github.com/influxdata",
      followers_url: "https://api.github.com/users/influxdata/followers",
      following_url:
        "https://api.github.com/users/influxdata/following{/other_user}",
      gists_url: "https://api.github.com/users/influxdata/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/influxdata/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/influxdata/subscriptions",
      organizations_url: "https://api.github.com/users/influxdata/orgs",
      repos_url: "https://api.github.com/users/influxdata/repos",
      events_url: "https://api.github.com/users/influxdata/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/influxdata/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/influxdata/influxdb",
    description:
      "Scalable datastore for metrics, events, and real-time analytics",
    fork: false,
    url: "https://api.github.com/repos/influxdata/influxdb",
    forks_url: "https://api.github.com/repos/influxdata/influxdb/forks",
    keys_url: "https://api.github.com/repos/influxdata/influxdb/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/influxdata/influxdb/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/influxdata/influxdb/teams",
    hooks_url: "https://api.github.com/repos/influxdata/influxdb/hooks",
    issue_events_url:
      "https://api.github.com/repos/influxdata/influxdb/issues/events{/number}",
    events_url: "https://api.github.com/repos/influxdata/influxdb/events",
    assignees_url:
      "https://api.github.com/repos/influxdata/influxdb/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/influxdata/influxdb/branches{/branch}",
    tags_url: "https://api.github.com/repos/influxdata/influxdb/tags",
    blobs_url:
      "https://api.github.com/repos/influxdata/influxdb/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/influxdata/influxdb/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/influxdata/influxdb/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/influxdata/influxdb/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/influxdata/influxdb/statuses/{sha}",
    languages_url: "https://api.github.com/repos/influxdata/influxdb/languages",
    stargazers_url:
      "https://api.github.com/repos/influxdata/influxdb/stargazers",
    contributors_url:
      "https://api.github.com/repos/influxdata/influxdb/contributors",
    subscribers_url:
      "https://api.github.com/repos/influxdata/influxdb/subscribers",
    subscription_url:
      "https://api.github.com/repos/influxdata/influxdb/subscription",
    commits_url:
      "https://api.github.com/repos/influxdata/influxdb/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/influxdata/influxdb/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/influxdata/influxdb/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/influxdata/influxdb/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/influxdata/influxdb/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/influxdata/influxdb/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/influxdata/influxdb/merges",
    archive_url:
      "https://api.github.com/repos/influxdata/influxdb/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/influxdata/influxdb/downloads",
    issues_url:
      "https://api.github.com/repos/influxdata/influxdb/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/influxdata/influxdb/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/influxdata/influxdb/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/influxdata/influxdb/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/influxdata/influxdb/labels{/name}",
    releases_url:
      "https://api.github.com/repos/influxdata/influxdb/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/influxdata/influxdb/deployments",
    created_at: "2013-09-26T14:31:10Z",
    updated_at: "2023-08-29T23:33:14Z",
    pushed_at: "2023-08-20T02:18:22Z",
    git_url: "git://github.com/influxdata/influxdb.git",
    ssh_url: "git@github.com:influxdata/influxdb.git",
    clone_url: "https://github.com/influxdata/influxdb.git",
    svn_url: "https://github.com/influxdata/influxdb",
    homepage: "https://influxdata.com",
    size: 166251,
    stargazers_count: 26041,
    watchers_count: 26041,
    language: "Go",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 3417,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1795,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "database",
      "go",
      "influxdb",
      "metrics",
      "monitoring",
      "react",
      "time-series",
    ],
    visibility: "public",
    forks: 3417,
    open_issues: 1795,
    watchers: 26041,
    default_branch: "master",
    score: 1,
  },
  {
    id: 45431898,
    node_id: "MDEwOlJlcG9zaXRvcnk0NTQzMTg5OA==",
    name: "react-virtualized",
    full_name: "bvaughn/react-virtualized",
    private: false,
    owner: {
      login: "bvaughn",
      id: 29597,
      node_id: "MDQ6VXNlcjI5NTk3",
      avatar_url: "https://avatars.githubusercontent.com/u/29597?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/bvaughn",
      html_url: "https://github.com/bvaughn",
      followers_url: "https://api.github.com/users/bvaughn/followers",
      following_url:
        "https://api.github.com/users/bvaughn/following{/other_user}",
      gists_url: "https://api.github.com/users/bvaughn/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/bvaughn/subscriptions",
      organizations_url: "https://api.github.com/users/bvaughn/orgs",
      repos_url: "https://api.github.com/users/bvaughn/repos",
      events_url: "https://api.github.com/users/bvaughn/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/bvaughn/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/bvaughn/react-virtualized",
    description:
      "React components for efficiently rendering large lists and tabular data",
    fork: false,
    url: "https://api.github.com/repos/bvaughn/react-virtualized",
    forks_url: "https://api.github.com/repos/bvaughn/react-virtualized/forks",
    keys_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/bvaughn/react-virtualized/teams",
    hooks_url: "https://api.github.com/repos/bvaughn/react-virtualized/hooks",
    issue_events_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/issues/events{/number}",
    events_url: "https://api.github.com/repos/bvaughn/react-virtualized/events",
    assignees_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/branches{/branch}",
    tags_url: "https://api.github.com/repos/bvaughn/react-virtualized/tags",
    blobs_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/languages",
    stargazers_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/stargazers",
    contributors_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/contributors",
    subscribers_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/subscribers",
    subscription_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/subscription",
    commits_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/bvaughn/react-virtualized/merges",
    archive_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/downloads",
    issues_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/labels{/name}",
    releases_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/bvaughn/react-virtualized/deployments",
    created_at: "2015-11-03T00:48:07Z",
    updated_at: "2023-08-29T10:00:19Z",
    pushed_at: "2023-04-17T19:25:20Z",
    git_url: "git://github.com/bvaughn/react-virtualized.git",
    ssh_url: "git@github.com:bvaughn/react-virtualized.git",
    clone_url: "https://github.com/bvaughn/react-virtualized.git",
    svn_url: "https://github.com/bvaughn/react-virtualized",
    homepage: "http://bvaughn.github.io/react-virtualized/",
    size: 48092,
    stargazers_count: 25265,
    watchers_count: 25265,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 3144,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 502,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "grid",
      "list",
      "listview",
      "performance",
      "react",
      "react-components",
      "tabular-data",
      "virtualization",
      "windowing",
    ],
    visibility: "public",
    forks: 3144,
    open_issues: 502,
    watchers: 25265,
    default_branch: "master",
    score: 1,
  },
  {
    id: 453717720,
    node_id: "R_kgDOGwsu2A",
    name: "jsoncrack.com",
    full_name: "AykutSarac/jsoncrack.com",
    private: false,
    owner: {
      login: "AykutSarac",
      id: 47941171,
      node_id: "MDQ6VXNlcjQ3OTQxMTcx",
      avatar_url: "https://avatars.githubusercontent.com/u/47941171?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/AykutSarac",
      html_url: "https://github.com/AykutSarac",
      followers_url: "https://api.github.com/users/AykutSarac/followers",
      following_url:
        "https://api.github.com/users/AykutSarac/following{/other_user}",
      gists_url: "https://api.github.com/users/AykutSarac/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/AykutSarac/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/AykutSarac/subscriptions",
      organizations_url: "https://api.github.com/users/AykutSarac/orgs",
      repos_url: "https://api.github.com/users/AykutSarac/repos",
      events_url: "https://api.github.com/users/AykutSarac/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/AykutSarac/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/AykutSarac/jsoncrack.com",
    description:
      "✨ Innovative and open-source visualization application that transforms various data formats, such as JSON, YAML, XML, CSV and more, into interactive graphs.",
    fork: false,
    url: "https://api.github.com/repos/AykutSarac/jsoncrack.com",
    forks_url: "https://api.github.com/repos/AykutSarac/jsoncrack.com/forks",
    keys_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/AykutSarac/jsoncrack.com/teams",
    hooks_url: "https://api.github.com/repos/AykutSarac/jsoncrack.com/hooks",
    issue_events_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/issues/events{/number}",
    events_url: "https://api.github.com/repos/AykutSarac/jsoncrack.com/events",
    assignees_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/branches{/branch}",
    tags_url: "https://api.github.com/repos/AykutSarac/jsoncrack.com/tags",
    blobs_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/languages",
    stargazers_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/stargazers",
    contributors_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/contributors",
    subscribers_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/subscribers",
    subscription_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/subscription",
    commits_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/AykutSarac/jsoncrack.com/merges",
    archive_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/downloads",
    issues_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/labels{/name}",
    releases_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/AykutSarac/jsoncrack.com/deployments",
    created_at: "2022-01-30T15:25:18Z",
    updated_at: "2023-08-29T21:57:29Z",
    pushed_at: "2023-08-29T09:23:16Z",
    git_url: "git://github.com/AykutSarac/jsoncrack.com.git",
    ssh_url: "git@github.com:AykutSarac/jsoncrack.com.git",
    clone_url: "https://github.com/AykutSarac/jsoncrack.com.git",
    svn_url: "https://github.com/AykutSarac/jsoncrack.com",
    homepage: "https://jsoncrack.com/",
    size: 13414,
    stargazers_count: 24966,
    watchers_count: 24966,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 1380,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 39,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "diagrams",
      "graph",
      "json",
      "nextjs",
      "productivity",
      "react",
      "tool",
      "visualization",
    ],
    visibility: "public",
    forks: 1380,
    open_issues: 39,
    watchers: 24966,
    default_branch: "main",
    score: 1,
  },
  {
    id: 25315643,
    node_id: "MDEwOlJlcG9zaXRvcnkyNTMxNTY0Mw==",
    name: "nylas-mail",
    full_name: "nylas/nylas-mail",
    private: false,
    owner: {
      login: "nylas",
      id: 4219865,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQyMTk4NjU=",
      avatar_url: "https://avatars.githubusercontent.com/u/4219865?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/nylas",
      html_url: "https://github.com/nylas",
      followers_url: "https://api.github.com/users/nylas/followers",
      following_url:
        "https://api.github.com/users/nylas/following{/other_user}",
      gists_url: "https://api.github.com/users/nylas/gists{/gist_id}",
      starred_url: "https://api.github.com/users/nylas/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/nylas/subscriptions",
      organizations_url: "https://api.github.com/users/nylas/orgs",
      repos_url: "https://api.github.com/users/nylas/repos",
      events_url: "https://api.github.com/users/nylas/events{/privacy}",
      received_events_url: "https://api.github.com/users/nylas/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/nylas/nylas-mail",
    description:
      ":love_letter: An extensible desktop mail app built on the modern web.  Forks welcome!",
    fork: false,
    url: "https://api.github.com/repos/nylas/nylas-mail",
    forks_url: "https://api.github.com/repos/nylas/nylas-mail/forks",
    keys_url: "https://api.github.com/repos/nylas/nylas-mail/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/nylas/nylas-mail/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/nylas/nylas-mail/teams",
    hooks_url: "https://api.github.com/repos/nylas/nylas-mail/hooks",
    issue_events_url:
      "https://api.github.com/repos/nylas/nylas-mail/issues/events{/number}",
    events_url: "https://api.github.com/repos/nylas/nylas-mail/events",
    assignees_url:
      "https://api.github.com/repos/nylas/nylas-mail/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/nylas/nylas-mail/branches{/branch}",
    tags_url: "https://api.github.com/repos/nylas/nylas-mail/tags",
    blobs_url: "https://api.github.com/repos/nylas/nylas-mail/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/nylas/nylas-mail/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/nylas/nylas-mail/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/nylas/nylas-mail/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/nylas/nylas-mail/statuses/{sha}",
    languages_url: "https://api.github.com/repos/nylas/nylas-mail/languages",
    stargazers_url: "https://api.github.com/repos/nylas/nylas-mail/stargazers",
    contributors_url:
      "https://api.github.com/repos/nylas/nylas-mail/contributors",
    subscribers_url:
      "https://api.github.com/repos/nylas/nylas-mail/subscribers",
    subscription_url:
      "https://api.github.com/repos/nylas/nylas-mail/subscription",
    commits_url: "https://api.github.com/repos/nylas/nylas-mail/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/nylas/nylas-mail/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/nylas/nylas-mail/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/nylas/nylas-mail/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/nylas/nylas-mail/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/nylas/nylas-mail/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/nylas/nylas-mail/merges",
    archive_url:
      "https://api.github.com/repos/nylas/nylas-mail/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/nylas/nylas-mail/downloads",
    issues_url: "https://api.github.com/repos/nylas/nylas-mail/issues{/number}",
    pulls_url: "https://api.github.com/repos/nylas/nylas-mail/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/nylas/nylas-mail/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/nylas/nylas-mail/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/nylas/nylas-mail/labels{/name}",
    releases_url: "https://api.github.com/repos/nylas/nylas-mail/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/nylas/nylas-mail/deployments",
    created_at: "2014-10-16T18:29:12Z",
    updated_at: "2023-08-29T19:12:23Z",
    pushed_at: "2022-11-24T08:20:57Z",
    git_url: "git://github.com/nylas/nylas-mail.git",
    ssh_url: "git@github.com:nylas/nylas-mail.git",
    clone_url: "https://github.com/nylas/nylas-mail.git",
    svn_url: "https://github.com/nylas/nylas-mail",
    homepage: "https://nylas.com/nylas-mail/",
    size: 87026,
    stargazers_count: 24759,
    watchers_count: 24759,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 1483,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1006,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "babel",
      "electron",
      "email",
      "flux",
      "javascript",
      "linux",
      "macos",
      "nylas-mail",
      "productivity",
      "react",
      "windows",
    ],
    visibility: "public",
    forks: 1483,
    open_issues: 1006,
    watchers: 24759,
    default_branch: "master",
    score: 1,
  },
  {
    id: 94061307,
    node_id: "MDEwOlJlcG9zaXRvcnk5NDA2MTMwNw==",
    name: "ink",
    full_name: "vadimdemedes/ink",
    private: false,
    owner: {
      login: "vadimdemedes",
      id: 697676,
      node_id: "MDQ6VXNlcjY5NzY3Ng==",
      avatar_url: "https://avatars.githubusercontent.com/u/697676?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vadimdemedes",
      html_url: "https://github.com/vadimdemedes",
      followers_url: "https://api.github.com/users/vadimdemedes/followers",
      following_url:
        "https://api.github.com/users/vadimdemedes/following{/other_user}",
      gists_url: "https://api.github.com/users/vadimdemedes/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/vadimdemedes/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/vadimdemedes/subscriptions",
      organizations_url: "https://api.github.com/users/vadimdemedes/orgs",
      repos_url: "https://api.github.com/users/vadimdemedes/repos",
      events_url: "https://api.github.com/users/vadimdemedes/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vadimdemedes/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/vadimdemedes/ink",
    description: "🌈 React for interactive command-line apps",
    fork: false,
    url: "https://api.github.com/repos/vadimdemedes/ink",
    forks_url: "https://api.github.com/repos/vadimdemedes/ink/forks",
    keys_url: "https://api.github.com/repos/vadimdemedes/ink/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/vadimdemedes/ink/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/vadimdemedes/ink/teams",
    hooks_url: "https://api.github.com/repos/vadimdemedes/ink/hooks",
    issue_events_url:
      "https://api.github.com/repos/vadimdemedes/ink/issues/events{/number}",
    events_url: "https://api.github.com/repos/vadimdemedes/ink/events",
    assignees_url:
      "https://api.github.com/repos/vadimdemedes/ink/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/vadimdemedes/ink/branches{/branch}",
    tags_url: "https://api.github.com/repos/vadimdemedes/ink/tags",
    blobs_url: "https://api.github.com/repos/vadimdemedes/ink/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/vadimdemedes/ink/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/vadimdemedes/ink/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/vadimdemedes/ink/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/vadimdemedes/ink/statuses/{sha}",
    languages_url: "https://api.github.com/repos/vadimdemedes/ink/languages",
    stargazers_url: "https://api.github.com/repos/vadimdemedes/ink/stargazers",
    contributors_url:
      "https://api.github.com/repos/vadimdemedes/ink/contributors",
    subscribers_url:
      "https://api.github.com/repos/vadimdemedes/ink/subscribers",
    subscription_url:
      "https://api.github.com/repos/vadimdemedes/ink/subscription",
    commits_url: "https://api.github.com/repos/vadimdemedes/ink/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/vadimdemedes/ink/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/vadimdemedes/ink/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/vadimdemedes/ink/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/vadimdemedes/ink/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/vadimdemedes/ink/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/vadimdemedes/ink/merges",
    archive_url:
      "https://api.github.com/repos/vadimdemedes/ink/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/vadimdemedes/ink/downloads",
    issues_url: "https://api.github.com/repos/vadimdemedes/ink/issues{/number}",
    pulls_url: "https://api.github.com/repos/vadimdemedes/ink/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/vadimdemedes/ink/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/vadimdemedes/ink/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/vadimdemedes/ink/labels{/name}",
    releases_url: "https://api.github.com/repos/vadimdemedes/ink/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/vadimdemedes/ink/deployments",
    created_at: "2017-06-12T06:12:28Z",
    updated_at: "2023-08-29T22:25:50Z",
    pushed_at: "2023-08-25T10:56:25Z",
    git_url: "git://github.com/vadimdemedes/ink.git",
    ssh_url: "git@github.com:vadimdemedes/ink.git",
    clone_url: "https://github.com/vadimdemedes/ink.git",
    svn_url: "https://github.com/vadimdemedes/ink",
    homepage: "https://term.ink",
    size: 1595,
    stargazers_count: 24333,
    watchers_count: 24333,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 590,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 51,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cli",
      "command-line",
      "flexbox",
      "interactive",
      "javascript",
      "react",
    ],
    visibility: "public",
    forks: 590,
    open_issues: 51,
    watchers: 24333,
    default_branch: "master",
    score: 1,
  },
  {
    id: 67709808,
    node_id: "MDEwOlJlcG9zaXRvcnk2NzcwOTgwOA==",
    name: "react-native-elements",
    full_name: "react-native-elements/react-native-elements",
    private: false,
    owner: {
      login: "react-native-elements",
      id: 49050851,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ5MDUwODUx",
      avatar_url: "https://avatars.githubusercontent.com/u/49050851?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/react-native-elements",
      html_url: "https://github.com/react-native-elements",
      followers_url:
        "https://api.github.com/users/react-native-elements/followers",
      following_url:
        "https://api.github.com/users/react-native-elements/following{/other_user}",
      gists_url:
        "https://api.github.com/users/react-native-elements/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/react-native-elements/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/react-native-elements/subscriptions",
      organizations_url:
        "https://api.github.com/users/react-native-elements/orgs",
      repos_url: "https://api.github.com/users/react-native-elements/repos",
      events_url:
        "https://api.github.com/users/react-native-elements/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/react-native-elements/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/react-native-elements/react-native-elements",
    description: "Cross-Platform React Native UI Toolkit",
    fork: false,
    url: "https://api.github.com/repos/react-native-elements/react-native-elements",
    forks_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/forks",
    keys_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/teams",
    hooks_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/hooks",
    issue_events_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/events",
    assignees_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/tags",
    blobs_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/languages",
    stargazers_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/stargazers",
    contributors_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/contributors",
    subscribers_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/subscribers",
    subscription_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/subscription",
    commits_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/merges",
    archive_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/downloads",
    issues_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/labels{/name}",
    releases_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/react-native-elements/react-native-elements/deployments",
    created_at: "2016-09-08T14:21:41Z",
    updated_at: "2023-08-29T21:59:30Z",
    pushed_at: "2023-08-29T04:58:34Z",
    git_url: "git://github.com/react-native-elements/react-native-elements.git",
    ssh_url: "git@github.com:react-native-elements/react-native-elements.git",
    clone_url:
      "https://github.com/react-native-elements/react-native-elements.git",
    svn_url: "https://github.com/react-native-elements/react-native-elements",
    homepage: "https://reactnativeelements.com",
    size: 168882,
    stargazers_count: 23919,
    watchers_count: 23919,
    language: "MDX",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 4578,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 87,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "android",
      "cross-platform",
      "hacktoberfest",
      "hacktoberfest-2022",
      "ios",
      "mobile-app",
      "react",
      "react-native",
      "ui",
      "ui-components",
    ],
    visibility: "public",
    forks: 4578,
    open_issues: 87,
    watchers: 23919,
    default_branch: "next",
    score: 1,
  },
  {
    id: 172521926,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzI1MjE5MjY=",
    name: "react-three-fiber",
    full_name: "pmndrs/react-three-fiber",
    private: false,
    owner: {
      login: "pmndrs",
      id: 45790596,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ1NzkwNTk2",
      avatar_url: "https://avatars.githubusercontent.com/u/45790596?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/pmndrs",
      html_url: "https://github.com/pmndrs",
      followers_url: "https://api.github.com/users/pmndrs/followers",
      following_url:
        "https://api.github.com/users/pmndrs/following{/other_user}",
      gists_url: "https://api.github.com/users/pmndrs/gists{/gist_id}",
      starred_url: "https://api.github.com/users/pmndrs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/pmndrs/subscriptions",
      organizations_url: "https://api.github.com/users/pmndrs/orgs",
      repos_url: "https://api.github.com/users/pmndrs/repos",
      events_url: "https://api.github.com/users/pmndrs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/pmndrs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/pmndrs/react-three-fiber",
    description: "🇨🇭 A React renderer for Three.js",
    fork: false,
    url: "https://api.github.com/repos/pmndrs/react-three-fiber",
    forks_url: "https://api.github.com/repos/pmndrs/react-three-fiber/forks",
    keys_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/pmndrs/react-three-fiber/teams",
    hooks_url: "https://api.github.com/repos/pmndrs/react-three-fiber/hooks",
    issue_events_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/issues/events{/number}",
    events_url: "https://api.github.com/repos/pmndrs/react-three-fiber/events",
    assignees_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/branches{/branch}",
    tags_url: "https://api.github.com/repos/pmndrs/react-three-fiber/tags",
    blobs_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/languages",
    stargazers_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/stargazers",
    contributors_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/contributors",
    subscribers_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/subscribers",
    subscription_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/subscription",
    commits_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/pmndrs/react-three-fiber/merges",
    archive_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/downloads",
    issues_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/labels{/name}",
    releases_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/pmndrs/react-three-fiber/deployments",
    created_at: "2019-02-25T14:31:51Z",
    updated_at: "2023-08-29T23:24:37Z",
    pushed_at: "2023-08-28T12:34:27Z",
    git_url: "git://github.com/pmndrs/react-three-fiber.git",
    ssh_url: "git@github.com:pmndrs/react-three-fiber.git",
    clone_url: "https://github.com/pmndrs/react-three-fiber.git",
    svn_url: "https://github.com/pmndrs/react-three-fiber",
    homepage: "https://docs.pmnd.rs/react-three-fiber",
    size: 23655,
    stargazers_count: 23619,
    watchers_count: 23619,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1381,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 28,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["3d", "animation", "fiber", "react", "renderer", "threejs"],
    visibility: "public",
    forks: 1381,
    open_issues: 28,
    watchers: 23619,
    default_branch: "master",
    score: 1,
  },
  {
    id: 400215964,
    node_id: "MDEwOlJlcG9zaXRvcnk0MDAyMTU5NjQ=",
    name: "novu",
    full_name: "novuhq/novu",
    private: false,
    owner: {
      login: "novuhq",
      id: 77433905,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc3NDMzOTA1",
      avatar_url: "https://avatars.githubusercontent.com/u/77433905?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/novuhq",
      html_url: "https://github.com/novuhq",
      followers_url: "https://api.github.com/users/novuhq/followers",
      following_url:
        "https://api.github.com/users/novuhq/following{/other_user}",
      gists_url: "https://api.github.com/users/novuhq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/novuhq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/novuhq/subscriptions",
      organizations_url: "https://api.github.com/users/novuhq/orgs",
      repos_url: "https://api.github.com/users/novuhq/repos",
      events_url: "https://api.github.com/users/novuhq/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/novuhq/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/novuhq/novu",
    description:
      "The open-source notification infrastructure with fully functional embedded notification center",
    fork: false,
    url: "https://api.github.com/repos/novuhq/novu",
    forks_url: "https://api.github.com/repos/novuhq/novu/forks",
    keys_url: "https://api.github.com/repos/novuhq/novu/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/novuhq/novu/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/novuhq/novu/teams",
    hooks_url: "https://api.github.com/repos/novuhq/novu/hooks",
    issue_events_url:
      "https://api.github.com/repos/novuhq/novu/issues/events{/number}",
    events_url: "https://api.github.com/repos/novuhq/novu/events",
    assignees_url: "https://api.github.com/repos/novuhq/novu/assignees{/user}",
    branches_url: "https://api.github.com/repos/novuhq/novu/branches{/branch}",
    tags_url: "https://api.github.com/repos/novuhq/novu/tags",
    blobs_url: "https://api.github.com/repos/novuhq/novu/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/novuhq/novu/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/novuhq/novu/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/novuhq/novu/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/novuhq/novu/statuses/{sha}",
    languages_url: "https://api.github.com/repos/novuhq/novu/languages",
    stargazers_url: "https://api.github.com/repos/novuhq/novu/stargazers",
    contributors_url: "https://api.github.com/repos/novuhq/novu/contributors",
    subscribers_url: "https://api.github.com/repos/novuhq/novu/subscribers",
    subscription_url: "https://api.github.com/repos/novuhq/novu/subscription",
    commits_url: "https://api.github.com/repos/novuhq/novu/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/novuhq/novu/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/novuhq/novu/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/novuhq/novu/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/novuhq/novu/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/novuhq/novu/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/novuhq/novu/merges",
    archive_url:
      "https://api.github.com/repos/novuhq/novu/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/novuhq/novu/downloads",
    issues_url: "https://api.github.com/repos/novuhq/novu/issues{/number}",
    pulls_url: "https://api.github.com/repos/novuhq/novu/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/novuhq/novu/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/novuhq/novu/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/novuhq/novu/labels{/name}",
    releases_url: "https://api.github.com/repos/novuhq/novu/releases{/id}",
    deployments_url: "https://api.github.com/repos/novuhq/novu/deployments",
    created_at: "2021-08-26T15:22:44Z",
    updated_at: "2023-08-29T23:48:10Z",
    pushed_at: "2023-08-29T21:16:12Z",
    git_url: "git://github.com/novuhq/novu.git",
    ssh_url: "git@github.com:novuhq/novu.git",
    clone_url: "https://github.com/novuhq/novu.git",
    svn_url: "https://github.com/novuhq/novu",
    homepage: "https://novu.co",
    size: 115019,
    stargazers_count: 23546,
    watchers_count: 23546,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1623,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 232,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "communication",
      "css",
      "email",
      "hacktoberfest",
      "html",
      "javascript",
      "nodejs",
      "notification-center",
      "notifications",
      "push-notifications",
      "react",
      "reactjs",
      "sms",
      "transactional",
      "typescript",
    ],
    visibility: "public",
    forks: 1623,
    open_issues: 232,
    watchers: 23546,
    default_branch: "next",
    score: 1,
  },
  {
    id: 125596489,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjU1OTY0ODk=",
    name: "docz",
    full_name: "doczjs/docz",
    private: false,
    owner: {
      login: "doczjs",
      id: 39714731,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjM5NzE0NzMx",
      avatar_url: "https://avatars.githubusercontent.com/u/39714731?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/doczjs",
      html_url: "https://github.com/doczjs",
      followers_url: "https://api.github.com/users/doczjs/followers",
      following_url:
        "https://api.github.com/users/doczjs/following{/other_user}",
      gists_url: "https://api.github.com/users/doczjs/gists{/gist_id}",
      starred_url: "https://api.github.com/users/doczjs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/doczjs/subscriptions",
      organizations_url: "https://api.github.com/users/doczjs/orgs",
      repos_url: "https://api.github.com/users/doczjs/repos",
      events_url: "https://api.github.com/users/doczjs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/doczjs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/doczjs/docz",
    description: "✍ It has never been so easy to document your things!",
    fork: false,
    url: "https://api.github.com/repos/doczjs/docz",
    forks_url: "https://api.github.com/repos/doczjs/docz/forks",
    keys_url: "https://api.github.com/repos/doczjs/docz/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/doczjs/docz/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/doczjs/docz/teams",
    hooks_url: "https://api.github.com/repos/doczjs/docz/hooks",
    issue_events_url:
      "https://api.github.com/repos/doczjs/docz/issues/events{/number}",
    events_url: "https://api.github.com/repos/doczjs/docz/events",
    assignees_url: "https://api.github.com/repos/doczjs/docz/assignees{/user}",
    branches_url: "https://api.github.com/repos/doczjs/docz/branches{/branch}",
    tags_url: "https://api.github.com/repos/doczjs/docz/tags",
    blobs_url: "https://api.github.com/repos/doczjs/docz/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/doczjs/docz/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/doczjs/docz/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/doczjs/docz/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/doczjs/docz/statuses/{sha}",
    languages_url: "https://api.github.com/repos/doczjs/docz/languages",
    stargazers_url: "https://api.github.com/repos/doczjs/docz/stargazers",
    contributors_url: "https://api.github.com/repos/doczjs/docz/contributors",
    subscribers_url: "https://api.github.com/repos/doczjs/docz/subscribers",
    subscription_url: "https://api.github.com/repos/doczjs/docz/subscription",
    commits_url: "https://api.github.com/repos/doczjs/docz/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/doczjs/docz/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/doczjs/docz/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/doczjs/docz/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/doczjs/docz/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/doczjs/docz/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/doczjs/docz/merges",
    archive_url:
      "https://api.github.com/repos/doczjs/docz/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/doczjs/docz/downloads",
    issues_url: "https://api.github.com/repos/doczjs/docz/issues{/number}",
    pulls_url: "https://api.github.com/repos/doczjs/docz/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/doczjs/docz/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/doczjs/docz/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/doczjs/docz/labels{/name}",
    releases_url: "https://api.github.com/repos/doczjs/docz/releases{/id}",
    deployments_url: "https://api.github.com/repos/doczjs/docz/deployments",
    created_at: "2018-03-17T04:24:10Z",
    updated_at: "2023-08-29T17:06:07Z",
    pushed_at: "2022-09-23T22:42:47Z",
    git_url: "git://github.com/doczjs/docz.git",
    ssh_url: "git@github.com:doczjs/docz.git",
    clone_url: "https://github.com/doczjs/docz.git",
    svn_url: "https://github.com/doczjs/docz",
    homepage: "https://docz.site",
    size: 10072,
    stargazers_count: 23353,
    watchers_count: 23353,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1502,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 108,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "design-system",
      "docs",
      "documentation",
      "docz",
      "gatsby",
      "js",
      "mdx",
      "react",
      "theme",
      "ui",
      "zero-configuration",
    ],
    visibility: "public",
    forks: 1502,
    open_issues: 108,
    watchers: 23353,
    default_branch: "main",
    score: 1,
  },
  {
    id: 65750241,
    node_id: "MDEwOlJlcG9zaXRvcnk2NTc1MDI0MQ==",
    name: "expo",
    full_name: "expo/expo",
    private: false,
    owner: {
      login: "expo",
      id: 12504344,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEyNTA0MzQ0",
      avatar_url: "https://avatars.githubusercontent.com/u/12504344?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/expo",
      html_url: "https://github.com/expo",
      followers_url: "https://api.github.com/users/expo/followers",
      following_url: "https://api.github.com/users/expo/following{/other_user}",
      gists_url: "https://api.github.com/users/expo/gists{/gist_id}",
      starred_url: "https://api.github.com/users/expo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/expo/subscriptions",
      organizations_url: "https://api.github.com/users/expo/orgs",
      repos_url: "https://api.github.com/users/expo/repos",
      events_url: "https://api.github.com/users/expo/events{/privacy}",
      received_events_url: "https://api.github.com/users/expo/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/expo/expo",
    description:
      "An open-source platform for making universal native apps with React. Expo runs on Android, iOS, and the web.",
    fork: false,
    url: "https://api.github.com/repos/expo/expo",
    forks_url: "https://api.github.com/repos/expo/expo/forks",
    keys_url: "https://api.github.com/repos/expo/expo/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/expo/expo/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/expo/expo/teams",
    hooks_url: "https://api.github.com/repos/expo/expo/hooks",
    issue_events_url:
      "https://api.github.com/repos/expo/expo/issues/events{/number}",
    events_url: "https://api.github.com/repos/expo/expo/events",
    assignees_url: "https://api.github.com/repos/expo/expo/assignees{/user}",
    branches_url: "https://api.github.com/repos/expo/expo/branches{/branch}",
    tags_url: "https://api.github.com/repos/expo/expo/tags",
    blobs_url: "https://api.github.com/repos/expo/expo/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/expo/expo/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/expo/expo/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/expo/expo/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/expo/expo/statuses/{sha}",
    languages_url: "https://api.github.com/repos/expo/expo/languages",
    stargazers_url: "https://api.github.com/repos/expo/expo/stargazers",
    contributors_url: "https://api.github.com/repos/expo/expo/contributors",
    subscribers_url: "https://api.github.com/repos/expo/expo/subscribers",
    subscription_url: "https://api.github.com/repos/expo/expo/subscription",
    commits_url: "https://api.github.com/repos/expo/expo/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/expo/expo/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/expo/expo/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/expo/expo/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/expo/expo/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/expo/expo/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/expo/expo/merges",
    archive_url:
      "https://api.github.com/repos/expo/expo/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/expo/expo/downloads",
    issues_url: "https://api.github.com/repos/expo/expo/issues{/number}",
    pulls_url: "https://api.github.com/repos/expo/expo/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/expo/expo/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/expo/expo/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/expo/expo/labels{/name}",
    releases_url: "https://api.github.com/repos/expo/expo/releases{/id}",
    deployments_url: "https://api.github.com/repos/expo/expo/deployments",
    created_at: "2016-08-15T17:14:25Z",
    updated_at: "2023-08-29T21:50:30Z",
    pushed_at: "2023-08-29T23:22:55Z",
    git_url: "git://github.com/expo/expo.git",
    ssh_url: "git@github.com:expo/expo.git",
    clone_url: "https://github.com/expo/expo.git",
    svn_url: "https://github.com/expo/expo",
    homepage: "https://docs.expo.dev",
    size: 2786871,
    stargazers_count: 23050,
    watchers_count: 23050,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 4250,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 603,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "android",
      "app-framework",
      "expo",
      "framework",
      "frontend",
      "ios",
      "javascript",
      "mobile",
      "native",
      "native-apps",
      "react",
      "react-native",
      "typescript",
      "universal",
      "web",
      "web-framework",
    ],
    visibility: "public",
    forks: 4250,
    open_issues: 603,
    watchers: 23050,
    default_branch: "main",
    score: 1,
  },
  {
    id: 38934449,
    node_id: "MDEwOlJlcG9zaXRvcnkzODkzNDQ0OQ==",
    name: "react-redux",
    full_name: "reduxjs/react-redux",
    private: false,
    owner: {
      login: "reduxjs",
      id: 13142323,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
      avatar_url: "https://avatars.githubusercontent.com/u/13142323?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/reduxjs",
      html_url: "https://github.com/reduxjs",
      followers_url: "https://api.github.com/users/reduxjs/followers",
      following_url:
        "https://api.github.com/users/reduxjs/following{/other_user}",
      gists_url: "https://api.github.com/users/reduxjs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/reduxjs/subscriptions",
      organizations_url: "https://api.github.com/users/reduxjs/orgs",
      repos_url: "https://api.github.com/users/reduxjs/repos",
      events_url: "https://api.github.com/users/reduxjs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/reduxjs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/reduxjs/react-redux",
    description: "Official React bindings for Redux",
    fork: false,
    url: "https://api.github.com/repos/reduxjs/react-redux",
    forks_url: "https://api.github.com/repos/reduxjs/react-redux/forks",
    keys_url: "https://api.github.com/repos/reduxjs/react-redux/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/reduxjs/react-redux/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/reduxjs/react-redux/teams",
    hooks_url: "https://api.github.com/repos/reduxjs/react-redux/hooks",
    issue_events_url:
      "https://api.github.com/repos/reduxjs/react-redux/issues/events{/number}",
    events_url: "https://api.github.com/repos/reduxjs/react-redux/events",
    assignees_url:
      "https://api.github.com/repos/reduxjs/react-redux/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/reduxjs/react-redux/branches{/branch}",
    tags_url: "https://api.github.com/repos/reduxjs/react-redux/tags",
    blobs_url:
      "https://api.github.com/repos/reduxjs/react-redux/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/reduxjs/react-redux/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/reduxjs/react-redux/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/reduxjs/react-redux/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/reduxjs/react-redux/statuses/{sha}",
    languages_url: "https://api.github.com/repos/reduxjs/react-redux/languages",
    stargazers_url:
      "https://api.github.com/repos/reduxjs/react-redux/stargazers",
    contributors_url:
      "https://api.github.com/repos/reduxjs/react-redux/contributors",
    subscribers_url:
      "https://api.github.com/repos/reduxjs/react-redux/subscribers",
    subscription_url:
      "https://api.github.com/repos/reduxjs/react-redux/subscription",
    commits_url:
      "https://api.github.com/repos/reduxjs/react-redux/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/reduxjs/react-redux/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/reduxjs/react-redux/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/reduxjs/react-redux/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/reduxjs/react-redux/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/reduxjs/react-redux/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/reduxjs/react-redux/merges",
    archive_url:
      "https://api.github.com/repos/reduxjs/react-redux/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/reduxjs/react-redux/downloads",
    issues_url:
      "https://api.github.com/repos/reduxjs/react-redux/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/reduxjs/react-redux/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/reduxjs/react-redux/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/reduxjs/react-redux/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/reduxjs/react-redux/labels{/name}",
    releases_url:
      "https://api.github.com/repos/reduxjs/react-redux/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/reduxjs/react-redux/deployments",
    created_at: "2015-07-11T17:32:01Z",
    updated_at: "2023-08-29T21:58:36Z",
    pushed_at: "2023-08-26T22:10:43Z",
    git_url: "git://github.com/reduxjs/react-redux.git",
    ssh_url: "git@github.com:reduxjs/react-redux.git",
    clone_url: "https://github.com/reduxjs/react-redux.git",
    svn_url: "https://github.com/reduxjs/react-redux",
    homepage: "https://react-redux.js.org",
    size: 9140,
    stargazers_count: 22948,
    watchers_count: 22948,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 3365,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 21,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["react", "redux"],
    visibility: "public",
    forks: 3365,
    open_issues: 21,
    watchers: 22948,
    default_branch: "master",
    score: 1,
  },
  {
    id: 31492490,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTQ5MjQ5MA==",
    name: "NativeScript",
    full_name: "NativeScript/NativeScript",
    private: false,
    owner: {
      login: "NativeScript",
      id: 7392261,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjczOTIyNjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/7392261?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/NativeScript",
      html_url: "https://github.com/NativeScript",
      followers_url: "https://api.github.com/users/NativeScript/followers",
      following_url:
        "https://api.github.com/users/NativeScript/following{/other_user}",
      gists_url: "https://api.github.com/users/NativeScript/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/NativeScript/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/NativeScript/subscriptions",
      organizations_url: "https://api.github.com/users/NativeScript/orgs",
      repos_url: "https://api.github.com/users/NativeScript/repos",
      events_url: "https://api.github.com/users/NativeScript/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/NativeScript/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/NativeScript/NativeScript",
    description:
      "⚡ Empowering JavaScript with native platform APIs. ✨ Best of all worlds (TypeScript, Swift, Objective C, Kotlin, Java). Use what you love ❤️ Angular, Capacitor, Ionic, React, Solid, Svelte, Vue with: SwiftUI, Jetpack Compose, Flutter and you name it compatible.",
    fork: false,
    url: "https://api.github.com/repos/NativeScript/NativeScript",
    forks_url: "https://api.github.com/repos/NativeScript/NativeScript/forks",
    keys_url:
      "https://api.github.com/repos/NativeScript/NativeScript/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/NativeScript/NativeScript/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/NativeScript/NativeScript/teams",
    hooks_url: "https://api.github.com/repos/NativeScript/NativeScript/hooks",
    issue_events_url:
      "https://api.github.com/repos/NativeScript/NativeScript/issues/events{/number}",
    events_url: "https://api.github.com/repos/NativeScript/NativeScript/events",
    assignees_url:
      "https://api.github.com/repos/NativeScript/NativeScript/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/NativeScript/NativeScript/branches{/branch}",
    tags_url: "https://api.github.com/repos/NativeScript/NativeScript/tags",
    blobs_url:
      "https://api.github.com/repos/NativeScript/NativeScript/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/NativeScript/NativeScript/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/NativeScript/NativeScript/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/NativeScript/NativeScript/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/NativeScript/NativeScript/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/NativeScript/NativeScript/languages",
    stargazers_url:
      "https://api.github.com/repos/NativeScript/NativeScript/stargazers",
    contributors_url:
      "https://api.github.com/repos/NativeScript/NativeScript/contributors",
    subscribers_url:
      "https://api.github.com/repos/NativeScript/NativeScript/subscribers",
    subscription_url:
      "https://api.github.com/repos/NativeScript/NativeScript/subscription",
    commits_url:
      "https://api.github.com/repos/NativeScript/NativeScript/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/NativeScript/NativeScript/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/NativeScript/NativeScript/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/NativeScript/NativeScript/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/NativeScript/NativeScript/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/NativeScript/NativeScript/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/NativeScript/NativeScript/merges",
    archive_url:
      "https://api.github.com/repos/NativeScript/NativeScript/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/NativeScript/NativeScript/downloads",
    issues_url:
      "https://api.github.com/repos/NativeScript/NativeScript/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/NativeScript/NativeScript/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/NativeScript/NativeScript/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/NativeScript/NativeScript/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/NativeScript/NativeScript/labels{/name}",
    releases_url:
      "https://api.github.com/repos/NativeScript/NativeScript/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/NativeScript/NativeScript/deployments",
    created_at: "2015-03-01T09:47:08Z",
    updated_at: "2023-08-29T20:41:03Z",
    pushed_at: "2023-08-27T22:32:11Z",
    git_url: "git://github.com/NativeScript/NativeScript.git",
    ssh_url: "git@github.com:NativeScript/NativeScript.git",
    clone_url: "https://github.com/NativeScript/NativeScript.git",
    svn_url: "https://github.com/NativeScript/NativeScript",
    homepage: "https://nativescript.org",
    size: 124221,
    stargazers_count: 22891,
    watchers_count: 22891,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 1660,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 949,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "android",
      "angular",
      "capacitor",
      "cross-platform",
      "flutter",
      "hacktoberfest",
      "ionic",
      "ios",
      "java",
      "javascript",
      "kotlin",
      "nativescript",
      "objective-c",
      "react",
      "solidjs",
      "svelte",
      "swift",
      "swiftui",
      "typescript",
      "vue",
    ],
    visibility: "public",
    forks: 1660,
    open_issues: 949,
    watchers: 22891,
    default_branch: "main",
    score: 1,
  },
  {
    id: 63226588,
    node_id: "MDEwOlJlcG9zaXRvcnk2MzIyNjU4OA==",
    name: "react-admin",
    full_name: "marmelab/react-admin",
    private: false,
    owner: {
      login: "marmelab",
      id: 3116319,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMxMTYzMTk=",
      avatar_url: "https://avatars.githubusercontent.com/u/3116319?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/marmelab",
      html_url: "https://github.com/marmelab",
      followers_url: "https://api.github.com/users/marmelab/followers",
      following_url:
        "https://api.github.com/users/marmelab/following{/other_user}",
      gists_url: "https://api.github.com/users/marmelab/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/marmelab/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/marmelab/subscriptions",
      organizations_url: "https://api.github.com/users/marmelab/orgs",
      repos_url: "https://api.github.com/users/marmelab/repos",
      events_url: "https://api.github.com/users/marmelab/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/marmelab/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/marmelab/react-admin",
    description:
      "A frontend Framework for building B2B applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design",
    fork: false,
    url: "https://api.github.com/repos/marmelab/react-admin",
    forks_url: "https://api.github.com/repos/marmelab/react-admin/forks",
    keys_url: "https://api.github.com/repos/marmelab/react-admin/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/marmelab/react-admin/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/marmelab/react-admin/teams",
    hooks_url: "https://api.github.com/repos/marmelab/react-admin/hooks",
    issue_events_url:
      "https://api.github.com/repos/marmelab/react-admin/issues/events{/number}",
    events_url: "https://api.github.com/repos/marmelab/react-admin/events",
    assignees_url:
      "https://api.github.com/repos/marmelab/react-admin/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/marmelab/react-admin/branches{/branch}",
    tags_url: "https://api.github.com/repos/marmelab/react-admin/tags",
    blobs_url:
      "https://api.github.com/repos/marmelab/react-admin/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/marmelab/react-admin/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/marmelab/react-admin/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/marmelab/react-admin/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/marmelab/react-admin/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/marmelab/react-admin/languages",
    stargazers_url:
      "https://api.github.com/repos/marmelab/react-admin/stargazers",
    contributors_url:
      "https://api.github.com/repos/marmelab/react-admin/contributors",
    subscribers_url:
      "https://api.github.com/repos/marmelab/react-admin/subscribers",
    subscription_url:
      "https://api.github.com/repos/marmelab/react-admin/subscription",
    commits_url:
      "https://api.github.com/repos/marmelab/react-admin/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/marmelab/react-admin/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/marmelab/react-admin/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/marmelab/react-admin/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/marmelab/react-admin/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/marmelab/react-admin/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/marmelab/react-admin/merges",
    archive_url:
      "https://api.github.com/repos/marmelab/react-admin/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/marmelab/react-admin/downloads",
    issues_url:
      "https://api.github.com/repos/marmelab/react-admin/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/marmelab/react-admin/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/marmelab/react-admin/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/marmelab/react-admin/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/marmelab/react-admin/labels{/name}",
    releases_url:
      "https://api.github.com/repos/marmelab/react-admin/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/marmelab/react-admin/deployments",
    created_at: "2016-07-13T07:58:54Z",
    updated_at: "2023-08-29T22:49:19Z",
    pushed_at: "2023-08-29T20:11:50Z",
    git_url: "git://github.com/marmelab/react-admin.git",
    ssh_url: "git@github.com:marmelab/react-admin.git",
    clone_url: "https://github.com/marmelab/react-admin.git",
    svn_url: "https://github.com/marmelab/react-admin",
    homepage: "http://marmelab.com/react-admin",
    size: 357464,
    stargazers_count: 22801,
    watchers_count: 22801,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 5000,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 95,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "admin",
      "admin-dashboard",
      "admin-on-rest",
      "admin-ui",
      "frontend-framework",
      "graphql",
      "material-ui",
      "react",
      "react-admin",
      "reactjs",
      "rest",
      "single-page-app",
    ],
    visibility: "public",
    forks: 5000,
    open_issues: 95,
    watchers: 22801,
    default_branch: "master",
    score: 1,
  },
  {
    id: 80149262,
    node_id: "MDEwOlJlcG9zaXRvcnk4MDE0OTI2Mg==",
    name: "react-navigation",
    full_name: "react-navigation/react-navigation",
    private: false,
    owner: {
      login: "react-navigation",
      id: 29647600,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NjQ3NjAw",
      avatar_url: "https://avatars.githubusercontent.com/u/29647600?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/react-navigation",
      html_url: "https://github.com/react-navigation",
      followers_url: "https://api.github.com/users/react-navigation/followers",
      following_url:
        "https://api.github.com/users/react-navigation/following{/other_user}",
      gists_url:
        "https://api.github.com/users/react-navigation/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/react-navigation/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/react-navigation/subscriptions",
      organizations_url: "https://api.github.com/users/react-navigation/orgs",
      repos_url: "https://api.github.com/users/react-navigation/repos",
      events_url:
        "https://api.github.com/users/react-navigation/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/react-navigation/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/react-navigation/react-navigation",
    description: "Routing and navigation for your React Native apps",
    fork: false,
    url: "https://api.github.com/repos/react-navigation/react-navigation",
    forks_url:
      "https://api.github.com/repos/react-navigation/react-navigation/forks",
    keys_url:
      "https://api.github.com/repos/react-navigation/react-navigation/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/react-navigation/react-navigation/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/react-navigation/react-navigation/teams",
    hooks_url:
      "https://api.github.com/repos/react-navigation/react-navigation/hooks",
    issue_events_url:
      "https://api.github.com/repos/react-navigation/react-navigation/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/react-navigation/react-navigation/events",
    assignees_url:
      "https://api.github.com/repos/react-navigation/react-navigation/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/react-navigation/react-navigation/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/react-navigation/react-navigation/tags",
    blobs_url:
      "https://api.github.com/repos/react-navigation/react-navigation/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/react-navigation/react-navigation/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/react-navigation/react-navigation/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/react-navigation/react-navigation/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/react-navigation/react-navigation/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/react-navigation/react-navigation/languages",
    stargazers_url:
      "https://api.github.com/repos/react-navigation/react-navigation/stargazers",
    contributors_url:
      "https://api.github.com/repos/react-navigation/react-navigation/contributors",
    subscribers_url:
      "https://api.github.com/repos/react-navigation/react-navigation/subscribers",
    subscription_url:
      "https://api.github.com/repos/react-navigation/react-navigation/subscription",
    commits_url:
      "https://api.github.com/repos/react-navigation/react-navigation/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/react-navigation/react-navigation/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/react-navigation/react-navigation/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/react-navigation/react-navigation/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/react-navigation/react-navigation/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/react-navigation/react-navigation/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/react-navigation/react-navigation/merges",
    archive_url:
      "https://api.github.com/repos/react-navigation/react-navigation/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/react-navigation/react-navigation/downloads",
    issues_url:
      "https://api.github.com/repos/react-navigation/react-navigation/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/react-navigation/react-navigation/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/react-navigation/react-navigation/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/react-navigation/react-navigation/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/react-navigation/react-navigation/labels{/name}",
    releases_url:
      "https://api.github.com/repos/react-navigation/react-navigation/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/react-navigation/react-navigation/deployments",
    created_at: "2017-01-26T19:51:40Z",
    updated_at: "2023-08-29T21:17:23Z",
    pushed_at: "2023-08-29T21:06:29Z",
    git_url: "git://github.com/react-navigation/react-navigation.git",
    ssh_url: "git@github.com:react-navigation/react-navigation.git",
    clone_url: "https://github.com/react-navigation/react-navigation.git",
    svn_url: "https://github.com/react-navigation/react-navigation",
    homepage: "https://reactnavigation.org",
    size: 62117,
    stargazers_count: 22685,
    watchers_count: 22685,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 4955,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 696,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "hacktoberfest",
      "navigation",
      "react",
      "react-native",
      "react-navigation",
    ],
    visibility: "public",
    forks: 4955,
    open_issues: 696,
    watchers: 22685,
    default_branch: "main",
    score: 1,
  },
  {
    id: 52113921,
    node_id: "MDEwOlJlcG9zaXRvcnk1MjExMzkyMQ==",
    name: "draft-js",
    full_name: "facebookarchive/draft-js",
    private: false,
    owner: {
      login: "facebookarchive",
      id: 7560860,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc1NjA4NjA=",
      avatar_url: "https://avatars.githubusercontent.com/u/7560860?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/facebookarchive",
      html_url: "https://github.com/facebookarchive",
      followers_url: "https://api.github.com/users/facebookarchive/followers",
      following_url:
        "https://api.github.com/users/facebookarchive/following{/other_user}",
      gists_url: "https://api.github.com/users/facebookarchive/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/facebookarchive/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/facebookarchive/subscriptions",
      organizations_url: "https://api.github.com/users/facebookarchive/orgs",
      repos_url: "https://api.github.com/users/facebookarchive/repos",
      events_url:
        "https://api.github.com/users/facebookarchive/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/facebookarchive/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/facebookarchive/draft-js",
    description: "A React framework for building text editors.",
    fork: false,
    url: "https://api.github.com/repos/facebookarchive/draft-js",
    forks_url: "https://api.github.com/repos/facebookarchive/draft-js/forks",
    keys_url:
      "https://api.github.com/repos/facebookarchive/draft-js/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/facebookarchive/draft-js/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/facebookarchive/draft-js/teams",
    hooks_url: "https://api.github.com/repos/facebookarchive/draft-js/hooks",
    issue_events_url:
      "https://api.github.com/repos/facebookarchive/draft-js/issues/events{/number}",
    events_url: "https://api.github.com/repos/facebookarchive/draft-js/events",
    assignees_url:
      "https://api.github.com/repos/facebookarchive/draft-js/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/facebookarchive/draft-js/branches{/branch}",
    tags_url: "https://api.github.com/repos/facebookarchive/draft-js/tags",
    blobs_url:
      "https://api.github.com/repos/facebookarchive/draft-js/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/facebookarchive/draft-js/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/facebookarchive/draft-js/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/facebookarchive/draft-js/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/facebookarchive/draft-js/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/facebookarchive/draft-js/languages",
    stargazers_url:
      "https://api.github.com/repos/facebookarchive/draft-js/stargazers",
    contributors_url:
      "https://api.github.com/repos/facebookarchive/draft-js/contributors",
    subscribers_url:
      "https://api.github.com/repos/facebookarchive/draft-js/subscribers",
    subscription_url:
      "https://api.github.com/repos/facebookarchive/draft-js/subscription",
    commits_url:
      "https://api.github.com/repos/facebookarchive/draft-js/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/facebookarchive/draft-js/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/facebookarchive/draft-js/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/facebookarchive/draft-js/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/facebookarchive/draft-js/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/facebookarchive/draft-js/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/facebookarchive/draft-js/merges",
    archive_url:
      "https://api.github.com/repos/facebookarchive/draft-js/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/facebookarchive/draft-js/downloads",
    issues_url:
      "https://api.github.com/repos/facebookarchive/draft-js/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/facebookarchive/draft-js/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/facebookarchive/draft-js/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/facebookarchive/draft-js/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/facebookarchive/draft-js/labels{/name}",
    releases_url:
      "https://api.github.com/repos/facebookarchive/draft-js/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/facebookarchive/draft-js/deployments",
    created_at: "2016-02-19T20:18:26Z",
    updated_at: "2023-08-29T07:14:32Z",
    pushed_at: "2023-02-06T15:35:05Z",
    git_url: "git://github.com/facebookarchive/draft-js.git",
    ssh_url: "git@github.com:facebookarchive/draft-js.git",
    clone_url: "https://github.com/facebookarchive/draft-js.git",
    svn_url: "https://github.com/facebookarchive/draft-js",
    homepage: "https://draftjs.org/",
    size: 36831,
    stargazers_count: 22479,
    watchers_count: 22479,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 2710,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 957,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2710,
    open_issues: 957,
    watchers: 22479,
    default_branch: "main",
    score: 1,
  },
  {
    id: 71487058,
    node_id: "MDEwOlJlcG9zaXRvcnk3MTQ4NzA1OA==",
    name: "table",
    full_name: "TanStack/table",
    private: false,
    owner: {
      login: "TanStack",
      id: 72518640,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjcyNTE4NjQw",
      avatar_url: "https://avatars.githubusercontent.com/u/72518640?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/TanStack",
      html_url: "https://github.com/TanStack",
      followers_url: "https://api.github.com/users/TanStack/followers",
      following_url:
        "https://api.github.com/users/TanStack/following{/other_user}",
      gists_url: "https://api.github.com/users/TanStack/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/TanStack/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/TanStack/subscriptions",
      organizations_url: "https://api.github.com/users/TanStack/orgs",
      repos_url: "https://api.github.com/users/TanStack/repos",
      events_url: "https://api.github.com/users/TanStack/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/TanStack/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/TanStack/table",
    description:
      "🤖 Headless UI for building powerful tables & datagrids for TS/JS -  React-Table, Vue-Table, Solid-Table, Svelte-Table",
    fork: false,
    url: "https://api.github.com/repos/TanStack/table",
    forks_url: "https://api.github.com/repos/TanStack/table/forks",
    keys_url: "https://api.github.com/repos/TanStack/table/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/TanStack/table/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/TanStack/table/teams",
    hooks_url: "https://api.github.com/repos/TanStack/table/hooks",
    issue_events_url:
      "https://api.github.com/repos/TanStack/table/issues/events{/number}",
    events_url: "https://api.github.com/repos/TanStack/table/events",
    assignees_url:
      "https://api.github.com/repos/TanStack/table/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/TanStack/table/branches{/branch}",
    tags_url: "https://api.github.com/repos/TanStack/table/tags",
    blobs_url: "https://api.github.com/repos/TanStack/table/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/TanStack/table/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/TanStack/table/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/TanStack/table/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/TanStack/table/statuses/{sha}",
    languages_url: "https://api.github.com/repos/TanStack/table/languages",
    stargazers_url: "https://api.github.com/repos/TanStack/table/stargazers",
    contributors_url:
      "https://api.github.com/repos/TanStack/table/contributors",
    subscribers_url: "https://api.github.com/repos/TanStack/table/subscribers",
    subscription_url:
      "https://api.github.com/repos/TanStack/table/subscription",
    commits_url: "https://api.github.com/repos/TanStack/table/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/TanStack/table/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/TanStack/table/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/TanStack/table/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/TanStack/table/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/TanStack/table/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/TanStack/table/merges",
    archive_url:
      "https://api.github.com/repos/TanStack/table/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/TanStack/table/downloads",
    issues_url: "https://api.github.com/repos/TanStack/table/issues{/number}",
    pulls_url: "https://api.github.com/repos/TanStack/table/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/TanStack/table/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/TanStack/table/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/TanStack/table/labels{/name}",
    releases_url: "https://api.github.com/repos/TanStack/table/releases{/id}",
    deployments_url: "https://api.github.com/repos/TanStack/table/deployments",
    created_at: "2016-10-20T17:25:08Z",
    updated_at: "2023-08-29T22:21:11Z",
    pushed_at: "2023-08-29T06:51:21Z",
    git_url: "git://github.com/TanStack/table.git",
    ssh_url: "git@github.com:TanStack/table.git",
    clone_url: "https://github.com/TanStack/table.git",
    svn_url: "https://github.com/TanStack/table",
    homepage: "https://tanstack.com/table",
    size: 21378,
    stargazers_count: 22328,
    watchers_count: 22328,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 2885,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 168,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "datagrid",
      "datagrids",
      "datatable",
      "filtering",
      "grid",
      "grouping",
      "hooks",
      "javascript",
      "pagination",
      "react",
      "reactjs",
      "solid",
      "solidjs",
      "sorting",
      "svelte",
      "sveltejs",
      "table",
      "typescript",
      "vue",
    ],
    visibility: "public",
    forks: 2885,
    open_issues: 168,
    watchers: 22328,
    default_branch: "main",
    score: 1,
  },
  {
    id: 50151075,
    node_id: "MDEwOlJlcG9zaXRvcnk1MDE1MTA3NQ==",
    name: "react-redux-links",
    full_name: "markerikson/react-redux-links",
    private: false,
    owner: {
      login: "markerikson",
      id: 1128784,
      node_id: "MDQ6VXNlcjExMjg3ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1128784?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/markerikson",
      html_url: "https://github.com/markerikson",
      followers_url: "https://api.github.com/users/markerikson/followers",
      following_url:
        "https://api.github.com/users/markerikson/following{/other_user}",
      gists_url: "https://api.github.com/users/markerikson/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/markerikson/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/markerikson/subscriptions",
      organizations_url: "https://api.github.com/users/markerikson/orgs",
      repos_url: "https://api.github.com/users/markerikson/repos",
      events_url: "https://api.github.com/users/markerikson/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/markerikson/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/markerikson/react-redux-links",
    description:
      "Curated tutorial and resource links I've collected on React, Redux, ES6, and more",
    fork: false,
    url: "https://api.github.com/repos/markerikson/react-redux-links",
    forks_url:
      "https://api.github.com/repos/markerikson/react-redux-links/forks",
    keys_url:
      "https://api.github.com/repos/markerikson/react-redux-links/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/markerikson/react-redux-links/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/markerikson/react-redux-links/teams",
    hooks_url:
      "https://api.github.com/repos/markerikson/react-redux-links/hooks",
    issue_events_url:
      "https://api.github.com/repos/markerikson/react-redux-links/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/markerikson/react-redux-links/events",
    assignees_url:
      "https://api.github.com/repos/markerikson/react-redux-links/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/markerikson/react-redux-links/branches{/branch}",
    tags_url: "https://api.github.com/repos/markerikson/react-redux-links/tags",
    blobs_url:
      "https://api.github.com/repos/markerikson/react-redux-links/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/markerikson/react-redux-links/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/markerikson/react-redux-links/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/markerikson/react-redux-links/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/markerikson/react-redux-links/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/markerikson/react-redux-links/languages",
    stargazers_url:
      "https://api.github.com/repos/markerikson/react-redux-links/stargazers",
    contributors_url:
      "https://api.github.com/repos/markerikson/react-redux-links/contributors",
    subscribers_url:
      "https://api.github.com/repos/markerikson/react-redux-links/subscribers",
    subscription_url:
      "https://api.github.com/repos/markerikson/react-redux-links/subscription",
    commits_url:
      "https://api.github.com/repos/markerikson/react-redux-links/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/markerikson/react-redux-links/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/markerikson/react-redux-links/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/markerikson/react-redux-links/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/markerikson/react-redux-links/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/markerikson/react-redux-links/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/markerikson/react-redux-links/merges",
    archive_url:
      "https://api.github.com/repos/markerikson/react-redux-links/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/markerikson/react-redux-links/downloads",
    issues_url:
      "https://api.github.com/repos/markerikson/react-redux-links/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/markerikson/react-redux-links/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/markerikson/react-redux-links/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/markerikson/react-redux-links/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/markerikson/react-redux-links/labels{/name}",
    releases_url:
      "https://api.github.com/repos/markerikson/react-redux-links/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/markerikson/react-redux-links/deployments",
    created_at: "2016-01-22T02:10:28Z",
    updated_at: "2023-08-29T21:46:44Z",
    pushed_at: "2022-08-19T07:53:14Z",
    git_url: "git://github.com/markerikson/react-redux-links.git",
    ssh_url: "git@github.com:markerikson/react-redux-links.git",
    clone_url: "https://github.com/markerikson/react-redux-links.git",
    svn_url: "https://github.com/markerikson/react-redux-links",
    homepage: "",
    size: 1588,
    stargazers_count: 22262,
    watchers_count: 22262,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2502,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 32,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["es6", "javascript", "react", "redux", "webpack"],
    visibility: "public",
    forks: 2502,
    open_issues: 32,
    watchers: 22262,
    default_branch: "master",
    score: 1,
  },
  {
    id: 18840003,
    node_id: "MDEwOlJlcG9zaXRvcnkxODg0MDAwMw==",
    name: "react-starter-kit",
    full_name: "kriasoft/react-starter-kit",
    private: false,
    owner: {
      login: "kriasoft",
      id: 773036,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc3MzAzNg==",
      avatar_url: "https://avatars.githubusercontent.com/u/773036?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kriasoft",
      html_url: "https://github.com/kriasoft",
      followers_url: "https://api.github.com/users/kriasoft/followers",
      following_url:
        "https://api.github.com/users/kriasoft/following{/other_user}",
      gists_url: "https://api.github.com/users/kriasoft/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kriasoft/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kriasoft/subscriptions",
      organizations_url: "https://api.github.com/users/kriasoft/orgs",
      repos_url: "https://api.github.com/users/kriasoft/repos",
      events_url: "https://api.github.com/users/kriasoft/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kriasoft/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/kriasoft/react-starter-kit",
    description:
      "The web's most popular Jamstack front-end template (boilerplate) for building web applications with React",
    fork: false,
    url: "https://api.github.com/repos/kriasoft/react-starter-kit",
    forks_url: "https://api.github.com/repos/kriasoft/react-starter-kit/forks",
    keys_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kriasoft/react-starter-kit/teams",
    hooks_url: "https://api.github.com/repos/kriasoft/react-starter-kit/hooks",
    issue_events_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/events",
    assignees_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/branches{/branch}",
    tags_url: "https://api.github.com/repos/kriasoft/react-starter-kit/tags",
    blobs_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/languages",
    stargazers_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/stargazers",
    contributors_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/contributors",
    subscribers_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/subscribers",
    subscription_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/subscription",
    commits_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/merges",
    archive_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/downloads",
    issues_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kriasoft/react-starter-kit/deployments",
    created_at: "2014-04-16T13:08:18Z",
    updated_at: "2023-08-29T11:35:19Z",
    pushed_at: "2023-08-21T19:58:24Z",
    git_url: "git://github.com/kriasoft/react-starter-kit.git",
    ssh_url: "git@github.com:kriasoft/react-starter-kit.git",
    clone_url: "https://github.com/kriasoft/react-starter-kit.git",
    svn_url: "https://github.com/kriasoft/react-starter-kit",
    homepage: "https://reactstarter.com",
    size: 17996,
    stargazers_count: 22084,
    watchers_count: 22084,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 4173,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 6,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: true,
    web_commit_signoff_required: false,
    topics: [
      "boilerplate",
      "cloudflare",
      "firebase",
      "graphql",
      "hackathon",
      "hono",
      "javascript",
      "material-ui",
      "nodejs",
      "react",
      "reactjs",
      "recoil",
      "relay",
      "scaffolding",
      "serverless",
      "starter-kit",
      "template",
      "typescript",
      "vite",
      "vitest",
    ],
    visibility: "public",
    forks: 4173,
    open_issues: 6,
    watchers: 22084,
    default_branch: "main",
    score: 1,
  },
  {
    id: 195226340,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTUyMjYzNDA=",
    name: "javascript-testing-best-practices",
    full_name: "goldbergyoni/javascript-testing-best-practices",
    private: false,
    owner: {
      login: "goldbergyoni",
      id: 8571500,
      node_id: "MDQ6VXNlcjg1NzE1MDA=",
      avatar_url: "https://avatars.githubusercontent.com/u/8571500?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/goldbergyoni",
      html_url: "https://github.com/goldbergyoni",
      followers_url: "https://api.github.com/users/goldbergyoni/followers",
      following_url:
        "https://api.github.com/users/goldbergyoni/following{/other_user}",
      gists_url: "https://api.github.com/users/goldbergyoni/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/goldbergyoni/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/goldbergyoni/subscriptions",
      organizations_url: "https://api.github.com/users/goldbergyoni/orgs",
      repos_url: "https://api.github.com/users/goldbergyoni/repos",
      events_url: "https://api.github.com/users/goldbergyoni/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/goldbergyoni/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/goldbergyoni/javascript-testing-best-practices",
    description:
      "📗🌐 🚢 Comprehensive and exhaustive JavaScript & Node.js testing best practices (July 2023)",
    fork: false,
    url: "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices",
    forks_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/forks",
    keys_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/teams",
    hooks_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/hooks",
    issue_events_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/events",
    assignees_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/tags",
    blobs_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/languages",
    stargazers_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/stargazers",
    contributors_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/contributors",
    subscribers_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/subscribers",
    subscription_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/subscription",
    commits_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/merges",
    archive_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/downloads",
    issues_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/labels{/name}",
    releases_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/goldbergyoni/javascript-testing-best-practices/deployments",
    created_at: "2019-07-04T11:08:12Z",
    updated_at: "2023-08-29T21:47:44Z",
    pushed_at: "2023-08-13T04:27:14Z",
    git_url:
      "git://github.com/goldbergyoni/javascript-testing-best-practices.git",
    ssh_url:
      "git@github.com:goldbergyoni/javascript-testing-best-practices.git",
    clone_url:
      "https://github.com/goldbergyoni/javascript-testing-best-practices.git",
    svn_url:
      "https://github.com/goldbergyoni/javascript-testing-best-practices",
    homepage: "https://testjavascript.com/",
    size: 10417,
    stargazers_count: 22072,
    watchers_count: 22072,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1964,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 61,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "chai",
      "ci",
      "cicd",
      "contract-testing",
      "e2e",
      "e2e-tests",
      "express",
      "integration-testing",
      "javascript",
      "jest",
      "mocha",
      "mutation",
      "mutation-testing",
      "nodejs",
      "react",
      "test",
      "testing",
      "unittest",
    ],
    visibility: "public",
    forks: 1964,
    open_issues: 61,
    watchers: 22072,
    default_branch: "master",
    score: 1,
  },
  {
    id: 295992065,
    node_id: "MDEwOlJlcG9zaXRvcnkyOTU5OTIwNjU=",
    name: "headlessui",
    full_name: "tailwindlabs/headlessui",
    private: false,
    owner: {
      login: "tailwindlabs",
      id: 67109815,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY3MTA5ODE1",
      avatar_url: "https://avatars.githubusercontent.com/u/67109815?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tailwindlabs",
      html_url: "https://github.com/tailwindlabs",
      followers_url: "https://api.github.com/users/tailwindlabs/followers",
      following_url:
        "https://api.github.com/users/tailwindlabs/following{/other_user}",
      gists_url: "https://api.github.com/users/tailwindlabs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tailwindlabs/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/tailwindlabs/subscriptions",
      organizations_url: "https://api.github.com/users/tailwindlabs/orgs",
      repos_url: "https://api.github.com/users/tailwindlabs/repos",
      events_url: "https://api.github.com/users/tailwindlabs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tailwindlabs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/tailwindlabs/headlessui",
    description:
      "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
    fork: false,
    url: "https://api.github.com/repos/tailwindlabs/headlessui",
    forks_url: "https://api.github.com/repos/tailwindlabs/headlessui/forks",
    keys_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tailwindlabs/headlessui/teams",
    hooks_url: "https://api.github.com/repos/tailwindlabs/headlessui/hooks",
    issue_events_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/issues/events{/number}",
    events_url: "https://api.github.com/repos/tailwindlabs/headlessui/events",
    assignees_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/branches{/branch}",
    tags_url: "https://api.github.com/repos/tailwindlabs/headlessui/tags",
    blobs_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/languages",
    stargazers_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/stargazers",
    contributors_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/contributors",
    subscribers_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/subscribers",
    subscription_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/subscription",
    commits_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tailwindlabs/headlessui/merges",
    archive_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/downloads",
    issues_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tailwindlabs/headlessui/deployments",
    created_at: "2020-09-16T09:53:09Z",
    updated_at: "2023-08-29T21:50:04Z",
    pushed_at: "2023-08-29T16:43:12Z",
    git_url: "git://github.com/tailwindlabs/headlessui.git",
    ssh_url: "git@github.com:tailwindlabs/headlessui.git",
    clone_url: "https://github.com/tailwindlabs/headlessui.git",
    svn_url: "https://github.com/tailwindlabs/headlessui",
    homepage: "https://headlessui.com",
    size: 4989,
    stargazers_count: 21962,
    watchers_count: 21962,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 901,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 12,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "a11y",
      "accessibility",
      "components",
      "headless-ui",
      "headlessui",
      "react",
      "tailwindcss",
      "vue",
    ],
    visibility: "public",
    forks: 901,
    open_issues: 12,
    watchers: 21962,
    default_branch: "main",
    score: 1,
  },
  {
    id: 15480067,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTQ4MDA2Nw==",
    name: "react-bootstrap",
    full_name: "react-bootstrap/react-bootstrap",
    private: false,
    owner: {
      login: "react-bootstrap",
      id: 6853419,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY4NTM0MTk=",
      avatar_url: "https://avatars.githubusercontent.com/u/6853419?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/react-bootstrap",
      html_url: "https://github.com/react-bootstrap",
      followers_url: "https://api.github.com/users/react-bootstrap/followers",
      following_url:
        "https://api.github.com/users/react-bootstrap/following{/other_user}",
      gists_url: "https://api.github.com/users/react-bootstrap/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/react-bootstrap/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/react-bootstrap/subscriptions",
      organizations_url: "https://api.github.com/users/react-bootstrap/orgs",
      repos_url: "https://api.github.com/users/react-bootstrap/repos",
      events_url:
        "https://api.github.com/users/react-bootstrap/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/react-bootstrap/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/react-bootstrap/react-bootstrap",
    description: "Bootstrap components built with React",
    fork: false,
    url: "https://api.github.com/repos/react-bootstrap/react-bootstrap",
    forks_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/forks",
    keys_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/teams",
    hooks_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/hooks",
    issue_events_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/events",
    assignees_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/tags",
    blobs_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/languages",
    stargazers_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/stargazers",
    contributors_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/contributors",
    subscribers_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/subscribers",
    subscription_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/subscription",
    commits_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/merges",
    archive_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/downloads",
    issues_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels{/name}",
    releases_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/react-bootstrap/react-bootstrap/deployments",
    created_at: "2013-12-27T19:06:07Z",
    updated_at: "2023-08-29T16:18:38Z",
    pushed_at: "2023-08-29T03:01:37Z",
    git_url: "git://github.com/react-bootstrap/react-bootstrap.git",
    ssh_url: "git@github.com:react-bootstrap/react-bootstrap.git",
    clone_url: "https://github.com/react-bootstrap/react-bootstrap.git",
    svn_url: "https://github.com/react-bootstrap/react-bootstrap",
    homepage: "https://react-bootstrap.github.io/",
    size: 31089,
    stargazers_count: 21896,
    watchers_count: 21896,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 3571,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 152,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "bootstrap",
      "hacktoberfest",
      "javascript",
      "react",
      "react-components",
      "typescript",
    ],
    visibility: "public",
    forks: 3571,
    open_issues: 152,
    watchers: 21896,
    default_branch: "master",
    score: 1,
  },
  {
    id: 162815665,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjI4MTU2NjU=",
    name: "notable",
    full_name: "notable/notable",
    private: false,
    owner: {
      login: "notable",
      id: 46467536,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ2NDY3NTM2",
      avatar_url: "https://avatars.githubusercontent.com/u/46467536?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/notable",
      html_url: "https://github.com/notable",
      followers_url: "https://api.github.com/users/notable/followers",
      following_url:
        "https://api.github.com/users/notable/following{/other_user}",
      gists_url: "https://api.github.com/users/notable/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/notable/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/notable/subscriptions",
      organizations_url: "https://api.github.com/users/notable/orgs",
      repos_url: "https://api.github.com/users/notable/repos",
      events_url: "https://api.github.com/users/notable/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/notable/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/notable/notable",
    description: "The Markdown-based note-taking app that doesn't suck.",
    fork: false,
    url: "https://api.github.com/repos/notable/notable",
    forks_url: "https://api.github.com/repos/notable/notable/forks",
    keys_url: "https://api.github.com/repos/notable/notable/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/notable/notable/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/notable/notable/teams",
    hooks_url: "https://api.github.com/repos/notable/notable/hooks",
    issue_events_url:
      "https://api.github.com/repos/notable/notable/issues/events{/number}",
    events_url: "https://api.github.com/repos/notable/notable/events",
    assignees_url:
      "https://api.github.com/repos/notable/notable/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/notable/notable/branches{/branch}",
    tags_url: "https://api.github.com/repos/notable/notable/tags",
    blobs_url: "https://api.github.com/repos/notable/notable/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/notable/notable/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/notable/notable/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/notable/notable/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/notable/notable/statuses/{sha}",
    languages_url: "https://api.github.com/repos/notable/notable/languages",
    stargazers_url: "https://api.github.com/repos/notable/notable/stargazers",
    contributors_url:
      "https://api.github.com/repos/notable/notable/contributors",
    subscribers_url: "https://api.github.com/repos/notable/notable/subscribers",
    subscription_url:
      "https://api.github.com/repos/notable/notable/subscription",
    commits_url: "https://api.github.com/repos/notable/notable/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/notable/notable/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/notable/notable/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/notable/notable/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/notable/notable/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/notable/notable/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/notable/notable/merges",
    archive_url:
      "https://api.github.com/repos/notable/notable/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/notable/notable/downloads",
    issues_url: "https://api.github.com/repos/notable/notable/issues{/number}",
    pulls_url: "https://api.github.com/repos/notable/notable/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/notable/notable/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/notable/notable/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/notable/notable/labels{/name}",
    releases_url: "https://api.github.com/repos/notable/notable/releases{/id}",
    deployments_url: "https://api.github.com/repos/notable/notable/deployments",
    created_at: "2018-12-22T13:57:19Z",
    updated_at: "2023-08-29T20:31:08Z",
    pushed_at: "2023-03-08T00:05:14Z",
    git_url: "git://github.com/notable/notable.git",
    ssh_url: "git@github.com:notable/notable.git",
    clone_url: "https://github.com/notable/notable.git",
    svn_url: "https://github.com/notable/notable",
    homepage: "https://notable.app",
    size: 8943,
    stargazers_count: 21896,
    watchers_count: 21896,
    language: null,
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1127,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 689,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cross-platform",
      "electron",
      "linux",
      "mac",
      "markdown",
      "note",
      "react",
      "windows",
    ],
    visibility: "public",
    forks: 1127,
    open_issues: 689,
    watchers: 21896,
    default_branch: "master",
    score: 1,
  },
  {
    id: 35810174,
    node_id: "MDEwOlJlcG9zaXRvcnkzNTgxMDE3NA==",
    name: "electron-react-boilerplate",
    full_name: "electron-react-boilerplate/electron-react-boilerplate",
    private: false,
    owner: {
      login: "electron-react-boilerplate",
      id: 28049053,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjI4MDQ5MDUz",
      avatar_url: "https://avatars.githubusercontent.com/u/28049053?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/electron-react-boilerplate",
      html_url: "https://github.com/electron-react-boilerplate",
      followers_url:
        "https://api.github.com/users/electron-react-boilerplate/followers",
      following_url:
        "https://api.github.com/users/electron-react-boilerplate/following{/other_user}",
      gists_url:
        "https://api.github.com/users/electron-react-boilerplate/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/electron-react-boilerplate/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/electron-react-boilerplate/subscriptions",
      organizations_url:
        "https://api.github.com/users/electron-react-boilerplate/orgs",
      repos_url:
        "https://api.github.com/users/electron-react-boilerplate/repos",
      events_url:
        "https://api.github.com/users/electron-react-boilerplate/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/electron-react-boilerplate/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url:
      "https://github.com/electron-react-boilerplate/electron-react-boilerplate",
    description: "A Foundation for Scalable Cross-Platform Apps",
    fork: false,
    url: "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate",
    forks_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/forks",
    keys_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/teams",
    hooks_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/hooks",
    issue_events_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/events",
    assignees_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/tags",
    blobs_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/languages",
    stargazers_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/stargazers",
    contributors_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/contributors",
    subscribers_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/subscribers",
    subscription_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/subscription",
    commits_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/merges",
    archive_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/downloads",
    issues_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/labels{/name}",
    releases_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/electron-react-boilerplate/electron-react-boilerplate/deployments",
    created_at: "2015-05-18T09:54:57Z",
    updated_at: "2023-08-29T10:52:06Z",
    pushed_at: "2023-08-06T10:07:12Z",
    git_url:
      "git://github.com/electron-react-boilerplate/electron-react-boilerplate.git",
    ssh_url:
      "git@github.com:electron-react-boilerplate/electron-react-boilerplate.git",
    clone_url:
      "https://github.com/electron-react-boilerplate/electron-react-boilerplate.git",
    svn_url:
      "https://github.com/electron-react-boilerplate/electron-react-boilerplate",
    homepage: "https://electron-react-boilerplate.js.org/",
    size: 17166,
    stargazers_count: 21761,
    watchers_count: 21761,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 3714,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 82,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: true,
    web_commit_signoff_required: false,
    topics: [
      "babel",
      "boilerplate",
      "electron",
      "eslint",
      "javascript",
      "react",
      "typescript",
      "webpack",
    ],
    visibility: "public",
    forks: 3714,
    open_issues: 82,
    watchers: 21761,
    default_branch: "main",
    score: 1,
  },
  {
    id: 37246537,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzI0NjUzNw==",
    name: "react-motion",
    full_name: "chenglou/react-motion",
    private: false,
    owner: {
      login: "chenglou",
      id: 1909539,
      node_id: "MDQ6VXNlcjE5MDk1Mzk=",
      avatar_url: "https://avatars.githubusercontent.com/u/1909539?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chenglou",
      html_url: "https://github.com/chenglou",
      followers_url: "https://api.github.com/users/chenglou/followers",
      following_url:
        "https://api.github.com/users/chenglou/following{/other_user}",
      gists_url: "https://api.github.com/users/chenglou/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chenglou/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/chenglou/subscriptions",
      organizations_url: "https://api.github.com/users/chenglou/orgs",
      repos_url: "https://api.github.com/users/chenglou/repos",
      events_url: "https://api.github.com/users/chenglou/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chenglou/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/chenglou/react-motion",
    description: "A spring that solves your animation problems.",
    fork: false,
    url: "https://api.github.com/repos/chenglou/react-motion",
    forks_url: "https://api.github.com/repos/chenglou/react-motion/forks",
    keys_url:
      "https://api.github.com/repos/chenglou/react-motion/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/chenglou/react-motion/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/chenglou/react-motion/teams",
    hooks_url: "https://api.github.com/repos/chenglou/react-motion/hooks",
    issue_events_url:
      "https://api.github.com/repos/chenglou/react-motion/issues/events{/number}",
    events_url: "https://api.github.com/repos/chenglou/react-motion/events",
    assignees_url:
      "https://api.github.com/repos/chenglou/react-motion/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/chenglou/react-motion/branches{/branch}",
    tags_url: "https://api.github.com/repos/chenglou/react-motion/tags",
    blobs_url:
      "https://api.github.com/repos/chenglou/react-motion/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/chenglou/react-motion/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/chenglou/react-motion/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/chenglou/react-motion/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/chenglou/react-motion/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/chenglou/react-motion/languages",
    stargazers_url:
      "https://api.github.com/repos/chenglou/react-motion/stargazers",
    contributors_url:
      "https://api.github.com/repos/chenglou/react-motion/contributors",
    subscribers_url:
      "https://api.github.com/repos/chenglou/react-motion/subscribers",
    subscription_url:
      "https://api.github.com/repos/chenglou/react-motion/subscription",
    commits_url:
      "https://api.github.com/repos/chenglou/react-motion/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/chenglou/react-motion/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/chenglou/react-motion/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/chenglou/react-motion/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/chenglou/react-motion/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/chenglou/react-motion/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/chenglou/react-motion/merges",
    archive_url:
      "https://api.github.com/repos/chenglou/react-motion/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/chenglou/react-motion/downloads",
    issues_url:
      "https://api.github.com/repos/chenglou/react-motion/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/chenglou/react-motion/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/chenglou/react-motion/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/chenglou/react-motion/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/chenglou/react-motion/labels{/name}",
    releases_url:
      "https://api.github.com/repos/chenglou/react-motion/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/chenglou/react-motion/deployments",
    created_at: "2015-06-11T07:38:23Z",
    updated_at: "2023-08-29T03:00:25Z",
    pushed_at: "2022-12-08T17:31:42Z",
    git_url: "git://github.com/chenglou/react-motion.git",
    ssh_url: "git@github.com:chenglou/react-motion.git",
    clone_url: "https://github.com/chenglou/react-motion.git",
    svn_url: "https://github.com/chenglou/react-motion",
    homepage: "",
    size: 5349,
    stargazers_count: 21544,
    watchers_count: 21544,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 1211,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 193,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1211,
    open_issues: 193,
    watchers: 21544,
    default_branch: "master",
    score: 1,
  },
  {
    id: 471728341,
    node_id: "R_kgDOHB4A1Q",
    name: "lenster",
    full_name: "lensterxyz/lenster",
    private: false,
    owner: {
      login: "lensterxyz",
      id: 103585522,
      node_id: "O_kgDOBiyW8g",
      avatar_url: "https://avatars.githubusercontent.com/u/103585522?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/lensterxyz",
      html_url: "https://github.com/lensterxyz",
      followers_url: "https://api.github.com/users/lensterxyz/followers",
      following_url:
        "https://api.github.com/users/lensterxyz/following{/other_user}",
      gists_url: "https://api.github.com/users/lensterxyz/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/lensterxyz/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/lensterxyz/subscriptions",
      organizations_url: "https://api.github.com/users/lensterxyz/orgs",
      repos_url: "https://api.github.com/users/lensterxyz/repos",
      events_url: "https://api.github.com/users/lensterxyz/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/lensterxyz/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/lensterxyz/lenster",
    description:
      "Lenster is a decentralized and permissionless social media app built with Lens Protocol 🌿",
    fork: false,
    url: "https://api.github.com/repos/lensterxyz/lenster",
    forks_url: "https://api.github.com/repos/lensterxyz/lenster/forks",
    keys_url: "https://api.github.com/repos/lensterxyz/lenster/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/lensterxyz/lenster/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/lensterxyz/lenster/teams",
    hooks_url: "https://api.github.com/repos/lensterxyz/lenster/hooks",
    issue_events_url:
      "https://api.github.com/repos/lensterxyz/lenster/issues/events{/number}",
    events_url: "https://api.github.com/repos/lensterxyz/lenster/events",
    assignees_url:
      "https://api.github.com/repos/lensterxyz/lenster/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/lensterxyz/lenster/branches{/branch}",
    tags_url: "https://api.github.com/repos/lensterxyz/lenster/tags",
    blobs_url:
      "https://api.github.com/repos/lensterxyz/lenster/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/lensterxyz/lenster/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/lensterxyz/lenster/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/lensterxyz/lenster/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/lensterxyz/lenster/statuses/{sha}",
    languages_url: "https://api.github.com/repos/lensterxyz/lenster/languages",
    stargazers_url:
      "https://api.github.com/repos/lensterxyz/lenster/stargazers",
    contributors_url:
      "https://api.github.com/repos/lensterxyz/lenster/contributors",
    subscribers_url:
      "https://api.github.com/repos/lensterxyz/lenster/subscribers",
    subscription_url:
      "https://api.github.com/repos/lensterxyz/lenster/subscription",
    commits_url:
      "https://api.github.com/repos/lensterxyz/lenster/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/lensterxyz/lenster/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/lensterxyz/lenster/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/lensterxyz/lenster/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/lensterxyz/lenster/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/lensterxyz/lenster/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/lensterxyz/lenster/merges",
    archive_url:
      "https://api.github.com/repos/lensterxyz/lenster/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/lensterxyz/lenster/downloads",
    issues_url:
      "https://api.github.com/repos/lensterxyz/lenster/issues{/number}",
    pulls_url: "https://api.github.com/repos/lensterxyz/lenster/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/lensterxyz/lenster/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/lensterxyz/lenster/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/lensterxyz/lenster/labels{/name}",
    releases_url:
      "https://api.github.com/repos/lensterxyz/lenster/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/lensterxyz/lenster/deployments",
    created_at: "2022-03-19T15:01:46Z",
    updated_at: "2023-08-30T00:05:11Z",
    pushed_at: "2023-08-29T19:50:22Z",
    git_url: "git://github.com/lensterxyz/lenster.git",
    ssh_url: "git@github.com:lensterxyz/lenster.git",
    clone_url: "https://github.com/lensterxyz/lenster.git",
    svn_url: "https://github.com/lensterxyz/lenster",
    homepage: "https://lenster.xyz",
    size: 39122,
    stargazers_count: 21088,
    watchers_count: 21088,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 1289,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 119,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "arweave",
      "blockchain",
      "crypto",
      "dapp",
      "graphql",
      "hacktoberfest",
      "ipfs",
      "lens-protocol",
      "nextjs",
      "playwright",
      "polygon",
      "react",
      "social-media",
      "tailwindcss",
      "turborepo",
      "typescript",
      "wagmi",
      "web3",
    ],
    visibility: "public",
    forks: 1289,
    open_issues: 119,
    watchers: 21088,
    default_branch: "main",
    score: 1,
  },
  {
    id: 327628682,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjc2Mjg2ODI=",
    name: "mantine",
    full_name: "mantinedev/mantine",
    private: false,
    owner: {
      login: "mantinedev",
      id: 79146003,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc5MTQ2MDAz",
      avatar_url: "https://avatars.githubusercontent.com/u/79146003?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mantinedev",
      html_url: "https://github.com/mantinedev",
      followers_url: "https://api.github.com/users/mantinedev/followers",
      following_url:
        "https://api.github.com/users/mantinedev/following{/other_user}",
      gists_url: "https://api.github.com/users/mantinedev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mantinedev/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/mantinedev/subscriptions",
      organizations_url: "https://api.github.com/users/mantinedev/orgs",
      repos_url: "https://api.github.com/users/mantinedev/repos",
      events_url: "https://api.github.com/users/mantinedev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mantinedev/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/mantinedev/mantine",
    description: "A fully featured React components library",
    fork: false,
    url: "https://api.github.com/repos/mantinedev/mantine",
    forks_url: "https://api.github.com/repos/mantinedev/mantine/forks",
    keys_url: "https://api.github.com/repos/mantinedev/mantine/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/mantinedev/mantine/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/mantinedev/mantine/teams",
    hooks_url: "https://api.github.com/repos/mantinedev/mantine/hooks",
    issue_events_url:
      "https://api.github.com/repos/mantinedev/mantine/issues/events{/number}",
    events_url: "https://api.github.com/repos/mantinedev/mantine/events",
    assignees_url:
      "https://api.github.com/repos/mantinedev/mantine/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/mantinedev/mantine/branches{/branch}",
    tags_url: "https://api.github.com/repos/mantinedev/mantine/tags",
    blobs_url:
      "https://api.github.com/repos/mantinedev/mantine/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/mantinedev/mantine/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/mantinedev/mantine/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/mantinedev/mantine/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/mantinedev/mantine/statuses/{sha}",
    languages_url: "https://api.github.com/repos/mantinedev/mantine/languages",
    stargazers_url:
      "https://api.github.com/repos/mantinedev/mantine/stargazers",
    contributors_url:
      "https://api.github.com/repos/mantinedev/mantine/contributors",
    subscribers_url:
      "https://api.github.com/repos/mantinedev/mantine/subscribers",
    subscription_url:
      "https://api.github.com/repos/mantinedev/mantine/subscription",
    commits_url:
      "https://api.github.com/repos/mantinedev/mantine/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/mantinedev/mantine/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/mantinedev/mantine/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/mantinedev/mantine/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/mantinedev/mantine/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/mantinedev/mantine/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/mantinedev/mantine/merges",
    archive_url:
      "https://api.github.com/repos/mantinedev/mantine/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/mantinedev/mantine/downloads",
    issues_url:
      "https://api.github.com/repos/mantinedev/mantine/issues{/number}",
    pulls_url: "https://api.github.com/repos/mantinedev/mantine/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/mantinedev/mantine/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/mantinedev/mantine/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/mantinedev/mantine/labels{/name}",
    releases_url:
      "https://api.github.com/repos/mantinedev/mantine/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/mantinedev/mantine/deployments",
    created_at: "2021-01-07T14:02:19Z",
    updated_at: "2023-08-29T21:43:34Z",
    pushed_at: "2023-08-29T12:31:17Z",
    git_url: "git://github.com/mantinedev/mantine.git",
    ssh_url: "git@github.com:mantinedev/mantine.git",
    clone_url: "https://github.com/mantinedev/mantine.git",
    svn_url: "https://github.com/mantinedev/mantine",
    homepage: "https://mantine.dev",
    size: 413484,
    stargazers_count: 21012,
    watchers_count: 21012,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 1476,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 182,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "dark-mode",
      "dark-theme",
      "hooks",
      "react",
      "typescript",
      "uikit",
    ],
    visibility: "public",
    forks: 1476,
    open_issues: 182,
    watchers: 21012,
    default_branch: "master",
    score: 1,
  },
  {
    id: 37153337,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzE1MzMzNw==",
    name: "react-native-web",
    full_name: "necolas/react-native-web",
    private: false,
    owner: {
      login: "necolas",
      id: 239676,
      node_id: "MDQ6VXNlcjIzOTY3Ng==",
      avatar_url: "https://avatars.githubusercontent.com/u/239676?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/necolas",
      html_url: "https://github.com/necolas",
      followers_url: "https://api.github.com/users/necolas/followers",
      following_url:
        "https://api.github.com/users/necolas/following{/other_user}",
      gists_url: "https://api.github.com/users/necolas/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/necolas/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/necolas/subscriptions",
      organizations_url: "https://api.github.com/users/necolas/orgs",
      repos_url: "https://api.github.com/users/necolas/repos",
      events_url: "https://api.github.com/users/necolas/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/necolas/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/necolas/react-native-web",
    description: "Cross-platform React UI packages",
    fork: false,
    url: "https://api.github.com/repos/necolas/react-native-web",
    forks_url: "https://api.github.com/repos/necolas/react-native-web/forks",
    keys_url:
      "https://api.github.com/repos/necolas/react-native-web/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/necolas/react-native-web/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/necolas/react-native-web/teams",
    hooks_url: "https://api.github.com/repos/necolas/react-native-web/hooks",
    issue_events_url:
      "https://api.github.com/repos/necolas/react-native-web/issues/events{/number}",
    events_url: "https://api.github.com/repos/necolas/react-native-web/events",
    assignees_url:
      "https://api.github.com/repos/necolas/react-native-web/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/necolas/react-native-web/branches{/branch}",
    tags_url: "https://api.github.com/repos/necolas/react-native-web/tags",
    blobs_url:
      "https://api.github.com/repos/necolas/react-native-web/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/necolas/react-native-web/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/necolas/react-native-web/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/necolas/react-native-web/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/necolas/react-native-web/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/necolas/react-native-web/languages",
    stargazers_url:
      "https://api.github.com/repos/necolas/react-native-web/stargazers",
    contributors_url:
      "https://api.github.com/repos/necolas/react-native-web/contributors",
    subscribers_url:
      "https://api.github.com/repos/necolas/react-native-web/subscribers",
    subscription_url:
      "https://api.github.com/repos/necolas/react-native-web/subscription",
    commits_url:
      "https://api.github.com/repos/necolas/react-native-web/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/necolas/react-native-web/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/necolas/react-native-web/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/necolas/react-native-web/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/necolas/react-native-web/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/necolas/react-native-web/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/necolas/react-native-web/merges",
    archive_url:
      "https://api.github.com/repos/necolas/react-native-web/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/necolas/react-native-web/downloads",
    issues_url:
      "https://api.github.com/repos/necolas/react-native-web/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/necolas/react-native-web/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/necolas/react-native-web/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/necolas/react-native-web/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/necolas/react-native-web/labels{/name}",
    releases_url:
      "https://api.github.com/repos/necolas/react-native-web/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/necolas/react-native-web/deployments",
    created_at: "2015-06-09T19:25:38Z",
    updated_at: "2023-08-29T12:11:00Z",
    pushed_at: "2023-08-28T15:52:45Z",
    git_url: "git://github.com/necolas/react-native-web.git",
    ssh_url: "git@github.com:necolas/react-native-web.git",
    clone_url: "https://github.com/necolas/react-native-web.git",
    svn_url: "https://github.com/necolas/react-native-web",
    homepage: "https://necolas.github.io/react-native-web",
    size: 94622,
    stargazers_count: 20934,
    watchers_count: 20934,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: true,
    forks_count: 1808,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 76,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cross-platform",
      "css-in-js",
      "gui-framework",
      "react",
      "react-components",
      "react-dom",
      "react-native",
      "react-native-web",
      "react-ui",
    ],
    visibility: "public",
    forks: 1808,
    open_issues: 76,
    watchers: 20934,
    default_branch: "master",
    score: 1,
  },
  {
    id: 40345658,
    node_id: "MDEwOlJlcG9zaXRvcnk0MDM0NTY1OA==",
    name: "recharts",
    full_name: "recharts/recharts",
    private: false,
    owner: {
      login: "recharts",
      id: 13690587,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEzNjkwNTg3",
      avatar_url: "https://avatars.githubusercontent.com/u/13690587?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/recharts",
      html_url: "https://github.com/recharts",
      followers_url: "https://api.github.com/users/recharts/followers",
      following_url:
        "https://api.github.com/users/recharts/following{/other_user}",
      gists_url: "https://api.github.com/users/recharts/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/recharts/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/recharts/subscriptions",
      organizations_url: "https://api.github.com/users/recharts/orgs",
      repos_url: "https://api.github.com/users/recharts/repos",
      events_url: "https://api.github.com/users/recharts/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/recharts/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/recharts/recharts",
    description: "Redefined chart library built with React and D3",
    fork: false,
    url: "https://api.github.com/repos/recharts/recharts",
    forks_url: "https://api.github.com/repos/recharts/recharts/forks",
    keys_url: "https://api.github.com/repos/recharts/recharts/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/recharts/recharts/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/recharts/recharts/teams",
    hooks_url: "https://api.github.com/repos/recharts/recharts/hooks",
    issue_events_url:
      "https://api.github.com/repos/recharts/recharts/issues/events{/number}",
    events_url: "https://api.github.com/repos/recharts/recharts/events",
    assignees_url:
      "https://api.github.com/repos/recharts/recharts/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/recharts/recharts/branches{/branch}",
    tags_url: "https://api.github.com/repos/recharts/recharts/tags",
    blobs_url: "https://api.github.com/repos/recharts/recharts/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/recharts/recharts/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/recharts/recharts/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/recharts/recharts/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/recharts/recharts/statuses/{sha}",
    languages_url: "https://api.github.com/repos/recharts/recharts/languages",
    stargazers_url: "https://api.github.com/repos/recharts/recharts/stargazers",
    contributors_url:
      "https://api.github.com/repos/recharts/recharts/contributors",
    subscribers_url:
      "https://api.github.com/repos/recharts/recharts/subscribers",
    subscription_url:
      "https://api.github.com/repos/recharts/recharts/subscription",
    commits_url: "https://api.github.com/repos/recharts/recharts/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/recharts/recharts/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/recharts/recharts/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/recharts/recharts/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/recharts/recharts/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/recharts/recharts/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/recharts/recharts/merges",
    archive_url:
      "https://api.github.com/repos/recharts/recharts/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/recharts/recharts/downloads",
    issues_url:
      "https://api.github.com/repos/recharts/recharts/issues{/number}",
    pulls_url: "https://api.github.com/repos/recharts/recharts/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/recharts/recharts/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/recharts/recharts/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/recharts/recharts/labels{/name}",
    releases_url:
      "https://api.github.com/repos/recharts/recharts/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/recharts/recharts/deployments",
    created_at: "2015-08-07T06:50:27Z",
    updated_at: "2023-08-29T21:57:34Z",
    pushed_at: "2023-08-29T01:11:27Z",
    git_url: "git://github.com/recharts/recharts.git",
    ssh_url: "git@github.com:recharts/recharts.git",
    clone_url: "https://github.com/recharts/recharts.git",
    svn_url: "https://github.com/recharts/recharts",
    homepage: "http://recharts.org",
    size: 14172,
    stargazers_count: 20926,
    watchers_count: 20926,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 1582,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 497,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "chart",
      "charting-library",
      "components",
      "d3",
      "data-visualisation",
      "javascript",
      "react",
      "recharts",
      "typescript",
      "ui",
    ],
    visibility: "public",
    forks: 1582,
    open_issues: 497,
    watchers: 20926,
    default_branch: "master",
    score: 1,
  },
  {
    id: 145464445,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDU0NjQ0NDU=",
    name: "tiptap",
    full_name: "ueberdosis/tiptap",
    private: false,
    owner: {
      login: "ueberdosis",
      id: 16939337,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE2OTM5MzM3",
      avatar_url: "https://avatars.githubusercontent.com/u/16939337?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ueberdosis",
      html_url: "https://github.com/ueberdosis",
      followers_url: "https://api.github.com/users/ueberdosis/followers",
      following_url:
        "https://api.github.com/users/ueberdosis/following{/other_user}",
      gists_url: "https://api.github.com/users/ueberdosis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ueberdosis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ueberdosis/subscriptions",
      organizations_url: "https://api.github.com/users/ueberdosis/orgs",
      repos_url: "https://api.github.com/users/ueberdosis/repos",
      events_url: "https://api.github.com/users/ueberdosis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ueberdosis/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/ueberdosis/tiptap",
    description: "The headless editor framework for web artisans.",
    fork: false,
    url: "https://api.github.com/repos/ueberdosis/tiptap",
    forks_url: "https://api.github.com/repos/ueberdosis/tiptap/forks",
    keys_url: "https://api.github.com/repos/ueberdosis/tiptap/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ueberdosis/tiptap/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ueberdosis/tiptap/teams",
    hooks_url: "https://api.github.com/repos/ueberdosis/tiptap/hooks",
    issue_events_url:
      "https://api.github.com/repos/ueberdosis/tiptap/issues/events{/number}",
    events_url: "https://api.github.com/repos/ueberdosis/tiptap/events",
    assignees_url:
      "https://api.github.com/repos/ueberdosis/tiptap/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ueberdosis/tiptap/branches{/branch}",
    tags_url: "https://api.github.com/repos/ueberdosis/tiptap/tags",
    blobs_url: "https://api.github.com/repos/ueberdosis/tiptap/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ueberdosis/tiptap/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ueberdosis/tiptap/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/ueberdosis/tiptap/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ueberdosis/tiptap/statuses/{sha}",
    languages_url: "https://api.github.com/repos/ueberdosis/tiptap/languages",
    stargazers_url: "https://api.github.com/repos/ueberdosis/tiptap/stargazers",
    contributors_url:
      "https://api.github.com/repos/ueberdosis/tiptap/contributors",
    subscribers_url:
      "https://api.github.com/repos/ueberdosis/tiptap/subscribers",
    subscription_url:
      "https://api.github.com/repos/ueberdosis/tiptap/subscription",
    commits_url: "https://api.github.com/repos/ueberdosis/tiptap/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ueberdosis/tiptap/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ueberdosis/tiptap/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ueberdosis/tiptap/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ueberdosis/tiptap/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ueberdosis/tiptap/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ueberdosis/tiptap/merges",
    archive_url:
      "https://api.github.com/repos/ueberdosis/tiptap/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/ueberdosis/tiptap/downloads",
    issues_url:
      "https://api.github.com/repos/ueberdosis/tiptap/issues{/number}",
    pulls_url: "https://api.github.com/repos/ueberdosis/tiptap/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ueberdosis/tiptap/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ueberdosis/tiptap/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/ueberdosis/tiptap/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ueberdosis/tiptap/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ueberdosis/tiptap/deployments",
    created_at: "2018-08-20T19:58:58Z",
    updated_at: "2023-08-29T23:20:33Z",
    pushed_at: "2023-08-29T18:54:17Z",
    git_url: "git://github.com/ueberdosis/tiptap.git",
    ssh_url: "git@github.com:ueberdosis/tiptap.git",
    clone_url: "https://github.com/ueberdosis/tiptap.git",
    svn_url: "https://github.com/ueberdosis/tiptap",
    homepage: "https://tiptap.dev",
    size: 36787,
    stargazers_count: 20904,
    watchers_count: 20904,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1826,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 288,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "editor",
      "hacktoberfest",
      "javascript",
      "js",
      "prosemirror",
      "react",
      "renderless-components",
      "rich-text",
      "tiptap",
      "vue",
      "wysiwyg",
      "wysiwyg-editor",
    ],
    visibility: "public",
    forks: 1826,
    open_issues: 288,
    watchers: 20904,
    default_branch: "develop",
    score: 1,
  },
  {
    id: 13753636,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzc1MzYzNg==",
    name: "generator-jhipster",
    full_name: "jhipster/generator-jhipster",
    private: false,
    owner: {
      login: "jhipster",
      id: 6059488,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjYwNTk0ODg=",
      avatar_url: "https://avatars.githubusercontent.com/u/6059488?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jhipster",
      html_url: "https://github.com/jhipster",
      followers_url: "https://api.github.com/users/jhipster/followers",
      following_url:
        "https://api.github.com/users/jhipster/following{/other_user}",
      gists_url: "https://api.github.com/users/jhipster/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jhipster/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jhipster/subscriptions",
      organizations_url: "https://api.github.com/users/jhipster/orgs",
      repos_url: "https://api.github.com/users/jhipster/repos",
      events_url: "https://api.github.com/users/jhipster/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jhipster/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/jhipster/generator-jhipster",
    description:
      "JHipster is a development platform to quickly generate, develop, & deploy modern web applications & microservice architectures.",
    fork: false,
    url: "https://api.github.com/repos/jhipster/generator-jhipster",
    forks_url: "https://api.github.com/repos/jhipster/generator-jhipster/forks",
    keys_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jhipster/generator-jhipster/teams",
    hooks_url: "https://api.github.com/repos/jhipster/generator-jhipster/hooks",
    issue_events_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/events",
    assignees_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/branches{/branch}",
    tags_url: "https://api.github.com/repos/jhipster/generator-jhipster/tags",
    blobs_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/languages",
    stargazers_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/stargazers",
    contributors_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/contributors",
    subscribers_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/subscribers",
    subscription_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/subscription",
    commits_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/merges",
    archive_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/downloads",
    issues_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/labels{/name}",
    releases_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/jhipster/generator-jhipster/deployments",
    created_at: "2013-10-21T20:07:22Z",
    updated_at: "2023-08-29T20:31:30Z",
    pushed_at: "2023-08-30T00:01:57Z",
    git_url: "git://github.com/jhipster/generator-jhipster.git",
    ssh_url: "git@github.com:jhipster/generator-jhipster.git",
    clone_url: "https://github.com/jhipster/generator-jhipster.git",
    svn_url: "https://github.com/jhipster/generator-jhipster",
    homepage: "https://www.jhipster.tech",
    size: 146514,
    stargazers_count: 20808,
    watchers_count: 20808,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 4011,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 263,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "cloud",
      "docker",
      "generator",
      "hacktoberfest",
      "java",
      "jhipster",
      "kubernetes",
      "react",
      "spring-boot",
      "webpack",
      "yeoman-generator",
    ],
    visibility: "public",
    forks: 4011,
    open_issues: 263,
    watchers: 20808,
    default_branch: "main",
    score: 1,
  },
  {
    id: 201570219,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDE1NzAyMTk=",
    name: "responsively-app",
    full_name: "responsively-org/responsively-app",
    private: false,
    owner: {
      login: "responsively-org",
      id: 69102126,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5MTAyMTI2",
      avatar_url: "https://avatars.githubusercontent.com/u/69102126?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/responsively-org",
      html_url: "https://github.com/responsively-org",
      followers_url: "https://api.github.com/users/responsively-org/followers",
      following_url:
        "https://api.github.com/users/responsively-org/following{/other_user}",
      gists_url:
        "https://api.github.com/users/responsively-org/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/responsively-org/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/responsively-org/subscriptions",
      organizations_url: "https://api.github.com/users/responsively-org/orgs",
      repos_url: "https://api.github.com/users/responsively-org/repos",
      events_url:
        "https://api.github.com/users/responsively-org/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/responsively-org/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/responsively-org/responsively-app",
    description:
      "A modified web browser that helps in responsive web development. A web developer's must have dev-tool.",
    fork: false,
    url: "https://api.github.com/repos/responsively-org/responsively-app",
    forks_url:
      "https://api.github.com/repos/responsively-org/responsively-app/forks",
    keys_url:
      "https://api.github.com/repos/responsively-org/responsively-app/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/responsively-org/responsively-app/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/responsively-org/responsively-app/teams",
    hooks_url:
      "https://api.github.com/repos/responsively-org/responsively-app/hooks",
    issue_events_url:
      "https://api.github.com/repos/responsively-org/responsively-app/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/responsively-org/responsively-app/events",
    assignees_url:
      "https://api.github.com/repos/responsively-org/responsively-app/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/responsively-org/responsively-app/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/responsively-org/responsively-app/tags",
    blobs_url:
      "https://api.github.com/repos/responsively-org/responsively-app/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/responsively-org/responsively-app/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/responsively-org/responsively-app/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/responsively-org/responsively-app/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/responsively-org/responsively-app/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/responsively-org/responsively-app/languages",
    stargazers_url:
      "https://api.github.com/repos/responsively-org/responsively-app/stargazers",
    contributors_url:
      "https://api.github.com/repos/responsively-org/responsively-app/contributors",
    subscribers_url:
      "https://api.github.com/repos/responsively-org/responsively-app/subscribers",
    subscription_url:
      "https://api.github.com/repos/responsively-org/responsively-app/subscription",
    commits_url:
      "https://api.github.com/repos/responsively-org/responsively-app/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/responsively-org/responsively-app/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/responsively-org/responsively-app/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/responsively-org/responsively-app/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/responsively-org/responsively-app/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/responsively-org/responsively-app/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/responsively-org/responsively-app/merges",
    archive_url:
      "https://api.github.com/repos/responsively-org/responsively-app/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/responsively-org/responsively-app/downloads",
    issues_url:
      "https://api.github.com/repos/responsively-org/responsively-app/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/responsively-org/responsively-app/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/responsively-org/responsively-app/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/responsively-org/responsively-app/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/responsively-org/responsively-app/labels{/name}",
    releases_url:
      "https://api.github.com/repos/responsively-org/responsively-app/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/responsively-org/responsively-app/deployments",
    created_at: "2019-08-10T02:48:18Z",
    updated_at: "2023-08-29T19:41:50Z",
    pushed_at: "2023-08-29T13:02:39Z",
    git_url: "git://github.com/responsively-org/responsively-app.git",
    ssh_url: "git@github.com:responsively-org/responsively-app.git",
    clone_url: "https://github.com/responsively-org/responsively-app.git",
    svn_url: "https://github.com/responsively-org/responsively-app",
    homepage: "https://responsively.app",
    size: 100188,
    stargazers_count: 20607,
    watchers_count: 20607,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 973,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 170,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "contributions-welcome",
      "desktop-app",
      "developer-tools",
      "electron",
      "good-first-issue",
      "hacktoberfest",
      "javascript",
      "opensource-alternative",
      "react",
      "redux",
      "responsive",
      "responsive-web-design",
      "web-development",
    ],
    visibility: "public",
    forks: 973,
    open_issues: 170,
    watchers: 20607,
    default_branch: "main",
    score: 1,
  },
  {
    id: 59435364,
    node_id: "MDEwOlJlcG9zaXRvcnk1OTQzNTM2NA==",
    name: "outline",
    full_name: "outline/outline",
    private: false,
    owner: {
      login: "outline",
      id: 1765001,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE3NjUwMDE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1765001?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/outline",
      html_url: "https://github.com/outline",
      followers_url: "https://api.github.com/users/outline/followers",
      following_url:
        "https://api.github.com/users/outline/following{/other_user}",
      gists_url: "https://api.github.com/users/outline/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/outline/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/outline/subscriptions",
      organizations_url: "https://api.github.com/users/outline/orgs",
      repos_url: "https://api.github.com/users/outline/repos",
      events_url: "https://api.github.com/users/outline/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/outline/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/outline/outline",
    description:
      "The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.",
    fork: false,
    url: "https://api.github.com/repos/outline/outline",
    forks_url: "https://api.github.com/repos/outline/outline/forks",
    keys_url: "https://api.github.com/repos/outline/outline/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/outline/outline/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/outline/outline/teams",
    hooks_url: "https://api.github.com/repos/outline/outline/hooks",
    issue_events_url:
      "https://api.github.com/repos/outline/outline/issues/events{/number}",
    events_url: "https://api.github.com/repos/outline/outline/events",
    assignees_url:
      "https://api.github.com/repos/outline/outline/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/outline/outline/branches{/branch}",
    tags_url: "https://api.github.com/repos/outline/outline/tags",
    blobs_url: "https://api.github.com/repos/outline/outline/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/outline/outline/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/outline/outline/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/outline/outline/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/outline/outline/statuses/{sha}",
    languages_url: "https://api.github.com/repos/outline/outline/languages",
    stargazers_url: "https://api.github.com/repos/outline/outline/stargazers",
    contributors_url:
      "https://api.github.com/repos/outline/outline/contributors",
    subscribers_url: "https://api.github.com/repos/outline/outline/subscribers",
    subscription_url:
      "https://api.github.com/repos/outline/outline/subscription",
    commits_url: "https://api.github.com/repos/outline/outline/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/outline/outline/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/outline/outline/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/outline/outline/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/outline/outline/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/outline/outline/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/outline/outline/merges",
    archive_url:
      "https://api.github.com/repos/outline/outline/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/outline/outline/downloads",
    issues_url: "https://api.github.com/repos/outline/outline/issues{/number}",
    pulls_url: "https://api.github.com/repos/outline/outline/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/outline/outline/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/outline/outline/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/outline/outline/labels{/name}",
    releases_url: "https://api.github.com/repos/outline/outline/releases{/id}",
    deployments_url: "https://api.github.com/repos/outline/outline/deployments",
    created_at: "2016-05-22T21:31:47Z",
    updated_at: "2023-08-29T23:49:31Z",
    pushed_at: "2023-08-29T00:40:35Z",
    git_url: "git://github.com/outline/outline.git",
    ssh_url: "git@github.com:outline/outline.git",
    clone_url: "https://github.com/outline/outline.git",
    svn_url: "https://github.com/outline/outline",
    homepage: "https://www.getoutline.com",
    size: 47358,
    stargazers_count: 20291,
    watchers_count: 20291,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 1696,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 76,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "docker",
      "hacktoberfest",
      "javascript",
      "mobx",
      "nodejs",
      "react",
      "slack",
      "wiki",
    ],
    visibility: "public",
    forks: 1696,
    open_issues: 76,
    watchers: 20291,
    default_branch: "main",
    score: 1,
  },
  {
    id: 71939872,
    node_id: "MDEwOlJlcG9zaXRvcnk3MTkzOTg3Mg==",
    name: "blueprint",
    full_name: "palantir/blueprint",
    private: false,
    owner: {
      login: "palantir",
      id: 303157,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMwMzE1Nw==",
      avatar_url: "https://avatars.githubusercontent.com/u/303157?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/palantir",
      html_url: "https://github.com/palantir",
      followers_url: "https://api.github.com/users/palantir/followers",
      following_url:
        "https://api.github.com/users/palantir/following{/other_user}",
      gists_url: "https://api.github.com/users/palantir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/palantir/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/palantir/subscriptions",
      organizations_url: "https://api.github.com/users/palantir/orgs",
      repos_url: "https://api.github.com/users/palantir/repos",
      events_url: "https://api.github.com/users/palantir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/palantir/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/palantir/blueprint",
    description: "A React-based UI toolkit for the web",
    fork: false,
    url: "https://api.github.com/repos/palantir/blueprint",
    forks_url: "https://api.github.com/repos/palantir/blueprint/forks",
    keys_url: "https://api.github.com/repos/palantir/blueprint/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/palantir/blueprint/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/palantir/blueprint/teams",
    hooks_url: "https://api.github.com/repos/palantir/blueprint/hooks",
    issue_events_url:
      "https://api.github.com/repos/palantir/blueprint/issues/events{/number}",
    events_url: "https://api.github.com/repos/palantir/blueprint/events",
    assignees_url:
      "https://api.github.com/repos/palantir/blueprint/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/palantir/blueprint/branches{/branch}",
    tags_url: "https://api.github.com/repos/palantir/blueprint/tags",
    blobs_url:
      "https://api.github.com/repos/palantir/blueprint/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/palantir/blueprint/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/palantir/blueprint/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/palantir/blueprint/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/palantir/blueprint/statuses/{sha}",
    languages_url: "https://api.github.com/repos/palantir/blueprint/languages",
    stargazers_url:
      "https://api.github.com/repos/palantir/blueprint/stargazers",
    contributors_url:
      "https://api.github.com/repos/palantir/blueprint/contributors",
    subscribers_url:
      "https://api.github.com/repos/palantir/blueprint/subscribers",
    subscription_url:
      "https://api.github.com/repos/palantir/blueprint/subscription",
    commits_url:
      "https://api.github.com/repos/palantir/blueprint/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/palantir/blueprint/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/palantir/blueprint/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/palantir/blueprint/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/palantir/blueprint/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/palantir/blueprint/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/palantir/blueprint/merges",
    archive_url:
      "https://api.github.com/repos/palantir/blueprint/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/palantir/blueprint/downloads",
    issues_url:
      "https://api.github.com/repos/palantir/blueprint/issues{/number}",
    pulls_url: "https://api.github.com/repos/palantir/blueprint/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/palantir/blueprint/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/palantir/blueprint/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/palantir/blueprint/labels{/name}",
    releases_url:
      "https://api.github.com/repos/palantir/blueprint/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/palantir/blueprint/deployments",
    created_at: "2016-10-25T21:17:50Z",
    updated_at: "2023-08-29T21:50:49Z",
    pushed_at: "2023-08-29T17:04:06Z",
    git_url: "git://github.com/palantir/blueprint.git",
    ssh_url: "git@github.com:palantir/blueprint.git",
    clone_url: "https://github.com/palantir/blueprint.git",
    svn_url: "https://github.com/palantir/blueprint",
    homepage: "https://blueprintjs.com/",
    size: 158084,
    stargazers_count: 20031,
    watchers_count: 20031,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 2138,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 676,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "blueprint",
      "components",
      "design",
      "lerna",
      "octo-correct-managed",
      "react",
      "sass",
      "system",
      "table",
      "toolkit",
      "typescript",
      "ui",
    ],
    visibility: "public",
    forks: 2138,
    open_issues: 676,
    watchers: 20031,
    default_branch: "develop",
    score: 1,
  },
  {
    id: 69798748,
    node_id: "MDEwOlJlcG9zaXRvcnk2OTc5ODc0OA==",
    name: "js-stack-from-scratch",
    full_name: "verekia/js-stack-from-scratch",
    private: false,
    owner: {
      login: "verekia",
      id: 522007,
      node_id: "MDQ6VXNlcjUyMjAwNw==",
      avatar_url: "https://avatars.githubusercontent.com/u/522007?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/verekia",
      html_url: "https://github.com/verekia",
      followers_url: "https://api.github.com/users/verekia/followers",
      following_url:
        "https://api.github.com/users/verekia/following{/other_user}",
      gists_url: "https://api.github.com/users/verekia/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/verekia/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/verekia/subscriptions",
      organizations_url: "https://api.github.com/users/verekia/orgs",
      repos_url: "https://api.github.com/users/verekia/repos",
      events_url: "https://api.github.com/users/verekia/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/verekia/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/verekia/js-stack-from-scratch",
    description:
      "🛠️⚡ Step-by-step tutorial to build a modern JavaScript stack.",
    fork: false,
    url: "https://api.github.com/repos/verekia/js-stack-from-scratch",
    forks_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/forks",
    keys_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/teams",
    hooks_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/hooks",
    issue_events_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/events",
    assignees_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/branches{/branch}",
    tags_url: "https://api.github.com/repos/verekia/js-stack-from-scratch/tags",
    blobs_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/languages",
    stargazers_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/stargazers",
    contributors_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/contributors",
    subscribers_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/subscribers",
    subscription_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/subscription",
    commits_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/merges",
    archive_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/downloads",
    issues_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/labels{/name}",
    releases_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/verekia/js-stack-from-scratch/deployments",
    created_at: "2016-10-02T13:31:23Z",
    updated_at: "2023-08-29T17:53:48Z",
    pushed_at: "2022-11-01T03:50:36Z",
    git_url: "git://github.com/verekia/js-stack-from-scratch.git",
    ssh_url: "git@github.com:verekia/js-stack-from-scratch.git",
    clone_url: "https://github.com/verekia/js-stack-from-scratch.git",
    svn_url: "https://github.com/verekia/js-stack-from-scratch",
    homepage: "",
    size: 1808,
    stargazers_count: 20014,
    watchers_count: 20014,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2071,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 49,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "bootstrap",
      "eslint",
      "flow",
      "heroku",
      "immutablejs",
      "javascript",
      "jest",
      "jss",
      "nodemon",
      "pm2",
      "react",
      "react-router",
      "redux",
      "server-side-rendering",
      "sinon",
      "socket-io",
      "stack",
      "tutorial",
      "webpack",
      "yarn",
    ],
    visibility: "public",
    forks: 2071,
    open_issues: 49,
    watchers: 20014,
    default_branch: "master",
    score: 1,
  },
  {
    id: 45942274,
    node_id: "MDEwOlJlcG9zaXRvcnk0NTk0MjI3NA==",
    name: "enzyme",
    full_name: "enzymejs/enzyme",
    private: false,
    owner: {
      login: "enzymejs",
      id: 60945302,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjYwOTQ1MzAy",
      avatar_url: "https://avatars.githubusercontent.com/u/60945302?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/enzymejs",
      html_url: "https://github.com/enzymejs",
      followers_url: "https://api.github.com/users/enzymejs/followers",
      following_url:
        "https://api.github.com/users/enzymejs/following{/other_user}",
      gists_url: "https://api.github.com/users/enzymejs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/enzymejs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/enzymejs/subscriptions",
      organizations_url: "https://api.github.com/users/enzymejs/orgs",
      repos_url: "https://api.github.com/users/enzymejs/repos",
      events_url: "https://api.github.com/users/enzymejs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/enzymejs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/enzymejs/enzyme",
    description: "JavaScript Testing utilities for React",
    fork: false,
    url: "https://api.github.com/repos/enzymejs/enzyme",
    forks_url: "https://api.github.com/repos/enzymejs/enzyme/forks",
    keys_url: "https://api.github.com/repos/enzymejs/enzyme/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/enzymejs/enzyme/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/enzymejs/enzyme/teams",
    hooks_url: "https://api.github.com/repos/enzymejs/enzyme/hooks",
    issue_events_url:
      "https://api.github.com/repos/enzymejs/enzyme/issues/events{/number}",
    events_url: "https://api.github.com/repos/enzymejs/enzyme/events",
    assignees_url:
      "https://api.github.com/repos/enzymejs/enzyme/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/enzymejs/enzyme/branches{/branch}",
    tags_url: "https://api.github.com/repos/enzymejs/enzyme/tags",
    blobs_url: "https://api.github.com/repos/enzymejs/enzyme/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/enzymejs/enzyme/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/enzymejs/enzyme/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/enzymejs/enzyme/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/enzymejs/enzyme/statuses/{sha}",
    languages_url: "https://api.github.com/repos/enzymejs/enzyme/languages",
    stargazers_url: "https://api.github.com/repos/enzymejs/enzyme/stargazers",
    contributors_url:
      "https://api.github.com/repos/enzymejs/enzyme/contributors",
    subscribers_url: "https://api.github.com/repos/enzymejs/enzyme/subscribers",
    subscription_url:
      "https://api.github.com/repos/enzymejs/enzyme/subscription",
    commits_url: "https://api.github.com/repos/enzymejs/enzyme/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/enzymejs/enzyme/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/enzymejs/enzyme/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/enzymejs/enzyme/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/enzymejs/enzyme/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/enzymejs/enzyme/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/enzymejs/enzyme/merges",
    archive_url:
      "https://api.github.com/repos/enzymejs/enzyme/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/enzymejs/enzyme/downloads",
    issues_url: "https://api.github.com/repos/enzymejs/enzyme/issues{/number}",
    pulls_url: "https://api.github.com/repos/enzymejs/enzyme/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/enzymejs/enzyme/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/enzymejs/enzyme/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/enzymejs/enzyme/labels{/name}",
    releases_url: "https://api.github.com/repos/enzymejs/enzyme/releases{/id}",
    deployments_url: "https://api.github.com/repos/enzymejs/enzyme/deployments",
    created_at: "2015-11-10T21:45:38Z",
    updated_at: "2023-08-27T18:51:59Z",
    pushed_at: "2023-08-03T08:17:57Z",
    git_url: "git://github.com/enzymejs/enzyme.git",
    ssh_url: "git@github.com:enzymejs/enzyme.git",
    clone_url: "https://github.com/enzymejs/enzyme.git",
    svn_url: "https://github.com/enzymejs/enzyme",
    homepage: "https://enzymejs.github.io/enzyme/",
    size: 7851,
    stargazers_count: 19997,
    watchers_count: 19997,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: true,
    has_discussions: false,
    forks_count: 2123,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 286,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "assertion-library",
      "assertions",
      "ava",
      "chai",
      "enzyme",
      "jest",
      "mocha",
      "react",
      "react-components",
      "test",
      "test-runner",
      "test-runners",
      "testing",
      "traversal",
    ],
    visibility: "public",
    forks: 2123,
    open_issues: 286,
    watchers: 19997,
    default_branch: "master",
    score: 1,
  },
  {
    id: 3606624,
    node_id: "MDEwOlJlcG9zaXRvcnkzNjA2NjI0",
    name: "ReactiveCocoa",
    full_name: "ReactiveCocoa/ReactiveCocoa",
    private: false,
    owner: {
      login: "ReactiveCocoa",
      id: 3422977,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjM0MjI5Nzc=",
      avatar_url: "https://avatars.githubusercontent.com/u/3422977?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ReactiveCocoa",
      html_url: "https://github.com/ReactiveCocoa",
      followers_url: "https://api.github.com/users/ReactiveCocoa/followers",
      following_url:
        "https://api.github.com/users/ReactiveCocoa/following{/other_user}",
      gists_url: "https://api.github.com/users/ReactiveCocoa/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ReactiveCocoa/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ReactiveCocoa/subscriptions",
      organizations_url: "https://api.github.com/users/ReactiveCocoa/orgs",
      repos_url: "https://api.github.com/users/ReactiveCocoa/repos",
      events_url: "https://api.github.com/users/ReactiveCocoa/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ReactiveCocoa/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/ReactiveCocoa/ReactiveCocoa",
    description:
      "Cocoa framework and Obj-C dynamism bindings for ReactiveSwift.",
    fork: false,
    url: "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa",
    forks_url: "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/forks",
    keys_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/teams",
    hooks_url: "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/hooks",
    issue_events_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/events",
    assignees_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/branches{/branch}",
    tags_url: "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/tags",
    blobs_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/languages",
    stargazers_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/stargazers",
    contributors_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/contributors",
    subscribers_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/subscribers",
    subscription_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/subscription",
    commits_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/merges",
    archive_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/downloads",
    issues_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ReactiveCocoa/ReactiveCocoa/deployments",
    created_at: "2012-03-02T22:11:24Z",
    updated_at: "2023-08-29T15:41:44Z",
    pushed_at: "2023-06-24T19:10:55Z",
    git_url: "git://github.com/ReactiveCocoa/ReactiveCocoa.git",
    ssh_url: "git@github.com:ReactiveCocoa/ReactiveCocoa.git",
    clone_url: "https://github.com/ReactiveCocoa/ReactiveCocoa.git",
    svn_url: "https://github.com/ReactiveCocoa/ReactiveCocoa",
    homepage: "",
    size: 17091,
    stargazers_count: 19976,
    watchers_count: 19976,
    language: "Swift",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 3583,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 7,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["reactivecocoa", "reactiveswift", "swift"],
    visibility: "public",
    forks: 3583,
    open_issues: 7,
    watchers: 19976,
    default_branch: "master",
    score: 1,
  },
  {
    id: 157846876,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTc4NDY4NzY=",
    name: "motion",
    full_name: "framer/motion",
    private: false,
    owner: {
      login: "framer",
      id: 42876,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQyODc2",
      avatar_url: "https://avatars.githubusercontent.com/u/42876?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/framer",
      html_url: "https://github.com/framer",
      followers_url: "https://api.github.com/users/framer/followers",
      following_url:
        "https://api.github.com/users/framer/following{/other_user}",
      gists_url: "https://api.github.com/users/framer/gists{/gist_id}",
      starred_url: "https://api.github.com/users/framer/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/framer/subscriptions",
      organizations_url: "https://api.github.com/users/framer/orgs",
      repos_url: "https://api.github.com/users/framer/repos",
      events_url: "https://api.github.com/users/framer/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/framer/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/framer/motion",
    description:
      "Open source, production-ready animation and gesture library for React",
    fork: false,
    url: "https://api.github.com/repos/framer/motion",
    forks_url: "https://api.github.com/repos/framer/motion/forks",
    keys_url: "https://api.github.com/repos/framer/motion/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/framer/motion/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/framer/motion/teams",
    hooks_url: "https://api.github.com/repos/framer/motion/hooks",
    issue_events_url:
      "https://api.github.com/repos/framer/motion/issues/events{/number}",
    events_url: "https://api.github.com/repos/framer/motion/events",
    assignees_url:
      "https://api.github.com/repos/framer/motion/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/framer/motion/branches{/branch}",
    tags_url: "https://api.github.com/repos/framer/motion/tags",
    blobs_url: "https://api.github.com/repos/framer/motion/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/framer/motion/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/framer/motion/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/framer/motion/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/framer/motion/statuses/{sha}",
    languages_url: "https://api.github.com/repos/framer/motion/languages",
    stargazers_url: "https://api.github.com/repos/framer/motion/stargazers",
    contributors_url: "https://api.github.com/repos/framer/motion/contributors",
    subscribers_url: "https://api.github.com/repos/framer/motion/subscribers",
    subscription_url: "https://api.github.com/repos/framer/motion/subscription",
    commits_url: "https://api.github.com/repos/framer/motion/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/framer/motion/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/framer/motion/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/framer/motion/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/framer/motion/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/framer/motion/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/framer/motion/merges",
    archive_url:
      "https://api.github.com/repos/framer/motion/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/framer/motion/downloads",
    issues_url: "https://api.github.com/repos/framer/motion/issues{/number}",
    pulls_url: "https://api.github.com/repos/framer/motion/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/framer/motion/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/framer/motion/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/framer/motion/labels{/name}",
    releases_url: "https://api.github.com/repos/framer/motion/releases{/id}",
    deployments_url: "https://api.github.com/repos/framer/motion/deployments",
    created_at: "2018-11-16T09:48:38Z",
    updated_at: "2023-08-29T22:29:21Z",
    pushed_at: "2023-08-29T23:55:24Z",
    git_url: "git://github.com/framer/motion.git",
    ssh_url: "git@github.com:framer/motion.git",
    clone_url: "https://github.com/framer/motion.git",
    svn_url: "https://github.com/framer/motion",
    homepage: "https://framer.com/motion",
    size: 369779,
    stargazers_count: 19899,
    watchers_count: 19899,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: true,
    forks_count: 634,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 305,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 634,
    open_issues: 305,
    watchers: 19899,
    default_branch: "main",
    score: 1,
  },
  {
    id: 372240402,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzIyNDA0MDI=",
    name: "bulletproof-react",
    full_name: "alan2207/bulletproof-react",
    private: false,
    owner: {
      login: "alan2207",
      id: 12713315,
      node_id: "MDQ6VXNlcjEyNzEzMzE1",
      avatar_url: "https://avatars.githubusercontent.com/u/12713315?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/alan2207",
      html_url: "https://github.com/alan2207",
      followers_url: "https://api.github.com/users/alan2207/followers",
      following_url:
        "https://api.github.com/users/alan2207/following{/other_user}",
      gists_url: "https://api.github.com/users/alan2207/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/alan2207/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/alan2207/subscriptions",
      organizations_url: "https://api.github.com/users/alan2207/orgs",
      repos_url: "https://api.github.com/users/alan2207/repos",
      events_url: "https://api.github.com/users/alan2207/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/alan2207/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/alan2207/bulletproof-react",
    description:
      "🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications. ",
    fork: false,
    url: "https://api.github.com/repos/alan2207/bulletproof-react",
    forks_url: "https://api.github.com/repos/alan2207/bulletproof-react/forks",
    keys_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/alan2207/bulletproof-react/teams",
    hooks_url: "https://api.github.com/repos/alan2207/bulletproof-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/events",
    assignees_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/branches{/branch}",
    tags_url: "https://api.github.com/repos/alan2207/bulletproof-react/tags",
    blobs_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/languages",
    stargazers_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/subscription",
    commits_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/merges",
    archive_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/downloads",
    issues_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/alan2207/bulletproof-react/deployments",
    created_at: "2021-05-30T14:47:16Z",
    updated_at: "2023-08-29T21:20:26Z",
    pushed_at: "2023-08-08T05:55:33Z",
    git_url: "git://github.com/alan2207/bulletproof-react.git",
    ssh_url: "git@github.com:alan2207/bulletproof-react.git",
    clone_url: "https://github.com/alan2207/bulletproof-react.git",
    svn_url: "https://github.com/alan2207/bulletproof-react",
    homepage: "",
    size: 1255,
    stargazers_count: 19756,
    watchers_count: 19756,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1840,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 47,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "react",
      "react-applications",
      "react-architecture-patterns",
      "react-best-practice",
      "react-guidelines",
      "react-typescript",
    ],
    visibility: "public",
    forks: 1840,
    open_issues: 47,
    watchers: 19756,
    default_branch: "master",
    score: 1,
  },
  {
    id: 56315715,
    node_id: "MDEwOlJlcG9zaXRvcnk1NjMxNTcxNQ==",
    name: "NativeBase",
    full_name: "GeekyAnts/NativeBase",
    private: false,
    owner: {
      login: "GeekyAnts",
      id: 18482943,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE4NDgyOTQz",
      avatar_url: "https://avatars.githubusercontent.com/u/18482943?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/GeekyAnts",
      html_url: "https://github.com/GeekyAnts",
      followers_url: "https://api.github.com/users/GeekyAnts/followers",
      following_url:
        "https://api.github.com/users/GeekyAnts/following{/other_user}",
      gists_url: "https://api.github.com/users/GeekyAnts/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/GeekyAnts/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/GeekyAnts/subscriptions",
      organizations_url: "https://api.github.com/users/GeekyAnts/orgs",
      repos_url: "https://api.github.com/users/GeekyAnts/repos",
      events_url: "https://api.github.com/users/GeekyAnts/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/GeekyAnts/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/GeekyAnts/NativeBase",
    description:
      "Mobile-first, accessible components for React Native & Web to build consistent UI across Android, iOS and Web.",
    fork: false,
    url: "https://api.github.com/repos/GeekyAnts/NativeBase",
    forks_url: "https://api.github.com/repos/GeekyAnts/NativeBase/forks",
    keys_url: "https://api.github.com/repos/GeekyAnts/NativeBase/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/GeekyAnts/NativeBase/teams",
    hooks_url: "https://api.github.com/repos/GeekyAnts/NativeBase/hooks",
    issue_events_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/issues/events{/number}",
    events_url: "https://api.github.com/repos/GeekyAnts/NativeBase/events",
    assignees_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/branches{/branch}",
    tags_url: "https://api.github.com/repos/GeekyAnts/NativeBase/tags",
    blobs_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/languages",
    stargazers_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/stargazers",
    contributors_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/contributors",
    subscribers_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/subscribers",
    subscription_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/subscription",
    commits_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/GeekyAnts/NativeBase/merges",
    archive_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/downloads",
    issues_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/labels{/name}",
    releases_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/GeekyAnts/NativeBase/deployments",
    created_at: "2016-04-15T11:37:23Z",
    updated_at: "2023-08-29T17:36:12Z",
    pushed_at: "2023-08-04T14:18:44Z",
    git_url: "git://github.com/GeekyAnts/NativeBase.git",
    ssh_url: "git@github.com:GeekyAnts/NativeBase.git",
    clone_url: "https://github.com/GeekyAnts/NativeBase.git",
    svn_url: "https://github.com/GeekyAnts/NativeBase",
    homepage: "https://nativebase.io/",
    size: 71496,
    stargazers_count: 19635,
    watchers_count: 19635,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 2413,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 343,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "android",
      "hacktoberfest",
      "ios",
      "native-platforms",
      "nativebase",
      "nextjs",
      "react",
      "react-native",
      "ui-components",
    ],
    visibility: "public",
    forks: 2413,
    open_issues: 343,
    watchers: 19635,
    default_branch: "master",
    score: 1,
  },
  {
    id: 25427817,
    node_id: "MDEwOlJlcG9zaXRvcnkyNTQyNzgxNw==",
    name: "react-dnd",
    full_name: "react-dnd/react-dnd",
    private: false,
    owner: {
      login: "react-dnd",
      id: 25307599,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjI1MzA3NTk5",
      avatar_url: "https://avatars.githubusercontent.com/u/25307599?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/react-dnd",
      html_url: "https://github.com/react-dnd",
      followers_url: "https://api.github.com/users/react-dnd/followers",
      following_url:
        "https://api.github.com/users/react-dnd/following{/other_user}",
      gists_url: "https://api.github.com/users/react-dnd/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/react-dnd/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/react-dnd/subscriptions",
      organizations_url: "https://api.github.com/users/react-dnd/orgs",
      repos_url: "https://api.github.com/users/react-dnd/repos",
      events_url: "https://api.github.com/users/react-dnd/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/react-dnd/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/react-dnd/react-dnd",
    description: "Drag and Drop for React",
    fork: false,
    url: "https://api.github.com/repos/react-dnd/react-dnd",
    forks_url: "https://api.github.com/repos/react-dnd/react-dnd/forks",
    keys_url: "https://api.github.com/repos/react-dnd/react-dnd/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/react-dnd/react-dnd/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/react-dnd/react-dnd/teams",
    hooks_url: "https://api.github.com/repos/react-dnd/react-dnd/hooks",
    issue_events_url:
      "https://api.github.com/repos/react-dnd/react-dnd/issues/events{/number}",
    events_url: "https://api.github.com/repos/react-dnd/react-dnd/events",
    assignees_url:
      "https://api.github.com/repos/react-dnd/react-dnd/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/react-dnd/react-dnd/branches{/branch}",
    tags_url: "https://api.github.com/repos/react-dnd/react-dnd/tags",
    blobs_url:
      "https://api.github.com/repos/react-dnd/react-dnd/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/react-dnd/react-dnd/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/react-dnd/react-dnd/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/react-dnd/react-dnd/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/react-dnd/react-dnd/statuses/{sha}",
    languages_url: "https://api.github.com/repos/react-dnd/react-dnd/languages",
    stargazers_url:
      "https://api.github.com/repos/react-dnd/react-dnd/stargazers",
    contributors_url:
      "https://api.github.com/repos/react-dnd/react-dnd/contributors",
    subscribers_url:
      "https://api.github.com/repos/react-dnd/react-dnd/subscribers",
    subscription_url:
      "https://api.github.com/repos/react-dnd/react-dnd/subscription",
    commits_url:
      "https://api.github.com/repos/react-dnd/react-dnd/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/react-dnd/react-dnd/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/react-dnd/react-dnd/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/react-dnd/react-dnd/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/react-dnd/react-dnd/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/react-dnd/react-dnd/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/react-dnd/react-dnd/merges",
    archive_url:
      "https://api.github.com/repos/react-dnd/react-dnd/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/react-dnd/react-dnd/downloads",
    issues_url:
      "https://api.github.com/repos/react-dnd/react-dnd/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/react-dnd/react-dnd/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/react-dnd/react-dnd/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/react-dnd/react-dnd/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/react-dnd/react-dnd/labels{/name}",
    releases_url:
      "https://api.github.com/repos/react-dnd/react-dnd/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/react-dnd/react-dnd/deployments",
    created_at: "2014-10-19T13:29:28Z",
    updated_at: "2023-08-29T01:33:24Z",
    pushed_at: "2023-07-01T17:02:38Z",
    git_url: "git://github.com/react-dnd/react-dnd.git",
    ssh_url: "git@github.com:react-dnd/react-dnd.git",
    clone_url: "https://github.com/react-dnd/react-dnd.git",
    svn_url: "https://github.com/react-dnd/react-dnd",
    homepage: "http://react-dnd.github.io/react-dnd",
    size: 593055,
    stargazers_count: 19618,
    watchers_count: 19618,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 1956,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 404,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["drag-and-drop", "not-the-game", "react"],
    visibility: "public",
    forks: 1956,
    open_issues: 404,
    watchers: 19618,
    default_branch: "main",
    score: 1,
  },
  {
    id: 234739976,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzQ3Mzk5NzY=",
    name: "medusa",
    full_name: "medusajs/medusa",
    private: false,
    owner: {
      login: "medusajs",
      id: 62591822,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjYyNTkxODIy",
      avatar_url: "https://avatars.githubusercontent.com/u/62591822?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/medusajs",
      html_url: "https://github.com/medusajs",
      followers_url: "https://api.github.com/users/medusajs/followers",
      following_url:
        "https://api.github.com/users/medusajs/following{/other_user}",
      gists_url: "https://api.github.com/users/medusajs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/medusajs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/medusajs/subscriptions",
      organizations_url: "https://api.github.com/users/medusajs/orgs",
      repos_url: "https://api.github.com/users/medusajs/repos",
      events_url: "https://api.github.com/users/medusajs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/medusajs/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/medusajs/medusa",
    description: "Building blocks for digital commerce",
    fork: false,
    url: "https://api.github.com/repos/medusajs/medusa",
    forks_url: "https://api.github.com/repos/medusajs/medusa/forks",
    keys_url: "https://api.github.com/repos/medusajs/medusa/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/medusajs/medusa/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/medusajs/medusa/teams",
    hooks_url: "https://api.github.com/repos/medusajs/medusa/hooks",
    issue_events_url:
      "https://api.github.com/repos/medusajs/medusa/issues/events{/number}",
    events_url: "https://api.github.com/repos/medusajs/medusa/events",
    assignees_url:
      "https://api.github.com/repos/medusajs/medusa/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/medusajs/medusa/branches{/branch}",
    tags_url: "https://api.github.com/repos/medusajs/medusa/tags",
    blobs_url: "https://api.github.com/repos/medusajs/medusa/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/medusajs/medusa/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/medusajs/medusa/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/medusajs/medusa/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/medusajs/medusa/statuses/{sha}",
    languages_url: "https://api.github.com/repos/medusajs/medusa/languages",
    stargazers_url: "https://api.github.com/repos/medusajs/medusa/stargazers",
    contributors_url:
      "https://api.github.com/repos/medusajs/medusa/contributors",
    subscribers_url: "https://api.github.com/repos/medusajs/medusa/subscribers",
    subscription_url:
      "https://api.github.com/repos/medusajs/medusa/subscription",
    commits_url: "https://api.github.com/repos/medusajs/medusa/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/medusajs/medusa/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/medusajs/medusa/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/medusajs/medusa/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/medusajs/medusa/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/medusajs/medusa/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/medusajs/medusa/merges",
    archive_url:
      "https://api.github.com/repos/medusajs/medusa/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/medusajs/medusa/downloads",
    issues_url: "https://api.github.com/repos/medusajs/medusa/issues{/number}",
    pulls_url: "https://api.github.com/repos/medusajs/medusa/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/medusajs/medusa/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/medusajs/medusa/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/medusajs/medusa/labels{/name}",
    releases_url: "https://api.github.com/repos/medusajs/medusa/releases{/id}",
    deployments_url: "https://api.github.com/repos/medusajs/medusa/deployments",
    created_at: "2020-01-18T13:39:04Z",
    updated_at: "2023-08-29T23:30:39Z",
    pushed_at: "2023-08-29T22:05:13Z",
    git_url: "git://github.com/medusajs/medusa.git",
    ssh_url: "git@github.com:medusajs/medusa.git",
    clone_url: "https://github.com/medusajs/medusa.git",
    svn_url: "https://github.com/medusajs/medusa",
    homepage: "https://medusajs.com",
    size: 172943,
    stargazers_count: 19500,
    watchers_count: 19500,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 1539,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 299,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cart",
      "commerce",
      "composable",
      "e-commerce",
      "ecommerce",
      "headless",
      "javascript",
      "medusa",
      "nextjs",
      "nodejs",
      "react",
    ],
    visibility: "public",
    forks: 1539,
    open_issues: 299,
    watchers: 19500,
    default_branch: "develop",
    score: 1,
  },
];
