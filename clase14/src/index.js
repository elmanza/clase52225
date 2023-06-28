const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("./config/mongo");
const { config } = require("./config");

class Server {
  constructor(){
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }

  settings(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
    this.app.use("/francisco", express.static(`${__dirname}/public`));
  }

  middleware(){
    this.app.use(cors('*'));
    this.app.use((req, res, next)=>{
      // res.send("No estas admitido!!");
      console.log("En mi middleware a nivel de app!");
      next()
    })
  }

  routes(){
    routes(this.app);
  }

  listen(){
    this.app.listen(config.port, ()=> {console.log(`http://localhost:${config.port}`)});
  }
}

module.exports = new Server();