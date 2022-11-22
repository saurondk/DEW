
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


//úmero de cuenta de EEUU: supongamos que un número de cuenta estadounidense tiene el 
//siguiente formato:
//Dos letras: suponemos que el valor de cada letra es del 1 al 26 (no hay ñ ni 
  //  ll).
   // • Dos dígitos: debe corresponderse con la suma de la primera letra y la 
 //   segunda: en caso de que sea menor que 10 se pone el 0 delante.
 //   • Un guión.
  //  • Doce dígitos de cuenta.
 //   • Un guión.
 //   • Dos dígitos de control: los dos primeros deben ser la suma de los 6 primeros
 //   dígitos de la cuenta dividido entre 6 y extrayendo solamente su parte entera;
  //  y los dos últimos exactamente igual, pero con los 6 siguientes.
  //  • Si el número está correcto se colocará en un campo de texto al lado del 
  //  anterior, pero sin guiones: solamente los números y las letras.

const validarCuenta =() =>{
    var cuenta = document.getElementById("cuenta").value;
    var arrayLetras=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Z"];
     var letra1=cuenta.charAt(0);
    var letra2=cuenta.charAt(1);
    
     var valorLetra1=arrayLetras.indexOf(letra1);
     var valorLetra2=arrayLetras.indexOf(letra2);
     var totalLetras= valorLetra1+valorLetra2;



    if (totalLetras<10) {
        totalLetras = 0+""+totalLetras;
    }
          console.log(totalLetras);  

         var sumaDigCuenta =cuenta.charAt(2)+cuenta.charAt(3);
         console.log(sumaDigCuenta);
        if (cuenta.match(/^[L-l]{2}|[Ñ-ñ]{1}/)) {
            document.getElementById("mensaje").innerHTML =  "No tiene el formato correcto";
    
        } else if(totalLetras!=sumaDigCuenta){
            document.getElementById("mensaje").innerHTML =  "No tiene el formato correcto";
        }else if(!cuenta.match(/\w{4}[-]/)){
            document.getElementById("mensaje").innerHTML =  "No tiene el formato correcto";
        }
        
    


    
}
cuenta.onblur = function(){
    validarCuenta();
}