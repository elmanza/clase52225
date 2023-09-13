const express = require("express");
const {dividir, multiplicar, restar, sumar, exponente} = require("operacionesmatematicas52225");
const app = express();
const PORT = 3004;

app.get("/", (req,res)=>{
    let {a, b} = req.query;
    res.json({
        suma: sumar(Number(a), Number(b)),
        resta: restar(Number(a), Number(b)),
        multiplicacion: multiplicar(Number(a), Number(b)),
        dividir: dividir(Number(a), Number(b)),
        exponente: exponente(Number(a), Number(b))
    })
})

app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});