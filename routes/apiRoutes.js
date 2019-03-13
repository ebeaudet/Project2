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
  app.post("/api/playersa", function(req, res) {

    db.Players.create({
      playerName: req.body.playerName,
      score: req.body.score,
      round: req.body.round,
      wins: req.body.wins,
      losses: req.body.losses
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    }).catch(function(err) {
      res.json(err);
    });
  });

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


  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });



  // Delete a player by id
  app.delete("/api/players/:id", function(req, res) {
    db.Players.destroy({ where: { id: req.params.id } }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};
