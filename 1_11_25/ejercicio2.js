
//Solicitar al usuario un número y determinar si este es un numero positivo o negativo


import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Ingrese un numero ', (num) => {
    if (num > 0) {
        console.log('Es positivo')
    } else {
        console.log('Es negativo')
    }

    rl.close()
})
