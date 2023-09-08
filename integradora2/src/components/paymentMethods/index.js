const { Router } = require("express");
const paymentMethodsController = require("./controller/paymentMethodsController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/payment_methods', router);
    router.get('/', paymentMethodsController.getAll);
    router.get('/:paymentmethods_id', paymentMethodsController.get);
    router.post('/', paymentMethodsController.create);
    router.put('/:paymentmethods_id', paymentMethodsController.update);
    router.delete('/:paymentmethods_id', paymentMethodsController.delete);
}