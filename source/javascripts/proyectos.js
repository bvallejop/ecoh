const imagenPrincipal = document.getElementById("imagen-principal");
const imagenesGaleria = document.getElementsByClassName("js-imagen-galeria");

for (var i = 0; i < imagenesGaleria.length; i++) {
  let imagenUrl = imagenesGaleria[i].getAttribute("src");

  imagenesGaleria[i].addEventListener("click", () => {
    imagenPrincipal.setAttribute("src", imagenUrl);
    seleccionarImagen(imagenesGaleria[i]);
  });
}

const seleccionarImagen = (imagen) => {
  const imagenSeleccionada = document.getElementsByClassName("o-100pt-l")[0];
  
  imagenSeleccionada.classList.remove("o-100pt-l");
  imagenSeleccionada.classList.add("o-35pt-l");

  // imagen.classList.remove("o-35pt-l");
  // imagen.classList.add("o-100pt-l");
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