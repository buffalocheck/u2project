'use strict';
module.exports = function(sequelize, DataTypes) {
  var week = sequelize.define('week', {
    weekId: DataTypes.INTEGER,
    gameTot: DataTypes.INTEGER,
    potentialPts: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return week;
};