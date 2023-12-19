/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
let numeroMagico = undefined;
let numeroIngresado = document.getElementById("numero");
handlerOnClick = () => {
  numeroMagico = Math.floor(Math.random() * (10 - 1) + 1);
  alert("Se genero un número mágico, intenta adivinarlo.");
};

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(numeroIngresado.value, numeroMagico);
  if (numeroIngresado.value == numeroMagico) {
    alert("Adivinaste el número mágico, GANASTE");
  } else {
    if (numeroIngresado.value > numeroMagico) {
      alert("El número ingresado es mayor que el número mágico.");
    } else {
      alert("El número ingresado es menor que el número mágico.");
    }
  }
});
