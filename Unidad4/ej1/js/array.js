var paises = ["España","Alemania","Chile","Malasia","Iran","Venezuela","Italia"];


function arrayNumero(arraypaises){

    var numero = arraypaises.length;
    document.getElementById("salida").innerHTML+= "<p><h3>Elementos del array</h3></p> El numero de elementos del array es "+ numero +"<br>";
}

function arrayMuestra(arraypaises) {
    
    document.getElementById("salida").innerHTML+= "<p><h3>Array a String</h3></p>"+arraypaises.toString()+"<br>";

}

function arrayInverso(arraypaises) {
    var arraylocal=arraypaises;
    arraylocal.reverse();
    document.getElementById("salida").innerHTML+="<p><h3>Array Inverso</h3></p>"+ arraylocal.toString()+"<br>";
}

function arrayOrdenAlfa(arraypaises){
    var arraylocal=arraypaises;
arraylocal.sort();
document.getElementById("salida").innerHTML+= "<p><h3>Array ordenados alfabeticamente</h3></p>"+arraylocal.toString()+"<br>";
}

function arrayInsertaPrincipio(arraypaises){
    
    arraypaises.unshift("Estonia");
    document.getElementById("salida").innerHTML+="<p><h3> Insertando un elementos  el array</h3></p>"+ arraypaises[0]+"<br>";
    document.getElementById("salida").innerHTML+= arraypaises.toString()+"<br>";
}
//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function arrayBorrarPrincipio(arraypaises) {

    document.getElementById("salida").innerHTML+="<p><h3>Borrando un elemento al principio del array</h3></p>"+ arraypaises.shift()+"<br>";
    document.getElementById("salida").innerHTML+= arraypaises.toString()+"<br>";
}
//Borrar un elemento al final del array (y decir cuál se ha borrado).

function arrayBorrarFinal(arraypaises) {
    
    document.getElementById("salida").innerHTML+="<p><h3>Borrando al final del array</h3></p>"+ arraypaises.pop()+"<br>";
    arrayMuestra(paises);

}
function mostrarElemento(arraypaises) {

    var elemento =prompt("Introduce una posición del array para ver el elemento del 0 al "+arraypaises.length);
    document.getElementById("salida").innerHTML+="<p><h3> El elemento del array es </h3></p>"+arraypaises[elemento];
    
}
//Muestra la posición en la que se encuentra un elemento que le indica el usuario.
function mostrarPosicion(arraypaises) {

    var elemento =prompt("Introduce el nombre del elemento para ver su posición en el array");
    document.getElementById("salida").innerHTML+="<p><h3>La posición del elemento es </h3></p>"+arraypaises.indexOf(elemento)+"<br>";
}