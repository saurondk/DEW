const container = document.querySelector('.container');
const buscarBoton= document.querySelector('.buscarBoton');
const buscarInput = document.querySelector('.buscarInput');
const buscarGenero = document.querySelector('.buscarGenero');

window.addEventListener('DOMContentLoaded', async () => {
  const datos = await fecthDatos();
  
  creaTarjeta(datos);
  Filtrar(datos);
  filtrarGenero(datos);
 
});

async function fecthDatos(){
   const response = await fetch('https://randomuser.me/api/?results=50');
   if (response.status === 400) {
        container.innerHTML = ('Fallo al encontrar los datos')
        console.log(response.status);
   }else if (response.status ===404) {
    container.innerHTML = ('Fallo al encontrar los datos')
    console.log(response.status);
   }
   return await response.json();
   

}

function creaTarjeta(datos){
   
        datos.results.forEach(element => {
        
        let cardPadre = document.createElement('div');
        let cardbody = document.createElement('div');
        let img = document.createElement('img');
        let cardTitle = document.createElement('h3');
        let nombre = document.createElement('p');

        cardTitle.textContent = element.name.first +' '+ element.name.last;
        img.setAttribute('src', element.picture.large);
        nombre.textContent ='Gender:' +element.gender + ' AGE: ' + element.dob.age;    

        container.appendChild(cardPadre);
        cardPadre.appendChild(cardTitle);
        cardPadre.appendChild(cardbody);
        cardbody.appendChild(img);
        cardbody.appendChild(nombre)
    });
   
}
function filtrarGenero(datos){
    console.log(datos);
    let control= true;
    buscarGenero.addEventListener('click', ()=>{
        
      
        if (control==true) {
            const filtrados = datos.results.filter(element=> element.gender == 'male');
            borrarNodo(container);
            creaTarjetaFiltro(filtrados);
            control=false;
        } else {
            const filtrados = datos.results.filter(element=> element.gender == 'female');
            borrarNodo(container);
            creaTarjetaFiltro(filtrados);
            control=true;
        }
       
    });



}


function Filtrar(datos) {
    console.log(datos);
     buscarBoton.addEventListener('click',()=>{

        const filtrados = datos.results.filter(element => element.name.first == buscarInput.value);
        
        borrarNodo(container);
        creaTarjetaFiltro(filtrados);
})
}
function creaTarjetaFiltro(datos){
   
    datos.forEach(element => {
    console.log(element);
    let cardPadre = document.createElement('div');
    let cardbody = document.createElement('div');
    let img = document.createElement('img');
    let cardTitle = document.createElement('h3');
    let nombre = document.createElement('p');

    cardTitle.textContent = element.name.first +' '+ element.name.last;
    img.setAttribute('src', element.picture.large);
    nombre.textContent ='Gender:' +element.gender + ' AGE: ' + element.dob.age;    

    container.appendChild(cardPadre);
    cardPadre.appendChild(cardTitle);
    cardPadre.appendChild(cardbody);
    cardbody.appendChild(img);
    cardbody.appendChild(nombre)
});

}
function borrarNodo(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}