# Advanced Bot Configs
## Limiting registration to a role
1. Create a new role, right-click and copy the role ID
2. Configure  ``SinusSynchronous.DiscordRegistrationRole`` in ``services.appsettings.json`` to the ID for that role
3. Configure  ``SinusSynchronous.LockRegistrationToRole`` in ``services.appsettings.json`` to ``true``

## Enable Vanity roles
Vanity role enables choosing of a vanity ID.
1. (Optional) Create a role in discord you want to use as vanity role.
2. Copy the ID of your Vanity role
3. In your the ``appsettings.json`` of the ``services`` service, set the ``SinusSynchronous.VanityRoles`` property to ``{ <vanity role ID>: "Vanity" }``

Laci should automatically pick up the change and vanity roles should be enabled now.

## Enable discord user cleanup