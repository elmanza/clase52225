const productTypeModel = require("../../../models/mongoose/product_type");

class ProductType {

  async get(id = null, projection = {}) {
    return id ? await productTypeModel.findById(id, projection) : await productTypeModel.find({}, projection);
  }

  async create(payload) {
    return await productTypeModel.create(payload);
  }

  async update(_id, payload) {
    return await productTypeModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await productTypeModel.findByIdAndDelete(id);
    return await productTypeModel.deleteMany({});
  }
}

module.exports = new ProductType();