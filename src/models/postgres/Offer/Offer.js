import { DataTypes, Model } from 'sequelize';

class Offer extends Model {
  static init(sequelize) {
    return super.init(
      {
        vendor_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        cryptocurrency_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        payment_method_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        fiat_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        payment_method_type: {
          type: DataTypes.ENUM(['buy', 'sell']),
          allowNull: false,
        },
        trade_pricing_type: {
          type: DataTypes.ENUM(['market', 'fixed']),
          allowNull: false,
        },
        trade_pricing_list_at: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        trade_pricing_trade_limits_min: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        trade_pricing_trade_limits_max: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        trade_pricing_time_limit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        trade_instructions_tags: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false,
        },
        trade_instructions_label: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        trade_instructions_terms: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        trade_instructions_instructions: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        when_deleted: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'vendor_id', as: 'vendor' });

    this.belongsTo(models.Cryptocurrency, {
      foreignKey: 'cryptocurrency_id',
      as: 'cryptocurrency',
    });

    this.belongsTo(models.Fiat, {
      foreignKey: 'fiat_id',
      as: 'fiat',
    });

    this.belongsTo(models.PaymentMethod, {
      foreignKey: 'payment_method_id',
      as: 'payment_method',
    });
  }
}

export default Offer;
