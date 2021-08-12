const withMDX = require("./mdx")({
  extension: /\.mdx$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
});
