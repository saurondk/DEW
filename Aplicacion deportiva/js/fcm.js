function fcm(){
    
    
    do {
    var edad= prompt("Introduce tu edad");
    var sexo= prompt("Introduce tu sexo (M o F)");
    edad =parseInt(edad);
    } while ((isNaN(edad)) || (sexo!="M" && sexo!="F"));

   
    
    
    if (sexo=="M") {
        var frecuenciaMax=220-edad;
    }
    if(sexo=="F"){
        var frecuenciaMax=216-(edad*0.88);
    }
        document.getElementById("imc").innerHTML="<br>Tu frecuencia maxima es = "+frecuenciaMax+"<br>"+
                "Zona de Recuperación (60%-70%)= "+frecuenciaMax*0.6+" - "+frecuenciaMax*0.7+"<br>"+
                "Zona de Aeróbica (70%-80%)= "+frecuenciaMax*0.7+" - "+frecuenciaMax*0.8+"<br>"+
                "Zona Anaeróbica(80%-90%)= "+frecuenciaMax*0.8+" -"+frecuenciaMax*0.9+"<br>"+
                "Linea Roja (90%-100%)= "+frecuenciaMax*0.9+" - "+frecuenciaMax+"<br>";           
}