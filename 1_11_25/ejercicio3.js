
/*
Calcular el descuento según el monto de compra: solicite el monto de la compra y aplique un descuento:

Mayor o igual a 100 -> 10%
Entre 50 y 99 -> 5%
Menor a 50 -> sin descuento

*/


import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let des
let finalPrice

const discount = (amount) => {


    if (amount >= 100) {
        des = 0.10
        finalPrice = amount - (amount * des)
        console.log(finalPrice)

    } else if (amount >= 50) {
        des = 0.5
        finalPrice = amount - (amount * des)
        console.log(finalPrice)
    } else {
        finalPrice = amount - (amount * des)
        console.log(finalPrice)
    }

}

rl.question('Ingrese su monto de compra ', (amount) => {
        discount(amount)
})
