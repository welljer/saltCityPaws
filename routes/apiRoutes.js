"use strict";

var db = require("../models/human");

module.exports = function(app) {
  // Get all dog
<<<<<<< HEAD
  app.get("/api/human", function (req, res) {
    db.Dog.findAll({}).then(function (dbDog) {
      res.json(dbDog);
=======
  app.get("/", function (req, res) {
    db.human.findAll({where: {human_address:"human"}}).then(human => {
      res.json(human);
>>>>>>> a72cca8bddd91a468c5561d5ceecca9be738df76
    });
  });

  // // Create a new dog
  // app.post("/api/dog", function (req, res) {
  //   db.Example.create(req.body).then(function (dbDog) {
  //     res.json(dbDog);
  //   });
  // });

<<<<<<< HEAD
  // Create a new walker
  app.post("/api/human", function (req, res) {
    db.Example.create(req.body).then(function (dbDog) {
      res.json(dbDog);
    });
  });
=======
  // Delete an dog by id
  // app.delete("/api/dog/:id", function (req, res) {
  //   db.Dog.destroy({ where: { id: req.params.id } }).then(function (dbDog) {
  //     res.json(dbDog);
  //   });
  // });
>>>>>>> a72cca8bddd91a468c5561d5ceecca9be738df76
};
