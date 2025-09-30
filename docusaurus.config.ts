import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Laci Synchroni",
	tagline:
		"A decentralized mod and appearance sync server and plugin for Dalamud",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://lacisynchroni.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/wiki/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "lacisynchroni", // Usually your GitHub org/user name.
	projectName: "wiki", // Usually your repo name.
	deploymentBranch: "gh-pages",
	trailingSlash: false,

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/lacisynchroni/docs/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/laci-social-card.png",
		navbar: {
			title: "Laci Synchroni",
			logo: {
				alt: "Laci Synchroni Logo",
				src: "img/icon.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "selfHostingSidebar",
					position: "left",
					label: "Self-Hosting Guide",
				},
				{
					type: "docSidebar",
					sidebarId: "pluginSidebar",
					position: "left",
					label: "Plugin Guide",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/lacisynchroni/wiki",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Self-Hosting Guide",
					items: [
						{
							label: "Self-Hosting Guide",
							to: "/docs/hosting/intro",
						},
					],
				},
				{
					title: "Plugin Guide",
					items: [
						{
							label: "Plugin Guide",
							to: "/docs/plugin/intro",
						},
						{
							label: "Laci Synchroni Security",
							to: "/docs/plugin/misc/plugin-security",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discordapp.com/invite/qQQSz3jZnK",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/lacisynchroni/wiki",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Laci Synchroni. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
