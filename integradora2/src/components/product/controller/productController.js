const productServices = require("../services/productService");

class Product {

  async get(req, res, next) {
    const { product_id } = req.params;
    const response = await productServices.get(product_id);
    res.json(response);
  }

  async getAll(req, res, next) {
    const response = await productServices.get();
    res.json(response);
  }

  async create(req, res, next) {
    const response = await productServices.create(req.files, req.body);
    res.json(response);
  }

  async delete(req, res, next) {
    const { category_id } = req.params;
    const response = await categoryServices.delete(category_id);
    res.json(response);
  }
}

module.exports = new Product();