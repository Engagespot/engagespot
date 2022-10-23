// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Engagespot',
  tagline: 'Notification infrastructure for developers and product managers.',
  url: 'https://documentation.engagespot.co/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/engagespot.svg',
  organizationName: 'engagespot', // Usually your GitHub org/user name.
  projectName: 'engagespot', // Usually your repo name.
  scripts: [
    {
      async: true,
      src: '/js/drift.js',
    },
  ], // Replace with your own doc site's name. Should match the collection name in the scraper settings.
  themes: ['docusaurus-theme-search-typesense'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            routePath: 'docs/rest-api/',
            spec: 'openapi/openapi_spec.yaml',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      typesense: {
        typesenseCollectionName: 'engagespot_docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

        typesenseServerConfig: {
          nodes: [
            {
              host: '0mbtdiuf4sovc6g2p-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'VGITIeAMS8CjEXt2jNJ28SnimnFX5jxN',
        },
        typesenseSearchParameters: {
          filter_by: '',
        },
      },

      // Optional
      contextualSearch: true,
      navbar: {
        title: 'Engagespot',
        logo: {
          alt: 'Engagespot Logo',
          src: 'img/engagespot.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/getting-started',
            position: 'right',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'learn-by-examples/react-component/simple-notification',
            position: 'right',
            label: 'Learn by Examples',
          },
          {
            // type: 'link',
            to: '/docs/rest-api',
            position: 'right',
            label: 'Rest API',
          },
          {
            to: 'https://engagespot.co/blog/',
            label: 'Blog',
            position: 'left',
          },
          {
            to: 'https://portal.engagespot.co/auth/register/',
            label: 'Sign Up',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/introduction/getting-started',
              },
              {
                label: 'Learn by Examples',
                to: '/docs/learn-by-examples/react-component/simple-notification',
              },
              {
                label: 'Rest API',
                to: '/docs/rest-api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/engagespot',
              },
              {
                label: 'Discord',
                href: 'https://disboard.org/server/936616763930587136',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/engagespot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://engagespot.co/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/engagespot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Engagespot, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
