---
layout: ../layouts/SimpleMdLayout.astro
title: Portfolio - Bryan Hogan
description: Bryan Hogan's portfolio. Code & Context B.Sc. graduate. Combining development, design and entrepreneurship. Experienced in marketing, design and web development.
overline: Portfolio
heading: Bryan Hogan's Portfolio
---

## DailySelfTrack

![DailySelfTrack screenshots showing three different views on a vibrant gradient background](../assets/images/portfolio/DailySelfTrack-Main-Screenshots.png)

DailySelfTrack is a customizable self-tracking app combining elements from habit trackers, health logging and journaling.

This was a self-initiated project started as my final B.Sc. project and bachelor thesis, then further iterated and developed later on.

I led the full product process, research, UX design, visual design, development, testing, and product direction.

**View live app**: [app.dailyselftrack.com](https://app.dailyselftrack.com/)

### Problem

Most self-tracking apps are too rigid. Habit trackers, mood trackers and health logs lock you into predefined metrics and workflows. The fully flexible alternatives go the other way, spreadsheets, Notion or Obsidian let you track anything, but daily entry is slow and the UX is built for notes, not for tracking.

As part of working on this project I wrote my bachelor thesis answering the question: "Does greater customization in a self-tracking app improve usability and market fit?" and went in-depth analyzing the flexibility-usability trade-off.

### Design Direction & Process

The process looked like the following:

1. **Market & competitor analysis**: Looked at general market trends and analyzed 29 apps in the self-tracking space. Looked at which user needs are met, which aren't, and where a niche could exist.
2. **User survey**: Quantitative research on how people currently self-track and what they value about it. Used the results to check the gaps the market analysis suggested.
3. **Problem definition**: Most apps lock users into predefined metrics. The flexible alternatives are built for notes, not daily tracking. There is room in between.
4. **Personas**: Two user personas to guide design decisions.
5. **Sketches, flowchart and clickable Figma wireframe**: Went iteratively from sketches to flowchart to clickable Figma wireframe. User tested the Figma wireframe.
![Showcasing Figma board with transition links between Wireframe pages](../content/blog-assets/images/Bryan-Hogan-CoCo-Final-Dev-Diary-Wireframe-Links.png)
6. **MVP**: Built first MVP version using SvelteKit + Capacitor with custom CSS. Trackers are user-defined (text, number, checkbox), advanced options hidden behind progressive disclosure, defaults are sensible, and storage is local only.
7. **Usability + market-fit testing**: Task-based observation, the SUS questionnaire, and follow-up questions for market-fit evaluations.

Testing showed greater customization can work, as long as the added complexity stays hidden until the user wants it. The main tools for this are progressive disclosure, sensible defaults and contextual help. There is a user need behind solutions in self-tracking that can be highly customized to unique needs and continue to adapt to changing user needs. 

### Implementation

The tech-stack went through three iterations.

1. **React Native + Expo**
2. **Ionic React + Capacitor**
3. **SvelteKit + Capacitor + Dexie.js** (current): Low styling overhead, fast dev loop, and built-in routing. Uses IndexedDB through Dexie. One codebase that ships to web/PWA, Android, iOS, and Windows/macOS/Linux through Tauri.

The app is local-first. All user data stays on the device by default.

### Outcome

The app is currently usable on the web and as a PWA (not launched yet) on [app.dailyselftrack.com](https://app.dailyselftrack.com/) and the Android version is ready for user-testing.

The full bachelor thesis with the user-testing results is available on request.

== App screenshots / video ==

---

## Include

- Freelance Project A
- GameToLearnKorean

## Other

- Lenevin designs
- General social media designs