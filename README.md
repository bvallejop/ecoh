# Ecoh - Sitio web
Este sitio utiliza [Middleman](https://middlemanapp.com/) y [Contentful](https://www.contentful.com/) para generar el sitio con contenido editable.

---

### Instrucciones de instalación
1. Si no tienes middleman instalado, [instalar middleman](https://middlemanapp.com/basics/install/)
2. Clonar proyecto
3. `cd` al proyecto y `bundle install` (Si tienes problems con permisos o tu versión de bundler, leer sección de "Problems comúnes")
4. Crear `.env` en la raíz del proyecto
5. Agregar variables a `.env`. Los valores de `SPACE_ID` y `ACCESS_TOKEN` debe ser el puro texto sin `""`. Por ejemplo:
  ```
  SPACE_ID=12345
  ACCESS_TOKEN=67890
  ```
Reemplazar `12345`/`67890` con los valores reales. Puedes encontrar los valores en Contentful > Settings > API Keys > Sitio Web y agregar las claves de "Space ID" y de "Content Delivery API - access token".
6. Agregar `.env` en `.gitignore`. Si no tienes un archivo de `.gitignore`, favor crear uno y agregar el contendio siguiente:
  ```
  .bundle
  .cache
  .DS_Store
  .sass-cache
  build/
  data/
  .env
  ```
7. Correr `bundle exec middleman contentful`
8. Checa tu proyecto en tu editor de texto y debes encontrar un folder nuevo de `data` que contiene todos los datos de Contentful

---

### Problems comúnes
Si tu versión de bundler no es compatible y no tienes permiso de actualizar tu bundler, sigue los siguientes pasos para instalar [`rbenv`](https://github.com/rbenv/rbenv)
1. `cd` e ir a la raíz de tu directorio
2. `ls -la` y buscar `.bash_profile`
3. Si no existe `.bash_profile`, crearlo con `touch .bash_profile`
4. Abrir `.bash_profile` con Visual Studio Code, `code .bash_profile`
5. Agregar `eval "$(rbenv init -)"` a `.bash_profile` y guardar cambios
6. Regresar a proyecto de `ecoh` y correr `bundle install`