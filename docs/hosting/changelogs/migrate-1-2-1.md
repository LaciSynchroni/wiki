# Migrating to 1.2.1
:::warning Read Carefully

If you have an existing service running you will want to read this article carefully and execute all necessary migration steps!

:::
:::warning PG 17 vs PG 18

It's important you don't jump from PostgreSQL 17 to PostgreSQL 18 or vice versa. If you do, Laci will not be able to start. Verify the version
of your ``postgres`` image in your current composefile!

:::
The 2.0 release contains the final full rename of the server, as well as overall improvements to facilitate easier deployment. Depending on where
you started your journey with Laci, you will have to execute all, or just some of these steps.

Doing the release **will probably require a small downtime.** The guide will go through things step-by-step, but if you are more experiences,
you can just combine multiple steps.

In the future, everything deployed from the [hosting repository](https://github.com/LaciSynchroni/hosting) will include update scripts. This is (probably)
the only time you need to do manual migrations.

If you intend to stick with the deployment in [our server repository](https://github.com/LaciSynchroni/server), you will have to do most steps manually, but we don't
expect them to be overly involved.

## 0. Pre-requisites
You have to make sure your working tree has no modifications. Otherwise, it is not possible to automatically migrate.
The following snippet makes sure you have no modifications to any Laci files. Additional files are fine.

```bash
# Let git check for changes
git diff-index --name-only HEAD
```

If this results any files, run a ``git diff`` on these files. Move any changes you made in these files elsewhere, or migrate manually from now on.

## 1 - Configuration
:::warning Existing Changes

If one of these changes is already present in your deployment you can safely skip that step!

:::
In preparation for the update you can already change your configuration files. **There are 3 major changes.**
### 1.1 - ForwardedHeaders
In your ``base.appsettings.json``/``base.json`` (you should have one of the two) you will have to add the [forwarded headers middleware config](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-10.0).

#### 1.1a - nginx/Caddy
**If you run a nginx or Caddy setup**, merge this snippet into your configuration. ``ForwardedHeaders`` is a root key:
```json
{
  "ForwardedHeaders": {
    "ForwardedHeaders": "XForwardedFor",
    "ForwardLimit": 1,
    "KnownNetworks": [
      // IPv4 loopback
      "127.0.0.0/8",
      // Caddy proxy (through docker network)
      "172.17. 0.0/16"
    ]
  }
}
```

#### 1.1b - Cloudflare
**If you run a Cloudflare setup**, merge this snippet into your configuration. ``ForwardedHeaders`` is a root key:
```json
{
  "ForwardedHeaders": {
    "ForwardedHeaders": "XForwardedFor",
    "ForwardLimit": 1,
    "KnownNetworks": [
      // IPv4 loopback
      "127.0.0.0/8",
      // Cloudflare
      "173.245.48.0/20",
      "103.21.244.0/22",
      "103.22.200.0/22",
      "103.31.4.0/22",
      "141.101.64.0/18",
      "108.162.192.0/18",
      "190.93.240.0/20",
      "188.114.96.0/20",
      "197.234.240.0/22",
      "198.41.128.0/17",
      "162.158.0.0/15",
      "104.16.0.0/13",
      "104.24.0.0/14",
      "172.64.0.0/13",
      "131.0.72.0/22",
      "2400:cb00::/32",
      "2606:4700::/32",
      "2803:f800::/32",
      "2405:b500::/32",
      "2405:8100::/32",
      "2a06:98c0::/29",
      "2c0f:f248::/32"
    ],
    "KnownProxies": [
      // IPv6 loopback
      "::1"
    ]
  }
}
```

### 1.2 AllowedDiscordLogs

Merge the following snippet into your ``services.appsettings.json`` / ``services.json`` under the ``LaciSynchroni`` root key. You can remove
logs as you want, those will affect how much your discord bot logs.

```json
{
  "AllowedDiscordLogs": [
    "Startup",
    "VanityCleanup",
    "UserProcessing",
    "RegistrationRole",
    "ModeratorAction",
    "Register",
    "Delete",
    "SecondaryAdd",
    "VanitySet",
    "Recover",
    "Relink",
    "CaptchaFailed"
  ]
}
```

### 1.3 Channel Configs

We have moved the channel configs to the .env file for easier configuration. You have to add the following two lines to your ``.env`` file.

```
# Channel for self-service (from step 2 of guide)
LACI_DISCORD_SELF_SERVICE_CHANNEL_ID=
# Channel for botlog (from step 2 of guide)
LACI_DISCORD_BOT_LOG_CHANNEL_ID=
```

Once you update your docker composefile those will be mapped into the app config.

### 1.4 Postgres Version
We now have the postgres version in the ``.env`` file. Please make sure to add one of the two snippets to your ``.env``

**If you have postgres 17, add this snippet:**
```
# PG Version - 17 if you have an old deployment, leave at 18 if you are starting new.
PG_VERSION=17
```

**If you have postgres 18, add this snippet**

```
# PG Version - 18 if you have an old deployment, leave at 18 if you are starting new.
PG_VERSION=18
```

### 1.5 Laci Version
We now have the Laci docker image version as part at the ``.env``. If your deployment is from the ``hosting`` repository, please add
the following snippet to your ``.env``
```
LACI_VERSION=1.2.1
```

## Updating the repository
The following only works if you have no changes. **If you get a merge prompt, you have local modifications!** Please move these local modifications elsewhere.

```bash
# Update the repository
git pull
git pull --recurse-submodules
```

## Updating the composefile

Next, you have to update your composefile. It's important you verify that there are **no changes done to the composefile**. Otherwise, you 
will need to manually update.

Run one of the following commands and verify there is no
output:

- nginx: ``git diff docker-compose.nginx.yaml docker-compose.yaml``
- caddy: ``git diff docker-compose.caddy.yaml docker-compose.yaml``
- server: ``git diff compose/standalone.example.yml compose/standalone.yml``

If you have changes it's recommended you move each change elsewhere. Otherwise, you will have to manually migrate from now on. 

If you have no changes you can proceed with these commands:

- nginx: ``cp docker-compose.nginx.yaml docker-compose.yaml``
- caddy: ``cp docker-compose.caddy.yaml docker-compose.yaml``
- server: ``cp compose/standalone.example.yml compose/standalone.yml``

## Updating the deployment
### Hosting-Repository base
Procedure is the same for either nginx or caddy deployment. You will have a short downtime when doing this!

```bash
# Stop service
docker compose --env-file .env down
# Pull new images
docker compose --env-file .env pull
# Start Laci again
docker compose --env-file .env up -d
```

### Server-Repository base
You will have a short downtime when doing this!

```bash
# Stop
./linux.sh --standalone stop
# Restart while rebuilding
./linux.sh --standalone start
```

## Verify
Run the server tester to make sure everything worked. Afterwards, you are done!