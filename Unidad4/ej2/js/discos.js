
 export default class  disco{
    cantante_grupo;
    //constructor
   constructor(nombreDisco,cantante_grupo,anioPublicacion, tipo,localizacion,prestado){
       this.nombreDisco=nombreDisco;
       this.cantante_grupo=cantante_grupo;
       this.anioPublicacion=anioPublicacion;
       this.tipo=tipo;
       this.localizacion=localizacion;
       this.prestado=prestado=false;
   }
//cambia el numero de  estanteria
   cambiarLocalizacion(localizacion){
       this.localizacion=localizacion;
   }

//cambia funcio prestado
   cambiarPrestado(){
       if (prestado==false){
           this.prestado=true;
       }else{
           this.prestado=false; 
       }
   }
   //metodo string.
   
   toString(){ return "Nombre del disco: "+this.nombreDisco+"<br>"+"Cantante o grupo: "+this.cantante_grupo+"<br>"+"Año de publicacion:"+this.anioPublicacion+"<br>"+
               "Genero: "+this.tipo+"<br>"+"Localizacion: "+this.localizacion+"<br>"+"Prestado: "+(this.prestado ? "Si":"No")+"<br>";
           }
}