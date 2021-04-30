import { DataTypes, Model } from 'sequelize';

class Block extends Model {
  static init(sequelize) {
    return super.init(
      {
        blocker_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        blocked_id: {
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
    this.belongsTo(models.User, {
      foreignKey: 'blocker_id',
      as: 'blocker',
    });

    this.belongsTo(models.User, {
      foreignKey: 'blocked_id',
      as: 'blocked',
    });
  }
}

export default Block;
