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
    var contador=0;
    for (let i = aniol ; i< 2100; i++) {
        
        var fecha = new Date(i+"-"+fechalimpia.getMonth()+"-"+fechalimpia.getDate());
        
        if(fecha.getDay()==0){
            contador++
        }
        
    }
    document.getElementById("salida").innerHTML= "Tu cumpleaños cae "+ contador +" de veces en domingo."

    
}
function formatos(){
   var fecha = prompt("introduce la fecha para visualizarla en varios formatos (Ejemplo 2003-12-24)");
   var fecha = fecha.split("-");
   var fechafinal = new Date(fecha[0],fecha[1]-1,fecha[2]);
   var anio = fechafinal.getFullYear();
   var mes = fechafinal.getMonth()+1;
   var dia = fechafinal.getDate();
   var fechafinal3= fechafinal.toLocaleDateString('es-ES',{ weekday:'long', year: 'numeric', month: 'long', day: 'numeric' });
   var fechafinal2= fechafinal.toLocaleDateString('en-EN',{ weekday:'long', year: 'numeric', month: 'long', day: 'numeric' });
   document.getElementById("salida").innerHTML=anio+"/"+mes+"/"+dia; 
   document.getElementById("salida").innerHTML+="<br>"+fechafinal2; 
   document.getElementById("salida").innerHTML+="<br>"+fechafinal3; 
    
}
function horas(){
    
}
