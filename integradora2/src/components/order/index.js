const { Router } = require("express");
const orderController = require("./controller/orderController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/product', router);
    router.get('/', orderController.getAll);
    router.get('/:product_id', orderController.get);
    router.post('/', orderController.create);
}