var fs = require("fs");

module.exports = function (request, response) {
  let { id } = request.query;
  console.log(request.query);
  if (!id) {
    response.status(200).json({
      success: false,
      message: "Require param id",
    });
    return;
  }
  fs.readFile("posts.js", function (err, data) {
    let posts = JSON.parse(String(data));
    let foundPost = posts.find((post) => {
      return post.id == id;
    });
    response.status(200).json({
      success: true,
      data: foundPost,
    });
  });
};
