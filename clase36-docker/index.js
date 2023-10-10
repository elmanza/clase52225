const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const ANIMALS = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Corriendo desde Docker!");
});

app.get("/animals", (req,res)=>{
    res.json(ANIMALS);
})

app.post("/", (req, res)=>{
    let { animal } = req.query;
    let response = {
        code: 200,
        response: ""
    }
    if(!animal)return res.json({...response, code: 500});
    ANIMALS.push(animal);
    res.json({...response, response: "Agregado satisfactoriamente!"});
});

app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});