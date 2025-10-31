# Messaging
From version 1.2.0 on, you can easily customize the message of the day (the welcome message you get when connecting), as well as 
send regular messages to all connected clients.

## Configuration Example
Add the following snippet to your ``server.appsettings.json`` in your ``LaciSynchroni`` block, then customize it as you need it.

```json

{
  "MessageConfiguration": {
    "MessageOfTheDay": {
      "Severity": "Warning",
      "Message": "Welcome to %ServerName%! There will be a scheduled maintenance on Wednesday, 10th October 2045! Expect 20 minutes downtime!"
    },
    "PeriodicMessageInterval": "0.04:30:00",
    "PeriodicMessages": [
      {
        "Severity": "Information",
        "Message": "Please consider compressing your mod files to help reduce server load!"
      },
      {
        "Severity": "Warning",
        "Message": "Namazu have invaded the server and are holding it ransom! Please help!"
      },
      {
        "Severity": "Error",
        "Message": "Oh no, there are %OnlineUsers% online! Panic!"
      }
    ]
  }
}
```

- Supported severities are ``Information``, ``Warning`` and ``Error``
- The ``MessageOfTheDay`` will be pushed to the client upon successfully connecting
- The ``PeriodicMessageInterval`` in the example is 4 hours, 30 minutes. Intervals less than 15 minutes are not supported.
- The ``PeriodicMessages`` are cycled in the ``PeriodicMessageInterval``. meaning one messages gets posted each interval
- The following placeholders are available:
  - ``%ServerName%``
  - ``%DiscordInvite%``
  - ``%ShardName%``
  - ``%OnlineUsers%``