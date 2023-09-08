const countryModel = require("../../../models/mongoose/country");

class Country {

  async get(id = null, projection = {}) {
    return id ? await countryModel.findById(id, projection) : await countryModel.find({}, projection);
  }

  async create(payload) {
    return await countryModel.create(payload);
  }

  async update(_id, payload) {
    return await countryModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await countryModel.findByIdAndDelete(id);
    return await countryModel.deleteMany({});
  }
  
}

module.exports = new Country();