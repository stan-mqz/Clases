/*Solicita un nombre completo de usuario, muestra en consola los primeros 5 caracteres de ese nombre, sin espacios, en minúscula y agrega @gmail.com al final para crear una dirección de correo con ese nombre de usuario.  */

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese su nombre completo ', (name) => {

    const firstCharacters = name.substring(0,5)
    const formatedName = firstCharacters.trim().replaceAll(" ", "").toLocaleLowerCase()
    const emailName = formatedName.concat("@gmail.com")

   
    console.log(emailName)

    rl.close()

})
