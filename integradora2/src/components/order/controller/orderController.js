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

  async getByStatus(req, res, next) {
    try {
      const { status_id } = req.params;
      const response = await orderService.getByStatus({status_id});
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

  async update(req, res, next) {
    try {
      const { order_id } = req.params;
      const response = await statusServices.update(order_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { order_id } = req.params;
      const response = await statusServices.delete(order_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Order();