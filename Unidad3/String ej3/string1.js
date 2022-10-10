var nombrec;
var arrayc =[];


function escribenombre(){
    nombrec=prompt("introduce tu nombre completo");
    arrayc=nombrec.split(" ");
    //parte1 
    document.write("Tu nombre : "+nombrec+" tiene "+(arrayc[0].length+arrayc[1].length+arrayc[2].length)+" letras<br>");
    //parte2
    document.write("Tu nombre en minusculas: "+nombrec.toLowerCase()+"<br>");
    document.write("Tu nombre mayusculas: "+nombrec.toUpperCase()+"<br>");
    //parte3
    document.writeln("Tu nombre es " + arrayc[0]+"<br>");
    document.writeln("Tu primer apellido es "+arrayc[1]+"<br>");
    document.writeln( "Tu  segundo apellidos es "+arrayc[2]+"<br>");

    var propuesta1= arrayc[0][0].concat(arrayc[1]).concat(arrayc[2][0]);
    document.writeln("Propuesta de nombre 1:"+propuesta1+"<br>");
    var propuesta2="";
    
    for (let index = 0; index < arrayc.length; index++) {
        for (let i= 0; i < 3; i++) {
           propuesta2+=arrayc[index][i];
            
        }
        
    }
    document.writeln("Propuesta de nombre 2:"+propuesta2);
}

