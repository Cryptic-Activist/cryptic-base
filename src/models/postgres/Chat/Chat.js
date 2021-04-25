import { DataTypes, Model } from 'sequelize';

class Chat extends Model {
  static init(sequelize) {
    return super.init(
      {
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
    this.hasOne(models.Trade, { foreignKey: 'chat_id', as: 'trade' });
  }
}

export default Chat;
