// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-advanced-variables'),
    require('postcss-import'),
    require('postcss-nesting'),
    require('autoprefixer'),
    // Un-comment cssnano for production builds if desired
    // require('cssnano')({ preset: 'default' }),
  ],
};