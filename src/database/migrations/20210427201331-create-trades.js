'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trades', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vendor_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      trader_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      offer_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'offers',
          key: 'id',
        },
      },
      cryptocurrency_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'cryptocurrencies',
          key: 'id',
        },
      },
      fiat_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'fiats',
          key: 'id',
        },
      },
      chat_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'chats',
          key: 'id',
        },
      },
      started_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ended_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      state: {
        type: Sequelize.ENUM(['ongoing', 'canceled', 'done', 'error']),
        allowNull: false,
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
    await queryInterface.dropTable('trades');
  },
};
