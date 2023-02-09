const container = document.querySelector('.container');

const buscarInput = document.querySelector('#buscarInput');///filtrar
const buscarBoton = document.querySelector('#buscarBoton');

const busqueda = document.querySelector('#busqueda');// otro fetch
const busquedaBoton = document.querySelector('#busquedaBoton');

window.addEventListener('DOMContentLoaded',async()=>{

     const datos = await fecthDatos();
    console.log(datos)
    Categoria(datos);
    Buscar(datos);
    
})

async function fecthDatos (){

    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    return await response.json();
}



//otro fetch
    busquedaBoton.addEventListener('click', async ()=>{ 
    
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${busqueda.value}`);
        const datos = await response.json();
       console.log(datos);
       click(datos);
        
    });

    function click(datos){
        
        datos.result.forEach(element => {
        const p = document.createElement('p');
        p.textContent=element.value;
        container.appendChild(p);

        });
    }

function Categoria(datos) {
    datos.forEach(element => {
        const p = document.createElement('p');
        p.textContent=element;
        container.appendChild(p);
    });
}


function Buscar(datos) {
    buscarBoton.addEventListener('click',()=>{
        const filtrados = datos.filter(element => element == buscarInput.value);
        console.log(buscarInput.value)
        borrarNodo(container);
        Categoria(filtrados);
    })
}


function borrarNodo(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}
