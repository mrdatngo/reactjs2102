var express = require("express");
var apiMocker = require("connect-api-mocker");
var cors = require("cors");

var app = express();
app.use(cors());
app.use("/api", apiMocker("apis"));

let port = 8080;
console.log("Server is running at port: " + 8080);
app.listen(port);
