//**********************************STRINGS**********************************

/*
2A Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

/*
var nombre = "santiagogigli";
var result = nombre.toUpperCase();
console.log(result);
*/

/*
2B Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los primeros 5 caracteres guardando el
resultado en una nueva variable (utilizar substring).
*/

/*
var nombre = "santiagogigli";
var result = nombre.substring(0,5);
console.log(result);
*/

/*
2C Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres guardando
el resultado en una nueva variable (utilizar substring).
*/

/*
var nombre = "santiagogigli";
var result = nombre.substring(10,13);
console.log(result);
*/

/*
2D Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con la primera letra en mayúscula y las
demás en minúscula. Guardar el resultado en una nueva variable (utilizar
substring, toUpperCase, toLowerCase y el operador +).
*/

/*
var nombre = "santiagogigli";
var sub = nombre.substring(0,1);
var sub2 = nombre.substring(1,13);
var upper = sub.toUpperCase();
var lower = sub2.toLowerCase();
var result = upper + lower;
console.log(result);
*/

/*
2E Crear una variable de tipo string con al menos 10 caracteres
y algún espacio en blanco. Encontrar la posición del primer espacio
en blanco y guardarla en una variable (utilizar indexOf).
*/

/*
var nombre = "santiago gigli";
var firstBlank = nombre.indexOf(" ", 0);
console.log(firstBlank);
*/

/*
2F Crear una variable de tipo string con al menos
2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).
*/

/*
var largeString = "astronauta cosmico";
//First String
var firstBlank = largeString.indexOf(" ", 0);
var sub1 = largeString.substring(0,1);
var upper1 = sub1.toUpperCase();
var subRemains = largeString.substring(1, firstBlank);
subRemains.toLowerCase();
//Second String
var secondString = largeString.substring(firstBlank);
var sub2 = secondString.substring(0,2);
var upper2 = sub2.toUpperCase();
var subRemains2 = secondString.substring(2);
subRemains2.toLowerCase();
var result = upper1 + subRemains + " " + upper2 + subRemains2;
console.log(result);
*/