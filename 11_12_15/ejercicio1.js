import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese nn numero del 1 al 3 ", (num) => {
  let numero = Number(num);

  switch (numero) {
    case 1:
      console.log("Numero 1");
      break;

    case 2:
      console.log("Numero 2");
      break;
    case 3:
      console.log("Numero 3");
      break;
    default:
      break;
  }
});
