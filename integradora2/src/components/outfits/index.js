const { Router } = require("express");
const outfitController = require("./controller/outfitController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/outfit', router);
    router.get('/', outfitController.getAll);
    router.get('/:outfit_id', outfitController.get);
    router.post('/', outfitController.create);
    router.put('/:outfit_id', outfitController.update);
    router.delete('/:outfit_id/:product_id', outfitController.deleteProduct);
    router.delete('/:outfit_id', outfitController.delete);
}