var express = require("express");
var hamburgerHandlers = require('../models/hamburger.js');
var router = express.Router();

// Import the model (hamburger.js) to use its database functions.
var hamburger = require("../models/hamburger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   hamburger.all(function(data) {
//     var hbsObject = {
//       hamburgers: data};
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
router.get('/', hamburgerHandlers.getAllBurgers);

router.post("/hamburgers/create", function(req, res) {
  hamburger.create([
    "name", "devour"], [req.body.name, req.body.devour], 
    function() {res.redirect("/hamburger");
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/hamburgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  hamburger.update({devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/hamburgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    res.redirect('/');
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
