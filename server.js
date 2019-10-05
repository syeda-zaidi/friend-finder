var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

app.use(express.static("public")); // or
// app.use(express.static(path.join(__dirname + "app/public")))

// var routes = ("./app/routing");

// app.use(routes);
require("./app/routing/htmlRoutes.js")(app);
require('./app/routing/apiRoutes.js')(app)

app.listen(PORT, function () {
    console.log ("server listeing on http://localhost:" + PORT );
}).catch(function (err){ 
    if (err) {
        console.log(err);
    }
}) 

