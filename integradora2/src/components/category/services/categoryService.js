const categoryModel = require("../../../models/mongoose/categories");

class Category {
  async get(id = null){
    try {
      return id ? await categoryModel.findById(id) : await categoryModel.find({});
    } catch (error) {
        return {response: "Hubo un error!"};
    }
  }

  async create(payload){
    try {
      return await categoryModel.create(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id = null){
    try {
      if(id) return await categoryModel.findByIdAndDelete(id);
      return await categoryModel.deleteMany({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Category();