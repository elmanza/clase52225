const invoiceTypeServices = require("../services/invoiceTypeService");

class InvoiceType {

  async get(req, res, next) {
    try {
      const { invoice_type_id } = req.params;
      const response = await invoiceTypeServices.get(invoice_type_id);
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

  async update(req, res, next) {
    try {
      const { invoice_type_id } = req.params;
      const response = await invoiceTypeServices.update(invoice_type_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { invoice_type_id } = req.params;
      const response = await invoiceTypeServices.delete(invoice_type_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new InvoiceType();