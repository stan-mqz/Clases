//solicitar al usuario tres nombres para guardarlos en el array y mostrar cada uno

import readline from 'readline'

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombres=[];

rl.question("Ingrese el primer nombre:",(nombre1)=>{
    nombres.push(nombre1);

    rl.question("Ingrese el segundo nombre:",(nombre2)=>{
        nombres.push(nombre2);

        rl.question("Ingrese el tercer nombre:",(nombre3)=>{
            nombres.push(nombre3);

            console.log("Los nombres ingresados son:");
            console.log("Primer nombre:", nombres[0])
            console.log("Segundo nombre:", nombres[1])
            console.log("Tercer nombre:", nombres[2])

            rl.close
        })
    })
})