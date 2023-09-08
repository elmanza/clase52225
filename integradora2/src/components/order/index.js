const { Router } = require("express");
const orderController = require("./controller/orderController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/order', router);
    router.get('/', orderController.getAll);
    router.get('/:order_id', orderController.get);
    router.get('/:status_id/list', orderController.getByStatus);
    router.post('/', orderController.create);
    router.put('/:order_id', orderController.create);
    router.delete('/:order_id', orderController.create);
}