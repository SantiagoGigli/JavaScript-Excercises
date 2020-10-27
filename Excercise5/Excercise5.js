//**********************************FOR**********************************

/*
5A Crear un array que contenga 5 palabras y recorrer dicho array
utilizando un bucle for de JavaScript para mostrar una alerta
utilizando cada una de las palabras.
*/

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
for (let index = 0; index < array.length; index++) {
    alert(array[index]);
}
*/

/*
5B Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.
*/

/*
var array =  ["enero", "febrero", "marzo", "abril", "mayo"];
for (let index = 0; index < array.length; index++) {
    var upperWord = array[index].substring(0,1).toUpperCase();
    var remainWord = array[index].substring(1).toLowerCase();
    alert(upperWord + remainWord);
}
*/

/*
5C Crear una variable llamada “sentence” que tenga un string vacío
, luego al array del punto a) recorrerlo con un bucle for para ir guardando
cada palabra dentro de la variable sentence. Al final mostrar una única
alerta con la cadena completa.
*/

/*
var sentence = "";
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
for (let index = 0; index < array.length; index++) {
    sentence = sentence + " " + array[index];
}
alert(sentence);
*/

/*
5D Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9.
Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

/*
var array = [];
for (let index = 0; index <= 9 ; index++) {
    array.push(index);
}
console.log(array);
*/