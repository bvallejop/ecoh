# Galería interactiva de proyectos
### Objetivo
Hacer que las tres imágenes pequeñas sean interactivas.
### Tareas
* [ ] Crear un nuevo archivo, `proyectos-galeria.js`, dentro de `static/javascript`
* [ ] Agregar un `script` a `proyectos.html`
* [ ] Hacer click sobre una de las 3 imágenes muestra la imágen en el área de la imágen principal
* [ ] Hacer que la primer imágen esté seleccionada cuando se carge la página
* [ ] Distinguir visualmente las imágenes que no están seleccionadas
      PISTA: Puedes mostrar las imágenes no seleccionadas mas tenues (`opacity: 0.5`)
### Pistas
* Agrega `id`s diferentes en `proyectos.html` a los elementos que tienen que ser interactivos
* Usa variables en `proyectos-galeria.js` para guardar referencia de los elementos interactivos
```
var imagen1 = document.getElementById("el-nombre-de-tu-id");
```
* Agrega `.addEventListener(...)` a cada elemento interactivo
```
imagen1.addEventListener("click", function() {
  // Agregar código de interacción
});
```
* Para mostrar una imágen nueva en el área principal, cambiar el `src` de la imágen principal por el `src` de la imágen seleccionada
* Para distinguir visualmente las imágenes que no está seleccionadas, alternar propiedad de `opacity` en las imágenes no selecionadas