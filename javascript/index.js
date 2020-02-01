const $detalles = document.getElementById("contenido-detalles");
const $botonDetalles = document.getElementById("boton-detalles");
const alturaMaximaDetalles = `${$detalles.offsetHeight}px`;

$detalles.style.maxHeight = "0px";

$botonDetalles.addEventListener("click", function(){
  if ($detalles.style.maxHeight !== alturaMaximaDetalles) {
    $detalles.style.maxHeight = alturaMaximaDetalles;
  } else {
    $detalles.style.maxHeight = "0px";
  }
});