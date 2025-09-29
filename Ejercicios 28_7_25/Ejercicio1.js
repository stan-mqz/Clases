import readline from 'readline'

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

rl.question('En que ciudad vives?', (ciudad) => {
    console.log(`Vives en: ${ciudad}`)
    rl.close()
})

