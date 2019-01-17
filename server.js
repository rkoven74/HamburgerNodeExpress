var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + "/public"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.urlencoded({
extended: false
}))

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
var routes= require("./public/assets/js/routes.js");
app.use("/", routes);

var port = 3000;
app.listen(port);

