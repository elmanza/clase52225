// Tadeo Almiron
const { Router } = require("express");
const authController = require("./controller/authController");
module.exports = app =>{
  const router = new Router();
  app.use("/auth", router);
  router.get("/session", authController.session);
  router.get("/login", authController.loginView);
  router.post("/login", authController.login);
  router.get("/cookies", authController.getCookies);
}