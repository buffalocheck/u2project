'use strict';
module.exports = function(sequelize, DataTypes) {
    var conference = sequelize.define('conference', {
        confName: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here

            }
        }
    });
    return conference;
};
