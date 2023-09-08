const genderModel = require("../../../models/mongoose/gender");

class Gender {
  async get(id = null, projection = {}) {
    return id ? await genderModel.findById(id, projection) : await genderModel.find({}, projection);
  }

  async create(payload) {
    return await genderModel.create(payload);
  }

  async update(_id, payload) {
    return await genderModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await genderModel.findByIdAndDelete(id);
    return await genderModel.deleteMany({});
  }
}

module.exports = new Gender();