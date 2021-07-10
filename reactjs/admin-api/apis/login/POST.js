var jwt = require("jsonwebtoken");

module.exports = function (request, response) {
  console.log(request.body);
  const params = request.body;
  // check user by data store in db
  if (params.username != "admin" || params.password != "123456") {
    response.status(401).json({
      sucess: false,
      message: "Username or password is incorrect!",
    });
  } else {
    let token = jwt.sign(
      {
        username: "admin",
        email: "admin@gmail.com",
      },
      "This-is-private-token@##5438967",
      { expiresIn: "8h" }
    );

    response.status(200).json({
      sucess: true,
      username: "admin",
      token: token,
      refresh_token: "This is refresh token",
    });
  }
};
