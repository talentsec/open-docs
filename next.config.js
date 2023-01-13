const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  assetPrefix: isProd ? '/open-docs' : '',
  images: {
    unoptimized: true,
  },
})
