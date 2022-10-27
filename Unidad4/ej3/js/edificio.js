class Edificio {
    plantas = [
        //["1","1A","Alberto"],
        //["1","1B","Carlos"],

    ];
    
    constructor(calle, numero, cp) {
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.mensajeConstruir();
    }
    //metodo agregarPlantasYPuertas

    agregarPlantasYPuertas(numPlantas, numPuertas) {
        for (let i = 1; i <= numPlantas; i++) {
            for (let j = 1; j <= numPuertas; j++) {
                this.plantas.push([i, j, ""]);

            }

        }
    }

    agregarPropietario(nombre, planta, puerta) {
        plantas.forEach(element => {

            if (element[0] == planta && element[1] == puerta) {
                element[2] = nombre;
                document.getElementById("salida").innerHTML = nombre+" es ahora proprietario de la puerta "+ puerta + " de la planta "+ planta;
            }
        });

    }
    modificarNumero(numero){
        this.numero = numero;
    }
    modificarCalle(calle){
        this.calle = calle;
    }
    modificarCP(cp){
        this.cp = cp;
    }
    imprimecalle(){
        document.getElementById("salida").innerHTML = "La calle es " +calle+"<br>";
    }
    imprimenumero(){
        document.getElementById("salida").innerHTML = "El numero es " +numero+"<br>";
    }
    imprimeCp(){
        document.getElementById("salida").innerHTML = "El codigo postal es " +cp+"<br>";
    }
    mensajeConstruir(){
        document.getElementById("salida").innerHTML = "Nuevo edificio construido en la calle " +this.calle+" nº "+this.numero+" CP: "+this.cp+"<br>";
        
    }
    
}

var edificios=[];

 window.crearEdificio =function crearEdificio(){
    var calle= prompt("Introduce la calle");
    var numero= prompt("Introduce numero");
    var cp= prompt("Introduce codigo postal");
    var edificio= new Edificio(calle,numero,cp);
    edificios.push(edificio);
    
}
function verDatosEdificio(edificios){
    var callei= prompt("Introduce la calle");
    var numeroi= prompt("Introduce numero");
    var cpi= prompt("Introduce codigo postal");
    edificios.forEach(element => {
        if (element[0]==callei && element[1]==numeroi&& element[2]==cpi) {
            
        }

    });

}


