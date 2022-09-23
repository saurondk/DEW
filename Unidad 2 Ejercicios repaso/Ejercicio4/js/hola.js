function hola(){
    var entra = window.prompt("Introduzca un mensaje");
    if(entra==""){
        document.getElementById("1").innerHTML="Hola";

    }else{
        document.getElementById("1").innerHTML=entra;
    }

}