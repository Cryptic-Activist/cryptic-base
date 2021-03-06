import { DataTypes, Model } from 'sequelize';

class Trade extends Model {
  static init(sequelize) {
    return super.init(
      {
        vendor_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        trader_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        offer_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        cryptocurrency_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        fiat_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        chat_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        cryptocurrency_amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        fiat_amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        started_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        ended_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        state: {
          type: DataTypes.ENUM(['ongoing', 'canceled', 'done', 'error']),
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

    this.belongsTo(models.User, { foreignKey: 'trader_id', as: 'trader' });

    this.belongsTo(models.Cryptocurrency, {
      foreignKey: 'cryptocurrency_id',
      as: 'cryptocurrency',
    });

    this.belongsTo(models.Fiat, {
      foreignKey: 'fiat_id',
      as: 'fiat',
    });

    this.belongsTo(models.Chat, { foreignKey: 'chat_id', as: 'chat' });

    this.belongsTo(models.Offer, { foreignKey: 'offer_id', as: 'offer' });
  }
}

export default Trade;
