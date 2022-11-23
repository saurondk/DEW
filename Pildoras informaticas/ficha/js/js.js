class ficha{

 

    constructor(nombre) {
    this.nombre;   
    this.sesiones=[];
    this.numsesiones=0;
    }

 anotar(km){
   this.numsesiones++;
   this.sesiones[this.numsesiones]=km;
    
 }

 media(){
    var media=0;
    for (let i = 0; i < this.sesiones.length; i++) {

        media = media+ this.sesiones;
        console.log(media);
        
    }
    return media/this.numsesiones;
 }
 
}

function nombre(nombre) {
   var nombre= document.getElementById("nombre").value;
   var ficha1= new ficha(nombre);
}


enviar.onclick=function(){

var km = document.getElementById("km").value;
document.getElementById("resultado").innerHTML=ficha1.media();
ficha1.anotar(km);
ficha1.media();
console.log(ficha1);
nombre();
}



