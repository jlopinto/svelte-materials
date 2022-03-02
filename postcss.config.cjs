const autoprefixer = require('autoprefixer');
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const cssnano = require('cssnano');
const postcssCombine = require('postcss-combine-duplicated-selectors');
require('dotenv').config();
console.log(process.env.NODE_ENV); // remove this after you've confirmed it working

const config = {
  plugins: [
    postcssJitProps(OpenProps),
    autoprefixer,
    postcssCombine(),
    cssnano({
      preset: ['default', { mergeRules: true }]
    })
  ]
};

module.exports = config;
