//Solicitar al usuario una contraseña y verificar si esta es correcta o no

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const password = 'Ab@1234'
let mensaje

rl.question('Ingrese la contraseña ', (pass) => {
    if (pass === password) {
        mensaje = 'Contraseña correcta'
    } else {
        mensaje = 'Contraseña incoreecta'
    }

    console.log(`${mensaje}`)
    rl.close()
})
