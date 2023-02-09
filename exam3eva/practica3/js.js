const container = document.querySelector('.container');
const buscarInput = document.querySelector('#buscarInput');
const buscarBoton = document.querySelector('#buscarBoton');

window.addEventListener('DOMContentLoaded',async()=>{

     const datos = await fecthDatos();
    console.log(datos)
    Categoria(datos);
})

async function fecthDatos (){

    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    return await response.json();
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
        Categoria(filtrados);
    })
}
function borrarNodo