'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('signups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      CountryName: {
        type: Sequelize.STRING
      },
      CityName: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.BIGINT
      },
      UserType: {
        type: Sequelize.STRING
      },
      userAvatar: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('signups');
  }
};