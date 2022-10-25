class disco{
     nombreDisco;
     cantante_grupo;
     anioPublicacion;
     tipo;
     localizacion;
     prestado;
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
    
    toString(){ return "Nombre del disco: "+this.nombreDisco+"\n"+"Cantante o grupo: "+this.cantante+"\n"+"Año de publicacion:"+this.anioPublicacion+"\n"+
                "Genero: "+this.tipo+"\n"+"Localizacion: "+this.localizacion+"\n"+"Prestado: "+this.prestado;
            }
}
