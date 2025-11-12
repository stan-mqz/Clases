const mostrarSaludo = () => {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo;

  if (hora >= 6 && hora <= 11) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora <= 17) {
    saludo = "Buenas tardes";
  } else if (hora >= 18 && hora <= 23) {
    saludo = "Buenas noches";
  } else {
    saludo = "A dormir";
  }

  console.log(`${saludo}. Son las ${hora}:${fecha.getMinutes()}`);
};

mostrarSaludo();