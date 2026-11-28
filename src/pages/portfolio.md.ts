import type { APIRoute } from "astro";
import { rawContent as introMarkdown } from "./portfolio/_content/intro.md";
import { rawContent as experienceMarkdown } from "./portfolio/_content/experience.md";
import { caseStudies } from "./portfolio/_data/case-studies";
import { techGroups } from "./portfolio/_data/portfolio-tech";
import { inlineHtmlToMarkdown, markdownResponse, resolvePageUrls, stripLeadingBlankLines } from "../utils/markdown";

export const GET: APIRoute = async ({ site }) => {
    if (!site) throw new Error("Set `site` in astro.config.mjs for /portfolio.md");

    // Link to the same slug the case study route is built from, so the link can't point to a missing page.
    const studies = Object.entries(caseStudies).map(([slug, study]) => [
        `### ${study.title}`,
        study.description,
        `[Case study](${new URL(`/portfolio/${slug}.md`, site).href}) · [${study.liveText}](${study.liveHref})`,
    ].join("\n\n"));

    const skills = techGroups.map((group) => [
        `### ${group.title}`,
        group.techs.map((tech) => `- **${tech.name}**: ${inlineHtmlToMarkdown(tech.usage, site)}`).join("\n"),
    ].join("\n\n"));

    const body = [
        (await resolvePageUrls(stripLeadingBlankLines(introMarkdown()), site)).trim(),
        "## Case studies",
        ...studies,
        "## Skills and tools",
        ...skills,
        (await resolvePageUrls(stripLeadingBlankLines(experienceMarkdown()), site)).trim(),
    ].join("\n\n");

    return markdownResponse({
        title: "Portfolio",
        detail: "Work and experience by Bryan Hogan",
        canonical: new URL("/portfolio", site),
        body: `${body}\n`,
    });
};
