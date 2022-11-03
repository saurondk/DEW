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
        var puertas = [];

        for (let j = 1; j <= numPuertas; j++) {
            puertas.push([]);
        }

        for (let i = 1; i <= numPlantas; i++) {
            this.plantas.push(Object.assign({}, puertas));
        }
    }

    agregarPropietario(nombre, planta, puerta) {

        this.plantas[planta][puerta] = nombre;
        document.getElementById("salida").innerHTML += nombre+" es ahora propietario del piso  " + planta+" Puerta "+puerta+ "<br>";

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
        document.getElementById("salida").innerHTML += "La calle es " + this.calle + "<br>";
    }
    imprimenumero() {
        document.getElementById("salida").innerHTML += "El numero es " + this.numero + "<br>";
    }
    imprimeCp() {
        document.getElementById("salida").innerHTML += "El codigo postal es " + this.cp + "<br>";
    }
    mensajeConstruir() {
        document.getElementById("salida").innerHTML += "Nuevo edificio construido en la calle " + this.calle + " nº " + this.numero + " CP: " + this.cp + "<br>";

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

window.verDatosEdificio = function verDatosEdificio() {
    var edificionum = prompt("Introduce numero de edificio");

    for (let i = 0; i < edificios.length; i++) {
        if (edificionum == edificios[i].numero) {

            edificios[i].imprimecalle();
            edificios[i].imprimenumero();
            edificios[i].imprimeCp();
            //console.log(edificios[i].plantas);
            for (let j = 0; j < edificios[i].plantas.length; j++) {
                console.log( edificios[i].plantas[j]);
                console.log( edificios[i].plantas[j].length);
                console.log( edificios[i].plantas[j][0] );
                //no me obtiene la ultima posicion del array linea 78 obtiene el nombre en esa posicion pero no funciona el .length del bucle for
                for (let k = 0; k <= edificios[i].plantas[j].length; k++) {
                    console.log( edificios[i].plantas[j][k] );
                    document.getElementById("salida").innerHTML+="Propietario del piso"+k+" de la planta "+j+" es "+edificios[i].plantas[j][k];

                }    
                edificios[i].plantas[j].forEach(element => {
                    console.log(element);
                    document.getElementById("salida").innerHTML+="Propietario del piso"+k+" de la planta "+j+" es "+element;
                });
            }
            
        }

    }
}


window.insertePropietarios = function insertePropietarios() {
    var edificionum = prompt("Introduce numero de edificio");
    
    for (let i = 0; i < edificios.length; i++) {
        if (edificionum == edificios[i].numero) {
            var planta = prompt("Introduce una planta")-1;
            var puerta = prompt("Introduce una puerta")-1;
            var nombre = prompt("Introduce un nombre");
            console.log(edificios[i]);
            edificios[i].agregarPropietario(nombre, planta, puerta);
        }


    }
    console.log(edificios);
}
window.plantasYPuertas = function plantasYPuertas() {
    var edificionum = prompt("Introduce numero de edificio");
    for (let i = 0; i < edificios.length; i++) {
        if (edificionum == edificios[i].numero) {
            var planta = prompt("Introduce una planta");
            var puerta = prompt("Introduce una puerta");
            edificios[i].agregarPlantasYPuertas(planta, puerta);

        }
    }
    console.log(edificios);
}



