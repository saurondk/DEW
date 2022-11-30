if (document.cookie =="") {
    document.cookie = "intentos=0";
}



enviar.onclick=function(){
  numIntentos();
    var ok=document.getElementById("mensaje").innerHTML;
  if (ok=="") {
    resetCookie("intentos");
    //   document.cookie="intentos=0";
  }
    
}


function numIntentos() {

var intentos =document.cookie;
inicio =intentos.indexOf("=")+1;
valor = parseInt(intentos.substring(inicio,intentos.length));
document.cookie = "intentos="+(valor+1);
document.getElementById("salida").innerHTML="El numero de intentos es " + (valor+1);

}


function resetCookie(entraCookie) {
    document.cookie=entraCookie+"= 0";
}