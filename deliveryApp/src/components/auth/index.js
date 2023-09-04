const { Router } = require("express");
const authController = require("./controller/authController");
module.exports = (app) => {
  const router = new Router();
  app.use('/auth', router);
  router.post("/login", authController.login);
  //   router.post("/recovery", authController.recovery);
}