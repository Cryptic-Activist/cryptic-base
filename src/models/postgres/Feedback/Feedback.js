import { DataTypes, Model } from 'sequelize';

class Feedback extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        vendor_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        offer_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        message: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.ENUM(['positive', 'negative']),
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
    this.belongsTo(models.Offer, {
      foreignKey: 'offer_id',
      as: 'offer',
    });

    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });

    this.belongsTo(models.User, { foreignKey: 'vendor_id', as: 'vendor' });
  }
}

export default Feedback;
