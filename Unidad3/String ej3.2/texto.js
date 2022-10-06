var texto ="Cliente;Localidad;Cuota-Laura;Santander;50-Álvaro;Castro;50-Igor;Castro;60-Ivan;Santander;40-Mónica;Zamora;30-Javi;Bilbao;30-David;Bilbao;50-José Luis;Bilbao;60";
var array1= texto.split("-");
var array2;

function usuarios(){
    posicion=0;
    for (let index = 0; index < array1.length; index++) {
        array2= (array1[index].split(";"));
        for (let index = 0; index < array2.length; index++) {
            document.write(array2[index]);
            
        }
    }
    
    //document.getElementById("usuarios").innerHTML=;
}

