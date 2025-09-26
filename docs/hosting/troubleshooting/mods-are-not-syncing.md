# Mods are not syncing
## Finding errors
There can be a few causes that can prevent syncing of mods despite everything else seemingly working. The most likely cause for this is the **file server**. Here is a list of steps you should go through to troubleshoot the issue:

1. Check the file servers logs. If you run docker, you can check those with ``docker logs <container-id>``. Check if there are any errors and compare them against the list of common errors down below.
2. Check the ingress/proxy logs if you use a proxy like caddy, nginx or traefik. If you run docker, you can again use the ``docker logs`` command
3. Ingame, check the ``/xllog`` log for any errors
4. Finally, check the mare trace log in ``%APPDATA%\XIVLauncher\pluginConfigs\LaciSynchroni\tracelog``

## Common errors

### File access error
If you get something like this
```
---> System.IO.IOException: Permission denied
```
In your file server log, then you have set the permission on your mount wrong. Verify that your mount **is mounted :rw**. If that fails, you can manually set the folder permissions inside the container for your cache path to **1000:1000**

### Request body too large
Happens if your proxy rejects the request body due to size. It's recommended to set it to at least 200MB:
https://caddyserver.com/docs/caddyfile/directives/request_body
https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size

### xllog and trace log errors
Please head over to #setup-help-v2 so we can troubleshoot the issue