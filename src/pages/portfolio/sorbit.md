---
layout: ../../layouts/SimpleMdLayout.astro
title: Sorbit Case Study - Bryan Hogan
description: Freelance case study by Bryan Hogan. Building Sorbit, a local-first relationship-care app for a psychology start-up, from user research to MVP.
heading: Sorbit
headingDetail: "Freelance case study: a relationship-care app"
---

Sorbit is an app for keeping up your closest relationships. You place people on an orbit map by how close they are to you, set how often you want to be in touch, get reminders, and write short reflections after you meet or talk.

- Role: freelance developer, plus part of the UX. Worked with the founder, a social psychologist with a PhD.
- Timeline: 2025 to 2026
- Stack: SvelteKit, Capacitor, Dexie.js
- Status: tested with users, with an average SUS score above 90. Not released yet.
- Project site: [sorbit.app](https://sorbit.app/) (German)

## Problem

Many young adults feel lonely even though they're connected online all the time. Social media is built to keep you scrolling, and friendships fade when nobody makes the effort to reach out. Sorbit makes your most important relationships visible and reminds you to stay in touch.

## Process

1. Planning sessions with the founder to agree on goals and on technical and organizational requirements.
2. Defined the core features and a timeline together. Feature priorities stayed open and were settled through design iterations.
3. Created personas of the target users, then wireframes for the relevant user flows.
4. An AI prototype was built using the wireframes as reference. Usability tests of the AI prototype were run with task-based observation, think-aloud and follow-up interviews, based on Nielsen Norman Group methods. We used the results to adjust the feature plan and priorities.
5. Designed mockups for the home and orbit views, based on what we learned from testing the AI prototype.
6. Developed the app in two phases, core architecture first and then the main features, followed by another round of user testing.

## Implementation

The stack is the same as [DailySelfTrack's](/portfolio/dailyselftrack): SvelteKit, Capacitor and Dexie.js. One codebase runs as a website and PWA and as a native Android and iOS app. Data stays on the device in IndexedDB, which suits an app that holds notes about people you know.

What I built for the MVP:

- Contacts with editable details
- The orbit view, an SVG visualization that places contacts by closeness
- Journal entries per contact with rating scales, summarized over time
- Reminders based on how often you want to be in touch with each person

I'm leaving out further details while the app is unreleased. I structured the code so other developers can keep working on it after my contract ended.

[Back to portfolio](/portfolio)
