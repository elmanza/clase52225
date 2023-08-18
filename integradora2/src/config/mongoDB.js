const mongoose = require("mongoose");
const { mongo } = require("./");
mongoose.set("debug", true);
mongoose.set("strictQuery", false);


class MongoDB{
  static instance;
  constructor(){
    if(MongoDB.instance){
      console.log("Ya existia la instancia");
      return MongoDB.instance;
    }
    this.connection = this.connect();
    MongoDB.instance = this;
    console.log("Se creó una nueva instancia!");
  }

  async connect(){
    try {
      let connection = await mongoose.connect(mongo.mongo_atlas);
      console.log("Conexión exitosa");
      return connection
    } catch (error) {
      console.log(error);
      console.log("No se pudo conectar!");
    }
  }
}

module.exports = MongoDB;


// let connection;
// (async ()=>{
//   try {
//     connection = await mongoose.connect(mongo.mongo_atlas);
//     console.log("Conexión exitosa!");
//   } catch (error) {
//     console.log(error)
//     console.log("No se pudo conectar a la base de datos!");
//   }
// })();

// module.exports = { connection };

