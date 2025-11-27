import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//  EJERCICIO 1

rl.question('Ingresa un número para ver su tabla de multiplicar: ', (numero) => {
  const num = parseInt(numero);
  
  console.log(`\nTabla de multiplicar del ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
  
  //EJERCICIO 2: 
  
  console.log('\nNúmeros impares del 1 al 50:');
  for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }
  
  //  EJERCICIO 3
  
  console.log('\nSecuencia del 10 al 100 de 10 en 10:');
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
  
  //  EJERCICIO 4
  
  rl.question('\nIngresa 3 nombres separados por espacio: ', (entrada) => {
    const nombres = entrada.split(' ');
    
    console.log('\nNombres ingresados:');
    for (let i = 0; i < nombres.length; i++) {
      console.log(nombres[i]);
    }
    
    rl.close();
  });
});