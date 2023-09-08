const { Router } = require("express");
const productController = require("./controller/productController");
const upload = require("../../utils/multer");
const { parseJsonFields } = require("../../utils/middlewares/fieldParsing/fieldParsing");
module.exports = (app) =>{
    const router = new Router();
    app.use('/product', router);
    router.get('/', productController.getAll);
    router.get('/:product_id', productController.get);
    router.post('/', upload.any(), parseJsonFields, productController.create);
    router.put('/:product_id', productController.update);
    router.delete('/:product_id', productController.delete);
}