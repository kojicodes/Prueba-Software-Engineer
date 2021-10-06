# Prueba-Software-Engineer

## Ejercicio 1: Instrucciones y comentarios.

### Variables
- list --> *lista final*
- lim_row --> *limite de las filas.*
- lim_col --> *guia para las columnas.*
- dir --> *valor de direccion en el recorrido ( 0 = derecha, 1= abajo, 2 = izquierda, 3 = arriba)*
- size --> *tamaño total del arreglo bidimensional.*
- iter --> *iterador del ciclo.*
- row --> *identificador de filas.*
- col --> *identificador de columnas.*

### Metodo principal
1. Iniciamos la lectura de los valores desde 0,0 hacia la derecha.
2. Insertamos los valores en la lista en el orden de la direccion correspondiente.
3. Cuando se llega al final de cada fila o columna, cambia la direccion de lectura y se reduce el espacio de la fila o columna siguiente.

## Ejercicio 2: Diagramas y diseños para la arquitectura del nuevo sistema.

En la carpeta "Exercise2" viene dentro una imagen de alta resolucion la cual muestra el maquetado del diseño de las vistas web del sistema, ademas de un diagrama relacional de cada una de las entidades de la base de datos propuesta.

En cuanto al servidor, la propuesta seria hacer una arquitectura de 4 niveles, teniendo en cuenta los modelos, vistas, controladores e infraestructura de base de datos.

## Ejercicio 3: Sistema para gestionar el inventario de libros de una libreria

Se utilizo postman como software para realizar las diferentes consultas dentro del sistema, ademas de la utilizacion del modulo "nodemon" para el monitoreo en tiempo real del servidor.
- Para correr el servidor se utiliza el commando: "npm run dev" dentro de la carpeta raiz del proyecto "/Exercise3".

Se implemento "Vue" para para renderizar las vistas del cliente, esto junto con Axios, para el manejo de las peticiones HTML.
- Para correr el cliente se utiliza el comando: "npm run serve" dentro de la carpeta raiz del proyecto "/Exercise3".



### COMENTARIOS

Realmente tengo poca experiencia desarrollando la seccion de front-end, por lo que el desarrollo de las vistas con Vue y su implementacion no estan totalmente completas, dicho esto, estuve investigando y aprendiendo por mi cuenta como hacer esta implementacion pero por el tiempo no pude finalizarlo como me gustaria, pero es uy interesante y me gustaria poder aprenderlo mejor.
