const { Router } = require("express");
const careInstructionsController = require("./controller/careInstructionController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/care', router);
    router.get('/', careInstructionsController.getAll);
    router.get('/:care_id', careInstructionsController.get);
    router.post('/', careInstructionsController.create);
    router.put('/:care_id', careInstructionsController.update);
    router.delete('/:care_id', careInstructionsController.delete);
}