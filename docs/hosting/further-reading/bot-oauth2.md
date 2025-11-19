# OAuth2 Setup
OAuth2 can be useful for larger servers that use the self-service bot. It eliminates the need to use secret keys. If you and
your community are perfectly fine with secret keys, you do not need to configure it!
## Configuring your Discord integration/bot
In order to enable oAuth2 for your server, the discord integration you created to get the bot running needs to be updated. If you don't have a bot already, please check https://discord.com/channels/1408474043148927107/1412922009695944754

1. Go to discord developer portal applications: https://discord.com/developers/applications/
2. Select your bot
3. Go to oAuth2, press "Add Redirect". Change the redirect to ``https://<your-domain>/oauth/discordCallback``
4. Copy the ``Client ID`` and note it somewhere safe
5. Reset the ``Client Secret`` and note it somewhere safe.

## Configuring your Laci instance

Now swap to configure your Laci instance.
You can either use the ``.env`` file if you use the sample compose file (*recommended*) , or otherwise set the proprties in your ``config.json`` for the ``auth-service``

1. ``LACI_DISCORD_OAUTH_CLIENT_ID`` or ``LaciSynchroni.DiscordOAuthClientId``: Put your ``Client ID`` here
2. ``LACI_DISCORD_OAUTH_CLIENT_SECRET`` or ``LaciSynchroni.DiscordOAuthClientSecret``: Put your ``Client Secret`` here
3. ``LACI_PUBLIC_OAUTH_BASE_URI`` or ``LaciSynchroni.PublicOAuthBaseUri``: Set it to ``https://<your-domain>/oauth/``

## On JSON and Environment config
The sample composefile comes with a few conveniently predefined environment variables. It's encouraged to use these, instead of changing anything manually. If you do run a different setup, you always have the following options to configure a property instead:
1. Use the ``.json`` config file by putting the desired config key in directly, for example ``LaciSynchroni.DiscordOAuthClientId``
2. Use environment variables, passed to the container, by replacing all ``.`` with ``__``, for example ``LaciSynchroni__DiscordOAuthClientId`

## Further Reading
https://discord.com/developers/docs/topics/oauth2
https://www.rfc-editor.org/rfc/rfc6749
https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-9.0