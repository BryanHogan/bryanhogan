---
layout: ../../layouts/SimpleMdLayout.astro
title: Sorbit Case Study - Bryan Hogan
description: Freelance case study by Bryan Hogan. Building Sorbit, a local-first relationship-care app for a psychology start-up, from user research to MVP.
heading: Sorbit
headingDetail: "Freelance case study: a relationship-care app"
---

Sorbit is an app that helps you keep up your closest relationships. You place people on an orbit map based on how close they are to you, set how often you want to be in touch, get reminders, and write short reflections after you've met or talked.

- Role: freelance developer, and I did part of the UX. I worked with the founder, a social psychologist with a PhD.
- Timeline: 2025 to 2026
- Stack: SvelteKit, Capacitor, Dexie.js
- Status: tested with users, with an average SUS score above 90. Not released yet.
- Project site: [sorbit.app](https://sorbit.app/) (German)

## Problem

Many young adults feel lonely, even though they're connected online all the time. Social media is built to keep you scrolling, and friendships fade when nobody reaches out. Sorbit shows you your most important relationships and reminds you to stay in touch.

## Process

1. We started with planning sessions, where the founder and I agreed on the goals and on the technical and organizational requirements.
2. Together we defined the core features and a timeline. We kept the feature priorities open and decided on them through the design iterations.
3. We created personas for the target users, and I made wireframes for the relevant user flows.
4. Using the wireframes as reference, an AI prototype was built. We tested it with users, who did tasks while thinking aloud, followed by interviews. The tests were based on methods from the Nielsen Norman Group. With the results we adjusted the feature plan and priorities.
5. Based on what we learned from those tests, we designed mockups for the home and orbit views.
6. I developed the app in two phases, first the core architecture and then the main features. After that we did another round of user testing.

## Implementation

Sorbit uses the same stack as [DailySelfTrack](/portfolio/dailyselftrack): SvelteKit, Capacitor and Dexie.js. One codebase runs as a website, as a PWA and as a native app on Android and iOS. The data stays on the device in IndexedDB. That matters for an app where you write notes about people you know.

What I built for the MVP:

- Contacts with editable details
- The orbit view, an SVG visualization that places contacts by how close they are to you
- Journal entries per contact with rating scales, summarized over time
- Reminders based on how often you want to be in touch with each person

I'm leaving out more details since the app isn't released yet. I structured the code so other developers can keep working on it now that my contract has ended.

[Back to portfolio](/portfolio)
