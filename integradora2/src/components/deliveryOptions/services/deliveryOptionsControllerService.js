const DeliveryOptionModel = require("../../../models/mongoose/delivery_options");

class DeliveryOption {
  async get(id = null) {
    return id ? await DeliveryOptionModel.findById(id) : await DeliveryOptionModel.find({});
  }

  async create(payload) {
    return await DeliveryOptionModel.create(payload);
  }

  async update(_id, payload) {
    return await DeliveryOptionModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await DeliveryOptionModel.findByIdAndDelete(id);
    return await DeliveryOptionModel.deleteMany({});
  }
}

module.exports = new DeliveryOption();