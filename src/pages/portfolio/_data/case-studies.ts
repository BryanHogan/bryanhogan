// Case study cards on the portfolio page. Also used for /portfolio.md.

export interface CaseStudy {
    title: string;
    description: string;
    caseStudyHref: string;
    liveHref: string;
    liveText: string;
}

export const caseStudies = {
    dailyselftrack: {
        title: "DailySelfTrack",
        description: "DailySelfTrack is an app for self-tracking, combining elements from habit trackers, health apps and journaling tools. It gives you the flexibility of a spreadsheet with the usability of a dedicated app. It runs on the web, as a PWA and on Android. It respects user autonomy and uses a local-first approach.",
        caseStudyHref: "/portfolio/dailyselftrack",
        liveHref: "https://app.dailyselftrack.com/",
        liveText: "Try the app",
    },
    sorbit: {
        title: "Sorbit",
        description: "An app for healthier and happier friendships. Built as a freelancer for a psychology start-up. I built the app and shared the UX work with the founder.",
        caseStudyHref: "/portfolio/sorbit",
        liveHref: "https://sorbit.app/",
        liveText: "Website",
    },
} satisfies Record<string, CaseStudy>;
