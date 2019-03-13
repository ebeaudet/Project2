var db = require("../models");

var desiredColumns = ['id', 'playerName', 'score', 'round', 'wins', 'losses']

module.exports = function(app) {

  // Get all players
  app.get("/api/players", function(req, res) {
    db.Players.findAll({
      attributes: desiredColumns
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Get single player data
  app.get("/api/players/:id", function(req, res) {
    db.Players.findOne({
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
    db.Players.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Update a player
  app.put("/api/players", function(req, res) {
    db.Players.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  // Delete a player by id
  app.delete("/api/players/:id", function(req, res) {
    db.Players.destroy({ where: { id: req.params.id } }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};
