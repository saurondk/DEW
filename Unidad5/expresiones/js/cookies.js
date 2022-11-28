
var intentos = document.cookie="intentos=0" ;

enviar.onclick=function() {
    
    intentos++;
    document.getElementById("mensaje").innerHTML = intentos;
};
  