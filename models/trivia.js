var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    playerName: DataTypes.STRING,
    score: DataTypes.INTEGER,
    round: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER
  });

  return Players;
};
