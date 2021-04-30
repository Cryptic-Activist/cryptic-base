import { DataTypes, Model } from 'sequelize';

class Trust extends Model {
  static init(sequelize) {
    return super.init(
      {
        truster_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        trusted_id: {
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
        tableName: 'trusts',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'truster_id',
      as: 'truster',
    });

    this.belongsTo(models.User, {
      foreignKey: 'trusted_id',
      as: 'trusted',
    });
  }
}

export default Trust;
