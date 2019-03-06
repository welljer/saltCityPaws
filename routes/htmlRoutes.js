var db = require("../models/human");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.human.findAll({where: {human_address: "human"}}).then(function (human) {
      res.render("index", {
        msg: "Welcome!",
        examples: human
      });
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
