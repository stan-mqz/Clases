import readline from 'readline'

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

rl.question('Digita la primera palabra: ', (p1) => {
   rl.question('Digita la seguda palabra: ', (p2) => {
    console.log(`${p1} ${p2}`)
    rl.close()
   })
})


