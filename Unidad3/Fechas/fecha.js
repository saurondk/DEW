var fechaActual=  new Date();

var fechaFincurso= new Date("2023-06-24");

var fecharesultado = fechaFincurso - fechaActual;
var dias = ((fecharesultado/1000)/3600)/24;
;


function fin(){
    
    document.getElementById("salida").innerHTML= "<br>Los dias hasta el fin de curso es :"+Math.floor(dias);
}
function cumple(){
    
    var fechacumple=document.getElementById("cumples").value ;
    alert(fechacumple);
    var fechalimpia= new Date(fechacumple);
    
    var fechafinal= new Date("2100-12-12");
    var aniol= fechalimpia.getFullYear;
    var dial = fechalimpia.getDay;

    for (let i = aniol ; i< 2100; i++) {
        
        if(fechafinal.getDay==0){

            
        }
        
    }


    
}
