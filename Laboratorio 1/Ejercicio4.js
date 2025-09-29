/* Solicita al usuario una frase y muestra los primeros 6 caracteres de esa frase ingresada. */

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Escribe una frase ', (text) => {

    const firstCharacters = text
                                .trim()
                                .replaceAll(" ", "")
                                .substring(0, 6)

    console.log(firstCharacters)

    rl.close()
})