import { DataTypes, Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        profile_image_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        private_keys: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false,
        },
        is_verified: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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
    this.belongsTo(models.ProfileImage, {
      foreignKey: 'profile_image_id',
      as: 'profile_image',
    });

    this.belongsToMany(models.Language, {
      foreignKey: 'user_id',
      through: 'user_languages',
      as: 'languages',
    });

    this.hasMany(models.Offer, { foreignKey: 'vendor_id', as: 'offers' });

    this.hasMany(models.Trade, { foreignKey: 'vendor_id', as: 'tradesVendor' });

    this.hasMany(models.Trade, { foreignKey: 'trader_id', as: 'tradesTrader' });

    this.hasMany(models.Feedback, {
      foreignKey: 'user_id',
      as: 'userFeedbacks',
    });

    this.hasMany(models.Feedback, {
      foreignKey: 'vendor_id',
      as: 'vendorFeedbacks',
    });

    this.hasMany(models.Block, { foreignKey: 'blocker_id', as: 'blocker' });

    this.hasMany(models.Block, { foreignKey: 'blocked_id', as: 'blocked' });

    this.hasMany(models.Trust, { foreignKey: 'truster_id', as: 'truster' });

    this.hasMany(models.Trust, { foreignKey: 'trusted_id', as: 'trusted' });
  }
}

export default User;
