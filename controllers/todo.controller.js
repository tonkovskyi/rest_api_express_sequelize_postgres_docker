const Todo = require("../models/todo.model");
const TODO_MODEL = require("../dtos/todo.dto");

class TodoController {
  async getAll(req, res) {
    try {
      const getTodos = await Todo.findAll();
      return res.status(200).json(getTodos);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  async getOne(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.id);
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  async createOne(req, res) {
    try {
      TODO_MODEL(req, res);
      const todo = await Todo.create(TODO_MODEL(req, res));
      console.log("Todo crerated");
      return res.status(201).json(todo);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  async updateOne(req, res) {
    try {
      TODO_MODEL(req, res);
      const todo = await Todo.update(TODO_MODEL(req, res), {
        where: { id: req.params.id },
      });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  async deleteOne(req, res) {
    try {
      const todo = await Todo.destroy({ where: { id: req.params.id } });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

module.exports = new TodoController();