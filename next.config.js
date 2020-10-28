const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

export default withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"]
});
