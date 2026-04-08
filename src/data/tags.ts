interface TagData {
    title?: string;
    description?: string;
}

const tagData: Record<string, TagData> = {
    obsidian: {
        title: "Obsidian",
        description: "Obsidian is a markdown-based note-taking app that stores your notes as local files. I use it for everything from blog drafting to managing long-term knowledge.",
    },
    productivity: {
        title: "Productivity",
        description: "Productivity isn't about doing more — it's about doing the right things well. These posts cover the systems and tools that help me work and think better.",
    },
};

export default tagData;
