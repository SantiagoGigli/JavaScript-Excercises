//**********************************FUNCIONES**********************************

/*
6A Crear una función suma que reciba dos valores numéricos y retorne el
resultado. Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.
*/

/*
function suma(num1, num2){
    return num1 + num2;
}
var result = suma(5,5);
console.log(result);
*/

/*
6B A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando
que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

/*
function suma(variable1, variable2){
    if(isNaN(variable1)){
        alert(variable1 + " Is not a number");
        return NaN;
    }
    else if(isNaN(variable2)){
        alert(variable2 + " Is not a number");
        return NaN;
    }
    return variable1 + variable2;
}
var result = suma(6,6);
console.log(result);
*/


/*
6C Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.
*/

/*
function validateInteger(number){
    if(Number.isInteger(number)){
        return true;
    }
    return false;
}

var result = validateInteger(7.3);
console.log(result);
*/


/*
6D A la función suma del ejercicio 6b) agregarle una llamada que valide que
los números sean enteros. En caso que haya decimales mostrar un alerta con
el error y retorna el número convertido a entero (redondeado).
*/

/*
function suma(variable1, variable2){
    if(isNaN(variable1)){
        console.log(variable1 + " Is not a number");
        return NaN;
    }
    else if(isNaN(variable2)){
        console.log(variable2 + " Is not a number");
        return NaN;
    }
    else if(Number.isInteger(variable1) && Number.isInteger(variable2)){
        return variable1 + variable2;
    }
    else{
        alert("One or more variables are not an integer");
        return Math.round(variable1 + variable2);
    }
}

var result = suma(8.8,6);
console.log(result);
*/

/*
6E Convertir la validación del ejercicio 6b) en una función separada
y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/


/*
function validateNumbers(number){
    if(isNaN(number)){
        console.log(number + " Is not a number");
        return NaN;
    }
        return number;
}

function suma(number, number2){
    return validateNumbers(number) + validateNumbers(number2);
}

var result = suma(6, "hola");
console.log(result);
*/
