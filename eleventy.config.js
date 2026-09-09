export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    pathPrefix: process.env.SITE_PATH_PREFIX || "/",
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
  };
}
