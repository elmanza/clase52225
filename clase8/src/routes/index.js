const userApi = require("../components/users");
const petsApi = require("../components/pets");


module.exports = app =>{
  userApi(app);
  petsApi(app);
  app.get("/", (req, res)=> res.send("Ok!"));

  app.use((error,req,res,next)=>{
    console.error(error.stack);
    res.status(500).send("Algo se dañó!");
  })
}