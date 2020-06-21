const imagenPrincipal = document.getElementById("imagen-principal");
const imagenes = document.querySelectorAll(`[data-imagen]`);

Array.from(imagenes).forEach(imagen => {
  let imagenUrl = imagen.getAttribute("src");

  imagen.addEventListener("click", () => {
    imagenPrincipal.setAttribute("src", imagenUrl);
    seleccionarImagen(imagen);
  }); 
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

const definirEstadoDetalles = () => {
  if ($contenedorDetalles.style.maxHeight === "0px") {
    $contenedorDetalles.style.maxHeight = alturaMaximaDetalles;
  } else {
    $contenedorDetalles.style.maxHeight = "0px";
  }
};

$botonDetalles.addEventListener("click", definirEstadoDetalles, false);