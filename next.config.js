const withMDX = require("./next-mdx")({
  extension: /\.mdx$/,
});
module.exports = withMDX({
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
});
