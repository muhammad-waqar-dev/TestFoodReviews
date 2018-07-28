'use strict';
module.exports = (sequelize, DataTypes) => {
  var signups = sequelize.define('signups', {
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    UserType: DataTypes.STRING,
    Profile: DataTypes.STRING
  }, {});
  signups.associate = function(models) {
    // associations can be defined here
  };
  return signups;
};