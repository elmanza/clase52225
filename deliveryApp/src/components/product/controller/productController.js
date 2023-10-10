const productService = require("../services/productService");

class Product {

  async get(req, res, next) {
    try {
      const { id } = req.params;
      const response = await productService.get(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await productService.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await productService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await productService.delete(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Product();