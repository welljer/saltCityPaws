var db = require("../models");

module.exports = function(app) {

  app.get("/api/human", function(req, res) {
    db.Human.findAll({
      include: [db.Human]
    }).then(function (human) {
      res.json(human);
    });
  });


  // Create a new human
  app.post("/api/human", function (req, res) {
    db.Human.create(req.body).then(function (dbHuman) {
      res.json(dbHuman);
    });
  });
}