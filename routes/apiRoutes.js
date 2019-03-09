var db = require("../models");

var desiredColumns = ['id', 'playerName', 'score', 'round', 'wins', 'losses']

module.exports = function(app) {
  // Get all players
  app.get("/api/players", function(req, res) {
    db.players.findAll({
      attributes: desiredColumns
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Get single player data
  app.get("/api/players/:id", function(req, res) {

    db.players.findOne({
      attributes: desiredColumns,
      where: {
        id: req.params.id
      }
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Create a new player
  app.post("/api/players", function(req, res) {
    console.log("Req:");
    console.log(req);
    db.players.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Delete a player by id
  app.delete("/api/players/:id", function(req, res) {
    db.players.destroy({ where: { id: req.params.id } }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};
