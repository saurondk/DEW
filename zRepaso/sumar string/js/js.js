//Ejercicio 1: Realiza una página en la que crees dos variables “string”, las
//“sumes” e imprimas el resultado.

function sumarcadenas() {
var cadena1 = document.getElementById('string1').value;
var cadena2 = document.getElementById('string2').value;
var cadenasuma = cadena1+cadena2;
 document.getElementById('resultado').innerHTML= cadenasuma;
}

// Ejercicio 2: La función typeof() devuelve el tipo de una variable. Hacer un
// script que te diga el tipo de un par de variables, sin inicializarlas y posteriormente
// con un valor (string, number y boolean).

function tipo(){
let string;
let number;
let boolean;
console.log( typeof string);
console.log( typeof number);
 console.log(typeof boolean);
 string='hola'; number= 9; boolean= true;
 console.log(typeof string);
 console.log(typeof number);
 console.log (typeof boolean);
}

// Ejercicio 3: Vamos a realizar una pequeña página que pida al usuario un
// par de números y mediante una condicional le digamos si el primero es mayor que
// el segundo o es menor o iguales. Es importante recordar que hemos de cambiar el
// tipo de string a int usando la función parseInt(); 

function numeros() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    n1= parseInt(n1);
    n2= parseInt(n2);
    
    if (n1 > n2) {
        document.getElementById('resultado').innerHTML= 'El primer numero es mayor que el segundo';
    }else if (n1 < n2) {
        document.getElementById('resultado').innerHTML= 'El segundo numero es mayor que el primero';
    }else {
        document.getElementById('resultado').innerHTML= 'Los numeros son iguales';
    }
}