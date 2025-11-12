import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calcularPrecio = (edad) => {
  if (edad < 0 || isNaN(edad)) {
    return null;
  }

  if (edad < 12) {
    return 3.0;
  } else if (edad >= 12 && edad <= 59) {
    return 5.0;
  } else {
    return 2.5;
  }
};

rl.question("Ingrese su edad: ", (edad) => {
  const edadNum = parseInt(edad);
  const precio = calcularPrecio(edadNum);

  if (precio === null) {
    console.log("Error: Edad no válida. Por favor ingrese un número positivo.");
  } else {
    console.log(`El precio de su entrada es: $${precio.toFixed(2)}`);
  }

  rl.close();
});