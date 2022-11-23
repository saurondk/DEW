class ficha{

 

    constructor(nombre) {
    this.nombre;   
    this.sesiones=[];
    this.numsesiones=0;
    }

 anotar(km){
    this.sesiones=[this.numsesiones]=km;
    this.numsesiones++;
 }

 media(){
    var media=0;
    for (let i = 0; i < this.sesiones.length; i++) {
        media += this.sesiones[i];
        
    }
    return media/this.numsesiones;
 }
 
}
enviar.onclick=function(){
var nombre= document.getElementById("nombre").value;
var ficha1= new ficha(nombre);
var km = document.getElementById("km").value;
ficha1.anotar(km);
ficha1.media();
console.log(ficha1);

}

