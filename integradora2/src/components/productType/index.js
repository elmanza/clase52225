const { Router } = require("express");
const productTypeController = require("./controller/productTypeController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/product_type', router);
    router.get('/', productTypeController.getAll);
    router.get('/:product_type_id', productTypeController.get);
    router.post('/', productTypeController.create);
    router.put('/:product_type_id', productTypeController.update);
    router.delete('/:product_type_id', productTypeController.delete);
}