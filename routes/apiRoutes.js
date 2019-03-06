"use strict";

var db = require("../models/human");

module.exports = function(app) {
  // Get all human
  app.get("/", function (req, res) {
    db.human.findAll({where: {human_address:"human"}}).then(human => {
      res.json(human);
    });
  });

  // Create a new human
  app.post("/api/human", function (req, res) {
    db.Human.create(req.body).then(function (dbHuman) {
      res.json(dbHuman);
    });
  });

  // Delete an dog by id
  // app.delete("/api/dog/:id", function (req, res) {
  //   db.Dog.destroy({ where: { id: req.params.id } }).then(function (dbDog) {
  //     res.json(dbDog);
  //   });
  // });
};
