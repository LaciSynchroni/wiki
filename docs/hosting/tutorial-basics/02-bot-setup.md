# 2 - Bot Setup and Features
## Use-Cases and Limits
Laci comes with a bot that can take care of most tasks for you. The bot has the following features:
- Administration: User creation and global messaging
- User self-registration and self-management
- Server Clean Up: Can remove users from the discord server that have not self registered
- Logging

By default, all of these features **are turned off**. You do not need to worry that the bot will remove any users! We will go into configuration later in this article.

Right now, the bot has the following limitations:
- The bot can only be added to **a single server**

## Bot Creation
1. Go to the Discord developer portal: https://discord.com/developers/applications
2. Hit *New Application*, set a name for your bot and create.
3. Navigate to your bot -> Installation
4. Under *Installation Context*, untick *User Install*
5. (Optional, Recommended) Disable public adding of this bot by setting the Install Link from *Discord Provided Link* to *None*
6. Navigate to *Bot*
7. (Optional, Recommended) Disable public adding by unticking *Public Bot*
8. Enable server members intent by clicking the *Server Members Intent* checkbox toggle
9. Hit *Reset Token*. You will receive a new bot token. **This is a secret and should not be shared. Make sure this is stored somewhere safe! You need it later!**
10. Save

Now you need a server to add the bot to. If this is the first time you are playing with bots, it's recommended you do this on a private server for now, and later move the bot to a new server.


## Preparing the server
You want the following channels in your server:
- A channel for self-service, for example ``#laci-self-service``. This channel will be used for the bot self service, like registration
- A channel for logging for your admins, for example ``#laci-logs``

For both channels, right-click the channel name and copy the ID. Note the IDs down somewhere, we will need them.

## Adding the bot
Open the following URL in your browser while changing the \<your-bot-id\> to your bot's *Application ID*. You can find the ID in the developer portal under *General Information*
```
https://discord.com/api/oauth2/authorize?client_id=<your-bot-id>&permissions=0&scope=bot%20applications.commands
````
This will add the bot to your server **without any special permissions, meaning the bot can not manage users or add/remove roles from members!**

## Configuring Laci-Services via compose-template
Now everything is set up and you just need to configure the laci-services module to know your bot. If you use the default composefile, you will have to do the following
- Set the ``LACI_DISCORD_TOKEN`` in ``.env`` to your bot token
- Set the ``LaciSynchroni.DiscordChannelForMessages`` in ``services.appsettings.json`` to the ID of your self-service channel.
- Set the ``LaciSynchroni.DiscordChannelForBotLog``  in ``services.appsettings.json`` to the ID of your logging channel

If your instance is running already, you will have to reboot it now. Otherwise, continue with the setup guide!