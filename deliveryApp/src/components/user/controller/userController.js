const userService = require("../services/userService");

class User {

  async get(req, res, next) {
    try {
      const { id } = req.params;
      const response = await userService.get(id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await userService.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await userService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new User();