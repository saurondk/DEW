var fechaActual=  new Date();

var fechaFincurso= new Date("2023-06-24");

var fecharesultado = fechaFincurso - fechaActual;
var dias = ((fecharesultado/1000)/3600)/24;
;


function fin(){
    
    document.getElementById("salida").innerHTML= "<br>Los dias hasta el fin de curso es :"+Math.floor(dias);
}
function cumple(){
    
    var fechainput=document.getElementById("cumples").value ;
    var fechalimpia= new Date(fechainput);
    var aniol= fechalimpia.getFullYear();
    alert(aniol);
    
    for (let i = aniol ; i< 2100; i++) {
        var contador;
        var fecha = new Date(i+"-"+fechalimpia.getMonth()+"-"+fechalimpia.getDate().getDay());
        alert(fecha);
        if(fecha.getDay()==0){

            contador++
        }
        
    }
    document.getElementById("salida").innerHTML= "Tu cumpleaños cae "+ contador +" de veces en domingo."

    
}
