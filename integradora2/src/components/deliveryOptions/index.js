const { Router } = require("express");
const deliveryOptionsController = require("./controller/deliveryOptionsControllerController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/invoice_type', router);
    router.get('/', deliveryOptionsController.getAll);
    router.get('/:invoice_type_id', deliveryOptionsController.get);
    router.post('/', deliveryOptionsController.create);
}