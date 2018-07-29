'use strict';
module.exports = (sequelize, DataTypes) => {
  var signups = sequelize.define('signups', {
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    CountryName: DataTypes.STRING,
    CityName: DataTypes.STRING,
    PhoneNumber: DataTypes.BIGINT,
    UserType: DataTypes.STRING,
    userAvatar: DataTypes.STRING
  }, {})
  signups.associate = function(models) {
    // associations can be defined here
  };
  return signups;
};