const fs = require("fs");
const date = new Date();
const ARCHIVO = "clase.txt";
// const fecha = new Date().toLocaleTimeString();
const fyh = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
fs.writeFile(ARCHIVO, `${fyh} Nuevo!!!! `, (error)=>{
  if(error) console.log("Hubo un error!");

  fs.readFile(ARCHIVO, (error, texto) =>{
    if(error) console.log("Hubo un error en read!");
    // console.log(`Leyendo desde el callback : ${texto}`);
    fs.appendFile(ARCHIVO, " Adiciono esto nuevo!", (error)=>{
      if(error) console.log("Hubo un error!");
    })
  });
})