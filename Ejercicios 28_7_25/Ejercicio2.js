import readline from 'readline'

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

rl.question('¿Cual es tu color favorito?', (color) => {
    console.log(`Tu color favorito es: ${color}`)
    rl.close()
})

