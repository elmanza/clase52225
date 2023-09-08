const colorModel = require("../../../models/mongoose/colors");

class Color {
  async get(id = null, projection = {}) {
    return id ? await colorModel.findById(id, projection) : await colorModel.find({}, projection);
  }

  async create(payload) {
    return await colorModel.create(payload);
  }

  async update(_id, payload) {
    return await colorModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await colorModel.findByIdAndDelete(id);
    return await colorModel.deleteMany({});
  }
}

module.exports = new Color();