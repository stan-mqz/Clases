const numeros = [10,20,30,40,50]

const meses = new Array('Enero', 'Febrero', 'Marzo')

const deTodo = ['Hola,', 10, null, true, {nombre: 'Stan', edad: 19}]
console.log(deTodo)

numeros[1] = 88

numeros.splice(2,0,100)
console.log(numeros)

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let primer = dias[0]
let ultimo = dias[dias.length -1]
console.log(ultimo)