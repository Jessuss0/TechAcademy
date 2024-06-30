//Primer Version.

// const caractAMayus = (caracteres) => {
//   let array = caracteres.split(".");
//   let UpperCaracter = array[0].toUpperCase();
//   array.shift();
//   array.unshift(UpperCaracter);
//   console.log("Entrada:", caracteres);
//   console.log("Salida:", array.join("."));
// };

const caractAMayus = (caracteres) => {
  let array = caracteres.split(".");

  array[0] = array[0].toUpperCase();

  console.log("Entrada:", caracteres);
  console.log("Salida:", array.join("."));
};

caractAMayus("www.techacademy.com");
