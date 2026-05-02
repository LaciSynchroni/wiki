# Common Errors
## Setup Independent

- **DNS Issue:** Check with ``nslookup <hostname>`` if all your domains are available. If this fails, verify your domains are registered. You will usually
have to wait 5 to 10 minutes after registration
- **Bot not working or no bot logs:** Make sure that your bot is invited to a single server only. Right now, the bot only supports being in a single server. If you need the bot in more than one server,
you have to launch a second instance of ``services``

## Cloudflare
If you use cloudflare and experience some sort of connectivity issue, please check the logs of your cloudflare tunnel for errors

### Server misbehaving
If you get a log that looks a bit like this:
```json
{
  "originService": "http://laci-server:6000",
  "ingressRule": 2,
  "error": "Unable to reach the origin service. The service may be down or it may not be responding to traffic from cloudflared: dial tcp: lookup laci-server on 127.0.0.53:53: server misbehaving",
  "connIndex": 1
}
```
You probably have a second cloudflared tunnel active somewhere, under the same key. **Make sure you only have one cloudflared active!**

### SSL Errors on sub-sub domains
Cloudflare does not support sub-sub domains (for example ``my.laci.mydomain.com``) in its free tiers. You will have to change 
your domains to only have one subdomain. (for example ``my-laci.mydomain.com``)

### SSL Error on fancy domains
Cloudflare does not support all top level domains. We have had issues reported with the ``.one`` domain, for example. For testing purposes,
change your domain to a more traditional top level domain!