import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const frutas = ["manzana", "banana", "naranja", "fresas"];

const precioFrutas = (fruta) => {
  let precio;

  switch (fruta) {
    case "manzana":
      precio = 0.75;
      break;

    case "banana":
      precio = 0.5;
      break;

    case "fresas":
      precio = 1.2;
      break;

    default:
      precio = 0;
      break;
  }

  return precio;
};

rl.question("Ingrese el nombre de una fruta ", (fruta) => {
  const precio = precioFrutas(fruta);

  if (frutas.includes(fruta.toLocaleLowerCase())) {
    console.log(`El precio de ${fruta} es ${precio.toFixed(2)}`);
  }else {
    console.log('Fruta no valida')
  }

  rl.close()
});
