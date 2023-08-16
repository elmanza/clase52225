const { Router } = require("express");
const router = new Router();
const toy = require("../controllers/toyController");
const user = require("../controllers/userController");


router.post('/user/', user.create);
router.get('/user/', user.getAll);
router.get('/user/:id', user.getById);


router.post('/toy/', toy.create);
router.get('/toy/', toy.getAll);
router.get('/toy/:id', toy.getById);

module.exports = router;