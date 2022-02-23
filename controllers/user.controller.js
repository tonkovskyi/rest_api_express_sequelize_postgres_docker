const User = require("../models/user.model");
const Todo = require("../models/todo.model");
const USER_MODEL = require("../dtos/user.dto");

class UserController {
  async getAll(req, res) {
    try {
      const getUsers = await User.findAll();
      return res.status(200).json(getUsers);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  async getAllByUserId(req, res) {
    try {
      const id = await Todo.findAll({ where: { userId: req.query.id } });
      return res.status(200).json(id);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  async createOne(req, res) {
    try {
      USER_MODEL(req, res);
      const user = await User.create(USER_MODEL(req, res));
      console.log("User crerated");
      return res.status(201).json(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

module.exports = new UserController();