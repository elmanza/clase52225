// const animales = ["loro", "perro", "gatos", "hamster"];
// const animalesSelva = [...animales];

// console.log(animales.includes("loro"));



// console.log(3**3);


let felipe = {
  age: 20,
  birthday: "May 15",
  novia: false,
  peliculas: ["peli1", "peli2", "Matrix"],
  equipoFutbol: {
    nombre: "Gimnasia",
    titulos: 10,
    year: 1960
  }
}

felipe.equipoFutbol = Object.entries(felipe.equipoFutbol);
let arr_multidimensional = Object.entries(felipe);
console.log(arr_multidimensional.flat(Infinity));
// let { birthday, age, ...tutor } = felipe;

// console.log("Ecmascript 9");
// console.log(tutor);

let objetos = [
  {
    manzanas: 12,
    peras: 5,
    carnes: 10,
    jugos: 2,
    dulces: 1
  },
  {
    manzanas: 9,
    sandias: 2,
    huevos: 30, 
    jugos: 5,
    panes: 10
  },
  {
    naranjas: 1,
    sandias: 1,
    huevos: 1, 
    jugos: 1,
    panes: 1
  }
]
// 76 + 5 = 81;

// PUNTO 1
let resultado = objetos.reduce((p, c)=>{
   return {
    ...p,
    ...c
   }
}, {})

// console.log(Object.keys(resultado));



// PUNTO 2

let resultadoTotal = objetos.reduce((p, c)=>{
  let values = Object.values(c);
  let total = values.reduce((p,c)=> p+c, 0);
  return p + total;
}, 0);

let cantManzanas = objetos.filter(obj => obj.hasOwnProperty("manzanas"))
                          .reduce((p,c) => p + c.manzanas, 0);
// console.log(cantManzanas);
// let productos = Object.keys(objetos[0]);
// console.log(productos);