// LOAD DATA FROM THE friends.js file under the data folder.
// WITHIN THE FILE HOLDS ARRAYS OF THE USER INPUT DATA
var friendsData = require("../data/friends");

module.exports = function (app) {
    // GET THE API RESQUEST
    // WHEN THE USER VISITS THE URL IT PROVIDES THE USER DATA IN JSON FORMAT
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // POST API REQUEST
    // WHEN USER INPUT DATA, IT SUBMITS DATA TO THE SERVER
    // friendsData is pushing the inputed data to the req.body
    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(friendsData);
    });

}