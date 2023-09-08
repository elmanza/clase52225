const { Router } = require("express");
const collectionController = require("./controller/collectionController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/collection', router);
    router.get('/', collectionController.getAll);
    router.get('/:collection_id', collectionController.get);
    router.post('/', collectionController.create);
    router.put('/:collection_id', collectionController.update);
    router.delete('/:collection_id', collectionController.delete);
}