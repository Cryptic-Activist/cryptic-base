import { DataTypes, Model } from 'sequelize';

class UserLanguages extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        language_id: {
          type: DataTypes.INTEGER,
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
    this.hasOne(models.Language, {
      foreignKey: 'language_id',
      as: 'language',
    });
    this.hasOne(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default UserLanguages;
