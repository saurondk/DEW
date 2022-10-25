class  disco{
    cantante_grupo;
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
   
   toString(){ return "Nombre del disco: "+this.nombreDisco+"<br>"+"Cantante o grupo: "+this.cantante_grupo+"<br>"+"Año de publicacion:"+this.anioPublicacion+"<br>"+
               "Genero: "+this.tipo+"<br>"+"Localizacion: "+this.localizacion+"<br>"+"Prestado: "+(this.prestado ? "Si":"No")+"<br>";
           }
}


var coleccionDiscos = [];


function crearDisco() {
    var nombreDisco = prompt("Introduce un nombre para el disco.");
    var cantante_grupo= prompt("Introduce un cantante o nombre de grupo para el disco.");
    var anioPublicacion= prompt("Introduce el año de publicacion");
    var tipo=prompt("Introduce el genero o tipo");
    var localizacion = prompt("Introduce una localizacion");
    var prestado= false;
    var discos = new disco(nombreDisco,cantante_grupo,anioPublicacion,tipo,localizacion,prestado);
    
    return discos;

}

var disco1= new disco("Black","Metallica",1995,"Heavy metal",2,);
var disco2= new disco("white","acdc",1990,"Rock",3,);
coleccionDiscos.unshift(disco1,disco2);

function arrayNumero(coleccionDiscos) {

    var numero = coleccionDiscos.length;
    document.getElementById("salida").innerHTML = "<p><h3>Elementos del array</h3></p> El numero de elementos del array es " + numero + "<br>";
}

function arrayMuestra(coleccionDiscos) {

    document.getElementById("salida").innerHTML = "<p><h3>Array a String</h3></p>" + coleccionDiscos.toString() + "<br>";

}

function arrayInverso(coleccionDiscos) {
    var arraylocal1 = coleccionDiscos;
    arraylocal1.reverse();
    document.getElementById("salida").innerHTML = "<p><h3>Array Inverso</h3></p>" + arraylocal1.toString() + "<br>";
}

function arrayOrdenAlfa(coleccionDiscos) {
    var arraylocal2 = coleccionDiscos;
    arraylocal2.sort();
    document.getElementById("salida").innerHTML = "<p><h3>Array ordenados alfabeticamente</h3></p>" + arraylocal2.toString() + "<br>";
}

function arrayInsertaPrincipio(coleccionDiscos) {
    
    coleccionDiscos.unshift(crearDisco());
    document.getElementById("salida").innerHTML = "<p><h3> Insertando un elementos  el array</h3></p>" + coleccionDiscos[0] + "<br>";
    
}

function arrayInsertafinal(coleccionDiscos) {
    
    coleccionDiscos.push(crearDisco());
    document.getElementById("salida").innerHTML = "<p><h3> Insertando un elementos  el array</h3></p>" + coleccionDiscos.toString() + "<br>";
   

}
//Borrar un elemento al principio del array (y decir cuál se ha borrado).
function arrayBorrarPrincipio(coleccionDiscos) {

    document.getElementById("salida").innerHTML = "<p><h3>Borrando un elemento al principio del array</h3></p>" + coleccionDiscos.shift() + "<br>";
    
}
//Borrar un elemento al final del array (y decir cuál se ha borrado).

function arrayBorrarFinal(coleccionDiscos) {

    document.getElementById("salida").innerHTML = "<p><h3>Borrando al final del array</h3></p>" + coleccionDiscos.pop() + "<br>";
    

}
function mostrarElemento(coleccionDiscos) {

    var elemento = prompt("Introduce una posición del array para ver el elemento del 0 al " + (coleccionDiscos.length-1));
    document.getElementById("salida").innerHTML = "<p><h3> El elemento del array es </h3></p>" + coleccionDiscos[elemento];

}
//Muestra la posición en la que se encuentra un elemento que le indica el usuario.
function mostrarPosicion(coleccionDiscos) {
    var existe=0;
    var elemento = prompt("Introduce el nombre del disco para ver su posición en el array");
    for (let i = 0; i < coleccionDiscos.length; i++) {
       
        if (elemento==coleccionDiscos[i].nombreDisco) {
            document.getElementById("salida").innerHTML = "<p><h3>La posición del elemento es </h3></p>" + i  + "<br>";
            existe = 1;
            break;
        } 
    }if(existe==0){
        document.getElementById("salida").innerHTML = "No tenemos este disco en el array";
    }
    
}
//Muestra intervalo del array 
function mostrarIntervalo(coleccionDiscos) {
    var intervalo = prompt("Introduce un intervalo en formato inicio-fin (Ejemplo 0-1) Ten en cuenta que el array tiene " + coleccionDiscos.length + " posiciones.");
    intervalo = intervalo.split("-");
    var rango = coleccionDiscos.slice(intervalo[0], intervalo[1]);
    document.getElementById("salida").innerHTML = "<p><h3>Intervalo de posiciones</h3></p>" + rango.toString() + "<br>";

}
//Menu principal
window.menu= function menu() {
    var opciones = window.prompt("Introduce una opcion: \n 1. Mostrar numero de discos. \n 2. Mostrar Listado de discos. \n 3.Mostrar un intervalo de discos. \n 4. Añadir un disco \n 5.Borrar un disco \n 6.Consultar un disco");

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
            var menuPais = window.prompt("Seleciona donde quieres añadir el disco: \n 1. Para introducir el disco al principio del array: \n 2. Para introducir el disco al final del array.");
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
           var menuBorrar = window.prompt("Seleciona donde quieres borrar el disco: \n 1. Para borrar el disco al principio del array: \n 2. Para borrar el disco al final del array:");
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