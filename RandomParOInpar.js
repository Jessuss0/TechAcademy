const esParOImpar = (number) => {
  return number % 2 === 0
    ? `${number} // el número es par`
    : `${number} // el número es impar`;
};

const generarAleatorios = () => {
  let i = 0;
  let result = [];

  while (i < 5) {
    let number = Math.floor(Math.random() * 100);
    i++;
    result.push(esParOImpar(number));
    console.log(esParOImpar(number))
  }
  return result;
};

generarAleatorios();
