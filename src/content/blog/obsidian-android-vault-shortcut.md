---
title: Obsidian Android shortcuts to specific Vaults
description: How to create home screen shortcuts to specific Obsidian Vaults on Android.
coverImage: ../blog-assets/covers/Obsidian-Android-Cover.svg
pubDate: 2024-05-30T22:00:10Z
lastUpdate: 2024-05-30T22:00:10Z
tags: ["obsidian", "productivity"]
---

I have different Obsidian Vaults that I quickly want to access on my Android phone. So this is how I did it.

A quick overview of how to create home screen shortcuts to specific Obsidian Vaults on Android.

All these steps should take you around 2 min to complete.

1. Have the Obsidian app installed. The different Vaults should also be there. (I guess you already have this or you wouldn't be here.)
2. Install "Shortcut Maker" by Rushikesh Kamewar (Any other shortcut maker should also work, just this is the one I have used, it's free and without unnecessary bloat)
3. Create a new shortcut.
4. Tap on `Activities`.
5. Select Obsidian. Then the option `md.obsidian.MainActivity`, it's the only option available.
6. You can edit the label and Icon however you want.
7. Choose the third option, it should contain something like this: "Obsidian - md.Obsidian - md.obsidian.MainActivity". Here we edit the intent.
8. Change Action to `android.intent.action.VIEW`. So you will have to replace the last word "MAIN" with "VIEW".
9. Change Data to `obsidian://open?vault=your%20vault%20`. The last part has to be the name of your Vault. If there are any spaces in the name replace them with `%20`.
   - For example your Vault is called "Diary": `obsidian://open?vault=Diary`
   - For example your Vault is called "my vault": `obsidian://open?vault=my%20vault`
10. Click create Shortcut. That's it.

Now the shortcut works and always opens the specified Vault.  
I really like this solution, since it even opens your preferred Vault even if a different one is currently open.

## Video showcase

Here is a video that shows an example of how to create a shortcut this way:

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/NRtVAFfqoyg?si=ic2dxbat_Hq4GhHi" title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
