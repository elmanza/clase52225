const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) =>{
  res.send("Todo ok!, Todos estamos entendiendo!")
})


app.get("/saludo", (req, res) =>{
  res.send("Desde el saludo")
})

app.get("/saludo2", (req, res) =>{
  res.send("Desde el saludo dos!")
})

app.get("/bienvenida", (req, res) =>{
  let htmlBody = `<h1 style="color: blue;">Bienvenidos clases <span style="color:red;">52225</span></h1>`
  res.send(htmlBody);
})

const usuarios = [
  {
    id: 1,
    name: "Emma",
    lastname: "Sarmiento",
    age: 27,
    email: "emma@gmail.com"
  },
  {
    id: 2,
    nombre: 'julian',
    apellido: 'Ippolito',
    edad: '17',
    email: 'julianIppolito@gmail.com',
  },
  {
    id: 3,
    name: "Joaquin",
    lastname: "Villarreal",
    age: 21,
    email: "villarrealjoaquin09@gmail.com"
  },
  {
    id: 4,
    nombre: 'Nicolas',
    apellido: 'Brienza',
    edad: '23',
    email: 'nico@gmail.com',
  },
  {
    id: 5,
    nombre: "luciano",
    apellido: "de la Rubia",
    age: 26,
    email:"delarubia@gmail.com"
  },
  {
    id: 6,
    name: "Gastónn",
    lastname: "Pardo",
    age: 38,
    email: "profgpardo@gmail.com"
  }
]


app.get("/usuario/:id", (req, res) =>{
  let { id } = req.params;
  if(isNaN(id)) return res.json({response: "El id no es un número!"});
  let user = usuarios.find(user => user.id === Number(id));
  if(!user) return res.json({response: "El usuario no existe!"}); 
  res.json(user)
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );


// npm init -y
// npm i express
// creamos el archivo index.js
// script en el package.json