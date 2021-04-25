import { DataTypes, Model } from 'sequelize';

class Fiat extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        symbol: {
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
    this.hasMany(models.Offer, {
      foreignKey: 'fiat_id',
      as: 'offers',
    });
  }
}

export default Fiat;
