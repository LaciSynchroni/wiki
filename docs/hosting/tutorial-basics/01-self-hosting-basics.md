# 1 - Self-Hosting Basics
## Overview
In order to get started with hosting Laci Synchroni for your friend group, free company or community, you will need to do some preparation. 
While we will try to make it as user-friendly as possible, you will have to bring some knowledge around webservers or be willing to learn about those!

This small guide will cover some basics for you. As usual, if you are stuck anywhere in the process, feel free to ask on our discord in the 
setup-help channels.

## Hardware requirements
- A webserver with root access or comparable hardware that can be reached from the internet: Laci Synchroni is a centralized service without Peer-to-Peer connections.
You need a webserver that you have (full) root access on, since you will have to install dependencies yourself.
That can be a VPS/root server/bare metal hardware rented somewhere in a data center, or on your old laptop at home. 
**Your webserver has to be reachable from the internet or you need to use [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)**
- A (sub)domain that you have access to to create A/AAAA records in
- Disk space: See below
- (Ideally) Unlimited outgoing bandwidth - depending on the size of your community, high bandwidth limits are OK, too
- Unlimited disk IO
- At least 2GB of memory
- CPU cores are negligible

### Storage Requirements
Laci Synchroni synchronizes mods - including textures. These can be large, and they are stored in a file cache to ease on the bandwidth of the server. 
It's recommended that the storage **is on an SSD**, ideally an NVMe, and that **there is at least 20GB space**. 
With that, you should be able to host a dozen or so active people comfortably.

From there on, you can calculate with 500mb to 2gb per person added. The curve will flatten out over time, but you can go with these estimates. Generally, 
the more storage space you have, the larger your cache can be and the less bandwidth you will gobble up. **That means you can always trade bandwidth for storage**

### Cloud Hosting
We recommend not trying to host Laci Synchroni in a cloud. Cloud providers generally have you pay a premium for bandwidth and disk IO, something that this service will do plenty of. 
Try to find a cheap VPS to start with.

### Estimated Cost
Running a small Laci server does not need to be expensive. Cheap VPS with some SSD storage and 2GB of memory can be rented for as low as 10€ a month, sometimes even lower. 
Hosters that target game servers for games like Minecraft are usually good enough in that regard, for example. 
You can also run Laci on a NAS at home, if you have the option to open up ports to the internet, though that will likely be more expensive.

Top level domains cost anywhere from 10 to 60€ a year. You can also opt for (much cheaper, sometimes free) subdomains. Most hosters will give you a bunch for free.

### Crowdfunding
If your community is a bit larger and you can't stem the cost on your own, you may consider using VPS providers with crowdfunding/donation boxes.
These are usually game server providers, and they will take care of all the tax madness for you, that you would ordinarily have to deal with
with Ko-Fi or Patreon

## Knowledge required
- Basic Linux knowledge: Since most webservers are based on a Linux distribution, you should familiarize yourself the with the Linux shell. 
You should be able to know how to navigate the terminal, create and edit files, as well as install software. [This guide here](https://tldp.org/LDP/intro-linux/html/) is a bit older but quite extensive. If you need help, feel free to ask!
- Basic container software knowledge: Docker, Podman or whatever flavor of container software you prefer,
you should [familiarize yourself with the concepts a bit](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/) since Laci Synchroni's default setup is based on containers

## Software Recommendations
### Windows
- [WinSCP](https://winscp.net/eng/download.php) for all SSH/SCP/FTP connection needs
- [Notepad++](https://notepad-plus-plus.org/downloads/) for file editing

## Hoster Recommendations
We have a few people hosting in the community on Discord. You can join our Discord and ask for hoster suggestions!