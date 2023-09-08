const careInstructions = require("../../../models/mongoose/careInstructions");

class CareInstruction {
  async get(id = null) {
    return id ? await careInstructions.findById(id) : await careInstructions.find({});
  }

  async create(payload) {
    return await careInstructions.create(payload);
  }

  async delete(id = null){
    if(id) return await careInstructions.findByIdAndDelete(id);
    return await careInstructions.deleteMany({});
  }

  async update(_id, payload) {
    return await careInstructions.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await careInstructions.findByIdAndDelete(id);
    return await careInstructions.deleteMany({});
  }
}

module.exports = new CareInstruction();