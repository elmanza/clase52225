const PaymentStatusModel = require("../../../models/mongoose/payment_status");

class PaymentStatus {
  async get(id = null) {
    return id ? await PaymentStatusModel.findById(id) : await PaymentStatusModel.find({});
  }

  async create(payload) {
    return await PaymentStatusModel.create(payload);
  }

  async update(_id, payload) {
    return await PaymentStatusModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await PaymentStatusModel.findByIdAndDelete(id);
    return await PaymentStatusModel.deleteMany({});
  }
}

module.exports = new PaymentStatus();