const repeticionDeCaracter = (string, caracter) => {
  let counter = 0;
  let lowerCaseCaracter = caracter.toLowerCase();
  let array = string.toLowerCase().split("");

  array.map((e) => {
    if (e == lowerCaseCaracter) {
      counter++;
    }
  });
  console.log(`el carácter “${caracter}” se repite ${counter} veces en
“${string}”`);
};

repeticionDeCaracter("Hola como estas", "o");
