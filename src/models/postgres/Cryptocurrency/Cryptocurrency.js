import { DataTypes, Model } from 'sequelize';

class Cryptocurrency extends Model {
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
        icon: {
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
      foreignKey: 'cryptocurrency_id',
      as: 'offers',
    });
    this.hasMany(models.Trade, {
      foreignKey: 'cryptocurrency_id',
      as: 'trades',
    });
  }
}

export default Cryptocurrency;
