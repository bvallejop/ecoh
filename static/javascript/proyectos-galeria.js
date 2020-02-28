var imagen1 = document.getElementById("imagen1");
var imagen2 = document.getElementById("imagen2");
var imagen2src = imagen2.getAttribute("src");
var imagen3 = document.getElementById("imagen3");
var imagen3src = imagen3.getAttribute("src");
var imagen4 = document.getElementById("imagen4");
var imagen4src = imagen4.getAttribute("src");
var imagen5 = document.getElementById("imagen5");
var imagen5src = imagen5.getAttribute("src");


imagen2.addEventListener("click", function() {
    imagen1.setAttribute("src", imagen2src );
});

imagen3.addEventListener("click", function() {
    imagen1.setAttribute("src", imagen3src );
});

imagen4.addEventListener("click", function() {
    imagen1.setAttribute("src", imagen4src );
});

imagen5.addEventListener("click", function() {
    imagen1.setAttribute("src", imagen5src );
});
