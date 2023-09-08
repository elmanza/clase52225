const InvoiceTypeModel = require("../../../models/mongoose/invoice_types");

class InvoiceType {
  async get(id = null) {
    return id ? await InvoiceTypeModel.findById(id) : await InvoiceTypeModel.find({});
  }

  async create(payload) {
    return await InvoiceTypeModel.create(payload);
  }

  async update(_id, payload) {
    return await InvoiceTypeModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await InvoiceTypeModel.findByIdAndDelete(id);
    return await InvoiceTypeModel.deleteMany({});
  }
}

module.exports = new InvoiceType();