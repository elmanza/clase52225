const invoiceTypeServices = require("../services/invoiceTypeService");

class InvoiceType {

  async get(req, res, next) {
    try {
      const { id } = req.params;
      const response = await invoiceTypeServices.get(id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await invoiceTypeServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await invoiceTypeServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new InvoiceType();