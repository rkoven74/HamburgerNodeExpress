// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var hamburger = {
  getAllBurgers: function(req,res) {
    orm.all("hamburgers", function(results) {
      console.log(results);
      res.render('index', {hamburgerData:results });
    });
  },
  // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("hamburgers", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  updateBurgerStatus: function(req, res) {
    orm.update("hamburgers", 'devour', true, function() {
      res.redirect('/');
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("hamburgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = hamburger;
