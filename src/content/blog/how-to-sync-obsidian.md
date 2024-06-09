---
title: How To Sync Obsidian
author: Bryan@BryanHogan.com (Bryan Hogan)
description: How to synchronize your Obsidian Vaults. Obsidian Sync, Syncthing, Google Drive or Github.
coverImage:
  url: /post-covers/Obsidian-Sync-Cover.svg
  alt: Obsidian logo inside a synchronisation icon.
pubDate: 2024-06-09T21:48:59Z
lastUpdate: 2024-06-09T21:48:59Z
tags:
  - Obsidian
  - Productivity
---

There are a few ways on how to sync your Obsidian vaults between multiple devices:
- **Obsidian Sync** - The official way which has a monthly cost.
- **SyncThing** - An open source tool for file synchronization.
- **Google Drive** - Use Google Drive tools to sync local files between devices.
- **Github** - Push and pull your Vaults to a Github repository. 

Other possible options: OneDrive, iCloud and Dropbox.

Which synchronization tool is best for your use case?

I have tested the Windows and Android environments myself. I will include references to options for Linux and the apple ecosystem.
I have used all of these options to sync between my Windows 10 desktop, Windows 10 laptop and Android phone.

Obsidian is an amazing tool, but the price of its Obsidian Sync feels exorbitant to many. There are free options such as Syncthing or Github. Or you might already be using a sync tool for your images or documents like Google Drive, might as well include your Vaults in there then.

I will go over how each tool works, what's it strength and weaknesses are and how to set them up.

## Obsidian synchronization tools compared
A comparison overview of different tools to synchronize your Obsidian Vaults:

| Name | Costs | How it works |
| --- | --- | --- |
| Obsidian Sync [🔗↗](https://obsidian.md/sync) | $10 per month | The built-in way to synchronize Obsidian vaults. | 
| SyncThing [🔗↗](https://syncthing.net/) | Free | Open source file synchronization program. |
| Google Drive for Desktop [🔗↗](https://www.google.com/drive/download/) | Part of Google One [🔗↗](https://one.google.com/about/plans?g1_landing_page=0) ("Free" with limits.) | Using the Google Drive ecosystem to synchronize local files. |
| Github [🔗↗](https://www.google.com/drive/download/) | "Free" (/ Github costs)  | Push and pull your Vaults to a Github repository. |

*I wrote "free" in quotes when that option isn't really free, you pay with your data and the control of your files lie in someone else's hands. Free tier could be removed at any moment.*

### SyncThing
[Syncthing](https://syncthing.net/) is a truly free and open-source tool to synchronize files between two or more devices.

It can connect two or more of your devices directly, they then send the files to each other. This means your files never enter someone else's system.

But that also means for Syncthing to work you will have to run it at two different devices at the same time.

The setup is not hard, install Syncthing on each device you want to sync and then select the folder that should be synced.  
Create a connection between your devices. Then choose where the other devices should safe the shared folder.

vladcampos has made a [Youtube video](https://youtu.be/XOYwSCtJH5U) showcasing the setup.

A few challenges I had when I first used Syncthing:
- Having to manually start the synchronization on desktop devices -> [SyncTrazor](https://github.com/canton7/SyncTrayzor) for Windows solved this for me. This program allows running Syncthing in the little tray utility in the bottom corner. SyncTrazor is an enhanced version of Syncthing.
- Constant "syncing" notification on Android -> Disable Syncthing notifications altogether.
- There are some files you don't want to sync, like the current state of your workspace. [This page](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Auxiliary+Tools/Syncthing) includes an example of how you can do that.

I recommend enabling File Versioning in Syncthing. This way when files accidentally get deleted you can still recover them.  
I once ran into the problem that I moved the location of my Vault on my phone. Syncthing then saw that the original Vault was empty and then started emptying the Vaults on my other devices.

Syncthing is also not a long-term backup tool, back-up your files in a way that keeps them safe.

### Google Drive Desktop
This is the solution I currently use.  
The less private option compared to Syncthing is using Google Drive. There are some annoyances with Google One, the service which includes extra storage space for your Google Drive, like Google actively hiding its cheaper options[^1]. But otherwise this option works great.

[This Obsidian forum post](https://forum.obsidian.md/t/sync-mobile-app-through-google-drive-android-windows10/20891) explains how to use Google Drive to sync between multiple devices.

To summarize it:  
The sync your local files on your desktop with Google Drive download [ Google Drive for Desktop](https://www.google.com/drive/download/). Set up your folder to be shared with Google Drive, [this Google support page](https://support.google.com/drive/answer/10838124) explains how to.  
To sync on your Android device get [Autosync for Google Drive](https://play.google.com/store/apps/details?id=com.ttxapps.drivesync&hl=en) and set it up.

There are also multiple options for Linux: [grive2](https://github.com/vitalif/grive2), [Insync](https://www.insynchq.com/), [drive](https://github.com/odeke-em/drive)

**Adding another desktop device to sync with Google Drive Desktop:**

I followed the guide shown on the Obsidian forum page. Which this did not include was how to add another device such as a second desktop or laptop. 

This [Google support thread](https://support.google.com/drive/thread/120394816/solved-how-to-configure-google-drive-desktop-app-to-sync-files-between-2-computers?hl=en) includes the answer on how to achieve that.  
Use the `Stream files` option and mark them as available for offline, for me these two steps were enough.

### Github
I already back-up my Vaults to Github from time to time. But you can take it a step further and use it as your synchronization tool. It was a great hassle to setup synchronization through git on mobile, but it seems like things have gotten easier since I last tried it.

The most straightforward way to synchronize with git is to use the Obsidian plugin [Git](https://github.com/denolehov/obsidian-git).  
Their github repo also includes a [installation guide for mobile devices](https://github.com/denolehov/obsidian-git/wiki/Installation).

If their explanation leaves you with question you might want to check out this Obsidian forum post on how to use Git to sync between Linux Debian and an iPad.
There is also a guide on the Obsidian forums on [how to sync between Linux Debian and an iPad](https://forum.obsidian.md/t/yet-another-obsidian-git-tutorial-desktop-pc-ipad-sync/67531) that includes **all the steps** needed to do so.




[^1]: [Reddit: Did Google Remove the $1.99 (100GB) Option?](https://www.reddit.com/r/GoogleOne/comments/zzertm/did_google_remove_the_199_100gb_option/) and [Google One is playing hide-and-seek with its 200GB plan](https://www.androidcentral.com/apps-software/google-one-hides-200gb-plan)