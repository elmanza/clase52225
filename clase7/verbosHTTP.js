const express = require("express");
const app = express();
const PORT = 8087;
let frase = "frase inicial hola mundo colombia, falcao";

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/frase", (req, res)=> {res.json({frase})});
app.get("/api/palabras/:pos", (req, res)=>{
  const { pos } = req.params;
  const palabras = frase.split(" ");
  const posN = Number(pos);
  if(palabras.length < posN) return res.json({buscada: "Excedes la longitud de las palabras en la frase!"});
  res.json({buscada: palabras[posN - 1]})
});

app.post("/api/palabras", (req, res)=>{
  const { palabra } = req.body;
  frase += ` ${palabra}`;
  let response = {
    agregada: palabra,
    pos: frase.split(" ").length
  }
  res.json({...response});
})

app.put("/api/palabras/:pos", (req,res)=>{
  let { pos } = req.params;
  let { palabra } = req.body; 
  const posArray = Number(pos) - 1;
  let _palabras = frase.split(" ");
  let anterior = _palabras[posArray];
  _palabras = _palabras.splice(posArray, 1, palabra);
  frase = _palabras.join(" ");
  let response = {
    actualizada: palabra,
    anterior: anterior
  }
  res.json({...response});
})


app.delete("/api/palabras/:pos", (req, res)=>{
  let { pos } = req.params;
  const posArray = Number(pos) - 1;
  const palabras = frase.split(" ");
  palabras.splice(posArray, 1);
  frase = palabras.join(" ");
  res.json({response: frase});
})

app.listen(PORT, ()=> { console.log(`http://localhost:${PORT}`)});