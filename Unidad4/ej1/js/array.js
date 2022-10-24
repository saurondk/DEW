var paises = ["España","Alemania","Chile","Malasia","Iran","Venezuela","Italia"];


function arrayNumero(arraypaises){
    var paises2=[];
    paises2=(arraypaises+"").split(",");
    var numero = paises2.length;
    document.getElementById("salida").innerHTML= "El numero de elementos del array es "+ numero +"<br>";
}

function arrayMuestra(arraypaises) {
    var paises2=[];
    paises2=(arraypaises+"").split(",");
    document.getElementById("salida").innerHTML+= paises2.toString()+"<br>";

}
function arrayInverso(arraypaises) {
    var paises2=[];
    paises2=(arraypaises+"").split(",");
    paises2.reverse();
    document.getElementById("salida").innerHTML+= paises2.toString()+"<br>";
}
function arrayOrdenAlfa(arraypaises){
var paises2=[];
paises2=(arraypaises+"").split(",");
paises2.sort();
document.getElementById("salida").innerHTML+= paises2.toString()+"<br>";
}
function arrayInsertaPrincipio(arraypaises){
    var paises2=[];
    paises2=(arraypaises+"").split(",");
    paises2.unshift("Estonia");
    document.getElementById("salida").innerHTML+= paises2[0]+"<br>";
    document.getElementById("salida").innerHTML+= paises2.toString()+"<br>";
}
//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function arrayBorrarPrincipio(arraypaises) {
    var paises2=[];
    paises2=(arraypaises+"").split(",");
    document.getElementById("salida").innerHTML+= paises2.shift()+"<br>";
    document.getElementById("salida").innerHTML+= paises2.toString()+"<br>";
}
//Borrar un elemento al final del array (y decir cuál se ha borrado).

function arrayBorrarFinal(arraypaises) {
    var paises2=[];
    paises2=(arraypaises+"").split(",");
    document.getElementById("salida").innerHTML+= paises2.pop()+"<br>";
    document.getElementById("salida").innerHTML+= paises2.toString()+"<br>";
}