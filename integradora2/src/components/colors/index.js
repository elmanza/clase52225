const { Router } = require("express");
const colorController = require("./controller/colorsController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/color', router);
    router.get('/', colorController.getAll);
    router.get('/:color_id', colorController.get);
    router.post('/', colorController.create);
    router.put('/:color_id', colorController.update);
    router.delete('/:color_id', colorController.delete);
}