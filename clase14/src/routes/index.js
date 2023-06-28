const apiEstudiantes = require("../components/estudiantes/");

module.exports = app => {
  apiEstudiantes(app);
  app.get("/", (req, res)=>{res.send("Todo ok!")});
}