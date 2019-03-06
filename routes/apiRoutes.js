var db = require("../models");

module.exports = function(app) {
  app.get("/api/human", function(req, res) {
    db.Human.findAll({
      include: [db.Human]
    }).then(function (human) {
      res.json(human);
    });
  });


  app.post("/api/human", function(req, res) {
    dog_db.Human.create(req.body).then(function (dbHuman) {
      res.json(dbHuman);
    });
  });

};