const { Router } = require("express");
const paymentStatusController = require("./controller/paymentStatusController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/payment_status', router);
    router.get('/', paymentStatusController.getAll);
    router.get('/:paymentstatus_id', paymentStatusController.get);
    router.post('/', paymentStatusController.create);
}