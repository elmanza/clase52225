const PaymentMethodsModel = require("../../../models/mongoose/payment_methods");

class PaymentMethods {
  async get(id = null) {
    return id ? await PaymentMethodsModel.findById(id) : await PaymentMethodsModel.find({});
  }

  async create(payload) {
    return await PaymentMethodsModel.create(payload);
  }
}

module.exports = new PaymentMethods();