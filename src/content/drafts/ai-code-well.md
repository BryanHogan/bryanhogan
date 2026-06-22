---
title: Practices for coding well with AI
description: How to use AI for coding well? What practices are important when using AI for development work?
emoji: 🤖
pubDate: 2026-06-22T12:03:14+00:00
lastUpdate: 2026-06-22T12:03:14+00:00
tags:
  - ai
  - creating
---

How to use these AI systems / extensions well?

## 1. One chat per feature / request

The longer the chat becomes the worse the quality of the answers become. What matters here is how many tokens are used, every text / file the AI agents reads and remembers increases this amount, so you want to keep it brief, provide everything the agent should know without any unnecessary information.

So avoid staying in the same chat sessions when the chats are about different features or parts of the code that are not deeply related to each other.

## 2. Use a AGENTS.md file

The AGENTS.md file should be small but include the most important information about your project, it will be used as context for every single chat you start. So don't include nonsense or irrelevant information, as the AI will listen to that every single time.

Tend to stay more concise with this file, and especially avoid instructions that waste tokens. For each line, ask: "Would removing this cause the agent to make mistakes?" If not, cut it. 

A good AGENTS.md file includes an outline of the project, commands, code style preferences and common gotchas.

*When using Claude create a CLAUDE.md file that just says `@AGENTS.md`, then it knows to use that file instead.*

## 3. Be specific and mention files

Be clear and specific with your instructions. Explicitly mention which components to use and which files to take as reference. You can usually include files with `@`.

## 4. Add context files

With the AGENTS.md file we have something that is used for **every** session, but what about other information we want to re-use? Create a `/context` folder for this, fill it with relevant knowledge (.md files) that you want to reference, e.g. `user-journeys.md`, `design.md`, `notification-plans.md` and similar.

For some providers you could also use "skills" for this, e.g. Claude Skills, although I found the `/context` approach to work well enough already. I'd avoid skills since they might lock me into one specific ecosystem.

%%
 Create a `/context` folder with further information about your project. The AGENTS.md file should be kept slim, but there will be other things you'll want to describe about your project that you want to re-use between multiple sessions. Context files might be an app description, possible user journeys, visual design description of certain sections, wireframes, prototype code and similar.
%%

## 5. Plan mode, then implement mode

Use the plan mode first, and once the suggested implementation plan is good let the agent implement it.

%%
- MCPs & plugins
- Playwright, Context7 (usually don't use them, as they eat a lot of tokens)
- Custom commands

- https://code.claude.com/docs/en/best-practices
%%