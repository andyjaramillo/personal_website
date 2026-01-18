const rssPlugin = require('@11ty/eleventy-plugin-rss');
module.exports = function(eleventyConfig) {  
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addPlugin(rssPlugin);

  // Helper to limit the number of posts on the home page
    eleventyConfig.addFilter("limit", (array, limit) => {
        return array.slice(0, limit);
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  });
    // Set custom directories for input, output, includes, and data  
     return {    
        passthroughFileCopy: true,
        dir: {      
            input: "src",      
            includes: "_includes",      
            data: "_data",      
            output: "_site" 
        },   
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};