'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
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
      cryptocurrency_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'cryptocurrencies',
          key: 'id',
        },
      },
      payment_method_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'payment_methods',
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
      payment_method_type: {
        type: Sequelize.ENUM(['buy', 'sell']),
        allowNull: false,
      },
      trade_pricing_type: {
        type: Sequelize.ENUM(['market', 'fixed']),
        allowNull: false,
      },
      trade_pricing_list_at: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      trade_pricing_trade_limits_min: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      trade_pricing_trade_limits_max: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      trade_pricing_time_limit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trade_instructions_tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      trade_instructions_label: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trade_instructions_terms: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trade_instructions_instructions: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('offers');
  },
};
