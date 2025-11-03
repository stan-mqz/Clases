/* 
Solicita la edad al usuario y muestra en qué categoría está
    
    Niñez 0-11

    Adolescencia: 12-17

    Adultez: 18-59

    Vejez: 60+

*/

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese su edad ", age =>{
    if(age >= 0 && age <= 11){
        console.log("Eres un niño");
    } else if(age >= 12 && age <= 17){
        console.log("Eres es un adolescente");
    } else if(age >= 18 && age <= 59){
        console.log("Eres es un adulto");
    } else if(age >= 60){
        console.log("Eres es un adulto mayor");
    } else if(age > 100){
        console.log("Eres es un centenario")
    } else{
        console.log("Edad invalida")
    }
    rl.close();
})