//**********************************VARIABLES Y OPERADORES**********************************

//1A

/*
var firstNumber = 5;
var secondNumber = 5;
var result = firstNumber + secondNumber;
console.log(result);
*/

//1B

/*
var firstString = "Santiago";
var secondString = "Gigli";
var stringResult = firstString + secondString;
console.log(stringResult);
*/

//1C

/*
var firstString = "Santiago";
var secondString = "Gigli";
var totalLength = firstString.length + secondString.length;
console.log(totalLength);
*/

//**********************************STRINGS**********************************

//2A

/*
var nombre = "santiagogigli";
var result = nombre.toUpperCase();
console.log(result);
*/

//2B

/*
var nombre = "santiagogigli";
var result = nombre.substring(0,5);
console.log(result);
*/

//2C

/*
var nombre = "santiagogigli";
var result = nombre.substring(10,13);
console.log(result);
*/

//2D

/*
var nombre = "santiagogigli";
var sub = nombre.substring(0,1);
var sub2 = nombre.substring(1,13);
var upper = sub.toUpperCase();
var lower = sub2.toLowerCase();
var result = upper + lower;
console.log(result);
*/

//2E

/*
var nombre = "santiago gigli";
var firstBlank = nombre.indexOf(" ", 0);
console.log(firstBlank);
*/

//2F
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

//**********************************ARRAYS**********************************

//3A

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4],array[10]);
*/

//3B

/*
var array =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.sort();
console.log(array)
*/












