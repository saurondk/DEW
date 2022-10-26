class Edificio {
    plantas = [
        //["1","1A","Alberto"],
        //["1","1B","Carlos"],

    ];

    constructor(calle, numero, cp) {
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
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
            }
        });
    }


}

