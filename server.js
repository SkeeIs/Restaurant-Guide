//NPM Package Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//The below points our server to a series of "route" files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//express listener "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });