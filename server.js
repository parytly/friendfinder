var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// DIRECTS THE SERVER TO RESPOND WHEN USER VISITS/ REQUEST DATA FROM THE URL
// apiRoutes.js --- htmlRoutes.jss
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
});