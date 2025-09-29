/*Solicita al usuario una frase que contenga la palabra usuario y muestra en qué posición aparece */

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingresa una frase que contenga la palabra usuario ", (text) => {

    const userPosition = text
                            .toLowerCase()
                            .trim()
                            .replaceAll(" ", "")
                            .indexOf("usuario")

    console.log(`La posición de la palabar usuario es: ${userPosition}`)

    rl.close()

})