const PaymentMethodsModel = require("../../../models/mongoose/payment_methods");

class PaymentMethods {
  async get(id = null) {
    return id ? await PaymentMethodsModel.findById(id) : await PaymentMethodsModel.find({});
  }

  async create(payload) {
    return await PaymentMethodsModel.create(payload);
  }

  async update(_id, payload) {
    return await PaymentMethodsModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await PaymentMethodsModel.findByIdAndDelete(id);
    return await PaymentMethodsModel.deleteMany({});
  }
}

module.exports = new PaymentMethods();