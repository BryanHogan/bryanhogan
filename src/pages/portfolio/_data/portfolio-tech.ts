// Tech and methods for the portfolio page, grouped.
// `usage` is a short HTML sentence that says how and where Bryan used it.

import LenevinPost from "../../../assets/images/portfolio/Lenevin-Final-Instagram-Post.png";
import IconWork from "../../../assets/images/portfolio/Portfolio-Icon-Work.png";
import CarouselLanguage from "../../../assets/images/portfolio/Social-Carousel-Learn-Any-Language.png";
import CarouselFood from "../../../assets/images/portfolio/Social-Carousel-Food.png";
import StarStarterPreview from "../../../assets/images/portfolio/StarStarter-Preview-Image.png";
import DstWireframe from "../../../content/blog-assets/images/Bryan-Hogan-CoCo-Final-Dev-Diary-Wireframe-Links.png";

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
    seoHead: '<a href="https://webdev.bryanhogan.com/seo/head/">what belongs in the head of a page</a>',
    seoIntro: '<a href="https://webdev.bryanhogan.com/seo/introduction/">the basics of SEO</a>',
    cssSetup: '<a href="https://webdev.bryanhogan.com/css/css-setup/">CSS setup</a>',
    colors: '<a href="https://webdev.bryanhogan.com/visual-design/colors/">picking colors for a website</a>',
    checklist: '<a href="https://webdev.bryanhogan.com/start/checklist/">website launch checklist</a>',
    letterAi: '<a href="https://bryanhogan.github.io/projects/AAI/index.html">AI that recognizes letters and numbers</a>',
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
        title: "Web development",
        techs: [
            {
                name: "JavaScript",
                usage: `JavaScript is used in many of my projects such as ${link.dailyselftrack}, ${link.forms}, ${link.sorbit}, ${link.uvtodo} and more.`,
            },
            {
                name: "TypeScript",
                usage: `Used where type safety helps, e.g. in ${link.taskSweeper}, ${link.starStarter}, the ${link.fch} website, ${link.dailyselftrackLanding} and the React version of ${link.dailyselftrack}.`,
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
                usage: `The demo page of ${link.starStarter} scores 100 in all four Lighthouse categories, and the websites I build for clients and myself follow the same standard. I hate wasting resources. Websites and digital interactions should be as fast as possible. I know how to reduce loading times, including optimizing media, CSS, JavaScript and fonts. I analyze performance with tools like Chrome DevTools, Firefox DevTools and the Firefox Profiler.`,
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
                usage: `Using Astro for projects where performance matters more than interactivity. Built this website, ${link.starStarter}, the ${link.fch} company website and the landing page for ${link.dailyselftrackLanding} with Astro, as well as ${link.flowTimer}, which also integrates the Svelte framework. The ${link.webdev} and ${link.toLearnKorean} use Starlight, Astro's theme for documentation sites.`,
            },
            {
                name: "React",
                usage: `Learned React after HTML, CSS and JavaScript. Built a website for a Minecraft modpack (now offline), used React as part of <a href="#" data-select-tech="Next.js">Next.js</a> for SocialView, and have been using it for AI prototypes as well. The first version of ${link.dailyselftrack} used React Native, the second version used Ionic and React.`,
            },
            {
                name: "Next.js",
                usage: `I built SocialView with Next.js and Tailwind CSS. It's a SaaS prototype that gets guests of restaurants and bars to interact with them on social media.`,
            },
            {
                name: "Tailwind CSS",
                usage: "Used together with Next.js for SocialView.",
            },
            {
                name: "Sveltia CMS",
                usage: `Set up Sveltia CMS for ${link.blog} for web based writing in a nicer interface. Customized it with fixes for editing on mobile. Wrote about it in <a href="/blog/sveltia-cms-astro-blog">Setting up Sveltia CMS for an Astro Markdown Blog</a>.`,
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
        title: "UX, UI and research",
        techs: [
            {
                name: "Usability testing",
                usage: `Task-based tests with think-aloud and follow-up questions were run for ${link.dailyselftrack} and ${link.sorbit}, based on the methods of the Nielsen Norman Group, and usability was measured with the SUS questionnaire. ${link.sorbit} reached an average SUS score above 90.`,
            },
            {
                name: "User interviews",
                usage: `For my bachelor thesis I interviewed the participants after the ${link.dailyselftrack} usability tests, to gain better insights into usability and market fit. I've also done user interviews during my Code & Context studies, e.g. for a project to help people who take medicine regularly.`,
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
                usage: `For ${link.dailyselftrack} I started with sketches and a flowchart, then made wireframes in Figma. These Figma wireframes were then used for user testing. For ${link.sorbit} I made wireframes for the relevant user flows. They served as the reference for an AI prototype, which was then used for user testing.`,
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
                usage: `My bachelor thesis was about the flexibility-usability trade-off, how an app can offer rich customization and still be easy to use. In ${link.dailyselftrack} I use progressive disclosure, so advanced options only show up when someone needs them, and sensible defaults to make the first steps easier. I also studied interaction design in multiple courses at Code & Context.`,
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
    {
        title: "AI and automation",
        techs: [
            {
                name: "Coding agents",
                usage: `I find AI assistance immensely powerful and enjoy exploring efficient ways to use it. I work with Claude Code and Codex in many ways, e.g. through extensions in Visual Studio Code or in Zed's Agent Panel. How to use AI well keeps changing quickly. I also wrote about ${link.aiTools} and ${link.aiWell}.`,
            },
            {
                name: "MCP servers",
                usage: "I've used MCP servers across many tools, most heavily the Playwright and Chrome DevTools MCPs so an agent can check its own work in the browser, and the Svelte MCP for better Svelte code. I've also explored using MCPs to connect AI to external tools such as Notion and Google Drive. I also use MCP servers with my self-hosted n8n, NocoDB and Postiz stack.",
            },
            {
                name: "AI prototyping",
                usage: `For ${link.sorbit} an AI prototype was built using the wireframes as reference. We used it for user testing before writing production code. I've also used AI prototypes to test business and game ideas, with tools like Gemini Canvas, Claude Artifacts, Figma Make and Lovable.`,
            },
            {
                name: "AI design tools",
                usage: `Google Stitch is the AI design tool I've used most. I've used it to explore UI directions and to solve specific UI problems, e.g. for ${link.dailyselftrack}. I've also explored paper.design and pen.dev.`,
            },
            {
                name: "n8n",
                usage: "For a client who collects SEO keyword research in Google Sheets, I built an n8n automation that turns it into SEO-optimized blog post drafts in WordPress. I also use n8n for my own social media automation pipeline, together with NocoDB and Postiz.",
            },
            {
                name: "Self-hosted AI tooling",
                usage: `I run Hermes Agent, a self-hosted, self-managing AI assistant, on my own VPS. It's part of a social media automation pipeline I use, together with <a href="#" data-select-tech="n8n">n8n</a>, NocoDB and Postiz. I interact with Hermes Agent directly through the desktop app with an SSH gateway, or through Telegram.`,
            },
            {
                name: "PyTorch",
                usage: `In a Code & Context course I used PyTorch to build an ${link.letterAi}.`,
            },
        ],
    },
    {
        title: "Product and strategy",
        techs: [
            {
                name: "Market research",
                usage: `In my practical project at Code & Context I ran a survey on how and why people self-track, which was the starting point for ${link.dailyselftrack}. Before sending it out I tested the questions with people one-on-one, which also showed me how they already use similar tools. For my bachelor thesis I analyzed 29 self-tracking apps to validate a potential market gap.`,
            },
            {
                name: "Market-fit evaluation",
                usage: `My bachelor thesis asked whether greater customization in ${link.dailyselftrack} improves usability and market fit. To evaluate market fit I used Dan Olsen's Product-Market Fit Pyramid and worked out a <a href="#" data-select-tech="Business Model Canvas">Business Model Canvas</a> for the app, including six customer segments, their value propositions and a revenue model. I combined this with my analysis of 29 competing apps and market-fit questions in the user tests. The research showed a gap between rigid self-tracking apps and spreadsheet tools, which a privacy-first app without a mandatory subscription, aimed at moderately technical users, could fill.`,
            },
            {
                name: "Business Model Canvas",
                usage: `For my bachelor thesis I worked out a Business Model Canvas for ${link.dailyselftrack}, covering all nine building blocks. It splits the target users into six customer segments, such as health and wellness enthusiasts, people with chronic conditions and habit builders, each with its own value proposition. Building on the Business Model Canvas and the Lean Canvas, I also made the <a href="/blog/clear-business-idea-canvas">Clear Business Idea Canvas</a> for evaluating start-up ideas.`,
            },
            {
                name: "Requirements analysis",
                usage: `For ${link.sorbit} I turned the founder's idea into a written scope with clear goals and technical and organizational requirements. In the iterative design process that followed, the user tests showed us which requirements to adjust.`,
            },
            {
                name: "Roadmap and feature prioritization",
                usage: `For ${link.sorbit} I defined the core features and a development timeline together with the founder. The feature priorities stayed open and were settled through the design iterations, based on what the user tests with the AI prototype showed.`,
            },
            {
                name: "Agile project management",
                usage: `At Digital Solution Group we worked in a Scrum-like process with <a href="#" data-select-tech="Jira">Jira</a>. For ${link.sorbit} I set up a ticket system in <a href="#" data-select-tech="Notion">Notion</a> and split the development work into three phases, which we worked through in sprints. I also took courses on agile coding at Code & Context.`,
            },
            {
                name: "Jira",
                usage: `At Digital Solution Group we planned and tracked our work in Jira.`,
            },
            {
                name: "Notion",
                usage: `Used Notion for project management and knowledge work. For ${link.sorbit} I set up a ticket system with a Kanban board, a timeline and an overview of who needs to do what. For Sorbit we also used an OKR (Objectives and Key Results) board. Also wrote an <a href="/blog/notion-obsidian-comparison">analysis comparing Notion and Obsidian</a>.`,
            },
            {
                name: "Microsoft 365",
                usage: "At Handon dressed to sell I used Microsoft 365 in my daily work. Used at client projects as well.",
            },
            {
                name: "Google Workspace",
                usage: "used the Google Workspace for freelance projects. Google Sheets for visualizing data, e.g. competitor research during DailySelfTrack, analysing data from web analytics and social media, and project planning. Built client automation between data in Google Sheets and Wordpress API using n8n. Explored MCP connections into Google ecosystem, e.g. Google Drive through an MCP server.",
            },
        ],
    },
    {
        title: "Marketing and content",
        techs: [
            {
                name: "SEO",
                usage: `SEO is relevant for all of my websites, e.g. ${link.blog} and ${link.starStarter}. My blog uses semantically correct HTML, loads fast, has excellent Lighthouse scores, includes all relevant meta tags in the head and uses structured data (JSON-LD). In the ${link.webdev} I explain ${link.seoIntro} and ${link.seoHead}.`,
            },
            {
                name: "Content writing",
                usage: `I write ${link.blog}, a monthly newsletter, the ${link.webdev} and ${link.toLearnKorean}.`,
            },
            {
                name: "Technical writing",
                usage: `I write guides and documentation, like the ${link.webdev} and the docs for ${link.starStarter}. The guide includes a ${link.checklist} that covers design, HTML and CSS, SEO and accessibility. On my blog I also write technical posts, e.g. on <a href="/blog/web-to-app-sveltekit-capacitor">building apps with SvelteKit and Capacitor</a> and <a href="/blog/sveltia-cms-astro-blog">setting up Sveltia CMS for an Astro blog</a>.`,
            },
            {
                name: "Web analytics",
                usage: `I've used Google Analytics and Umami. I use Umami on ${link.blog} and on client websites like ${link.fch}, and ${link.starStarter} has it built in. I self-host Umami on my personal VPS on Oracle Cloud.`,
            },
            {
                name: "Landing pages",
                usage: `I build landing pages for my own products, like ${link.dailyselftrackLanding} with its waitlist and ${link.starStarter}, and for freelance clients.`,
            },
            {
                name: "Social media",
                usage: "For Volt Deutschland I managed the social media channels of the party's two lead candidates in the 2021 German federal election. I planned the content, designed posts in Figma, wrote the copy and published on Instagram, Twitter, Facebook and LinkedIn.",
            },
            {
                name: "Photoshop and Affinity",
                usage: `I use Photoshop or Affinity for more detailed image editing when Figma is not enough.`,
            },
            {
                name: "DaVinci Resolve and Edits",
                usage: "I edit videos with DaVinci Resolve. Simple videos I've also edited using Edits.",
            },
            {
                name: "Website management",
                usage: "At Handon dressed to sell, an international B2B business fashion company, I maintained and optimized the company websites and e-commerce content in the CMS.",
            },
        ],
    },
    {
        title: "Back-end and DevOps",
        techs: [
            {
                name: "Git and GitHub",
                usage: `I version my projects with Git and host them on ${link.github}. ${link.taskSweeper} uses GitHub Actions to lint, test and publish signed releases.`,
            },
            {
                name: "Java",
                usage: `Java was the main language in my programming classes, both in high school and during my Code & Context studies. Outside of class I also used it for Minecraft modding.`,
            },
            {
                name: "Node.js",
                usage: `Used Node.js in ${link.forms} to create new forms and export responses.`,
            },
            {
                name: "REST APIs",
                usage: "Worked with REST APIs as a software developer at Digital Solution Group.",
            },
            {
                name: "SvelteKit server",
                usage: `Server routes and form actions, e.g. in ${link.forms}, my service that collects feedback for my projects, products and blog posts.`,
            },
            {
                name: "Python",
                usage: `I use Python for automations on my PC. At Digital Solution Group I sometimes used it for tasks like working with large translation files. In a Code & Context course I used it with PyTorch to build an ${link.letterAi} (built before AI coding / ChatGPT came out).`,
            },
            {
                name: "SQL",
                usage: `${link.forms} reads and writes its data with SQL queries, and schema changes are versioned SQL migrations.`,
            },
            {
                name: "PostgreSQL",
                usage: `I use PostgreSQL with Drizzle ORM in ${link.dailyselftrack} (not public yet). I also used PostgreSQL during my Code & Context studies.`,
            },
            {
                name: "Drizzle ORM",
                usage: `I use Drizzle ORM with PostgreSQL in ${link.dailyselftrack} (not public yet).`,
            },
            {
                name: "Cloudflare Workers",
                usage: `${link.forms} runs as a Cloudflare Worker, with secrets managed through Wrangler and submissions protected by Cloudflare Turnstile, verified on the server.`,
            },
            {
                name: "Cloudflare D1",
                usage: `${link.forms} stores its responses in Cloudflare D1, Cloudflare's SQLite database.`,
            },
            {
                name: "Cloudflare Zero Trust",
                usage: `I've used Cloudflare Zero Trust in several projects to restrict access, e.g. to my <a href="#" data-select-tech="Oracle Cloud VPS">personal VPS</a> and to ${link.sorbit} during user tests.`,
            },
            {
                name: "Oracle Cloud VPS",
                usage: `I run a personal VPS on Oracle Cloud, where I host Umami, n8n, NocoDB, Postiz and Hermes. Access is protected with <a href="#" data-select-tech="Cloudflare Zero Trust">Cloudflare Zero Trust</a>.`,
            },
        ],
    },
];
