const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './styles/**/*.css',
    './components/**/*.{js,ts,js,tsx}',
    './pages/**/*.{js,ts,js,tsx}',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
  ],
}
