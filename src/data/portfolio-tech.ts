// Tech and methods for the portfolio page, grouped.
// `usage` is a short HTML sentence that says how and where Bryan used it.

import LenevinPost from "../assets/images/portfolio/Lenevin-Final-Instagram-Post.png";
import IconWork from "../assets/images/portfolio/Portfolio-Icon-Work.png";
import CarouselLanguage from "../assets/images/portfolio/Social-Carousel-Learn-Any-Language.png";
import CarouselFood from "../assets/images/portfolio/Social-Carousel-Food.png";
import StarStarterPreview from "../assets/images/portfolio/StarStarter-Preview-Image.png";
import DstWireframe from "../content/blog-assets/images/Bryan-Hogan-CoCo-Final-Dev-Diary-Wireframe-Links.png";

const iconImage = {
    src: IconWork,
    alt: "A grid of custom line and solid glyph icons on a dark background",
    caption: "Icons I made for this blog.",
};
const lenevinImage = {
    src: LenevinPost,
    alt: "Lenevin Instagram product post for an organic cress salve, green botanical branding on a cream background",
    caption: "Instagram post for Lenevin.",
};

const link = {
    dailyselftrack: '<a href="/portfolio/dailyselftrack">DailySelfTrack</a>',
    dailyselftrackLanding: '<a href="https://dailyselftrack.com/">dailyselftrack.com</a>',
    sorbit: '<a href="/portfolio/sorbit">Sorbit</a>',
    blog: '<a href="/blog">my blog</a>',
    starStarter: '<a href="https://starter.bryanhogan.com/">StarStarter for Astro</a>',
    webdev: '<a href="https://webdev.bryanhogan.com/">Clean Web Dev Guide</a>',
    toLearnKorean: '<a href="https://tolearnkorean.com/">ToLearnKorean</a>',
    gameKorean: '<a href="https://game.tolearnkorean.com/">Game.ToLearnKorean</a>',
    hiragana: '<a href="https://app.tolearnjapanese.com/">Hiragana app</a>',
    flowTimer: '<a href="https://timer.bryanhogan.com/">Flow Timer</a>',
    uvtodo: '<a href="https://todo.bryanhogan.com/">UV Todo</a>',
    fch: '<a href="https://www.fch-dachdecker.de/">FCH Dachdecker</a>',
    forms: '<a href="https://forms.bryanhogan.com/">Forms</a>',
    taskSweeper: '<a href="https://github.com/BryanHogan/task-sweeper">Task Sweeper</a>',
    github: '<a href="https://github.com/BryanHogan/">GitHub</a>',
    aiTools: '<a href="/blog/ai-coding-tools">which AI coding tools to use</a>',
    aiWell: '<a href="/blog/ai-code-well">how to use them well</a>',
    roadmap: '<a href="https://dailyselftrack.com/roadmap">roadmap</a>',
    seoHead: '<a href="https://webdev.bryanhogan.com/seo/head/">what belongs in the head of a page</a>',
    seoIntro: '<a href="https://webdev.bryanhogan.com/seo/introduction/">the basics of SEO</a>',
    cssSetup: '<a href="https://webdev.bryanhogan.com/css/css-setup/">CSS setup</a>',
    colors: '<a href="https://webdev.bryanhogan.com/visual-design/colors/">picking colors for a website</a>',
    checklist: '<a href="https://webdev.bryanhogan.com/start/checklist/">website launch checklist</a>',
};

export interface TechImage {
    src: ImageMetadata;
    alt: string;
    caption: string;
    /** Spans the full width of the image grid, for wide images. */
    wide?: boolean;
}

const wireframeImage: TechImage = {
    src: DstWireframe,
    alt: "Figma wireframe of DailySelfTrack with eight phone screens connected by prototype links",
    caption: "Clickable wireframe for DailySelfTrack.",
    wide: true,
};

