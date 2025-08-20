// Server-only utility (Astro build/SSR)
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const execFileP = promisify(execFile);

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN; // keep server-only (no PUBLIC_)
const OWNER = "BryanHogan";
const REPO = "bryanhogan-blog-content";
const DEFAULT_BRANCH = "main";

// simple per-build cache
const cache = new Map<string, Date>();

type Args = {
  /** Path on disk in your main repo (including submodule mount), e.g. "src/content/blog/my-post.md" */
  localPath: string;
  /** Path inside the CONTENT repo, e.g. "blog/my-post.md" */
  repoPath: string;
  branch?: string;
  /** Optional: override with a known date (e.g. frontmatter) if git/GitHub fail */
  fallback?: Date;
};

async function getFromLocalGit(localPath: string): Promise<Date | undefined> {
  try {
    // If file lives in the submodule at "src/content", run git inside that dir
    // Adjust "submoduleRoot" if yours differs.
    const submoduleRoot = "src/content";
    if (localPath.startsWith(`${submoduleRoot}/`)) {
      const rel = localPath.slice(submoduleRoot.length + 1);
      const { stdout } = await execFileP("git", [
        "-C",
        submoduleRoot,
        "log",
        "-1",
        "--format=%cI",
        "--",
        rel,
      ]);
      const s = stdout.trim();
      if (s) return new Date(s);
    } else {
      const { stdout } = await execFileP("git", [
        "log",
        "-1",
        "--format=%cI",
        "--",
        localPath,
      ]);
      const s = stdout.trim();
      if (s) return new Date(s);
    }
  } catch {
    // ignore — we'll fall back
  }
  return undefined;
}

async function getFromGitHub(repoPath: string, branch = DEFAULT_BRANCH): Promise<Date | undefined> {
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
      // You can choose author vs committer; committer is usually what you want for “last changed in repo”
      const iso = data[0]?.commit?.committer?.date ?? data[0]?.commit?.author?.date;
      if (iso) return new Date(iso);
    }
  } catch {
    // ignore — we'll fall back
  }
  return undefined;
}

/** Main entry: tries local git -> GitHub -> fallback (no fake "today") */
export async function getLastModifiedDate(args: Args): Promise<Date | undefined> {
  const { localPath, repoPath, branch = DEFAULT_BRANCH, fallback } = args;

  // Cache on repoPath+branch (what you show on site)
  const key = `${branch}:${repoPath}`;
  if (cache.has(key)) return cache.get(key)!;

  const fromGit = await getFromLocalGit(localPath);
  if (fromGit) {
    cache.set(key, fromGit);
    return fromGit;
  }

  const fromAPI = await getFromGitHub(repoPath, branch);
  if (fromAPI) {
    cache.set(key, fromAPI);
    return fromAPI;
  }

  if (fallback) return fallback;

  return undefined;
}
