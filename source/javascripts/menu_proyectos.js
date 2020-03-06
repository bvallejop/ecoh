const $botonCerrarMenuProyectos = document.getElementById("boton-cerrar-menu-proyectos");
const $botonAbrirMenuProyectos = document.getElementById("boton-menu-proyectos");
const $menuProyectos = document.getElementById("menu-proyectos");
const $body = document.getElementsByTagName("body")[0];

$botonCerrarMenuProyectos.addEventListener("click", () => {
  $body.removeAttribute("style");
  toggleClassOnElement($menuProyectos, ["t-ty-0px", "t-ty--100pt"]);
});

$botonAbrirMenuProyectos.addEventListener("click", () => {
  $body.style = "overflow-y: hidden;";
  toggleClassOnElement($menuProyectos, ["t-ty-0px", "t-ty--100pt"]);
});

function toggleClassOnElement($element, classes) {
  classes.forEach(function(className) {
    $element.classList.toggle(className);
  });
}