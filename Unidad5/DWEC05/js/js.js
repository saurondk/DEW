const formulario = document.getElementById("formulario");

//Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "intentos" similar a:
 //"Intento de Envíos del formulario: X". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y
 // mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div la propiedad que tenemos que modificar para ese objeto es innerHTML.
 
document.cookie = "intentos=0";
varintentos =document.cookie;
inicio =varintentos.indexOf("=")+1;
valor = parseInt(varintentos.substring(inicio,varintentos.length));


/*formulario.onsubmit= function(){
    valor++;
    intentos.innerHTML= "El numero de intentos es " + valor;
    return false;
}*/


//Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
/*nombre.onblur= function(){
    
}
apellidos.onblur= function(){
   
}*/

//Realizar una función que valide los campos de texto NOMBRE y APELLIDOS. 
//Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.

const validarnombreApellido = (idcampo) => {
    let input = document.getElementById(idcampo).value;
    if ( input.match(/^[\D]{2,40}$/))
    {
        errores.innerHTML="";
    }
    else
    {
        	errores.innerHTML="El "+idcampo+" solo acepta caracteres";	
            document.getElementById(idcampo).focus();   
    }
    
}
nombre.onblur= function(){
    document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
    validarnombreApellido("nombre");
}
apellidos.onblur= function(){
    document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
    validarnombreApellido("apellidos");
}

//Validar la EDAD que contenga solamente valores numéricos y
// que esté en el rango de 0 a 105. Si se produce algún error mostrar 
//el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.

const validarEdad = () => {
    let input = document.getElementById("edad").value; //preguntar a nico el /d por que no funcioa
    if (!input.match(/[0-9]/) ) {

            errores.innerHTML="Introudce  solo numeros por favor.";	
            document.getElementById("edad").focus();   
    }
    else if ( input>=105 || input<=0 ){

        errores.innerHTML="Introudce un rango de 0 a 105.";	
            document.getElementById("edad").focus();
    }
    else{
        errores.innerHTML="";
    }
}
edad.onblur= function(){
    validarEdad();
};

//Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y una letra.
//Si se produce algún error mostrar el mensaje en el contenedor "errores"
// y poner el foco en el campo NIF. No es necesario validar que la letra sea correcta.
// Explicar las partes de la expresión regular mediante comentarios
const validarNif = () => {
    let input = document.getElementById("nif").value; 
    if (!input.match(/^[0-9]{8}[-][A-Z]{1}$/) ) { //^ es para limitar patron al principio
                                                   //[0-9] cualquier numero del 0 al 9 {8} hasta 8 veces 
                                                   //[-] un solo guion
                                                   //[A-Z] Letras de la a hasta la z solo mayusculas
                                                   // $ limitas el patron definiendo su final.

            errores.innerHTML="Introudce  un Nif valido (00000000-E).";	
            document.getElementById("nif").focus();   
    }else{
        errores.innerHTML="";
    }
}
nif.onblur= function(){
    validarNif();
};
//Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el e-mail 
//sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "errores"
// y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.

const validarEmail = () => {
    let input = document.getElementById("email").value; 
    if (!input.match(/^[a-zA-Z0-9+_.-]+[@]+[a-zA-Z0-9+_-]+[.]+[a-z]{2,6}$/) ) { 
                                                    //^ es para limitar patron al principio
                                                   //[0-9+_.-] cualquier numero del 0 al 9 y los simbolos +.-_  
                                                   //[@] una sola arroba o un solo punto
                                                   //[a-z]{2,6} letras minimo dos maximo 6 para los .com . world ...
                                                   // $ limitas el patron definiendo su final.

            errores.innerHTML="Introudce  un email valido.";	
            document.getElementById("email").focus();   
    }else{
        errores.innerHTML="";
    }
}
email.onblur= function(){
    validarEmail();
};
//Validar que se haya seleccionado alguna de las PROVINCIAS.
// Si se produce algún error mostrar el mensaje en el contenedor "errores"
//  y poner el foco en el campo PROVINCIA.

const validarProvincia = () => {
    let provincia = document.getElementById("provincia");
   
    if (provincia.selectedIndex==0){
        errores.innerHTML="Introduce una provincia";
        document.getElementById("provincia").focus();
    }else{
        errores.innerHTML="";
    }
    
}
provincia.onblur= function () {
        validarProvincia();
}
//Validar el campo FECHA utilizando una expresión regular.
// Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa.
// No se pide validar que sea una fecha de calendario correcta.
// Si se produce algún error mostrar el mensaje en el contenedor "errores"
// y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante comentarios.
const validarFecha = () => {
    let input = document.getElementById("fecha").value; 
    if (!input.match(/^[\d]{2}([/]?||[-]?)[\d]{2}([/]?||[-]?)[\d]{4}$/) ) { 
                                                   

            errores.innerHTML="Introudce  una fecha valida.";	
            document.getElementById("fecha").focus();   
    }else{
        errores.innerHTML="";
    }
}
fecha.onblur= function(){
    validarFecha();
};

// Validar el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. 
// Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo TELEFONO. 
// Explicar las partes de la expresión regular mediante comentarios.

const validarTelefonos =()=>{

    let input= document.getElementById("telefono").value

    if(!input.match(/^[0-9]{9}$/)){
        errores.innerHTML="Introduce un telefono valido";
        document.getElementById("telefono").focus();
    }else{
        errores.innerHTML="";
    }

}
telefono.onblur= function(){
    validarTelefonos();
}

//Validar el campo HORA utilizando una expresión regular. Debe seguir el patrón de hh:mm.
// No es necesario validar que sea una hora correcta. 
//Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo HORA.
// Explicar las partes de la expresión regular mediante comentarios.

const validarHora =()=>{

    let input = document.getElementById("hora").value;
 
    if(!input.match(/^[0-9]{2}[:][0-9]{2}$/)){

        errores.innerHTML="Introduce una hora con el formato correcto";
        document.getElementById("hora").focus();

    }else{
        errores.innerHTML="";
    }

}
hora.onblur= function(){
    validarHora();
}

const enviar1 =()=>{

    if(confirm("Deseas enviar el formaulario")){
        formulario.onsubmit= function(){
            return true;
        }
    }else{
        formulario.onsubmit= function(){
            valor++;
            intentos.innerHTML= "El numero de intentos es " + valor;
            return false;
        }
    }
}



enviar.onclick=function () {
    enviar1();
}