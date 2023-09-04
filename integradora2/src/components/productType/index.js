const { Router } = require("express");
const productTypeController = require("./controller/productTypeController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/producttype', router);
    router.get('/', productTypeController.getAll);
    router.get('/:producttype_id', productTypeController.get);
    router.post('/', productTypeController.create);
}