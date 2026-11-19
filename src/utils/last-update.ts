// Server-only utility (Astro build/SSR)
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const execFileP = promisify(execFile);

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN; // keep non-PUBLIC so it never ships to client
const OWNER = "BryanHogan";
const REPO = "bryanhogan";
const DEFAULT_BRANCH = "main";

// Simple per-build cache to avoid repeated lookups
const cache = new Map<string, Date>();

/**
 * Returns the last modified Date for a given file path.
 * Accepts the SAME input your component passes, e.g. "src/content/blog/<slug>.md".
 * Returns undefined when neither local Git nor GitHub has a date.
 */
export async function getLastModifiedDate(file_path: string): Promise<Date | undefined> {
  const localPath = file_path.replace(/\\/g, "/");
  const cacheKey = `${DEFAULT_BRANCH}:${localPath}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const date = await getFromLocalGit(localPath) ?? await getFromGitHub(localPath, DEFAULT_BRANCH);
  if (date) cache.set(cacheKey, date);
  return date;
}

async function getFromLocalGit(
  localPath: string
): Promise<Date | undefined> {
  try {
    const { stdout } = await execFileP("git", [
      "log",
      "-1",
      "--format=%cI",
      "--",
      localPath,
    ]);
    const iso = stdout.trim();
    if (iso) return new Date(iso);
  } catch {
    // ignore; we'll fall back to API
  }
  return undefined;
}

async function getFromGitHub(
  filePath: string,
  branch: string
): Promise<Date | undefined> {
  try {
    const url =
      `https://api.github.com/repos/${OWNER}/${REPO}/commits` +
      `?path=${encodeURIComponent(filePath)}&sha=${encodeURIComponent(branch)}&per_page=1`;

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
