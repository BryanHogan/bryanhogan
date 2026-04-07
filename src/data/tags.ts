interface TagData {
    heroTitle?: string;
    heroSubtitle?: string;
    seoDescription?: string;
    explanation?: string;
}

const tagData: Record<string, TagData> = {
    obsidian: {
        heroTitle: "Obsidian",
        heroSubtitle: "Notes, knowledge management, and productivity with Obsidian.",
        seoDescription: "Articles about Obsidian - guides on vaults, plugins, syncing, and building a personal knowledge management system by Bryan Hogan.",
        explanation: "Obsidian is a markdown-based note-taking app that stores your notes as local files. I use it for everything from blog drafting to managing long-term knowledge.",
    },
    productivity: {
        heroTitle: "Productivity",
        heroSubtitle: "Systems, habits, and tools for getting more done.",
        seoDescription: "Posts about balanced productivity - guides on systems, habits, tools, and workflows by Bryan Hogan.",
        explanation: "Productivity isn't about doing more — it's about doing the right things well. These posts cover the systems and tools that help me work and think better.",
    },
};

export default tagData;
