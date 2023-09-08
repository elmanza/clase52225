const { Router } = require("express");
const genderController = require("./controller/genderController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/gender', router);
    router.get('/', genderController.getAll);
    router.get('/:gender_id', genderController.get);
    router.post('/', genderController.create);
    router.put('/:gender_id', genderController.update);
    router.delete('/:gender_id', genderController.delete);
}