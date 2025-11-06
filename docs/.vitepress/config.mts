import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CotL Modding FlakeWiki",
  description: "Wiki documenting the process of modding CotL.",
  base: "/CotL-FlakeWiki/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started/" },
      { text: "Guides and Examples", link: "/guides-and-examples/" },
      { text: "Reference", link: "/reference/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        link: "/getting-started/",
        items: [
          {
            text: "Setup development environment",
            link: "/getting-started/1-setup-development-environment",
          },
          {
            text: "Introduction to patching",
            link: "/getting-started/2-introduction-to-patching",
          },
          {
            text: "Publishing your mod",
            link: "/getting-started/3-publishing-your-mod",
          },
          {
            text: "Common problems",
            link: "/getting-started/4-common-problems",
          },
        ],
      },
      {
        text: "Guides and Examples",
        link: "/guides-and-examples/",
        items: [],
      },
      {
        text: "Reference",
        collapsed: true,
        link: "/reference/",
        items: [],
      },
    ],

    footer: {
      message: 'Released under the MIT License'
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Spore-Void/CotL-FlakeWiki" },
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
      }
    },
  },
});
