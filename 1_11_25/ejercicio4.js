javascript
/*
Solicitar un nombre y mostrar si está en el arreglo o no esta
*/


import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const names = ["Stan", "Ortiz", "Ken", "Axel"];

rl.question("Ingrese un nombre ", (name) =>{
    if(names.includes(name)){
        console.log("El nombre esta en la lista");
    } else {
        console.log("El nombre no esta en la lista");
    }
    rl.close();
})