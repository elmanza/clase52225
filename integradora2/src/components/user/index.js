const { Router } = require("express");
const userController = require("./controller/userController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/user', router);
    router.get('/', (req, res, next) => {
      let user = {
            name: "Andres",
            email: 'ar.manzano.94@gmail.com',
            age: 29
        };
      res.render('dashboard', {user: user});
    });
    router.get('/uno', userController.dashboardUno);
    router.get('/dos', userController.dashboardDos);
}