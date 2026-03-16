---
title: Making a Website with Obsidian
description: How can you build a website using Obsidian? From markdown to web.
coverImage: ../blog-assets/covers/Obsidian-Website-Cover.svg
pubDate: 2025-08-26T15:09:49+00:00
tags:
  - obsidian
  - creating
  - development
---

Having a website is great! So how do you make one using [Obsidian](https://obsidian.md/)?

There are multiple ways to create one, most are free, some are more complex than others but give you more customization options.

Obsidian is a note-taking tool built on top of markdown files, so what we are actually doing is creating a website based on markdown files. Instead of Obsidian you could also use any program that can edit markdown files, like [MarkText](https://github.com/marktext/marktext), [Visual Studio Code](https://code.visualstudio.com/), [HedgeDoc](https://hedgedoc.org/), or anything else.

## Overview of different ways to make a website with Obsidian

| Tool name                                         | Description                                                                                                                                   | Complexity      | Cost                 |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------- |
| [Obsidian Publish](https://obsidian.md/publish)   | The simplest way to create your site. This feature is offered by the Obsidian team as part of a monthly subscription.                         | Low             | Monthly subscription |
| [Quartz](https://quartz.jzhao.xyz/)               | Converts markdown content into a website. Built to work with Obsidian vaults.<br><br>Integrates well with Obsidian syntax, e.g. `[[]]` links. | Medium          | Free                 |
| [Astro Starlight](https://starlight.astro.build/) | Use a web framework / static-site framework with an existing "theme" such as Astro Starlight.                                                 | Medium ~ Higher | Free                 |
| Custom coded website                              | Fully develop the website yourself and use a library or framework to render your markdown files.                                              | Maximum         | Free                 |

Will mention further alternatives to these in the following sections of the respective tool.

## 1) Obsidian Publish

The most simple and straightforward way to get your Obsidian vault online as a website is through [Obsidian Publish](https://obsidian.md/publish). It's an official feature included in the Obsidian subscription.

Negatives here are the price of the monthly subscription and that customization is limited.

## 2) Quartz

[Quartz](https://quartz.jzhao.xyz/) turns markdown files into a website. It has been built to work with Obsidian.

It's not a professional project, but the end result is still nice.

Quartz is a bit more difficult to set up than Obsidian Publish, but overall still easy. You just need to go through the setup guide and create a GitHub repository for it.

## 3) Astro Starlight & other static-site generators

Astro is a web framework used to build websites, [Starlight](https://starlight.astro.build/) is a pre-built documentation theme for Astro. With this approach you get a beautiful looking "documentation" site, and all of the features of the Astro web framework, plus everything you can do with a custom coded website if you want to.

Steps needed then:
1. Create a project using [Astro Starlight](https://starlight.astro.build/).
2. Go through the [setup guide](https://starlight.astro.build/getting-started/).
3. I prefer including the Obsidian vault as a GitHub submodule, I wrote [a guide on how to do that](/blog/obsidian-astro-submodule).
   OR: You can just make the folder that contains the markdown files into a Obsidian vault and leave it at that.
4. Put it online. Hosting static websites is free on providers such as [Cloudflare](https://pages.cloudflare.com/)

*This is how I work on [ToLearnKorean.com](https://tolearnkorean.com/) and [my web development guide](https://webdev.bryanhogan.com/).*

### Possible alternatives 

There are other "simple" static site generators that use markdown that you could use instead:

- [Jekyll](https://jekyllrb.com/)
	- There's also this pre-built template for Jekyll called [Digital Garden](https://github.com/maximevaillancourt/digital-garden-jekyll-template)
- [Hugo](https://gohugo.io/)
- [Eleventy](https://www.11ty.dev/)

Similar to Starlight, there are other pre-built documentation tools for different web frameworks that utilise markdown or MDX as well:
- [Nextra](https://nextra.site/) - Uses Next.js and MDX. You will need [this Obsidian plugin](https://github.com/mkozhukharenko/mdx-as-md-obsidian) to use .mdx in Obsidian. `.mdx` is very similar to `.md`.
- [VitePress](https://vitepress.dev/) - Uses Vue as its framework.

## 4) Custom coded

You can use something like Astro without the Starlight theme, then you will have to code everything yourself. This gets you the most degree of customization you can get, now you can do anything, but also you will have to do everything.

This blog, [BryanHogan.com](https://bryanhogan.com/), has been built this way. [This blogs GitHub repository is here](https://github.com/BryanHogan/bryanhogan).

For this blog I also use the [GitHub submodule approach](/blog/obsidian-astro-submodule).