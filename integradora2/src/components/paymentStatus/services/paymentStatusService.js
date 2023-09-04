const PaymentStatusModel = require("../../../models/mongoose/payment_status");

class PaymentStatus {
  async get(id = null) {
    return id ? await PaymentStatusModel.findById(id) : await PaymentStatusModel.find({});
  }

  async create(payload) {
    return await PaymentStatusModel.create(payload);
  }
}

module.exports = new PaymentStatus();