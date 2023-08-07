// Import stylesheets
import './style.css';

//Variables globales
let num1 = 0;
let num2 = 0;
let num3 = 0;
let numeroMayor = 0;

//Procesos Generales
document.getElementById('c').addEventListener('click', onInit);

/**
 * Función para inicializar proceso principal
 *
 * @return {void}
 */
function onInit(e) {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
  num3 = document.getElementById('num3').value;
  numeroMayor = Math.max(num1, num2, num3);
  setAlert();
}

/**
 * Función para mostrar etiqueta con el año, mes y días correspondientes
 *
 * @return {void}
 */
function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <p>EL número mayor es:
    <span class="badge text-bg-success">${numeroMayor}</span>
  </p>
  `;
}
