# 3 - Installing Laci
:::info Prebuilt images

At the moment, only proxy deployments are available using the prebuilt Docker images. Cloudflare, at the moment, is
only available when compiling from source.

Ultimately, this does not add any complexity, since compiling will be done for you. Expect a Cloudflare deployment using prebuilt
images in the coming days.

:::

:::danger Read carefully

Installation of Laci is the step most often causing issues. Please make sure you read everything properly instead of skimming
through the notes to prevent issues with the installation. 

If you follow the instructions closely, the deployment should work out of the box.

:::

The installation of Laci itself is largely handled through Docker and Docker compose, and centralized in our hosting repository. Generally,
once you have chosen a deployment, you will simply have to follow the readme's instructions.

Before heading to the hosting repository, please consider these key points:
- **Do not mix deployments.** If you choose one deployment, stay with it.
- **Do not modify files unless prompted.** Some deployment files are meant to be updated automatically, manually changing them will make that harder.
- **If you have issues during the deployment** do not switch to a different deployment midway. You will have to cleanly uninstall a deployment. The readme will tell you how to do that.
- **If something is not working as intended** re-read the guide carefully. If this still does not explain your issues, please reach out on Discord. We have experience troubleshooting the most common issues
- **If something is unclear** to you or in general, please reach out on Discord - we will try to improve the documentation as much as possible
- **If you post on Discord** please tell us what deployment you chose, as well as the environment you are deploying to

All clear? Great. Head over to our [Hosting Repository on GitHub](https://github.com/LaciSynchroni/hosting) and proceed with the ``readme.md`` instructions.

Afterward, continue with [Step 4](./04-enabling-admin-access.md).