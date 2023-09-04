const countryModel = require("../../../models/mongoose/country");

class Country {
  async get(id = null) {
    try {
      return id ? await countryModel.findById(id) : await countryModel.find({});
    } catch (error) {
      return { response: "Hubo un error!" };
    }
  }

  async create(payload) {
    try {
      return await countryModel.create(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id = null) {
    try {
      if (id) return await countryModel.findByIdAndDelete(id);
      return await countryModel.deleteMany({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Country();