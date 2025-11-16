---
sidebar_position: 1
---

# Self-Hosting Starter Guide
:::info Discord Community Help
If you experience issues or need help, you can always head over to our Discord and ask for help!
:::
:::warning Renaming
If you are still on an older version of Laci Synchroni, you need to replace the prefix ``LaciSynchroni`` with
``SinusSynchronous`` whenever applicable.
Please consider updating to a new version!
:::

This article serves as a guide through the self-hosting process. You can use this as an index page, and go back to each step if you need to re-read parts or have issues.

## 1 - The Basics
You should familiarize yourself with the [basics of running a server first](tutorial-basics/01-self-hosting-basics.md) first.
If you are already familiar with hosting services, you can obviously skip this!

## 2 - Bot Setup
While *technically optional*, you should set up the Discord bot so you can easily interact with the Laci service, as well
as create your own account. 

[Please head over to this article and set up your bot.](tutorial-basics/02-bot-setup.md))

You can run your bot on a private server if you are still testing, and later move it!

## 3 - Server Setup
:::warning Bot token required
In order to properly start any setup, it's important you actually did step 2 and have your bot token ready and accessible!
:::

Laci comes with a few possible deployment variants that are all equally supported, and should have equal complexity.

[Please head over to this article and install Laci.](tutorial-basics/03-installing-laci.md)

## 4 - Registration
:::info Secret Keys
For testing purposes, we **highly recommend** sticking to secret keys! You can enable oAuth2 for your users after.
:::
### 4a - Using Self-Service
If you enabled service-service by setting ``DiscordChannelForMessages``, you should now see the self-service message of your bot in that
channel. **Pin this message.** Normally, the bot does this itself, but we added the bot without any permissions. 

You can register your account through that self-service.

### 4b - Using Admin Account
If you don't want to use the self-service, you can head to [our guide to enable admin access](tutorial-basics/04-enabling-admin-access.md) to
register yourself an admin account.

Once done, you can use the ``/useradd`` command in Discord to create new secret keys!

## 5 - Server Tester
Once you have a secret key, [you can run our server testing tool](tutorial-basics/05-server-tester.md) to verify that your installation is functional. It will test core functionality. 
Once it runs successfully, you can try to find a friend for actual testing!