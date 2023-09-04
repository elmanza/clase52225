const colorModel = require("../../../models/mongoose/colors");

class Color {
  async get(id = null, projection = {}) {
    try {
      return id ? await colorModel.findById(id, projection) : await colorModel.find({}, projection);
    } catch (error) {
      return { response: "Hubo un error!" };
    }
  }

  async create(payload) {
    try {
      return await colorModel.create(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id = null){
    try {
      if(id) return await colorModel.findByIdAndDelete(id);
      return await colorModel.deleteMany({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Color();