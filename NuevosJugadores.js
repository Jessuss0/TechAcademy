class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getDetalles() {
    console.log(
      `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`
    );
  }
}

class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }

  getDetalles() {
    console.log(
      `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Posición: ${this.posicion}`
    );
  }
}

class Entrenador extends Persona {
  constructor(nombre, apellido, edad, añosExperiencia, idFederacion = null) {
    super(nombre, apellido, edad);
    this.añosExperiencia = añosExperiencia;
    this.idFederacion =
      idFederacion || Math.floor(Math.random() * 90000) + 10000;
  }

  getDetalles() {
    console.log(
      `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Años de experiencia: ${this.añosExperiencia}, ID de Federación: ${this.idFederacion}`
    );
  }
}

class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }

  getDetalles() {
    console.log("Entrenador:");
    this.entrenador.getDetalles();
    console.log("Jugadores:");
    this.jugadores.forEach((jugador) => jugador.getDetalles());
  }
}

//tests:
const jugadores = [
  new Jugador("Emiliano", "Martinez", 31, "Portero"),
  new Jugador("Gonzalo", "Montiel", 24, "Defensa"),
  new Jugador("Lionel", "Messi", 35, "Medio"),
  new Jugador("Lautaro", "Martinez", 28, "Delantero"),
];

const entrenador = new Entrenador("Lionel", "Scaloni", 45, 4);

const equipo = new Equipo(entrenador, jugadores);

equipo.getDetalles();
