/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/

class Persona {
  constructor(nombreI, edadI, dniI, sexoI, pesoI, alturaI, anioNacimientoI) {
    this.nombre = nombreI;
    this.edad = edadI;
    this.dni = dniI;
    this.sexo = sexoI;
    this.peso = pesoI;
    this.altura = alturaI;
    this.anioNacimiento = anioNacimientoI;
  }
  mostrarGeneracion() {
    if (1994 <= this.anioNacimiento && this.anioNacimiento <= 2010) {
      return "Pertenece a la generación Z y el rasgo caracteristico de al generacion es la Irreverencia";
    }
    if (1981 <= this.anioNacimiento && this.anioNacimiento <= 1993) {
      return "Pertenece a la generación Y y el rasgo caracteristico de al generacion es la Frustración";
    }
    if (1969 <= this.anioNacimiento && this.anioNacimiento <= 1980) {
      return;
      ("Pertenece a la generación X y el rasgo caracteristico de al generacion es la Obsesión por el Éxito");
    }
    if (1949 <= this.anioNacimiento && this.anioNacimiento <= 1968) {
      return;
      ("Pertenece a la generación Baby Boom y el rasgo caracteristico de al generacion es la Ambición");
    }
    if (1930 <= this.anioNacimiento && this.anioNacimiento <= 1948) {
      return "Pertenece a la generación Silent Generation y el rasgo caracteristico de al generacion es la Austeridad";
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      return "Eres mayor de edad;";
    }
  }
  mostrarDatos() {
    return `Nombre y Apellido: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura} y Año de Nacimiento: ${this.anioNacimiento}`;
  }
}

let listaPersonas = JSON.parse(localStorage.getItem("personas")) || [];

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let dni = document.getElementById("dni");
let sexo = document.getElementById("sexo");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let anioNacimiento = document.getElementById("anio");
let formulario = document.getElementById("formulario");
let tbody = document.querySelector("tbody");
let modal = document.getElementById("modal");
mostrarInfo();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const persona = new Persona(
    nombre.value,
    edad.value,
    dni.value,
    sexo.value,
    peso.value,
    altura.value,
    anioNacimiento.value
  );

  listaPersonas.push(persona);

  guardarLS();
  //mostrarInfo();
});

function guardarLS() {
  formulario.reset();
  localStorage.setItem("personas", JSON.stringify(listaPersonas));
}

function mostrarInfo() {
  tbody.innerHTML = ``;

  listaPersonas.forEach((element) => {
    tbody.innerHTML += `<tr>
                <td>${element.nombre}</td>
                <td><button type="button" onclick="${
                  element.mostrarGeneracion
                }" >Mostrar</button></td>
                <td><button type="button" onclick="${
                  element.esMayorDeEdad
                }">Mostrar</button></td>
                <td><button type="button" data-bs-target="#exampleModal"  data-bs-toggle="modal" onclick="${mostarModal(
                  element
                )}">Mostrar</button></td>
              </tr>`;
  });
}

function mostarModal(element) {
  const nPersona = new Persona(
    element.nombre,
    element.edad,
    element.dni,
    element.sexo,
    element.peso,
    element.altura,
    element.anioNacimiento
  );
  console.log(nPersona);
  modal.innerHTML = `
    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Información de la Persona</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${nPersona.mostrarDatos()}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
  </div>
  `;
}
