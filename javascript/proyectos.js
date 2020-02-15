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