const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-native-styled-variants",
]);

const withMDX = require("./next-mdx")({
  extension: /\.mdx$/,
});

module.exports = withTM(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.jsx",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  })
);
