interface TagData {
    title?: string;
    description?: string;
}

const tagData: Record<string, TagData> = {
    obsidian: {
        title: "Obsidian",
        description: "Obsidian is a note-taking app that stores your notes as local markdown files. I use it for everything from writing blog posts to managing long-term knowledge.",
    },
    productivity: {
        title: "Productivity",
        description: "About balanced productivity. Productivity for long-term growth to reach your goals in a healthy way without burn-out.",
    },
};

export default tagData;
