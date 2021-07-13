var fs = require("fs");
module.exports = function(request, response) {
    console.log(request.body);
    const { author, title, description } = request.body;

    fs.readFile("posts.js", function(err, data) {
        let posts = JSON.parse(String(data));
        posts.push({
            id: posts.length + 1,
            author,
            title,
            description
        })
        fs.writeFile("posts.js", JSON.stringify(posts), function(err) {
            if (err) {
                throw err;
            }
            console.log("Saved!");
            response.status(200).json({
                success: true
            })
        })
    });
}