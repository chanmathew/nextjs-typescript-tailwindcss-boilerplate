const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const optimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withPlugins([
  [withCss],
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      optimizeImages: false
    }
  ],
  [withBundleAnalyzer]
  // your other plugins here
]);
