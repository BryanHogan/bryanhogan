---
title: Code & Context Final Project Dev Diary
author: Bryan@BryanHogan.com (Bryan Hogan)
description: Dev Diary on my project on developing an app to help people keep track of what matters to them.
coverImage:
    url: /post-covers/CoCo-Final-Diary-Cover.svg
    alt: Simple icon of a mechanical cog
    width: 101
    height: 101
pubDate: 2024-04-21
lastUpdate: 2024-04-21
tags: ["creating", "development", "coco", "university"]
---

For my last semester at Code & Context I am creating an app to help you keep track of what matters to you. 

## Week 0 - Getting Started

After collecting and refining many ideas throughout the past months I've decided on what to write my proposal on. The proposal is a short document needed for me to start into my final project and then the bachelor thesis. After working 8-10 weeks on this final project I can start on my thesis.  
Next up was finding a professor willing to be my supervisor and completing the short proposal.

I was able to find a supervisor and completed my proposal, now it was time for me to go back to university for the first time after my year [abroad in South Korea](/blog/hanyang-erica-exchange). I had a meeting with my supervisor, got feedback on my proposal and then knew in which direction to go into and how to approach my project.

My idea is to build an app which works as a tool for effective journaling, habit building and keeping track of information for self-reflection, achieving goals and improving personal health. One of the first impressions I heard was that it sounds like a "Eierlegende Wollmilchsau", a egg-laying, milk-bearing woolly sow. A German phrase used for something that only has benefits, meets all requirements and is useful for every purpose always, thus it is impossible to create since it's requirements are not feasible for reality.

The actual idea of the app is not that complex. Once per day the user should be prompted to enter information into the app. What information is up to the user. This way the user can choose what they want to keep track of, like how many minutes they read today, state of a health condition or whether they did sports that day or not.  
The user can decide what to keep track of and in what way. So also which type of data it should be, like a text field, single word, number, unit, number on a scale or true or false statement.

The user should then be able to view this tracked data in a way that allows them to analyse it, such as a graph or calender view.

What can this be useful for?  

- **New healthy habits**. Do more sports or read more books. Gamify a habit by keeping a daily streak. Or note down how many minutes the activity has been done each day. Optionally set a minimum amount of minutes you want to read each day. Visualise the tracked data to see if you are going into the direction you want to go into. 
- **Break old habits**. Just how the app can be used to acquire a new habit, it can also be used to help to quit a old ones, like smoking or other toxic instant gratifications.
- **Mood tracking journal**. Track your mood and write a quick journal each day. Get a overview of your mood each day. Understand the relation between your mood of and the activities of each day.
- **Understanding Food Allergies & Intolerances**. Get a better understanding of what food you can and can't eat. Track each day how well your stomach feels or how well you can digest the food and also what food you ate that day. Have an overview of days where you feel well and what you ate then but also the days where you felt unwell.
- **Understanding Health Conditions**. Get a better understanding of one of your personal health problems. For example, keep track of how bad your chronic migraines are each day and note down what you did that day. Get an overview of days where you feel well and see what you did then but also what you did on days where it feels worse.

One of the greater challenges of this project will be building a suitable and easy to understand interface while still allowing for high customizability and quick ways to enter information.  
Also need to think about how to improve the pitch of this app. How can I better explain in just a few words what the app is about?

## Week 1

- market & competing products analysis
- questionaire
- tooling to build
### Market & Competing Products Analysis

This week was mainly about finding answers to the following three questions:
1. What products in this space are already out there?
2. What options do I have to build my app and what technical capabilities do I already have access too now or in the future?
3. How do users use the tools in this space and how do they think?

As part of the process of defining what the app should be I also had to look for already existing tools. What do they do? How do they look? What do they do well? What can be improved? 

With this understanding of what's already out there I can adjust my app. I can see what's already working but also how to differentiate myself in a way that brings additional value. No idea is born in isolation, each idea is born out of past experiences and already existing solutions.  
This is also a fundamental step to decide whether my idea is even worth to pursue or not.
The insight gained from this step had also major influence on the idea already described above.

### User Survey
- Survey to find out how people use already existing tools and what they think of them, what do they value

### How To Make App
- already researched beforehand, 

| Name | Usage | Programming Language |
| --- | --- | --- |
| Flutter | Native Apps | Dart |
| React Native | Native Apps | . |
| CapacityJS | Hybrid Apps | HTML, CSS, JS |

Looked into but zero interest: 

Decided to go with React Native using Expo.