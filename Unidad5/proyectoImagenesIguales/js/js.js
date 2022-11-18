
function cargarfoto(){
for (let i = 1; i < 13; i++) {
    var img= new Array('','1.jpg','2.jpg','4.jpg','6.jpg','5.jpg','3.jpg' ,'1.jpg','2.jpg','4.jpg','6.jpg','5.jpg','3.jpg'  );
    document.getElementById(i).innerHTML ='<img class="'+img[i]+'" src="img/'+img[i]+'" alt="" style="width:300px;height:200px"><div>0</div>';
}
   
}

function clickimagen() {
//cogemos los nodos que tienen el td
    var celda= document.querySelectorAll("td");
    console.log(celda);

    for (let i = 0; i < celda.length; i++) {
        celda[i].onclick=function(){
            console.log("hace click");
            var elemento = celda[i];
            //devuelve el primer elemeto hijo
            var imagen = elemento.firstElementChild;
            imagen.style.display="block";
            compara(imagen);
            
           

        }
    }
    
}

var contadorImg= 0;
var seleccionadasImg= new Array('');

function compara(imagen) {
            contadorImg++;
            seleccionadasImg[contadorImg]=imagen;
            //reseteo de contador de clicks
            if (contadorImg == 2) {
                contadorImg=0;
                
                if (seleccionadasImg[1].className==seleccionadasImg[2].className) {
                   
                    //devuelve el elemento hermano siguiente
                    var valor= seleccionadasImg[1].nextElementSibling;
                    valor.innerHTML="1";

                   //devuelve el elemento hermano siguiente
                    var valor2= seleccionadasImg[2].nextElementSibling;
                    valor2.innerHTML="1";
                }
                //si las los nombres de las classes de las imagenes no son igueles vuelvo a ocultar las imagenes.
                else{
                    seleccionadasImg[1].style.display="none";
                    seleccionadasImg[2].style.display="none";
                }
            }
            
}