// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RSS 中文文档',
  tagline: 'RSS 中文文档',
  url: 'https://rss3.web3doc.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'web3doc', // Usually your GitHub org/user name.
  projectName: 'rss3', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RSS3',
        logo: {
          alt: '',
          src: 'img/logo.svg',
        },
        items: [
          { type: 'doc', docId: 'guide', label: '指导', position: 'right' },
          { href: 'https://rss3.io/#/whitepaper', label: '白皮书', position: 'right' },
          {
            label: '学习更多', position: 'right', items: [
              { to: '/events', label: '事件' },
              { href: 'https://rss3.notion.site/', label: '博客' },
              { href: 'https://rss3.notion.site/RSS3-Brand-Kit-251e768345684ba9acd038d79c6899b8', label: '媒体文件' },
              { href: 'https://rss3.notion.site/Open-Source-Remote-RSS3-Offering-the-Dopest-Positions-Android-Developers-Front-end-Engineers-a-b6fdbffee017449797397f45340de9d4', label: '加入我们' },
              { to: '/support', label: '支持 RSS3' },
            ]
          },
          { href: 'https://github.com/NaturalSelectionLabs', label: 'Github', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '简介',
                to: '/docs/guide',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '官方网站',
                to: 'https://rss3.wiki/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NaturalSelectionLabs'
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
