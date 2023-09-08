const productServices = require("../services/productService");

class Product {

  async get(req, res, next) {
    try {
      const { product_id } = req.params;
      const response = await productServices.get(product_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await productServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await productServices.create(req.files, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { product_id } = req.params;
      const response = await productServices.update(product_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { product_id } = req.params;
      const response = await productServices.delete(product_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Product();