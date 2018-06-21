'use strict';
module.exports = (sequelize, DataTypes) => {
  var Signups = sequelize.define('Signups', {
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    ConfirmPassword: DataTypes.STRING
  }, {});
  Signups.associate = function(models) {
    // associations can be defined here
  };
  return Signups;
};