# ensayo2joserubencerrada
## 18 julio 2020  Hora inicio 10:00 Hora final: 17:00

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Enunciado:
Una empresa de dibujos animados, solicita realizar una página web en donde
sus usuarios puedan interactuar con los personajes de The Rick and Morty, por
ende, pondrá a disposición de sus lectores una aplicación web responsiva (1) para
que los usuarios acceden a la lista de personajes de la serie animada de TV (2) .En
la vista principal, los usuarios podrán ver los personajes de la serie en conjunto,
igualmente en la vista principal, los usuarios podrán acceder a dos opciones, las
cuales se muestran en ventanas emergentes. la primera opción es para realizar
una opinión sobre el personaje, por ende, en la ventana emergente el usuario
podrá agregar su nombre y opinión, luego decidir si guardar la información
suministrada (debe existir información para poder guardar), o cerrar la ventana.
En el caso que guarde la información, automáticamente se debe redirigir a la
vista de opiniones para mostrar las opiniones que estén disponibles o
guardadas. La segunda opción es un botón de “ver mas”, donde se mostrará
información más completa del personaje (estatus, especie, ubicación, entre
otros), luego podrá cerrar la ventana y volver a la página inicial o agregar a
favoritos (si agrega a favoritos se debe redirigir automáticamente a la vista de
favoritos). En la vista de favoritos se mostrarán los elementos que estén
agregados como favoritos, igualmente se podrán eliminar de la lista (no hace
falta redireccionar a ninguna otra vista). En la vista de opinión se mostrarán las
opiniones que cualquier usuario haya realizado (utiliza Collapse de bootstrap
para mostrar las opiniones). En la vista de administración, debe existir una tabla
con los datos solicitados (opinión, autor, personaje), con dos opciones
disponibles mediante botones (eliminar y editar). La opción de eliminar debe
hacerse con una ventana modal para ejecutar un alerta y el usuario confirme,
mientras que la opción de editar, debe llevar al usuario a una vista separada,
permitiendo modificar el comentario y el nombre del usuario. Esta vista de editar
debe tener dos opciones, una de regresar y otra de guardar, ambas, al
ejecutarse deben dirigir al usuario a la vista de administración.
El diseño de la vista principal podría ser:
Venta modal para opinar:
Venta modal para ver más:
Vista de favoritos con datos existentes:
Vista de favoritos con sin datos existentes:
Vista de opiniones con datos existentes:
Vista de opiniones con sin datos existentes:
Vista de administración con datos existentes:
Vista de administración sin datos existentes:
Vista para editar las opiniones
● Se solicita una vista principal (“/”) con una grilla de cards usando Bootstrap
● La API a utilizar es la de The Rick and Morty API ( documentación aquí ),
pero la dirección exacta con la que deben trabajar es:
https://rickandmortyapi.com/api/character/ . No requiere registrarse y/o
solicitar API_KEY.
● En las vistas de Favoritos y Opiniones, si no existe ningún valor para
mostrar, debe aparecer el mensaje indicando la situación, tal cual como se
muestra en las maquetas.
● La vista de administración debe ser una tabla responsiva con los botones
para editar y eliminar.
● El botón de gustar solo estará en la vista principal dentro de la ventana
modal “ver más” y debe cambiar el color de fondo de la tarjeta en al vista
principal.
Nº Casos de uso
1 Crea un proyecto con Vue Cli
2 Instalar y configurar bootstrap, popper, axios, jquery, sass, bootstrap-vue...
3 Personalizar las variables de bootstrap
4 Agregar los metatags en el index.html de la carpeta public
5
Crear componente de navegación utilizando bootstrap con acceso a un panel de
administración y a la vista principal de personajes
6
Configurar el Vuex con datos de personajes iniciales en el estado (state) con una
variable (arreglo) que contenga: nombre del personaje, url a imagen, entre otros.
7
Crear vista de index de personajes mostrando cada uno de ellos en cards de bootstrap
mediante la utilización de propiedades computadas con los getters del Vuex
8 Configurar ruta de inicio a index de los personajes
9 Configurar ruta 404
10 Crear una ruta para un panel de administración
11
Crear la vista del panel de administración con una tabla con las opiniones, nombre del
personaje, nombre del usuario creador, comentario, botón de borrar, botón de editar.
12
El botón de guardar dentro de la ventana emergente para opinar, debe redireccionar a
la vista de Opiniones, una vez se realice la opinión y se haga un clic en el botón.
13
El formulario para crear una opinión debe tener todos estilos de bootstrap tanto en los
labels, campos y botones
14
Validar que los campos del formulario para agregar una nueva opinión, tenga todos los
campos completos. Igualmente el contenido debe tener más de 20 caracteres y el
nombre debe ser mayor a dos caracteres.
15
Crear un archivo JS de configuración para solicitar la información de la API
https://rickandmortyapi.com/api/character/ mediante el metodo get con axios o fetch, el
cual debe ser exportado como módulo de ES6.
16 Utilizar (importar) el módulo de JS en el ciclo de vida de un componente para traer la
información de la API.
17 Enviar a Vuex mediante acciones la información recibida de la API
18
Mutar la variable (arreglo) creada en el estado (state) con los nuevos datos recibidos
de la API
19 Revisar código e indentar y comentar acorde a buenas prácticas
20
Modificar el color del Hover de la tabla creada mediante el uso de cascada y nesting
con SASS, sobreescribiendo cualquier clase existente de bootstrap respetando las
convenciones BEM.
21
Implementar un filtro (buscador) en la vista donde se muestran todos los personajes
para buscar por nombre de personaje.
22
Agregar un botón el la vista de administración que reinicie la variable (arreglo) creada
en el estado (state) de Vuex a su valor inicial por defecto desde un emit desde la vista
de administración hasta el componente padre, es decir, elimina todos las opiniones
creadas hasta el momento.