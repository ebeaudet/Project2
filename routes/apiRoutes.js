var db = require("../models");

module.exports = function(app) {
  // Get all players
  app.get("/api/players", function(req, res) {
    db.playerdb.findAll({}).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Get single player data
  app.get("/api/players/:id", function(req, res) {

    db.playerdb.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Create a new player
  app.post("/api/players", function(req, res) {
    db.playerdb.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Delete a player by id
  app.delete("/api/players/:id", function(req, res) {
    db.playerdb.destroy({ where: { id: req.params.id } }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};
