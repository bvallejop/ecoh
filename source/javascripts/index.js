const $galeriaImagenes = document.getElementById("galeria-imagenes");
const $botonImagenPrevia = document.getElementById("boton-imagen-previa");
const $botonImagenProxima = document.getElementById("boton-imagen-proxima");

const numeroDeImagenesEnGaleria = $galeriaImagenes.children.length;
var indiceDeImagenPrevia = null;
var indiceDeImagenActual = 0;
var idDeIntervalo = null;
var TIEMPO_ENTRE_INTERVALOS = 4000;

const cambiarImagen = (direccion) => {
  indiceDeImagenPrevia = indiceDeImagenActual;
  indiceDeImagenActual = calcularIndice(direccion);
  actualizarClases();
};

const calcularIndice = (direccion) => {
  if (direccion === "previa") {
    if (indiceDeImagenActual === 0) return numeroDeImagenesEnGaleria - 1;
    return indiceDeImagenActual - 1;
  } else {
    if (indiceDeImagenActual === numeroDeImagenesEnGaleria - 1) return 0;
    return indiceDeImagenActual + 1;
  }
};

const actualizarClases = () => {
  $galeriaImagenes.children[indiceDeImagenPrevia].classList.add("o-0");
  $galeriaImagenes.children[indiceDeImagenPrevia].classList.remove("o-1");
  $galeriaImagenes.children[indiceDeImagenActual].classList.add("o-1");
  $galeriaImagenes.children[indiceDeImagenActual].classList.remove("o-0");
};

const crearNuevoIntervalo = () => {
  idDeIntervalo = setInterval(() => {
    cambiarImagen("proxima");
  }, TIEMPO_ENTRE_INTERVALOS);
};

$botonImagenPrevia.addEventListener("click", () => {
  clearInterval(idDeIntervalo);
  cambiarImagen("previa");
  crearNuevoIntervalo();
});
$botonImagenProxima.addEventListener("click", () => {
  clearInterval(idDeIntervalo);
  cambiarImagen("proxima");
  crearNuevoIntervalo();
});

crearNuevoIntervalo();