// Shown under both Figma and Visual design. Figma also shows the wireframe.
const designImages: TechImage[] = [
    {
        src: StarStarterPreview,
        alt: "Preview image reading How to set up Astro Starter Template by Bryan Hogan, with tech logos and a screenshot of the template",
        caption: "Preview image for StarStarter for Astro.",
        wide: true,
    },
    {
        src: CarouselLanguage,
        alt: "Carousel slide reading How to learn any language fast, with three window-style boxes for Sounds, Mnemonics and Repeat",
        caption: "Social media carousel on learning languages.",
    },
    {
        src: CarouselFood,
        alt: "Carousel slide reading The food is amazing, with cut-out photos of sushi, curry, ramen and other dishes on a dark background",
        caption: "Slide from a social media carousel.",
    },
    iconImage,
    lenevinImage,
];

export interface Tech {
    name: string;
    usage: string;
    images?: TechImage[];
}

export interface TechGroup {
    title: string;
    techs: Tech[];
}

export const techGroups: TechGroup[] = [
    {
        title: "Web",
        techs: [
            {
                name: "JavaScript",
                usage: `JavaScript is used in many of my projects such as ${link.dailyselftrack}, ${link.forms}, ${link.sorbit}, ${link.uvtodo}, and more`,
            },
            {
                name: "TypeScript",
                usage: `Used where type safety helps, e.g. in ${link.gameKorean}, the ${link.hiragana}, ${link.flowTimer}, the ${link.fch} website and more. See <a href="#" data-select-tech="JavaScript">JavaScript</a> for more.`,
            },
            {
                name: "HTML",
                usage: `The base of every site and app I build, from ${link.blog} to ${link.dailyselftrack}.`,
            },
            {
                name: "CSS",
                usage: `Responsive layouts for everything I build. ${link.starStarter} and this site run on a token-based design system I wrote in plain CSS. I write modern CSS that stays consistent and easy to maintain as a project grows. In the ${link.webdev} I explain the ${link.cssSetup} I use for projects such as StarStarter.`,
            },
            {
                name: "Performance",
                usage: `The demo page of ${link.starStarter} scores 100 in all four Lighthouse categories, and the websites I build for clients and myself are built to the same standard. I hate wasting resources, websites and digital interactions should be as fast and performant as possible. I know how to reduce loading times, including optimizing media, CSS, JavaScript and fonts. I'm able to analyze performance with tools like Chrome DevTools, Firefox DevTools and the Firefox Profiler.`,
            },
            {
                name: "Accessibility",
                usage: `${link.starStarter} meets WCAG AA. Accessibility is part of every website and app I build, for my own projects and for clients.`,
            },
            {
                name: "SvelteKit",
                usage: `Using SvelteKit for ${link.dailyselftrack}, ${link.gameKorean}, ${link.hiragana}, ${link.sorbit} and ${link.forms}. ${link.flowTimer} uses Svelte inside Astro.`,
            },
            {
                name: "Astro",
                usage: `Using Astro for projects where better performance and less reactivity is needed. Built this website, ${link.starStarter}, the ${link.fch} company website, the landing page for ${link.dailyselftrackLanding} and ${link.flowTimer} with Astro. ${link.flowTimer} integrates the Svelte framework. The ${link.webdev} and ${link.toLearnKorean} use Starlight, Astro's theme for documentation sites.`,
            },
            {
                name: "React",
                usage: `Learned React after HTML, CSS and JavaScript. Built a website for a Minecraft modpack (now offline), used React as part of <a href="#" data-select-tech="Next.js">Next.js</a> for SocialView, and have been using it for AI prototypes as well. The first version of ${link.dailyselftrack} used React Native, the second version used Ionic and React.`,
            },
            {
                name: "Next.js",
                usage: `I built SocialView with Next.js and Tailwind CSS, a SaaS prototype that gets guests of restaurants and bars to interact with them on social media in new ways.`,
            },
            {
                name: "Tailwind CSS",
                usage: "Used together with Next.js for SocialView.",
            },
        ],
    },
    {
        title: "Apps and data",
        techs: [
            {
                name: "Capacitor",
                usage: `Turns my SvelteKit apps into native mobile apps from the same codebase, with native features like local notifications, haptics, file export and sharing. Used for ${link.dailyselftrack}, ${link.sorbit}, ${link.gameKorean} and the ${link.hiragana}.`,
            },
            {
                name: "PWA",
                usage: `${link.dailyselftrack} and ${link.sorbit} run as full PWAs that install from the browser on any platform, from the same codebase as the native builds.`,
            },
            {
                name: "Local-first data",
                usage: `${link.dailyselftrack} and ${link.sorbit} store everything on the device with IndexedDB and Dexie.js. They work offline, need no account, and private data like health logs or notes about friends never have to leave the phone.`,
            },
            {
                name: "Obsidian",
                usage: `I built ${link.taskSweeper}, an Obsidian plugin in TypeScript that moves completed tasks to a Done section at the bottom of a note. I have also been writing in-depth guides for Obsidian, such as my <a href="/blog/obsidian-introduction">Introduction to Obsidian</a> and my <a href="/blog/obsidian-vault">Vault tour blog post</a>.`,
            },
            {
                name: "Testing",
                usage: `Learned test-driven development at Code & Context. Wrote unit tests with Vitest and end-to-end tests with Playwright for ${link.forms}. ${link.taskSweeper} runs its tests in GitHub Actions before every release. The React version of ${link.dailyselftrack} had tests with Vitest, React Testing Library and Cypress.`,
            },
            {
                name: "Chart.js",
                usage: `Powers the charts in ${link.dailyselftrack}'s history view.`,
            },
        ],
    },
    {
        title: "Design and research",
        techs: [
            {
                name: "Usability testing",
                usage: `Task-based tests with think-aloud and follow-up questions were run for ${link.dailyselftrack} and ${link.sorbit}, based on the methods of the Nielsen Norman Group, and usability was measured with the SUS questionnaire. ${link.sorbit} reached an average SUS score above 90.`,
            },
            {
                name: "User interviews",
                usage: `For my bachelor thesis I interviewed the participants after the ${link.dailyselftrack} usability tests, to gain better insights into usability and market fit. I've also done user interviews for other projects such as during my Code & Context studies, e.g. for a project to help people who take medicine regularly.`,
            },
            {
                name: "Personas",
                usage: `I've used personas for multiple projects during my Code & Context studies. For ${link.dailyselftrack} I created two personas to guide design decisions. ${link.sorbit} used personas as well.`,
            },
            {
                name: "User journeys",
                usage: `I've used user journeys for multiple projects during my Code & Context studies. For ${link.dailyselftrack} I created user journeys as well.`,
            },
            {
                name: "Wireframing",
                usage: `For ${link.dailyselftrack} I started with sketches and a flowchart, then made wireframes in Figma. These Figma wireframes were then used for user testing. For ${link.sorbit} I made wireframes for the relevant user flows. An AI prototype was built using the wireframes as reference. This AI prototype was then used for user testing.`,
            },
            {
                name: "Prototyping",
                usage: `For ${link.dailyselftrack} I linked the Figma wireframes into a clickable prototype and tested it with users. For ${link.sorbit} an AI prototype was built using the wireframes as reference, and then used for user testing. I also build AI prototypes with React for testing other product ideas.`,
            },
            {
                name: "Figma",
                usage: `I've used Figma extensively. I first used Figma for creating social media content during my work for Volt. I then used Figma regularly for UI work, creating mobile and desktop versions of websites, visual content for ${link.blog}, social preview images, my guides, icons, presentations and social media content for other projects.`,
                images: [wireframeImage, ...designImages],
            },
            {
                name: "Interaction design",
                usage: `My bachelor thesis was about the flexibility-usability trade-off, how an app can offer rich customization and still be easy to use. In ${link.dailyselftrack} I use progressive disclosure, so advanced options only show up when someone needs them, and sensible defaults to make the first steps easier.`,
            },
            {
                name: "Design systems",
                usage: `I built the design system for this website and ${link.starStarter} in plain CSS. Colors, spacing, typography and other design decisions are stored as tokens, and components like buttons are built on top of them. The same system is the base for my apps ${link.dailyselftrack} and ${link.forms}. ${link.sorbit} has its own design system, made for the app. I have also used design systems in <a href="#" data-select-tech="Figma">Figma</a>.`,
            },
            {
                name: "Visual design",
                usage: `I've designed many visual elements, a lot of them within <a href="#" data-select-tech="Figma">Figma</a>. This includes work on app UI for ${link.dailyselftrack} and ${link.sorbit}, icons, social media graphics and more. The icons on ${link.blog} are my own. I also wrote a guide on ${link.colors}.`,
                images: designImages,
            },
        ],
    },
    
];
