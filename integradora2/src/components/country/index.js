const { Router } = require("express");
const countryController = require("./controller/countryController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/country', router);
    router.get('/', countryController.getAll);
    router.get('/:country_id', countryController.get);
    router.post('/', countryController.create);
}