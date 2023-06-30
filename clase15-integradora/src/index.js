const express = require("express");
const cors = require("cors");
const http = require("http");
const { config } = require("./config");
const serverRoutes = require("./routes");
const path = require("path");
const Socket = require("./utils/sockets/socket.io");
class Server {
  constructor(port) {

    this.app = express();
    this.PORT = port;
    this.settings();
    this.views();
    this.middlewares();
    this.server = http.createServer(this.app);
    this.socket = new Socket(this.server);
    this.route();
  }

  settings(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.static(`${__dirname}/public`));
  }

  views(){
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "ejs");
  }

  middlewares(){
    this.app.use(cors("*"));

  }

  route(){
    this.app.use((req, res, next)=>{
      // req = {
      //   ...req,
      //   socketManager: this.socket
      // }
      req.socketManager = this.socket;
      next();
    })
    serverRoutes(this.app, this.socket);
  }

  listen(){
    this.server.listen(this.PORT, ()=>{console.log(`http://localhost:${this.PORT}`)});
  }
}

module.exports = new Server(config.port);