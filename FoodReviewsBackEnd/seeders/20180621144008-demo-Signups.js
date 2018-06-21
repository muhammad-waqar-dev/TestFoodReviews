'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Signups', [{
      UserName: 'Admin',
      Email: 'admin123@gmail.com',
      Password:'admin',
      ConfirmPassword:'admin'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Signups', null, {});
    
  }
};
