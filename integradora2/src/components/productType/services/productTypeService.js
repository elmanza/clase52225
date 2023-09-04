const productTypeModel = require("../../../models/mongoose/product_type");

class ProductType {
  async get(id = null) {
    return id ? await productTypeModel.findById(id) : await productTypeModel.find({});
  }

  async create(payload) {
    return await productTypeModel.create(payload);
  }
}

module.exports = new ProductType();