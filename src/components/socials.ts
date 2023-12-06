
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
export const instagramp: SocialMediaProfile = {
    name: "Instagram",
    url: ".com",
    logo: {
        url: ".com",
        width: 12,
        height: 12,
        alt: "Instagram"
    }
}