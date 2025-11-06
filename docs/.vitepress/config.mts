import { DefaultTheme, defineConfig, UserConfig } from "vitepress";
import fs from "node:fs";

const config: UserConfig<NoInfer<DefaultTheme.Config>> = {
  title: "CotL Modding FlakeWiki",
  description: "Wiki documenting the process of modding CotL.",
  base: "/CotL-FlakeWiki/",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/CotL-FlakeWiki/favicon.webp" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: "/logo.webp",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started/" },
      { text: "Guides and Examples", link: "/guides-and-examples/" },
      { text: "Reference", link: "/reference/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
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
        collapsed: false,
        link: "/guides-and-examples/",
        items: [],
      },
      {
        text: "Reference",
        collapsed: true,
        link: "/reference/",
        items: (() => {
          // References are auto crawled (only one level currently)
          // Very ugly bad code :(
          // If you read this, all your followers will starve.
          const items: ({ text: string } & DefaultTheme.SidebarItem)[] = [];
          const dirEntries = fs.readdirSync("./docs/reference/", {
            withFileTypes: true,
          });
          for (const entry of dirEntries) {
            if (
              entry.isFile() &&
              entry.name.endsWith(".md") &&
              entry.name != "index.md"
            ) {
              const trimmedTitle = entry.name.substring(
                0,
                entry.name.length - ".md".length
              );
              const newTitle = trimmedTitle
                .split("-")
                .map((titleWord) => {
                  const firstLetter = titleWord.substring(0, 1);
                  if (/[a-zA-Z]/.test(titleWord.substring(0, 1))) {
                    return firstLetter.toUpperCase() + titleWord.substring(1);
                  }
                  return titleWord;
                })
                .join(" ");
              items.push({
                text: newTitle,
                // No url sanitization :(
                link: "/reference/" + trimmedTitle,
              });
            }
          }
          items.sort((a, b) => {
            if (a.text < b.text) {
              return -1;
            }
            if (a.text > b.text) {
              return 1;
            }
            return 0;
          });
          return items;
        })(),
      },
    ],

    footer: {
      message: "Released under the MIT License",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Spore-Void/CotL-FlakeWiki" },
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig(config);
