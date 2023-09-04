const careInstructions = require("../../../models/mongoose/careInstructions");

class CareInstruction {
  async get(id = null) {
    try {
      return id ? await careInstructions.findById(id) : await careInstructions.find({});
    } catch (error) {
      return { response: "Hubo un error!" };
    }
  }

  async create(payload) {
    try {
      return await careInstructions.create(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id = null){
    try {
      if(id) return await careInstructions.findByIdAndDelete(id);
      return await careInstructions.deleteMany({});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CareInstruction();