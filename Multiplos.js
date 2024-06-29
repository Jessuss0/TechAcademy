const number = 20;

//Primer version
// const mostrarMultiplos = (number) => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % number === 0) {
//       console.log(i);
//     }
//   }
// };

const mostrarMultiplos = (numero) => {
  for (let i = numero; i <= 100; i += numero) {
    console.log(i);
  }
};

mostrarMultiplos(number);
