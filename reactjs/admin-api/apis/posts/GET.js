var fs = require("fs");

// let data = {
//   success: true,
//   list: [
//     {
//       id: 1,
//       title: "Post 1",
//       description: "This is description of post 1",
//       author: "MrDat",
//     },
//     {
//       id: 3,
//       title: "Post 3",
//       description: "This is description of post 3",
//       author: "MrDat",
//     },
//   ],
// };

module.exports = function (request, response) {
  fs.readFile("posts.js", function (err, data) {
    let posts = JSON.parse(String(data));
    response.status(200).json({
      success: true,
      list: posts,
    });
  });
};
