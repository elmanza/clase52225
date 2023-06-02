const { Router } = require("express");

module.exports = app => {
  let router = new Router();
  app.use("/api/pets", router);
  router.get("/", (req, res) => res.send("Todo ok desde PETS GET"));
  router.post("/", (req, res) => res.send("Todo ok desde PETS POST"));
}