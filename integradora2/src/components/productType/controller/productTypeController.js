const productTypeServices = require("../services/productTypeService");

class ProductType {

  async get(req, res, next) {
    try {
      const { product_type_id } = req.params;
      const response = await productTypeServices.get(product_type_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await productTypeServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await productTypeServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { product_type_id } = req.params;
      const response = await productTypeServices.update(product_type_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { product_type_id } = req.params;
      const response = await productTypeServices.delete(product_type_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductType();