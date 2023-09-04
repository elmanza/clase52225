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
}

module.exports = new Status();