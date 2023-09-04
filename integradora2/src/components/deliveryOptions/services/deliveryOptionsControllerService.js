const DeliveryOptionModel = require("../../../models/mongoose/invoice_types");

class DeliveryOption {
  async get(id = null) {
    return id ? await DeliveryOptionModel.findById(id) : await DeliveryOptionModel.find({});
  }

  async create(payload) {
    return await DeliveryOptionModel.create(payload);
  }
}

module.exports = new DeliveryOption();