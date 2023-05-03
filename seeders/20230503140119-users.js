'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
  [
    {
      username: 'testson',
      email: 'test@gmail.com',
      password: '123test'
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
