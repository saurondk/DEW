

const container = document.querySelector('#container')
window.addEventListener('DOMContentLoaded',async()=>{
   const datos= await fetchdatos();
   
   console.log(datos)
   crearTarjeta(datos);
   datosFiltrados(datos);

})

async function fetchdatos(){

   const response= await fetch('https://fakerapi.it/api/v1/products?_quantity=100');
    return await response.json();

}

function crearTarjeta(datos){

    datos.data.forEach(element => {
       
        const titulo = document.createElement('h2');
        titulo.setAttribute('style','color:red')
        titulo.textContent = element.name;
        const descripcion = document.createElement('p');
        descripcion.textContent = element.description;
        const enlace = document.createElement('a')
        enlace.setAttribute('href',element.images[0].url)
        enlace.textContent='Ver';
        container.appendChild(titulo);
        container.appendChild(descripcion);
        container.appendChild(enlace);
        
    });

    

}
function datosFiltrados(datos){
    buscar.addEventListener('click',()=>{

      const filtrados = datos.data.filter(titulo=>titulo.name == buscarInput.value);
      crearTarjetaFiltrada(filtrados);
    })


}
function crearTarjetaFiltrada(datos){
    borrarNodo(container);
    datos.forEach(element => {
       
        const titulo = document.createElement('h2');
        titulo.setAttribute('style','color:red')
        titulo.textContent = element.name;

        const descripcion = document.createElement('p');
        descripcion.textContent = element.description;
        
        const enlace = document.createElement('a')
        enlace.setAttribute('href',element.images[0].url)
        enlace.textContent='Ver';

        container.appendChild(titulo);
        container.appendChild(descripcion);
        container.appendChild(enlace);
        
    });
}
function borrarNodo(nodo){
    while(nodo.firstChild){
        nodo.removeChild(nodo.firstChild);
    }
}