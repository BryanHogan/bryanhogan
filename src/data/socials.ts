import { Icons } from "../components/Icons";
interface SocialMediaDetail {
    name: string;
    href: string;
    icon: keyof typeof Icons;
    iconalt: string;
}

interface Socials {
    [key: string]: SocialMediaDetail;
}

const socials: Socials = {
    instagram: {
        name: "Instagram",
        href: "https://instagram.com/bryanhoganme",
        icon: "instagram",
        iconalt: "Instagram logo"
    },
    linkedin: {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bryanhoganme/",
        icon: "linkedin",
        iconalt: "LinkedIn logo"
    },
    youtube: {
        name: "Youtube",
        href: "",
        icon: "youtube",
        iconalt: "Youtube logo"
    },
    twitch: {
        name: "Twitch",
        href: "https://www.twitch.tv/bekublue",
        icon: "twitch",
        iconalt: "Twitch logo"
    },
    github: {
        name: "GitHub",
        href: "https://github.com/BryanHogan/",
        icon: "github",
        iconalt: "Github logo"
    },
    substack: {
        name: "Substack",
        href: "https://bryanhogan.substack.com/",
        icon: "substack",
        iconalt: "Substack logo"
    },
    medium: {
        name: "Medium",
        href: "https://medium.com/@bryanhoganme",
        icon: "medium",
        iconalt: "Medium logo"
    },
    threads: {
        name: "Threads",
        href: "https://www.threads.net/@bryanhoganme",
        icon: "threads",
        iconalt: "Threads logo"
    },
    mastodon: {
        name: "Mastodon",
        href: "https://mastodon.social/@BryanHogan",
        icon: "mastodon",
        iconalt: "Mastodon logo"
    }

}
export const { instagram, linkedin, youtube, twitch, github, substack, medium, threads, mastodon } = socials;

export default socials;

// Might want to add: Reddit, Hackernews, Lemmy, Nebula