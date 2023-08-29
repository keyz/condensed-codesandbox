// @ts-check

// Vercel also sets `CI=1`
const IS_GITHUB_CI =
  process.env.CI === "true" && process.env.GITHUB_ACTIONS === "true";

/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    // Run lint checks separately on CI
    ignoreDuringBuilds: IS_GITHUB_CI,
  },
};

module.exports = nextConfig;
