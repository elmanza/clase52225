const statusModel = require("../../../models/mongoose/status");

class Status {
  async get(id = null) {
    return id ? await statusModel.findById(id) : await statusModel.find({});
  }

  async getByType(type) {
    return await statusModel.find({type});
  }

  async create(payload) {
    return await statusModel.create(payload);
  }

  async update(_id, payload) {
    return await statusModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await statusModel.findByIdAndDelete(id);
    return await statusModel.deleteMany({});
  }
}

module.exports = new Status();