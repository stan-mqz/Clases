// 3. Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const temperaturas = []

rl.question("Ingresa la temperatura del primer dia ", (dia1) => {
    temperaturas[0] = parseFloat(dia1)
    rl.question("Ingresa la temperatura del segundo dia ", (dia2) => {
        temperaturas[1] = parseFloat(dia2)
        rl.question("Ingresa la temperatura del tercer dia", (dia3) => {
            temperaturas[2] = parseFloat(dia3)

            let max = Math.max(temperaturas[0], temperaturas[1], temperaturas[2])

            console.log(max)
            rl.close()
        })
    })
})