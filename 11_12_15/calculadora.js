import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const mostrarMenu = () => {
  console.log("\n=== CALCULADORA ===");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Salir");
};

const solicitarNumeros = (callback) => {
  rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
      callback(parseFloat(num1), parseFloat(num2));
    });
  });
};

const procesarOpcion = (opcion) => {
  switch (opcion) {
    case "1":
      solicitarNumeros((a, b) => {
        console.log(`Resultado: ${sumar(a, b)}`);
        iniciar();
      });
      break;
    case "2":
      solicitarNumeros((a, b) => {
        console.log(`Resultado: ${restar(a, b)}`);
        iniciar();
      });
      break;
    case "3":
      solicitarNumeros((a, b) => {
        console.log(`Resultado: ${multiplicar(a, b)}`);
        iniciar();
      });
      break;
    case "4":
      solicitarNumeros((a, b) => {
        if (b === 0) {
          console.log("Error: No se puede dividir entre cero");
        } else {
          console.log(`Resultado: ${dividir(a, b)}`);
        }
        iniciar();
      });
      break;
    case "5":
      console.log("Saliendo del programa...");
      rl.close();
      break;
    default:
      console.log("Opción no válida");
      iniciar();
      break;
  }
};

const iniciar = () => {
  mostrarMenu();
  rl.question("\nSeleccione una opción: ", (opcion) => {
    procesarOpcion(opcion);
  });
};

iniciar();