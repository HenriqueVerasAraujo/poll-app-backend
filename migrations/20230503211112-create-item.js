'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pollId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'polls',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      votes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};