const imagenPrincipal = document.getElementById("imagen-principal");
const imagen1 = document.getElementById("imagen-1");
const imagen1Url = imagen1.getAttribute("src");
const imagen2 = document.getElementById("imagen-2");
const imagen2Url = imagen2.getAttribute("src");
const imagen3 = document.getElementById("imagen-3");
const imagen3Url = imagen3.getAttribute("src");
const imagen4 = document.getElementById("imagen-4");
const imagen4Url = imagen4.getAttribute("src");
const imagen5 = document.getElementById("imagen-5");
const imagen5Url = imagen5.getAttribute("src");
const imagen6 = document.getElementById("imagen-6");
const imagen6Url = imagen6.getAttribute("src");
const imagen7 = document.getElementById("imagen-7");
const imagen7Url = imagen7.getAttribute("src");
const imagen8 = document.getElementById("imagen-8");
const imagen8Url = imagen8.getAttribute("src");

imagen1.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen1Url);
  seleccionarImagen(imagen1);
});

imagen2.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen2Url);
  seleccionarImagen(imagen2);
});

imagen3.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen3Url);
  seleccionarImagen(imagen3);
});

imagen4.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen4Url);
  seleccionarImagen(imagen4);
});

imagen5.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen5Url);
  seleccionarImagen(imagen5);
});

imagen6.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen6Url);
  seleccionarImagen(imagen6);
});

imagen7.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen7Url);
  seleccionarImagen(imagen7);
});

imagen8.addEventListener("click", function() {
  imagenPrincipal.setAttribute("src", imagen8Url);
  seleccionarImagen(imagen8);
});

const seleccionarImagen = (imagen) => {
  const imagenSeleccionada = document.getElementsByClassName("o-100pt-l")[0];
  imagenSeleccionada.classList.remove("o-100pt-l");
  imagenSeleccionada.classList.add("o-35pt-l");

  imagen.classList.remove("o-35pt-l");
  imagen.classList.add("o-100pt-l");
}

const detalles = document.querySelectorAll("[data-detalle]");
const $contenedorDetalles = document.getElementById("contenido-detalles");
const $botonDetalles = document.getElementById("boton-detalles");
var alturaMaximaDetalles = `${$contenedorDetalles.clientHeight}px`;

$contenedorDetalles.style.maxHeight = "0px";

$botonDetalles.addEventListener("click", () => {
  if ($contenedorDetalles.style.maxHeight !== alturaMaximaDetalles) {
    $contenedorDetalles.style.maxHeight = alturaMaximaDetalles;
  } else {
    $contenedorDetalles.style.maxHeight = "0px";
  }
});

window.addEventListener("resize", function() {
  alturaMaximaDetalles = `${$contenedorDetalles.clientHeight}px`;
});