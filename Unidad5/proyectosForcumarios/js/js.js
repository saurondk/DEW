const formulario = document.getElementById("formulario");

enviar.onclick= function(){
 
contadoraciertos=0;

const respuestasCorrecta= new Array("Pac-Man","Tetris","Fontanero","Jhonn","Japon","PlayStation","Diseñador daltonico","No puedo contestar esta encuenta por que no se leer","El recetario de mi abuela","Ni te lo imaginas");


for (let i = 1; i <= 10; i++) {
    var pregunta = pregunta+i;
    

     
    try {
     pregunta=document.querySelector('input[name=\"'+i+'\"]:checked').value;
     console.log(pregunta);
     var elemento = document.createElement("span");
     elemento.setAttribute("id",i);
     document.querySelector('input[name=\"'+i+'\"]:checked').insertAdjacentElement("afterend",elemento);
        if (pregunta == respuestasCorrecta[i-1]) {

            document.getElementById(i).innerHTML=" &#x2714;&#xFE0F;"
            contadoraciertos++;
    
        }else if (pregunta != respuestasCorrecta[i-1]){
    
            document.getElementById(i).innerHTML="<b> &#10060;</b>"
    
        }
    } catch (error) {
        document.getElementById(i).innerHTML="No has respondido esta pregunta  --> ";
        document.getElementById("p"+i).style.color="red";
    }

  
    
}
document.getElementById("resultados").innerHTML="Has acertado: "+contadoraciertos;
};
