# Laci Synchroni - Security
:::warning IT Security Topic

This topic broadly touches the fields of IT-security. If you have ever had brushes with this topic, you are probably aware
that there are no certainties in IT-security. Something that was previously considered safe can have an exploit tomorrow.

**Please treat all statements in this article as 'to the best of our knowledge today'**

:::

The topic of your security when connecting to someone's Laci Synchroni instance - or any other sync service - is often brought up. This
article addresses what server owners can do, what they can not do, and what you should keep in mind in the future.

## Data Server Owners Can See
Laci Synchroni is a client to server communication, meaning many clients speak to one centralized server. You may be connected to more 
than one of such servers, but that does not change the concept. Think of it as very similar to you opening Discord. 
Your Discord client connects to Discord servers, and as a result, they can see certain information about you. Laci Synchroni is no different in that regard.

Server owners of servers you can connect to have access to the following information:
- The IP address you are connecting from
- The Laci Synchroni version you are using
- If you are using Windows or Wine
- All data about your pairs, syncshells, mods you use as well as your discord ID if you used the self-service features

With that information, malicious actors can potentially try to pressure you into revealing more information. 
They may use the information on mods you use to extort you - for example if you run those extra spicy handholding mods.
They can try to roughly geolocate (think area or municipality) you based on your IP address. 

All that is not hard to pull of, especially if you have the capability to host your own server.

Please keep that in mind when you connect to someone's server!

## Hacking with plugins
Fundamentally, running any sort of Dalamud plugin can get your system compromised. 
Official mainline Dalamud plugins have systems in place to prevent that from happening, but Laci Synchroni - and other mod sync plugins - are not mainline Dalamud. 
Whenever you install a custom plugin repository, you run the risk of its owner starting their villain arc, and installing all sorts of malware on your system.

That means you give a lot of trust to a developer of a custom plugin. 
That trust is often warranted, since these people have shown over the years that they can be trusted. Most of them take steps to be transparent about their plugin binaries. 
They do not build them themselves, behind closed doors, but in public pipelines with artifact signing.

Still, a risk remains, and that is **the most likely scenario** that you will get hacked by some plugin. Please keep that in mind when using custom repositories.


## Hacking with mod files
Concerns are floating around that a malicious server owner can provide the Laci Synchroni plugin with malicious data, that will then result in your
Dalamud account or your entire PC getting compromised. While this is *probably not impossible*, it is *very unlikely*.

Any kind of mod you use - that includes mod files synced through Laci - will be passed to DirectX in the end. That is where the files
are processed. That means you'd have to specifically engineer a file to exploit a vulnerability in DirectX. Even then, at most, the files
will crash your game or your GPU driver, requiring you to reboot.

**But what if someone sends a virus file?** Obviously, they can. That can be a pair, or a server owner. But these files are just lying around
inert in your cache. As long as you don't make a regular habit of trying to manually execute all sorts of files in your file cache, you are 
going to be fine!

## What you should take away from this
**Don't trust every random plugin repository you find**. If you install plugin from a custom repository, make sure they follow some basics: The source code
should be open source. There should not be manually uploaded plugin binaries, instead, verify that the plugin is built through automated systems, ideally with build attestation
or some sort of hash verification.

**Don't trust random server owners**. If someone invites you to their sync service, make sure it's someone you trust. If you just met that person, and you still
want to join their server, be mindful of the data they can see.

**Don't sync with random people**. If you are worried about your security, don't join public syncshells or pair random people. This
has always been the case. Same as server owners, they can potentially send you anything. *And while that is most probably safe*, a small
risk always remains.

**Careful with auto-updates of custom plugins**. If you use custom plugins, be mindful when you auto-update. If you are worried about
your security, review changes they made in the last release. If you are unsure about it, wait a few days and see if there is any fallout.

## What we do in regards to security
- The Laci Synchroni plugin is built from source in public GitHub actions, with build attestation. At no point during the process, a manual compile and upload is done. While
this is not 100% safe from being attacked, it provides a very strong security foundation
- The Laci Synchroni organization on GitHub requires a review of every change by two people. That means if someone would sneak malicious code into the plugin,
it's very likey to get caught by either of the two reviewers
- Keeping you informed: We'll try to be as transparent and open as possible. If you have questions regarding security, you are more than welcome to reach out. We will
answer all questions truthfully and to the best of our abilities
