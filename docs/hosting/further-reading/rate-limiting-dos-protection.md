# DoS Protection - Rate Limiting
Laci Synchroni comes with two built-in rate limiters that are disabled by default. If you face issues with overloaded connections, 
you can consider enabling one or both of them.

## Concurrency Limiter
The concurrency limiter allows you to limit how much global, concurrent operations Laci Synchroni can execute in the SignalR connection.

The concurrency limiter is configured to 50 by default. That means, 50 operations (like, for example, 'Pause Pair') can be executed at the same time.
Other operations will be put into a queue that is Limit * 100 in size. That means, by default, 5000 operations can be queued at the same time.

You can configure this behavior by setting the ``LaciSynchroni.HubExecutionConcurrencyFilter`` property.

## Limit Filter
The limit filter can be used to limit traffic from one specific IP and utilizes the ASP.NET rate limiter feature: https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit?view=aspnetcore-9.0

With this filter, you can essentially define how many SignalR messages each IP can send to you in a given time span. The filter is off by default, you need to enable it manually by adding rate limiting rules. Such rules should be applied with care, and it's important that you verify your changes with actual metrics.

To configure the limit filter, update the following block in your appsettings.json:
```json
  "IpRateLimiting": {
    "EnableEndpointRateLimiting": false,
    "StackBlockedRequests": false,
    "RealIpHeader": "X-Real-IP",
    "ClientIdHeader": "X-ClientId",
    "HttpStatusCode": 429,
    "IpWhitelist": [],
    "GeneralRules": []
  },
```
By adding more ``GeneralRules``.
For example, adding this rule would enforce a 60 requests/minute limit for all SignalR events
```json
{
   "Period": "1m",
   "Limit": 60,
   "Endpoint": "ws:*"
}
```
The following would limit creation of gpose together lobbies to one per 10 minutes
```json
{
   "Period": "10m",
   "Limit": 1,
   "Endpoint": "ws:GposeLobbyCreate"
}
```