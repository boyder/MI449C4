// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("postBox", function (post, date, time) {
    return `
  <div class="postHolder">
    <div class="postBox">
      <h2 class="postText">${post}</h2>
      <button>
        <h4>Click to view post</h4>
      </button>
      <div class="DateTime">
        <h3>${time}</h3>
        <h3>${date}</h3>
      </div>
    </div>
  </div>
    `;
  })
};