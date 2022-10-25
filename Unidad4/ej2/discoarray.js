class disco{
    
    //constructor
   constructor(nombreDisco,cantante_grupo,anioPublicacion, tipo,localizacion,prestado){
       this.nombreDisco=nombreDisco;
       this.cantante_grupo=cantante_grupo;
       this.anioPublicacion=anioPublicacion;
       this.tipo=tipo;
       this.localizacion=localizacion;
       this.prestado=prestado=false;
   }
//cambia el numero de  estanteria
   cambiarLocalizacion(localizacion){
       this.localizacion=localizacion;
   }

//cambia funcio prestado
   cambiarPrestado(){
       if (prestado==false){
           this.prestado=true;
       }else{
           this.prestado=false; 
       }
   }
   //metodo string.
   
   toString(){ return "Nombre del disco: "+this.nombreDisco+"\n"+"Cantante o grupo: "+this.cantante+"\n"+"Año de publicacion:"+this.anioPublicacion+"\n"+
               "Genero: "+this.tipo+"\n"+"Localizacion: "+this.localizacion+"\n"+"Prestado: "+this.prestado;
           }
}

var coleccionDiscos = [];


function crearDisco() {
    var nombreDisco = prompt("Introduce un nombre para el disco.");
    var cantante_grupo= prompt("Introduce un cantante o nombre de grupo para el disco.");
    var anioPublicacion= prompt("Introduce un genero para el disco");
    var localizacion = prompt("Introduce una localizacion");
    var prestado= false;
    var discos = new disco(nombreDisco,cantante_grupo,anioPublicacion,tipo,localizacion,prestado);
    coleccionDiscos.unshift(discos);


}

var disco1= new disco("Black","Metallica",1995,"Heavy metal",2,)
coleccionDiscos.unshift(disco1);

function arrayNumero(coleccionDiscos) {

    var numero = coleccionDiscos.length;
    document.getElementById("salida").innerHTML += "<p><h3>Elementos del array</h3></p> El numero de elementos del array es " + numero + "<br>";
}

function arrayMuestra(coleccionDiscos) {

    document.getElementById("salida").innerHTML += "<p><h3>Array a String</h3></p>" + coleccionDiscos.toString() + "<br>";

}

function arrayInverso(arraypaises) {
    var arraylocal = arraypaises;
    arraylocal.reverse();
    document.getElementById("salida").innerHTML += "<p><h3>Array Inverso</h3></p>" + arraylocal.toString() + "<br>";
}

function arrayOrdenAlfa(arraypaises) {
    var arraylocal = arraypaises;
    arraylocal.sort();
    document.getElementById("salida").innerHTML += "<p><h3>Array ordenados alfabeticamente</h3></p>" + arraylocal.toString() + "<br>";
}

function arrayInsertaPrincipio(arraypaises) {
    var pais = window.prompt("Introduce un pais");
    arraypaises.unshift(pais);
    document.getElementById("salida").innerHTML += "<p><h3> Insertando un elementos  el array</h3></p>" + arraypaises[0] + "<br>";
    document.getElementById("salida").innerHTML += arraypaises.toString() + "<br>";
}
function arrayInsertafinal(arraypaises) {
    var pais = window.prompt("Introduce un pais");
    arraypaises.push(pais);
    document.getElementById("salida").innerHTML += "<p><h3> Insertando un elementos  el array</h3></p>" + arraypaises.toString() + "<br>";
    document.getElementById("salida").innerHTML += arraypaises[arraypaises.length - 1] + "<br>";

}
//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function arrayBorrarPrincipio(arraypaises) {

    document.getElementById("salida").innerHTML += "<p><h3>Borrando un elemento al principio del array</h3></p>" + arraypaises.shift() + "<br>";
    document.getElementById("salida").innerHTML += arraypaises.toString() + "<br>";
}
//Borrar un elemento al final del array (y decir cuál se ha borrado).

function arrayBorrarFinal(arraypaises) {

    document.getElementById("salida").innerHTML += "<p><h3>Borrando al final del array</h3></p>" + arraypaises.pop() + "<br>";
    document.getElementById("salida").innerHTML += arraypaises.toString() + "<br>";

}
function mostrarElemento(arraypaises) {

    var elemento = prompt("Introduce una posición del array para ver el elemento del 0 al " + arraypaises.length);
    document.getElementById("salida").innerHTML += "<p><h3> El elemento del array es </h3></p>" + arraypaises[elemento];

}
//Muestra la posición en la que se encuentra un elemento que le indica el usuario.
function mostrarPosicion(arraypaises) {

    var elemento = prompt("Introduce el nombre del elemento para ver su posición en el array");
    document.getElementById("salida").innerHTML += "<p><h3>La posición del elemento es </h3></p>" + arraypaises.indexOf(elemento) + "<br>";
}
//Muestra intervalo del array 
function mostrarIntervalo(arraypaises) {
    var intervalo = prompt("Introduce un intervalo en formato inicio-fin (Ejemplo 0-1) Ten en cuenta que el array tiene " + arraypaises.length + " posiciones.");
    intervalo = intervalo.split("-");
    var rango = arraypaises.slice(intervalo[0], intervalo[1]);
    document.getElementById("salida").innerHTML += "<p><h3>Intervalo de posiciones</h3></p>" + rango.toString() + "<br>";

}
//Menu principal
window.menu= function menu() {
    var opciones = window.prompt("Introduce una opcion: \n 1. Mostrar numero de paises. \n 2. Mostrar Listado de paises. \n 3.Mostrar un intervalo de paises. \n 4. Añadir un pais \n 5.Borrar un pais \n 6.Consultar un pais");

    switch (opciones) {
        case "1":
            arrayNumero(coleccionDiscos);
            break;
        //Menu secundario
        case "2":
            var menuOrden = window.prompt("1.Orden por defecto. \n 2.Orden Inverso. \n 3.Ordenados alfabeticamente");
            switch (menuOrden) {
                case "1":
                    arrayMuestra(coleccionDiscos);
                    break;

                case "2":
                    arrayInverso(coleccionDiscos);
                    break;
                case "3":
                    arrayOrdenAlfa(coleccionDiscos);
                    break;
            }
            break;
        case "3":
            mostrarIntervalo(coleccionDiscos);
            break;
        case "4":
            //Menu secundario
            var menuPais = window.prompt("Seleciona donde quieres añadir el pais: \n 1. Para introducir el pais al principio del array: \n 2. Para introducir el pais al final del array.");
            switch (menuPais) {
                case "1":

                    arrayInsertaPrincipio(coleccionDiscos);
                    break;

                case "2":
                    arrayInsertafinal(coleccionDiscos);
                    break;
            }
            break;
        case "5":
            //Menu secundario
           var menuBorrar = window.prompt("Seleciona donde quieres borrar el pais: \n 1. Para borrar el pais al principio del array: \n 2. Para borrar el pais al final del array:");
           switch (menuBorrar) {
                case "1":
                    arrayBorrarPrincipio(coleccionDiscos);
                    break;
                case "2":
                    arrayBorrarFinal(coleccionDiscos);
                    break;    
        

                }
         break;
        case "6": 
        //Menu secundario
                var menuPosicion = window.prompt("Seleciona que consulta quieres : \n 1. Para Consultar por posición \n 2. Para consultar por nombre" );
                switch (menuPosicion) {
                    case "1":
                        mostrarElemento(coleccionDiscos);
                        break;
                    case "2":
                        mostrarPosicion(coleccionDiscos)
                        break;
                }    
        
        
     }
}