const formulario = document.getElementById("formulario");
formulario.action="";
//Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "intentos" similar a:
 //"Intento de Envíos del formulario: X". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y
 // mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div la propiedad que tenemos que modificar para ese objeto es innerHTML.
 

document.cookie = "intentos=0";
varintentos =document.cookie;
inicio =varintentos.indexOf("=")+1;
valor = parseInt(varintentos.substring(inicio,varintentos.length));


formulario.onsubmit= function(){
    valor++;
    intentos.innerHTML= "El numero de intentos es " + valor;
    return false;
}

//Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
nombre.onblur= function(){
    document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
}
apellidos.onblur= function(){
    document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
}

//Realizar una función que valide los campos de texto NOMBRE y APELLIDOS. 
//Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.

const validarnombreApellido = (idcampo) => {
    let input = document.getElementById(idcampo).value;
    if ( input.match(/\D/))
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
    validarnombreApellido("nombre");
}
apellidos.onblur= function(){
    validarnombreApellido("apellidos");
}

//Validar la EDAD que contenga solamente valores numéricos y
// que esté en el rango de 0 a 105. Si se produce algún error mostrar 
//el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.

