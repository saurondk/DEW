var nombres=[];

enviar.onclick=function(){
    var td="";
    var existe= false;
    var nombre =document.getElementById("nombre").value;
    nombres.forEach(element => {
        if(element==nombre){
           existe=true;
        }
    });
    
 if(existe==true){
    document.getElementById("resultados").innerHTML="Ya existe el nombre"
 }else{
    nombres.push(nombre);
    nombres.forEach(element => {
         td += "<tr style='border:3px solid black'><td style='border:3px solid black'>"+element+"</td></tr>";
    });
    
    document.getElementById("resultados").innerHTML="<table style='border:3px solid black'>"+td+"</table>";
    console.log(nombres);
 }
  
}

    