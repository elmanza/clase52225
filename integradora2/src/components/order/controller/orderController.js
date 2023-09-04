const orderService = require("../services/orderService");
const moveToService = require("../services/moveToService");

class Order {

  async get(req, res, next) {
    try {
      const { id } = req.params;
      const response = await orderService.get(id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await orderService.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await orderService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Order();