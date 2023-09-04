const { Router } = require("express");
const invoiceTypeController = require("./controller/invoiceTypeController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/invoice_type', router);
    router.get('/', invoiceTypeController.getAll);
    router.get('/:invoice_type_id', invoiceTypeController.get);
    router.post('/', invoiceTypeController.create);
}