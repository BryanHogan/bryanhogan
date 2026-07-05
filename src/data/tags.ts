interface TagData {
    title?: string;
    description?: string;
}

const tagData: Record<string, TagData> = {
    obsidian: {
        title: "Obsidian",
        description: "Obsidian is a note-taking app built on local markdown files. I use it for everything from writing blog posts to managing long-term knowledge.",
    },
    productivity: {
        title: "Productivity",
        description: "Productivity habits and systems for long-term growth, getting things done in a healthy way without burning out.",
    },
    creating: {
        title: "Creating",
        description: "Building things, mostly digital experiences such as websites and web apps.",
    },
    development: {
        title: "Development",
        description: "Code-heavy posts about software development, guides and lessons from building my own projects.",
    },
    book: {
        title: "Book",
        description: "Books I've found valuable, usually in a summary, review & thoughts format.",
    },
    korea: {
        title: "Korea",
        description: "Experiences and insights from living and studying in South Korea.",
    },
    ai: {
        title: "AI",
    },
};

export default tagData;
