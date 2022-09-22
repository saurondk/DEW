function calcularletra (){
    var dni =window.prompt("Introduce tu DNI sin letra");
    var dniletra =window.prompt("Introduce tu letra");

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
   
    if(dni<0 ||dni>99999999){
        alert("El numero introducido es incorrecto");
    }else{
        var letrafin= letras[dni%23];

        if(dniletra==letrafin){
            alert("El numero y la letra del dni son correctos");
        }else{
            alert("La letra no es correcta");
        }
    }

}
