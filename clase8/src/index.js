const express = require("express");
const PORT = 3001;
const routes = require("./routes");
const cors = require("cors");

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
    this.app.listen(PORT, ()=> {console.log(`http://localhost:${PORT}`)});
  }
}

module.exports = new Server();