---
title: Which AI coding tools to use
description: Which AI coding tools are best? What should you use? What I recommend for development work.
coverImage: ../blog-assets/covers/AI-Coding-Tools-Cover.svg
pubDate: 2026-07-01T02:43:21+00:00
lastUpdate: 2026-07-01T02:43:21+00:00
tags:
  - ai
  - creating
---

Artificial Intelligence (AI) / Large Language Models (LLMs) for coding are amazing, they allow you to get things done so much quicker, understand and learn faster, find issues and much more, it's a fundamental change to programming.

What used to take weeks, can now be done in just a few hours. But where to even begin? There are so many AI tools out there, it's overwhelming. I've been exploring what I want to use and a workflow for my development work, from creating static websites using [Astro](https://astro.build) to complex web apps via [SvelteKit](https://svelte.dev/docs/kit) and native apps through [CapacitorJS](https://capacitorjs.com).

## Exploring solutions

There are different ways to interact with AIs, you have the common website chat interfaces most are already familiar with, but you also have extensions for your IDE or even complete Visual Studio Code forks.

### Web interfaces

So for chatting you can use ChatGPT, Claude, Gemini, Perplexity and more. You probably have already used these, there's a lot you can do here, they can provide you code or feedback, or explain something to you. You can create "projects" to add some context to your prompts, e.g. what tech-stack you are using and a description of what you are working on which is re-used between different chat sessions.

But the biggest limitation here is that these AIs have no idea about your project, only what you tell them about it, context is not updated automatically, feedback has to be provided manually. They also can't edit files for you.

### Custom IDEs

There are custom forks of Visual Studio Code such as Cursor and Antigravity. They are nice, but ultimately keep you in some caged ecosystem of one provider, e.g. Antigravity wants you to use Google's LLM system.

### Extensions

I found extensions for Visual Studio Code (VSCode) to be the most powerful and flexible. There are other editors such as Zed, but their extension ecosystem is a bit smaller.

There are many extensions available for VSCode, e.g. [Claude Code](https://code.claude.com/docs/en/overview), [ChatGPT Codex](https://developers.openai.com/codex/ide), [OpenCode](https://opencode.ai/), [Cline](https://cline.bot/) and many more. Of course in VSCode there's also the built-in GitHub Copilot, which I found to work somewhat well with Gemini.

Cline is open source and allows you to interact with any AI provider, but you need to set up API access and top up on balance with that specific provider. This got too expensive for me, at least when I tried the big providers. The OpenCode extension was just a terminal, and a terminal is a horrible interface.

So instead I went with other options.

## The strongest options

As of July 2026 I found the following to be the strongest options for coding with AI:

- [Codex](https://openai.com/codex/)
- [Claude Code](https://claude.com/product/claude-code)
- Copilot - I used it together with Gemini, but recently it became much more expensive, so I stopped using it.
- [OpenCode Go](https://opencode.ai/go) - Gives access to the Chinese models such as [GLM](https://z.ai), [Kimi](https://www.kimi.com), [DeepSeek](https://www.deepseek.com/en/), [Qwen](https://chat.qwen.ai), [MiniMax](https://www.minimax.io) and [MiMo](https://mimo.xiaomi.com/).
- [Ollama Cloud](https://ollama.com/pricing)
- [Z.ai](https://chat.z.ai/)
- [DeepSeek](https://www.deepseek.com/en/)
- [Cursor](https://cursor.com/pricing)
- [OpenRouter](https://openrouter.ai/) - Use any provider, no subscription offered, pay per token.

Many of these tools use their own interface, e.g. when you use the Claude models you use the Claude Code extension, or the Codex extension for Open AI's GPT models. Some of the Chinese providers don't have their own interface, but it can be integrated into one of the existing ones, e.g. there's an extension for [adding DeepSeek to Copilot](https://github.com/Vizards/deepseek-v4-for-copilot). I also found [Cline](https://cline.bot/) to work okay.

## What to choose

I currently mostly use Claude Code and Codex as extensions in VSCode, I found them to be the most consistent and provide the best answers usually.

Whether Codex or Claude is currently leading changes quite frequently, so I'm not making a statement on that. I do have to say that Claude has been quite customer unfriendly recently. Codex provides more usage with their around 20€ subscription as well. I have been using Codex with the [Svelte MCP](https://svelte.dev/docs/ai/overview) which made it much better at writing Svelte code, [Svelte](https://svelte.dev/) is the front-end framework I prefer to use.

As more anti-consumer decisions in Codex and Claude trickle in I will be looking to explore the other options mentioned above more and more.

## Use it well

The most important practices for better results with AI were keeping the context small, frequently restarting chats, a good `AGENTS.md` file and being specific.

I found it helpful to **at least use two AIs that review each other's work**, e.g. one AI writes code based on very specific prompts and another AI reviews that code in addition to reviewing all of the code with my own eyes as well.

I wrote a separate post going more into detail of [how to use AI well for coding here](/blog/ai-code-well).

In my free and open [Clean Web Development guide](https://webdev.bryanhogan.com/) I go into even further details.

## Prototyping Tools

These tools are very cool, they can't create finished products but I found them incredibly helpful for prototyping. They allow you to describe an app and then build a (somewhat) functional version of it.

For my recent work I found Gemini Canvas and Claude Artifact to be preferable.

The code generated is messy and not scalable, but for prototyping in an iterative design process that is okay.

There are many of such tools available now:
- [Gemini Canvas](https://gemini.google/overview/canvas/)
- [Claude Artifact](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them)
- [Figma Make](https://www.figma.com/make/)
- [Lovable](https://lovable.dev/)
- And even more: [Bolt.new](https://bolt.new/), [v0](https://v0.app/), [Replit](https://replit.com/), [Base44](https://base44.com/) 

## AI Design

Design is a huge field, but there are some AI tools built to specifically "help with design" such as [Google Stitch](https://stitch.withgoogle.com/home), [Claude Design](https://claude.ai/design) or AI built into [Figma](https://www.figma.com/).

I enjoyed using Google Stitch for working on some UI problems while working on my app [DailySelfTrack](https://dailyselftrack.com/). I describe the (UI) problem I am facing and it generates some possible variants, I then take a variant and iterate on that. This doesn't replace the critical thinking I have to do, but it's helpful to get possible solutions to a problem. The average quality of the responses is not the best, but Google seems very generous with their token costs.

## AI-assisted coding is powerful

I found this part of [Emil Kowalski](https://emilkowal.ski/)'s newsletter about Opus 4.5 noteworthy:

>When I was starting out, I remember how obsessed I was with finding out how a command menu was built. A complex, "mysterious" component that took me weeks to build properly, I was so happy.  
><br/>
>Now the same result is just one prompt away.  
><br/>
>It’s an exciting time.  
><br/>
>On the other hand it makes me a bit sad too. Is everything I’ve been learning about code over the past few years basically worthless now, because Opus 4.5 can do it faster and better?  
><br/>
>Not exactly.

AI is becoming more capable quickly, and tools for using these LLMs are improving quickly as well. A weakness or AI-Tell from this week might not exist next week. The best tool / provider of this week might get beaten in the next. It's impossible to imagine how AI will shape our future in a few years.

I wrote about [dangers of AI](/blog/dangers-of-ai), but I think it's important to keep some optimism about the future.

## FOMO Marketing

Will AI replace developers?

Obviously not. There has to be someone to at least write the prompts. For many projects you also want someone to check the code and you also have to setup the project in the first place. There is a lot of value in understanding code that can't be quickly explained by AI.

But, it is true that coding has fundamentally changed.

This does not mean you have to listen to any of the "10x ninjas" who burn credits at insane rates and want you to do the same. Try taking a look what these people actually want to sell you, often it's the AI companies themselves who obviously love selling you more credits, or they are selling you something else using FOMO (fear of missing out).

## There's even more

There's also projects such as GitHub's [Spec-Kit](https://github.com/github/spec-kit) that explores developing in a way that is closer to vibe coding than traditional coding.

I will expand this list as I come across more projects that are worth including here.

As part of this post I also created a post about AI usage on my free and open [Clean Web Development guide](https://webdev.bryanhogan.com/).

I also wrote about [how to use AI well for coding](/blog/ai-code-well).