const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'NodeJS cours',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/cours-nodejs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  markdown: {
    lineNumbers: true
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Cours',
        link: '/cours/',
      },
    ],
    sidebar: {
      '/cours/': [
        {
          title: 'Cours',
          collapsable: false,
          children: [
            '',
            'javascript',
            'nodejs',
            'tweetjs',
            'advanced',
            'git',
            'rendu1',
            'rendu2'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-active-header-links',
    'vuepress-plugin-smooth-scroll',
    ['vuepress-plugin-code-copy', true],
    [
      "container",
      {
        type: "spoiler",
        before: info => "<details><summary>" + info + "</summary>\n",
        after: "</details>\n"
      }
    ]
  ]
};
