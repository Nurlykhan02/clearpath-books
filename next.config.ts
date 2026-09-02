import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "clearpath-books";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.trycloudflare.com", "*.loca.lt", "*.ngrok-free.app"],
};

export default nextConfig;
