const userccModel = require("../../../models/mongoose/user_cc");

class UserCC {
  async get(id = null, projection = {}) {
    return id ? await userccModel.findById(id, projection) : await userccModel.find({}, projection);
  }

  async getCustomeQuery(query, projection = {}) {
    return await userccModel.find({...query}, projection);
  }

  async create(payload) {
    return await userccModel.create(payload);
  }

  async update(_id, payload) {
    return await userccModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await userccModel.findByIdAndDelete(id);
    return await userccModel.deleteMany({});
  }
}

module.exports = new UserCC();