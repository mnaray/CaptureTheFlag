// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Capture The Flag",
    tagline: "",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://mnaray.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/CaptureTheFlag/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "mnaray", // Usually your GitHub org/user name.
    projectName: "CaptureTheFlag", // Usually your repo name.
    trailingSlash: false, // Enables the default trailing slash.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "de",
        locales: ["de"]
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/mnaray/CaptureTheFlag/edit/main/docs/"
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/logo.svg",
            navbar: {
                title: "Capture The Flag",
                logo: {
                    alt: "Flag",
                    src: "img/logo.svg"
                },
                items: [
                    {
                        type: "doc",
                        docId: "Dokumentation",
                        position: "left",
                        label: "Dokumentation"
                    },
                    {
                        type: "doc",
                        docId: "Anleitung",
                        position: "left",
                        label: "Anleitung"
                    },
                    {
                        type: "doc",
                        docId: "Lösungen",
                        position: "left",
                        label: "Lösungen"
                    },
                    {
                        href: "https://github.com/mnaray/CaptureTheFlag",
                        label: "GitHub",
                        position: "right"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Doku",
                        items: [
                            {
                                label: "Projektdokumentaion",
                                to: "/docs/Dokumentation"
                            },
                            {
                                label: "Anleitung",
                                to: "/docs/Anleitung"
                            },
                            {
                                label: "Lösungen",
                                to: "/docs/Lösungen"
                            }
                        ]
                    },
                    {
                        title: "Socials",
                        items: [
                            {
                                label: "GitHub Profil",
                                href: "https://github.com/mnaray/"
                            },
                            {
                                label: "LinkedIn Profil",
                                href: "https://www.linkedin.com/in/marton-naray-9bb014212/"
                            }
                        ]
                    },
                    {
                        title: "Mehr",
                        items: [
                            {
                                label: "Repository auf GitHub",
                                href: "https://github.com/mnaray/CaptureTheFlag"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} mnaray/CaptureTheFlag | Dokumenatation wurde mit Docusaurus erstellt.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
