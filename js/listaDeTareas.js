/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.*/

import { GenerarCodigo } from "./helper.js";

let listadoTareas = JSON.parse(localStorage.getItem("tareas")) || [];

let formulario = document.getElementById("formulario");
let inpCodigo = document.getElementById("codigo");
inpCodigo.value = GenerarCodigo();
let inpNombre = document.getElementById("nombre");
let inpPrioridad = document.getElementById("prioridad");
let inpTiempo = document.getElementById("tiempo");
let inpDescricion = document.getElementById("descripcion");
let tablaTareas = document.getElementById("tablaTareas");

MostrarTareas();
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nuevaTarea = {
    codigo: inpCodigo.value,
    nombre: inpNombre.value,
    prioridad: inpPrioridad.value,
    tiempo: inpTiempo.value,
    descripcion: inpDescricion.value,
  };
  listadoTareas.push(nuevaTarea);
  GuardarLS();
  LimpiarFormulario();
  inpCodigo.value = GenerarCodigo();
  MostrarTareas();
});

function GuardarLS() {
  localStorage.setItem("tareas", JSON.stringify(listadoTareas));
}

function LimpiarFormulario() {
  formulario.reset();
}

function MostrarTareas() {
  tablaTareas.innerHTML = ``;
  listadoTareas.forEach((tarea) => {
    tablaTareas.innerHTML += `
    <tr>
        <td>${tarea.codigo}</td>
        <td>${tarea.nombre}</td>
        <td>${tarea.prioridad}</td>
        <td>${tarea.tiempo}</td>
        <td>${tarea.descripcion}</td>
        <td><button type="button" onclick="EliminarTarea(
          '${tarea.codigo}'
        )">Eliminar</button></td>
    </tr>
  `;
  });
}
window.EliminarTarea = function (cod) {
  const nuevoListado = listadoTareas.filter(
    (tareaEliminada) => tareaEliminada.codigo !== cod
  );

  listadoTareas = nuevoListado;
  GuardarLS();

  MostrarTareas();
};
