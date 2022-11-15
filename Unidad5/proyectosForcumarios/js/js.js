const formulario = document.getElementById("formulario");

const respuestasCorrecta= new Array("Pac-Man","Tetris","Fontanero","Jhonn","Japon","PlayStation","Diseñador daltonico","No puedo contestar esta encuenta por que no se leer","El recetario de mi abuela","Ni te lo imaginas");

function comprobar(respuesta){

    var correcto = false;
    respuestasCorrecta.forEach(element => {
        if (respuesta == element) {
            correcto= true;
        }
    });
    return correcto;

}

enviar.onclick= function(){
    contadoraciertos=0;
var pregunta1= document.querySelector('input[name="1"]:checked').value;
var comprobar1= comprobar(pregunta1);
var elemento = document.createElement("span");
elemento.setAttribute("id", "uno");
document.querySelector('input[name="1"]:checked').insertAdjacentElement("afterend",elemento);

console.log(comprobar1);
    if(comprobar1==true){
    contadoraciertos++;
    console.log(comprobar1);
   document.getElementById("uno").innerHTML=" &#x2714;&#xFE0F;"
    }else{
        document.getElementById("uno").innerHTML="<b> &#10060;</b>"
    }
    
var pregunta2= document.querySelector('input[name="2"]:checked').value;
var comprobar2= comprobar(pregunta2);
var pregunta3= document.querySelector('input[name="3"]:checked').value;
var comprobar3= comprobar(pregunta3);
var pregunta4= document.querySelector('input[name="4"]:checked').value;
var comprobar4= comprobar(pregunta4);
var pregunta5= document.querySelector('input[name="5"]:checked').value;
var comprobar5= comprobar(pregunta5);
var pregunta6= document.querySelector('input[name="6"]:checked').value;
var comprobar6= comprobar(pregunta6);
var pregunta7= document.querySelector('input[name="7"]:checked').value;
var comprobar7= comprobar(pregunta7);
var pregunta8= document.querySelector('input[name="8"]:checked').value;
var comprobar8= comprobar(pregunta8);
var pregunta9= document.querySelector('input[name="9"]:checked').value;
var comprobar9= comprobar(pregunta9);
var pregunta10= document.querySelector('input[name="10"]:checked').value;
var comprobar10= comprobar(pregunta10);

};
