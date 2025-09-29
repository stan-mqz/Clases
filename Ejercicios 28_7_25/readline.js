//Importrar el módulo
import readline from 'readline'
//Creamos una interfaz
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

rl.question('¿Como te llamas?', (name) => {
    console.log(`Hola ${name}`)
    rl.close()
})

