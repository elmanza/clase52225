const productTypeServices = require("../services/productTypeService");

class ProductType {

  async get(req, res, next) {
    try {
      const { producttype_id } = req.params;
      const response = await productTypeServices.get(producttype_id);
      res.json(response);
    } catch (error) {
      next(error)
    };    
  }

  async getAll(req, res, next) {
    try {
      const response = await productTypeServices.get();
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async create(req, res, next) {
    try {
      const response = await productTypeServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }
}

module.exports = new ProductType();