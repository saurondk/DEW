const container = document.querySelector('#container');

window.addEventListener('DOMContentLoaded',async()=>{
    const datos = await fecthDatos();
    console.log(datos)
    crearTarjeta(datos)
})

 async function fecthDatos() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    try {
    
    if(response.status==400){
        container.textContent= 'La solicitud no es valida'
    }else if (response.status==404){
        container.textContent= 'La solicitud no es valida'
    }
    
    } catch (error) {
        container.textContent= error;

    }
    return await response.json();
}

function crearTarjeta(datos) {
    datos.results.forEach(element => {
        console.log(element.url)
        const nombre = document.createElement('div');
        const enlace = document.createElement('a');
       const url = element.url;
       
        nombre.textContent = element.name;
        enlace.textContent= 'Mas informacion'
        const salto = document.createElement('p');
        container.appendChild(nombre);
        nombre.appendChild(salto)
        nombre.appendChild(enlace);

        enlace.addEventListener('click', async ()=>{
           
                        const response = await fetch(url);
                        const datos= await response.json();
                       console.log(datos)

                        function name(params) {
                            
                        }
                 
            
        })
   

    });
}

function Filtrar(datos) {
     buscarBoton.addEventListener('click',()=>{
        const filtrados = datos.filter(element => element == buscarInput.value);
    Categoria(filtrados);
})
}


function borrarNodo(nodo) {
    while(nodo.FirstChild){
        nodo.removeChild(nodo.FirstChild)
    }
    
}
