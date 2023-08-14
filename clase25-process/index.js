let { program } = require("commander");
program.version('1.0.0');
program.description('Programa para levantar nuestro servidor con un ambiente especifico')
program.option('-m, --mode <mode>', "Ambiente de ejecución", 'development');
program.parse();
let args = program.opts();
require("dotenv").config({
    path: args.mode === 'production' ? './.env.production' : './.env.development'
})
const express = require("express");
const app = express();
const { fork } = require('child_process');
const PORT = process.env.PORT;

let visitCount = 0;

app.get('/', (req,res)=>{
    visitCount++;
    res.json({visitCount});
});

app.get('/bloqueante', (req,res)=>{
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;        
    }
    res.send(`Suma (bloqueante): ${suma}`);
});

app.get('/no_bloqueante', (req,res)=>{
    const childProcess = fork('./calculate.js');
    childProcess.on('message', data => {
        res.send(`Suma (no_bloqueante): ${data}`);
    });
});


app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});




// function listNumbers(...numbers){
//     const invalidTypes = numbers.filter(num => typeof num !== 'number');

//     if(invalidTypes.length > 0){
//         const smsError = `Parametros no válidos [${invalidTypes.map(arg => typeof arg).join(',')}]`;
//         console.error(smsError);
//         process.exit(-2, smsError);
//     }

//     console.log(`Numbers: `, numbers);
// }

// process.on('exit', code =>{
//     if(code === -4)console.log(`code: ${code} Parametros no válidos`);
// })


// listNumbers(1,2,true,'4',5);