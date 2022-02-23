const Sequelize = require("sequelize");
const db = require("../db/db");
const User = require("../models/user.model");

const Todo = db.define("todos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  check: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

Todo.belongsTo(User, {
  foreignKey: false,
});

module.exports = Todo;