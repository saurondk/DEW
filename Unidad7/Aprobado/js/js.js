let aprobado = new Promise(function (resolve, reject) {

    let numeroAleatorio = Math.floor(Math.random() *10);

    if (numeroAleatorio >5){
        resolve('Aprobado');
    }
    else{
        if(numeroAleatorio==4)
        throw new Error(' Pasa por revision');
        reject ('Suspendido');
        
    }
    
});
//boton que carga todo el programa
const boton = document.getElementById('botonCargar');
 boton.onclick = function(){
   
    aprobado
    .then((msg)=>{crearTabla(msg);})
    .catch((err)=>{crearAlert(err);});
    
 };
 
 //creamos la tabla y le pasamos el parametro que  instanciamos en la promesa en este caso el resolve
function crearTabla(mensaje){
let div = document.getElementById('resultado');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
div.appendChild(table);
table.appendChild(tr);
table.appendChild(td);
td.textContent = mensaje;
}

//creamos un alert  y le pasamos el parametro que  instanciamos en la promesa en este caso el reject
function crearAlert(mensaje){
 window.alert("Lo siento estas  "+mensaje);

}
