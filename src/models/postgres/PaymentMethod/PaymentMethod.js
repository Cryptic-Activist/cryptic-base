import { DataTypes, Model } from 'sequelize';

class PaymentMethod extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        payment_method_category_id: {
          type: DataTypes.BIGINT,
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
    this.hasMany(models.Offer, {
      foreignKey: 'payment_method_id',
      as: 'offers',
    });

    this.belongsTo(models.PaymentMethodCategory, {
      foreignKey: 'payment_method_category_id',
      as: 'payment_method_category',
    });
  }
}

export default PaymentMethod;
