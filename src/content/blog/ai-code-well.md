---
title: How to Use AI Coding Tools Well
description: How to use AI for coding well? Practical tips for using AI coding tools, including context management, AGENTS.md files, planning, reviews, tests, and MCPs.
coverImage: ../blog-assets/covers/AI-Code-Well-Cover.svg
pubDate: 2026-07-08T08:13:20+00:00
lastUpdate: 2026-07-08T08:13:20+00:00
tags:
  - ai
  - creating
---

AI coding tools are incredibly helpful. In a previous post I explored [which AI tools to use](/blog/ai-coding-tools), this post goes deeper into how to use these AI systems / extensions well.

## 1. One chat per feature / request

The longer the chat becomes the worse the quality of the answers become. What matters here is how many tokens are used. Every text / file the AI agent reads and remembers increases this amount, so you want to keep it brief, provide everything the agent should know without any unnecessary information. Break work into small, reviewable pieces.

So avoid staying in the same chat sessions when the chats are about different features or parts of the code that are not deeply related to each other.

## 2. Use an AGENTS.md file

The `AGENTS.md` file should be small but include the most important information about your project, it will be used as context for every single chat you start. So don't include nonsense or irrelevant information, as the AI will listen to that every single time.

Tend to stay more concise with this file, and especially avoid instructions that waste tokens. For each line, ask: "Would removing this cause the agent to make mistakes?" If not, cut it. 

A good AGENTS.md file includes an outline of the project, commands, code style preferences and common gotchas.

*When using Claude, create a CLAUDE.md file that just says `@AGENTS.md`, then it knows to use that file instead.*

## 3. Be specific and mention files

Be clear and specific with your instructions. Explicitly mention which components to use and which files to take as reference. You can usually include files with `@`.  

## 4. Add context files

With the AGENTS.md file we have something that is used for **every** session, but what about other information we want to re-use? Create a `/context` folder for this, fill it with relevant knowledge (.md files) that you want to reference, e.g. `user-journeys.md`, `design.md`, `notification-plans.md` and similar.

For some providers you could also use "skills" for this, e.g. Claude Skills, although I found the `/context` approach to work well enough already. I'd prefer these over skills usually as I don't have any lock-in into any specific provider here and keeping them project specific and versioned is easy.

Files I frequently have in my `/context` folder:

- `tasks.md`:  For projects I work on by myself I like having this file with the next things that have to be completed or that were recently done.
- `svelte-best-practices`: A [file provided by Svelte officially](https://svelte.dev/docs/svelte/best-practices) (the web framework I frequently use), using it sometimes helps with generating or reviewing code.
- `app-description.md`: Explain the app in more detail.
- A `/context/plan` folder with files that have content on specific feature implementation plans.

## 5. Plan mode, then implement mode

Use the plan mode first, and once the suggested implementation plan is good let the agent implement it.

## 6. Review code

You want to review the generated code.

I prefer every line that is used to have been reviewed by human eyes at least once, but there are also more things you can do than just a manual review.

Use a different AI for reviewing code. Different AIs have been trained on different data and might catch different things. Asking the same question again can also produce different results even for the same model.  
So having a different AI review the code can be very beneficial, it also resets the context and gives you a fresh answer.

You might also want to write some tests. By running automated tests you can catch issues early. For front-end development look into [Vitest](https://vitest.dev/) for unit and component tests and [Playwright](https://playwright.dev/) for end-to-end tests.

## 7. MCPs, Plugins and more

You can also add more things to your AI model / interface. There are plugins and MCPs (Model Context Protocol) which help AI connect to external data sources. Some providers use "Plugin" as the umbrella term for "Skills" (reusable instructions), "Apps" (connection to external sources) and "MCP servers" (connection to external sources).

I would be careful with adding them though. As this additional content might make your AI agent use more tokens, increasing the context size. It might also add additional instructions that you don't even want. So be very selective with what you add.

For example I've been happy using Codex with only the [Svelte MCP](https://svelte.dev/docs/ai/overview) as it improved the Svelte code it wrote (Svelte is the web framework I frequently use). There is probably a framework / tool specific MCP server plugin for the tool you are using that could be worth exploring. I'd suggest using official, narrow MCPs over generic docs MCPs though.

Other MCPs I found cool was the [Playwright MCP](https://github.com/microsoft/playwright-mcp) and the [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp). Both of these let the AI agent interact with the browser, e.g. "check" the outcome of the written code by itself. 

## But be careful

AI will lie to you. AI will give you bad suggestions. This is inevitable and impossible to avoid as how this technology works it can't be fixed.

And there might be some more [dangers with AI usage](/blog/dangers-of-ai) to be aware of.

I will write more about using AI for (web) development work on my [Clean Web Dev Guide](https://webdev.bryanhogan.com/) in the future. Also consider reading my previous post about [which AI tools to even use for coding](/blog/ai-coding-tools).