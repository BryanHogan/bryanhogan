---
title: "From Web to Native: Building Apps with SvelteKit & Capacitor"
description: A step-by-step tutorial on integrating CapacitorJS with SvelteKit. Convert your website into an Android/iOS app.
coverImage: ../blog-assets/covers/Web-To-App-SvelteKit-Capacitor-Cover.svg
pubDate: 2026-01-02T12:27:14+00:00
tags:
  - development
  - creating
mastodonRef: https://mastodon.social/@BryanHogan/115825701681823228
blueskyRef: https://bsky.app/profile/bryanhogan.com/post/3mbgybc2oqk26
threadsRef: https://www.threads.com/@bryanhoganme/post/DTAn1O2D2ZJ
---

You can build a website and turn it into an app with CapacitorJS.

CapacitorJS allows you to wrap any standard web application (HTML/CSS/JS) into a native shell for Android and iOS. While frameworks like Astro work well, this guide focuses on my preferred stack: **SvelteKit + Capacitor**.

In this post I’ll walk through the setup I use:
- SvelteKit for the actual app (static build)
- Capacitor for Android & iOS
- Adjustments for live (hot module) reload inside the Android emulator

## General steps:

We will do the following:
1. Create a project using SvelteKit.
2. Add Capacitor to this SvelteKit project.
3. Change the build output to static.
4. Add the mobile platforms (Android & iOS)
5. Implement live / hot module reload so that changes instantly show up in the Android emulator.

### 1. Step: Set up SvelteKit

First we want to add things relevant to the website, in this case SvelteKit.

Use the command `npx sv create my-app` to create a SvelteKit project.

Choose whatever options you want, but take `pnpm`, not `npm`, the last few times I ran into problems with it.

### 2. Step: Add Capacitor

Run `pnpm install @capacitor/core @capacitor/cli` which installs the Capacitor core library and the command line interface (CLI).

Then `npx cap init`.

### 3. Step: Changing to static

Now make the output static. First add the SvelteKit static adapter with `pnpm add -D @sveltejs/adapter-static`. 

Then add the file `src/routes/+layout.js` that has the following one line:

```JavaScript
export const prerender = true;
```

This ensures every route is pre-generated as HTML.

In `capacitor.config.json`, set the output directory to: `"webDir": "build",`. This tells Capacitor where to find your bundled assets.

Your files might look slightly different if your are using TypeScript, the underlying step stays the same even if the syntax and file ending looks slightly different.

Update `svelte.config.js` to use the static adapter. We set the output to `build` so Capacitor can find the files:

```
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        })
    }
};
export default config;
```

Now `pnpm run dev` will already work, so use it to start the dev server and you can look at your website at `localhost:5173`. 

### 4. Step: Adding mobile platforms

Now we are very close to being able to run our web app on a mobile device.

Add the Android platform:

```
pnpm install @capacitor/android
npx cap add android
pnpm run build
npx cap sync
```

The `sync` command copies your built web assets to the native Android project.

Next step is to install [Android Studio](https://developer.android.com/studio) and setup an emulator for this to work.

Now to open the project's Android version with an Android emulator do `npx cap open android`. 

Apple makes developing for iOS a lot harder (for no good reason). I won't explore Virtual Machines, remote access to macOS devices or other solutions in this blog post. But generally this will "need" a device running macOS and Xcode.

> If you are using Visual Studio Code I also highly recommend the [webnative extension](https://webnative.dev/).

### 5. Step: Live / Hot module reload (optional)

Currently any changes require a rebuild to show up in the Android emulator, but we want our changes to show up instantly.

> Make sure to undo this when you build the app for production, so when you actually want to release it.

For that we need to adjust the `vite.config.js` and `capacitor.config.json`.

Update vite.config.js:

```
server: {
    host: '0.0.0.0',
    port: 5173,
}
```

Update capacitor.config.json:

```
server: {
    url: 'http://10.0.2.2:5173',
    cleartext: true
}
```

<details> <summary> How your vite.config.js and capacitor.config.json might look now: </summary>

```
//vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5173,
	  }
});

//capacitor.config.json
{
  "appId": "japanese.bryanhogan.me",
  "appName": "learn-japanese",
  "webDir": "build",
  "server": {
    "url": "http://10.0.2.2:5173",
    "cleartext": true
  }
}
```

</details>

Now to make running the server as well as starting the android emulator easier I made it all into one command which you can run with `pnpm run android-dev`.

For Windows add this to the `package.json` and then under `scripts`:  
`"android-dev": "start /B pnpm run dev -- --host && pnpm run build && npx cap sync && npx cap open android"`

For Mac and Linux use the Unix based one: `"android-dev": "pnpm run dev --host & pnpm run build && npx cap sync && npx cap open android"`

## Relevant docs

Some relevant documentation:

- Svelte & SvelteKit: [svelte.dev](https://svelte.dev/)
- Capacitor: [capacitorjs.com](https://capacitorjs.com/)
- Another blog post also about integrating Capacitor into SvelteKit: [ionic.io/blog](https://ionic.io/blog/cross-platform-sveltekit-capacitor-application-yes-its-possible)

## Hosting it

Hosting on Cloudflare is easy, just go to pages (for hosting a static page, not the one for server-side rendered apps) and then change one setting, change the Build output directory to `/build`.

## Further recommendations

Now our current tech-stack looks like this:
- SvelteKit with an static output
- Capacitor with the Android environment added

Potential considerations:
- The postcss plugin [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) is really nice, I can highly recommend it.
- [Tauri](https://v2.tauri.app/) for desktop versions. With Tauri you can create versions for Windows, Linux and macOS.