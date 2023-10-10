const categoryModel = require("../../../models/mongoose/categories");

class Category {
  async get(id = null) {
    return id ? await categoryModel.findById(id) : await categoryModel.find({});
  }

  async create(payload) {
    return await categoryModel.create(payload);
  }

  async update(_id, payload) {
    return await categoryModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null) {
    if (id) return await categoryModel.findByIdAndDelete(id);
    return await categoryModel.deleteMany({});
  }
}

module.exports = new Category();