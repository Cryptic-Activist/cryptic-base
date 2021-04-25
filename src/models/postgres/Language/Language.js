import { DataTypes, Model } from 'sequelize';

class Language extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
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
    this.belongsToMany(models.User, {
      foreignKey: 'language_id',
      through: 'user_languages',
      as: 'users',
    });
  }
}

export default Language;
