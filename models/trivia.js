var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var playerData = sequelize.define("players", {
    playerName: Sequelize.STRING,
    score: Sequelize.INTEGER,
    round: Sequelize.INTEGER,
    wins: Sequelize.INTEGER,
    losses: Sequelize.INTEGER,
    createdAt: Sequelize.STRING,
    updatedAt: Sequelize.STRING
  });

  return playerData;
};
