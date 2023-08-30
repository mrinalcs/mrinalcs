const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js');

module.exports = withNextra({
  async rewrites() {
    return [
      {
        source: '/post/:slug*',
        destination: '/posts/:slug*', // Redirect to the original /posts/:slug* route
      },
    ];
  },
});
