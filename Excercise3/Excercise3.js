//**********************************ARRAYS**********************************

/*
3A Dado el siguiente array: ["Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
*/

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4],array[10]);
*/

//3B Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.sort();
console.log(array)
*/

//3C Agregar un elemento al principio y al final del array (utilizar unshift y push).


/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.unshift("Domingo");
array.push("Nuevo");
console.log(array);
*/

//3D Quitar un elemento del principio y del final del array (utilizar shift y pop).


/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.shift();
array.pop();
console.log(array);
*/

//3E Invertir el orden del array (utilizar reverse)

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.reverse();
console.log(array);
*/

/*
3F Unir todos los elementos del array en un único string donde cada mes
este separado por un guión - (utilizar join).
*/

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArray = array.join(" - ");
console.log(newArray);
*/

//3G Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).


/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArray = array.slice(4,11);
console.log(newArray);
*/