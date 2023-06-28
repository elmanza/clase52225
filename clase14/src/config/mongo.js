const mongoose = require("mongoose");
const {db} = require("./");
let connection;

(async ()=>{
  try {
    connection = await mongoose.connect(db.mongo_local, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conexion a la DB");
  } catch (error) {
    console.log(error);
  }
})()

module.exports = { connection };