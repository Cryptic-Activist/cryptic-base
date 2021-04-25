require('dotenv').config();

module.exports = {
  database: process.env.SEQUELIZE_DATABASE,
  username: process.env.SEQUELIZE_USERNAME,
  password: process.env.SEQUELIZE_PASSWORD,
  host: process.env.SEQUELIZE_HOST,
  dialect: 'postgres',
  additional: {
    freezeTableName: true,
  },
  define: {
    timestamps: true,
    underscored: true,
  },
};
