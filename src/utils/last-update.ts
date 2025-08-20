// Server-only utility (Astro build/SSR)
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const execFileP = promisify(execFile);

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN; // keep non-PUBLIC so it never ships to client
const OWNER = "BryanHogan";
const REPO = "bryanhogan-blog-content";
const DEFAULT_BRANCH = "main";

// Simple per-build cache to avoid repeated lookups
const cache = new Map<string, Date>();

/**
 * Returns the last modified Date for a given file path.
 * Accepts the SAME input your component passes, e.g. "src/content/blog/<slug>.md".
 * Tries local git (fast, works with submodules) -> GitHub API -> falls back to current date (preserves your old behavior).
 */
export async function getLastModifiedDate(file_path: string): Promise<Date> {
  try {
    // Normalize to POSIX separators
    const localPath = file_path.replace(/\\/g, "/");

    // If file lives in the submodule at "src/content", derive the repo-internal path by stripping that prefix
    const submoduleRoot = "src/content/";
    const repoPath = localPath.startsWith(submoduleRoot)
      ? localPath.slice(submoduleRoot.length)
      : localPath;

    // Cache by repoPath+branch so multiple cards don't repeat work
    const cacheKey = `${DEFAULT_BRANCH}:${repoPath}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    // 1) Try local git first (fast, avoids rate limits)
    const fromGit = await getFromLocalGit(localPath, repoPath);
    if (fromGit) {
      cache.set(cacheKey, fromGit);
      return fromGit;
    }

    // 2) Fallback to GitHub API
    const fromAPI = await getFromGitHub(repoPath, DEFAULT_BRANCH);
    if (fromAPI) {
      cache.set(cacheKey, fromAPI);
      return fromAPI;
    }

    // 3) Preserve your previous behavior: fallback to "now"
    throw new Error("No commit data found");
  } catch (error) {
    console.error("Error fetching last modified date:", error);
    return new Date(); // keep your original fallback
  }
}

async function getFromLocalGit(
  localPath: string,
  repoPath: string
): Promise<Date | undefined> {
  try {
    if (localPath.startsWith("src/content/")) {
      // Path inside submodule; run git in that dir
      const { stdout } = await execFileP("git", [
        "-C",
        "src/content",
        "log",
        "-1",
        "--format=%cI",
        "--",
        repoPath,
      ]);
      const iso = stdout.trim();
      if (iso) return new Date(iso);
    } else {
      // Regular file in main repo
      const { stdout } = await execFileP("git", [
        "log",
        "-1",
        "--format=%cI",
        "--",
        localPath,
      ]);
      const iso = stdout.trim();
      if (iso) return new Date(iso);
    }
  } catch {
    // ignore; we'll fall back to API
  }
  return undefined;
}

async function getFromGitHub(
  repoPath: string,
  branch: string
): Promise<Date | undefined> {
  try {
    const url =
      `https://api.github.com/repos/${OWNER}/${REPO}/commits` +
      `?path=${encodeURIComponent(repoPath)}&sha=${encodeURIComponent(branch)}&per_page=1`;

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`;

    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      // Prefer committer date for "last changed in repo"
      const iso =
        data[0]?.commit?.committer?.date ?? data[0]?.commit?.author?.date;
      if (iso) return new Date(iso);
    }
  } catch {
    // ignore; caller will handle fallback
  }
  return undefined;
}
