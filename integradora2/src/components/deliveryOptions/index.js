const { Router } = require("express");
const deliveryOptionsController = require("./controller/deliveryOptionsControllerController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/delivery_option', router);
    router.get('/', deliveryOptionsController.getAll);
    router.get('/:delivery_option_id', deliveryOptionsController.get);
    router.post('/', deliveryOptionsController.create);
    router.put('/:delivery_option_id', deliveryOptionsController.update);
    router.delete('/:delivery_option_id', deliveryOptionsController.delete);
}