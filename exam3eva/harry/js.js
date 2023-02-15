const container = document.querySelector('.container')
const buscarBoton= document.querySelector('.buscarBoton');
const buscarInput = document.querySelector('.buscarInput');
const buscarSlither= document.querySelector('.buscarSlither');

console.log(buscarSlither.value)

window.addEventListener('DOMContentLoaded',async ()=>{
 const datos =await fetchdatos();
 console.log(datos);
    CrearTarjetas(datos)
    Filtrar(datos);
    Slither(datos);
    filtrarBoton(datos);
})

 async function fetchdatos() {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    if (response.status== 400) {
        container.innerHTML='La solicitud no es valida'
    } else if (response.status==404) { 
        container.innerHTML='Fallo la conexion'
    }
     return await response.json();
}

function CrearTarjetas(datos) {
    
    datos.forEach(element => {
        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'tarjeta')
        const head = document.createElement('div');

        const image = document.createElement('img');
        image.setAttribute('src',element.image);
        
        const nombre = document.createElement('h3');
        nombre.textContent=element.name;
       
        container.appendChild(tarjeta);
        tarjeta.appendChild(head);
        head.appendChild(image);
        tarjeta.appendChild(nombre);

    });
}

function Filtrar(datos) {
    
     buscarBoton.addEventListener('click',()=>{
        
        const filtrados = datos.filter(element => element.house.toLowerCase() == buscarInput.value.toLowerCase());
        console.log(buscarInput.value)
        borrarNodo(container);
        CrearTarjetas(filtrados);
})
}
function Slither (datos){
    buscarSlither.addEventListener('click',()=>{
        const filtrados = datos.filter(element=>element.house==buscarSlither.value);
        borrarNodo(container);
        CrearTarjetas(filtrados);
    })
}

const gender = document.querySelector('.gender');
function filtrarBoton(datos){
    let control = true;
    gender.addEventListener('click', e => {
        

        if (control == true){
            const nuevosDatos = datos.filter(invent => invent.gender === 'female' );
            borrarNodo(container);
            CrearTarjetas(nuevosDatos);
            control = false;
        }else{
            const nuevosDatos = datos.filter(invent => invent.gender === 'male' );
            borrarNodo(container);
            CrearTarjetas(nuevosDatos);
            control=true;
        }
      
    });
}

function borrarNodo(nodo) {
    while(nodo.firstChild){
        nodo.removeChild(nodo.firstChild);
    }
}


