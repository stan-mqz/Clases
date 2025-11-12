import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calcularCosto = (horas) => {
  if (horas < 0 || isNaN(horas)) {
    return null;
  }

  if (horas === 1) {
    return 2;
  } else if (horas >= 2 && horas <= 4) {
    return 5;
  } else {
    return 10;
  }
};

rl.question("¿Cuántas horas estuvo estacionado? ", (horas) => {
  const horasNum = parseFloat(horas);
  const costo = calcularCosto(horasNum);

  if (costo === null) {
    console.log("Error: Número de horas no válido. Por favor ingrese un número positivo.");
  } else {
    console.log(`Total a pagar: $${costo}`);
  }

  rl.close();
});