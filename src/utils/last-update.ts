const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const OWNER = "BryanHogan";
const REPO = "bryanhogantemp";
// const FILE_PATH = "src/pages/now.md";

export async function getLastModifiedDate(file_path: string) {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${file_path}&page=1&per_page=1`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
            },
        });

        if (!response.ok) {
            throw new Error(
                `GitHub API request failed: ${response.statusText}`,
            );
        }

        const data = await response.json();

        if (data.length > 0) {
            return new Date(data[0].commit.committer.date);
        }

        throw new Error("No commit data found");
    } catch (error) {
        console.error("Error fetching last modified date:", error);
        return new Date(); // Fallback to current date
    }
}
