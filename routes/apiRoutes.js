"use strict";

var db = require("../models/human");

module.exports = function(app) {
  // Get all dog
  app.get("/", function (req, res) {
    db.human.findAll({where: {human_address:"human"}}).then(human => {
      res.json(human);
    });
  });

  // // Create a new dog
  // app.post("/api/dog", function (req, res) {
  //   db.Example.create(req.body).then(function (dbDog) {
  //     res.json(dbDog);
  //   });
  // });

  // Delete an dog by id
  // app.delete("/api/dog/:id", function (req, res) {
  //   db.Dog.destroy({ where: { id: req.params.id } }).then(function (dbDog) {
  //     res.json(dbDog);
  //   });
  // });
};
