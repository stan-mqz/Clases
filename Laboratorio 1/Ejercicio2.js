/** Pide al usuario un texto y reemplaza todas las vocales de este texto por símbolos (a=@, e=#, i=$, o=%, u=&)*/

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese un texto cualquiera", (text) => {

    const replacedVowels = text
                            .replaceAll("a", "@")
                            .replaceAll("e", "#")
                            .replaceAll("i", "$")
                            .replaceAll("o", "%")
                            .replaceAll("u", "&")

    console.log(replacedVowels)

    rl.close()
})