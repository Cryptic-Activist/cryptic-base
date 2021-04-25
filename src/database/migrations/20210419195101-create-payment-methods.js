'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment_methods', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      payment_method_category_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'payment_method_categories',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      when_deleted: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payment_methods');
  },
};
