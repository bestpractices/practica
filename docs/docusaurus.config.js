// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Practica.js",
  tagline: "Best Practices Starter",
  url: "https://practica.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "practicajs",
  projectName: "practica",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/practicajs/practica/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/practicajs/practica/tree/main/docs/",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-71456305-3",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Practica.js",
        logo: {
          alt: "Practica.js Logo",
          src: "img/practica.png",
        },
        items: [
          {
            to: "https://www.youtube.com/channel/UCKrSJ0-jm7YVTM_hO7Me9eA",
            label: "YouTube",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/practicajs/practica",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/practicajs",
              },
              {
                label: "Discord",
                href: "https://discord.gg/QxuPmV5w",
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
                href: "https://github.com/practicajs/practica",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Practica.js`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
