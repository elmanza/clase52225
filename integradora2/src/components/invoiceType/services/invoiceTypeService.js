const InvoiceTypeModel = require("../../../models/mongoose/invoice_types");

class InvoiceType {
  async get(id = null) {
    return id ? await InvoiceTypeModel.findById(id) : await InvoiceTypeModel.find({});
  }

  async create(payload) {
    return await InvoiceTypeModel.create(payload);
  }
}

module.exports = new InvoiceType();