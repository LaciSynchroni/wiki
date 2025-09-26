# Common Customization
Here ist a list of common customization you may want to do to your server. They will be listed in the ``appsettings.json`` format. You can also inject them as environment variables by replacing the ``.`` with ``__`` if you do not want to change the specific appsettings.

Changing the ``appsettings.json`` will hot reload the config.

## Syncshells
Configured on ``server``
- ``LaciSynchroni.MaxExistingGroupsByUser`` defines how many syncshells a user can create. Defaults to ``3``
- ``LaciSynchroni.MaxGroupUserCount`` defines how many users are allowed in a syncshell. Defaults to ``100``
- ``LaciSynchroni.MaxJoinedGroupsByUser`` defines how many syncshells a user can join. Defaults to ``6``

## Character Data Online
Configured on ``server``
- ``LaciSynchroni.MaxCharaDataByUser`` amount of MCDO a user can create if the user does not have the vanity role. Defaults to ``10``
- ``LaciSynchroni.MaxCharaDataByUserVanity`` same as MaxCharaDataByUser but for vanity role users. Defaults to ``50``

## User Config
Configured on ``services``
- ``LaciSynchroni.SecondaryUIDLimit`` defines how many secondary UIDs a user can create. Useful for inviting friends

## Bans and Timeouts
Configured on ``auth``
- ``LaciSynchroni.FailedAuthForTempBan`` sets the max number of failed login attempts that will cause a temporary ban. Defaults to ``5``
- ``LaciSynchroni.TempBanDurationInMinutes`` length of a temporary ban, defaults to ``5``
- ``LaciSynchroni.WhitelistedIps`` IPs that will not get banned. Useful for testers. Defaults to ``[]``

## Files
Configured on ``files``
- ``LaciSynchroni.CacheSizeHardLimitInGiB`` defines a hard limit for the cache. If none is set, the cache can grow until your drive is full. It's recommended to set this for this reason alone. Default ``unlimited``
- ``LaciSynchroni.UnusedFileRetentionPeriodInDays`` defines the amount of unused days that have to pass for a file to be removed from the cache. Default ``14``