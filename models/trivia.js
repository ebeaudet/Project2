var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var playerData = sequelize.define("player", {
    playerName: Sequelize.STRING,
    score: Sequelize.INTEGER,
    round: Sequelize.INTEGER,
    wins: Sequelize.INTEGER,
    losses: Sequelize.INTEGER
  });

  return playerData;
};
