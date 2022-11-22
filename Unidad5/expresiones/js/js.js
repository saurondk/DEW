
const validarfecha=()=>{
   var fecha= document.getElementById("fecha").value;
   console.log(fecha);

}

fecha.onblur = function(){
    validarfecha();

}
const validarCocinero =() =>{
    var cocinero = document.getElementById("nombre").value;
    if (!cocinero.match(/^[A-Z]{2}\W[0-9]{4}$/)) {
        document.getElementById("mensaje").innerHTML="Introduce un cocinero correcto";
        document.getElementById("nombre").focus();
    }else{
        document.getElementById("mensaje").innerHTML="";
    }

}
nombre.onblur = function(){
    validarCocinero();
}

//: estará formado por dos o tres letras mayúsculas correspondientes al estado, un 
//guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 digitos 
//(ej. NM_alburquerque:1234).

const validarDestinatario =() =>{
    var destinatario = document.getElementById("destinatario").value;
    if (!destinatario.match(/^[A-Z]{2,3}[_][a-z]+[:][0-9]{4}$/)) {
        document.getElementById("mensaje").innerHTML="Introduce un destinatario correcto";
        document.getElementById("destinatario").focus();
    }else{
        document.getElementById("mensaje").innerHTML="";
    }
   
    
}
destinatario.onblur= function(){
    validarDestinatario();
}
// Gramos: será un número del 100 al 5000.

const validarGramos =() =>{
    var gramos = document.getElementById("gramos").value;
    if ((gramos<100)||(gramos>5000)) {
        console.log("dentro");
        document.getElementById("mensaje").innerHTML="Introduce un valor del 100 al 5000";
        document.getElementById("gramos").focus();
    } else {
        document.getElementById("mensaje").innerHTML="";
    }
}
gramos.onblur= function(){
    validarGramos();
}
//Composición: estará formado por una cantidad en gramos seguida de dos conjuntos de una o 
//dos letras seguidas o no de un número. (ej. 200gC3OH7)

const validarComposicion =() =>{
    var composicion = document.getElementById("composicion").value;
    if (!composicion.match(/^[0-9]+[g][A-z]{1,2}[0-9][A-z]{1,2}[0-9]$/)) {
        document.getElementById("mensaje").innerHTML="Introduce un valor correcto ej 200gC3OH7";
        document.getElementById("composicion").focus();
    } else {
        document.getElementById("mensaje").innerHTML="";
    }
}
composicion.onblur = function(){
    validarComposicion();
}
const validarCuenta =() =>{
    
}