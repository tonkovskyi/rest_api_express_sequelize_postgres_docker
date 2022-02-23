const Sequelize = require("sequelize");
const db = require("../db/db");

const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apiKey: {
    type: Sequelize.STRING(36),
    defaultValue: Sequelize.UUIDV4,
  },
});

module.exports = User;