
//validaremos los Incidencias
const validarNombre=() =>{
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);
    if (nombre.match(/\w/)) {
        document.getElementById("mensaje").innerHTML="";

    }else{
        document.getElementById("mensaje").innerHTML="Introduce un nombre correcto";
        document.getElementById("nombre").focus();
        
    }

}
nombre.onblur = function(){
    validarNombre();
}

//validamos el telefono
const validarTelefono=() =>{
    var telefono = document.getElementById("telefono").value;
   
    if (telefono.match(/^[0-9]{9}$/)) {
        
        document.getElementById("mensaje").innerHTML="";

    }else{
        document.getElementById("mensaje").innerHTML="Introduce un telefono correcto";
        document.getElementById("telefono").focus();
        
    }

}
telefono.onblur = function(){
    validarTelefono();
}

var radio;
function Radio() {
    var ele = document.getElementsByName('1');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
       
                radio = ele[i].value;
    }
}

enviar.onclick=function(){
    var td="";
    var nombre1 = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var responsable = document.getElementById("responsable").value;
    var Incidencia = document.getElementById("incidencia").value;
    var prioridad = document.getElementsByClassName("1").value;
    var estado = document.getElementById("estado").value;
    var responsable= document.getElementById("observaciones").value;

         td += "<tr><td> Fecha: "+fecha+"</td></tr>";
         td += "<tr><td>Nombre: "+nombre1+"</td></tr>";
         td += "<tr><td>Telefono: "+telefono+"</td></tr>";
         td += "<tr><td>Correo: "+email+"</td></tr>";
         td += "<tr><td>Responsable: "+responsable+"</td></tr>";
         td += "<tr><td>Incidencia: "+Incidencia+"</td></tr>";
         td += "<tr><td>Prioridad: "+prioridad+"</td></tr>";
         td += "<tr><td>Estado: "+estado+"</td></tr>";
         td += "<tr><td>Observaciones: "+responsable+"</td></tr>";
        
        
    
    
    document.getElementById("mensaje").innerHTML+="<table>"+td+"</table>";
    
 
  
}


