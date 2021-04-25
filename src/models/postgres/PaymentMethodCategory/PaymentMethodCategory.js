import { DataTypes, Model } from 'sequelize';

class PaymentMethodCategory extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
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
    this.hasMany(models.PaymentMethod, {
      foreignKey: 'payment_method_category_id',
      as: 'payment_methods',
    });
  }
}

export default PaymentMethodCategory;
