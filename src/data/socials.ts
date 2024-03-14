
export interface SocialMediaProfile {
    name: string;
    url: string;
    logo: Logo;
    description?: string;
}
export interface Logo {
    url: string;
    width: number;
    height: number;
    alt: string;
}
export const instagram: SocialMediaProfile = {
    name: "Instagram",
    url: "https://instagram.com/bryanhoganme",
    logo: {
        url: "/logos/Instagram-Logo.svg",
        width: 12,
        height: 12,
        alt: "Instagram logo simple soft white color only"
    }
}
export const linkedin: SocialMediaProfile = {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bryanhoganme",
    logo: {
        url: "/logos/LinkedIn-Logo.svg",
        width: 12,
        height: 12,
        alt: "LinkedIn logo simple soft white color only"
    }
}
export const youtube: SocialMediaProfile = {
    name: "YouTube",
    url: "/",
    logo: {
        url: "/logos/Youtube-Logo.svg",
        width: 15,
        height: 10,
        alt: "YouTube logo simple soft white color only"
    }
}
export const twitch: SocialMediaProfile = {
    name: "Twitch",
    url: "https://www.twitch.tv/bekublue",
    logo: {
        url: "/logos/Twitch-Logo.svg",
        width: 12,
        height: 13,
        alt: "Twitch logo simple soft white color only"
    }
}
export const github: SocialMediaProfile = {
    name: "Github",
    url: "https://github.com/BryanHogan/",
    logo: {
        url: "/logos/Github-Logo.svg",
        width: 32,
        height: 31,
        alt: "Github logo simple soft white color only"
    }
}
export const substack: SocialMediaProfile = {
    name: "Substack",
    url: "https://bryanhogan.substack.com/",
    logo: {
        url: "/logos/Substack-Logo.svg",
        width: 22,
        height: 24,
        alt: "Substack logo simple soft white color only"
    }
}
export const medium: SocialMediaProfile = {
    name: "Medium",
    url: "https://medium.com/@bryanhoganme",
    logo: {
        url: "/logos/Medium-Logo.svg",
        width: 18,
        height: 10,
        alt: "Medium logo simple soft white color only"
    }
}
export const threads: SocialMediaProfile = {
    name: "Threads",
    url: "https://www.threads.net/@bryanhoganme",
    logo: {
        url: "/logos/Threads-Logo.svg",
        width: 22,
        height: 24,
        alt: "Threads logo simple soft white color only"
    }
}
export const mastodon: SocialMediaProfile = {
    name: "Mastodon",
    url: "https://mastodon.social/@BryanHogan",
    logo: {
        url: "/logos/Mastodon-Logo.svg",
        width: 23,
        height: 24,
        alt: "Mastodon logo simple soft white color only"
    }
}
export const bluesky: SocialMediaProfile = {
    name: "BlueSky",
    url: "https://bsky.app/profile/bryanhogan.com",
    logo: {
        url: "/logos/BlueSky-Logo.svg",
        width: 24,
        height: 22,
        alt: "BlueSky logo soft grey color"
    }
}

// To add: Reddit, Hackernews, X, Mastodon, Lemmy, BlueSky, Nebula, Threads, 