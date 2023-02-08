
const titulo = document.querySelector('.tarjeta-head');
const cuerpo = document.querySelector('.tarjeta-body');

window.addEventListener('DOMContentLoaded',async()=>{
   const datos= await fetchdatos();
   console.log(typeof datos)
   console.log(datos)
   crearTarjeta(datos);
})

async function fetchdatos(){

   const response= await fetch('https://fakerapi.it/api/v1/products?_quantity=100');
    return await response.json();

}

function crearTarjeta(datos){

    datos.data.forEach(element => {
        const nombre = document.createElement('div');
        nombre.textContent= element.name;
        nombre.setAttribute('style','color:red');
        titulo.appendChild(nombre);


        const descripcion = document.createElement('div');
        descripcion.textContent=element.description;
        cuerpo.appendChild(descripcion);
        
    });

}