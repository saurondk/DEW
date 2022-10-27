class Edificio {
    plantas = [];
    

    constructor(calle, numero, cp) {
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.mensajeConstruir();
    }
    //metodo agregarPlantasYPuertas

    agregarPlantasYPuertas(numPlantas, numPuertas) {
       var puertas=[];
        
        for (let j = 1; j <= numPuertas; j++) {
            puertas.push([""]);
        }

        for (let i = 1; i <= numPlantas; i++) {
            this.plantas.push(Object.assign({},puertas));
        }
    }


    agregarPropietario(nombre, planta, puerta) {
      
        this.plantas[planta][puerta]=nombre;

    }
    modificarNumero(numero) {
        this.numero = numero;
    }
    modificarCalle(calle) {
        this.calle = calle;
    }
    modificarCP(cp) {
        this.cp = cp;
    }
    imprimecalle() {
        document.getElementById("salida").innerHTML = "La calle es " + calle + "<br>";
    }
    imprimenumero() {
        document.getElementById("salida").innerHTML = "El numero es " + numero + "<br>";
    }
    imprimeCp() {
        document.getElementById("salida").innerHTML = "El codigo postal es " + cp + "<br>";
    }
    mensajeConstruir() {
        document.getElementById("salida").innerHTML = "Nuevo edificio construido en la calle " + this.calle + " nº " + this.numero + " CP: " + this.cp + "<br>";

    }

}

var edificios = [];

window.crearEdificio = function crearEdificio() {
    var calle = prompt("Introduce la calle");
    var numero = prompt("Introduce numero");
    var cp = prompt("Introduce codigo postal");
    var edificio = new Edificio(calle, numero, cp);
    edificios.push(edificio);
    console.log(edificios);

}
window.verDatosEdificio =function verDatosEdificio() {
    var numeroi = prompt("Introduce numero");
    edificios.forEach(element => {
        if (element.numero == numeroi) {
            plantas.forEach(element => {
                
            });
        }

    });

}
/*window.probar=function probar(){
   var  edificio1= new Edificio("1","2","3");
   edificio1.agregarPlantasYPuertas(2,2);
   edificio1.agregarPropietario("aram",1,0);
   edificio1.agregarPropietario("diego,",1,1);
   document.getElementById("salida").innerHTML=edificio1.plantas[1][0];
   console.log(edificio1);
}*/

window.probar =function insertePropietarios() {
    var edificionum = prompt("Introduce numero de edificio");
    
    for (let i = 0; i < edificios.length; i++) {
        if (edificionum==edificios[i]) {
            var planta = prompt("Introduce una planta");
            var puerta =prompt("Introduce una puerta");
            var nombre =prompt ("Introduce un nombre");
            element.agregarPropietario(nombre,planta,puerta);
        }
        
    }
window.plantasYPuertas= function plantasYPuertas(){
           var planta = prompt("Introduce una planta");
            var puerta =prompt("Introduce una puerta");
            var edificio=prompt("Introduce el edificio"+edificios.length);
            edificio.agregarPlantasYPuertas(planta,puerta);

}   
    /*edificios.forEach(element => {
        if (edificionum==element[1]) {
            var planta = prompt("Introduce una planta");
            var puerta =prompt("Introduce una puerta");
            var nombre =prompt ("Introduce un nombre");
            element.agregarPropietario(nombre,planta,puerta);
        }
    });*/

}


