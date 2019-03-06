var db = require("../models/");

module.exports = function(app) {
  // Get all dog
  app.get("/api/human", function (req, res) {
    db.Dog.findAll({}).then(function (dbDog) {
      res.json(dbDog);
    });
  });

  // Create a new dog
  app.post("/api/dog", function (req, res) {
    db.Example.create(req.body).then(function (dbDog) {
      res.json(dbDog);
    });
  });

  // Create a new walker
  app.post("/api/human", function (req, res) {
    db.Example.create(req.body).then(function (dbDog) {
      res.json(dbDog);
    });
  });
};
