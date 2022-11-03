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
    
        for (let i = 1; i <= numPlantas; i++) {
           var puertas=this.crearP(numPuertas);
            //this.plantas.push(Object.assign({}, puertas));
            this.plantas.push(puertas);
        }
    }

    crearP(nump){
        var puertas = [];

        for (let j = 1; j <= nump; j++) {
            puertas.push(["piso vacio"]);
        }
        return puertas;
    }

    agregarPropietario(nombre, planta, puerta) {

        this.plantas[planta][puerta] = nombre;
        document.getElementById("salida").innerHTML += nombre+" es ahora propietario del piso  " + (planta+1)+" Puerta "+(puerta+1)+ "<br>";

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
            console.log(edificios[i].plantas[0]);
            console.log(typeof(edificios[i].plantas[0]));
            for (let j = 0; j < edificios[i].plantas.length; j++) {
                console.log( edificios[i].plantas[j]);
                console.log( edificios[i].plantas[j].length);
                console.log( edificios[i].plantas[j][0] );
                //no me obtiene la ultima posicion del array linea 78 obtiene el nombre en esa posicion pero no funciona el .length del bucle for
                for (let k = 0; k < edificios[i].plantas[j].length; k++) {
                    console.log( edificios[i].plantas[j][k] );
                    document.getElementById("salida").innerHTML+="Propietario del piso "+(parseInt(k,10)+1)+" de la puerta "+(parseInt(j,10)+1)+" es "+edificios[i].plantas[j][k]+"<br>";

                } 
                /*edificios[i].plantas[j].forEach(element => {
                    console.log(element);
                    document.getElementById("salida").innerHTML+="Propietario del piso"+k+" de la planta "+j+" es "+element;
                });*/
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

/*Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
El código postal del edificio A es: 15706.
La calle del edificio C es: San Clemente.
El edificio B está situado en la calle Camino Caneiro número 29.*/


window.cargardatos= function cargardatos() {
    var edificioA = new Edificio('Garcia Prieto', '58', '15706');
    var edificioB = new Edificio('Camino Caneriro', '29', '32004');
    var edificioC = new Edificio('San Clemente', 's/n', '15705');
    edificios.push(edificioA,edificioB,edificioC);
    //Agregamos 2 plantas y 3 puertas por planta al edificio A...
    edificioA.agregarPlantasYPuertas(3,2);
    edificioA.agregarPropietario('Jose antonio Lopez',0,0);
    edificioA.agregarPropietario('Luisa Martin',0,1);
    edificioA.agregarPropietario('Marta castellon',0,2);
    edificioA.agregarPropietario('Antonio Pereira',1,1);
}


