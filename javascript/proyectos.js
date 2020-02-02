const detalles = document.querySelectorAll("[data-detalle]");
const $contenedorDetalles = document.getElementById("contenido-detalles");
const $botonDetalles = document.getElementById("boton-detalles");
let alturaMaximaDetalles = `${$contenedorDetalles.clientHeight}px`;

$contenedorDetalles.style.maxHeight = "0px";

$botonDetalles.addEventListener("click", () => {
  if ($contenedorDetalles.style.maxHeight !== alturaMaximaDetalles) {
    $contenedorDetalles.style.maxHeight = alturaMaximaDetalles;
  } else {
    $contenedorDetalles.style.maxHeight = "0px";
  }
});

window.addEventListener("resize", calculaAlturaDeDetalles);

function calculaAlturaDeDetalles() {
  let nuevaAltura = 0;
  Array.from(detalles).forEach(($elemento) => {
    nuevaAltura += $elemento.clientHeight;
  });

  alturaMaximaDetalles = `${nuevaAltura}px`;
};