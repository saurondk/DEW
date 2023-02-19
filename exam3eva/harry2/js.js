
const container = document.querySelector('.container');
const botonBuscar=document.querySelector('.botonBuscar');
const inputBuscar =document.querySelector('.inputBuscar');


window.addEventListener('DOMContentLoaded', async()=>{

const datos =  await Datos();
console.log(datos);
crearTarjeta(datos);
Filtrar(datos);
seleccion(datos);
});

 async function  Datos() {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
        if (response.statusCode == 400) {
            container.innerHTML='Bad request';
        } else if(response.statusCode == 404){
            container.innerHTML='Not found';
        }
    return await response.json();
}

function crearTarjeta(datos) {

    datos.forEach(element => {
        let cardPadre = document.createElement('div');
        let cardTitle = document.createElement('h3');
        let cardBody = document.createElement('div');
        let cardImg = document.createElement('img');
        let cardFooter = document.createElement('p');
        let cardFooter2 = document.createElement('p');
        
        container.appendChild(cardPadre);
        cardPadre.appendChild(cardTitle);
        cardPadre.appendChild(cardBody);
        cardBody.appendChild(cardImg);
        cardPadre.appendChild(cardFooter);
        cardPadre.appendChild(cardFooter2);

        cardTitle.textContent= element.actor;
        cardImg.setAttribute('src', element.image);
        cardFooter.textContent='Casa:'+ element.house;
        cardFooter2.textContent='Fecha de nacimiento: '+ element.dateOfBirth;



    });
}
function Filtrar(datos) {
    botonBuscar.addEventListener('click',()=>{
        const filtrados = datos.filter(element=>element.actor.toLowerCase().includes(inputBuscar.value.toLowerCase()));
        borrarNodo(container);
        crearTarjeta(filtrados);

    });
}


function borrarNodo(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}

const select = document.querySelector('#genero');

function seleccion(datos) {
    let valores = ['male', 'female'];

    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');

    opt1.setAttribute('value', valores[0]);
    opt2.setAttribute('value', valores[1]);
    opt1.textContent = 'Masculino';
    opt2.textContent = 'Femenino';

    select.appendChild(opt1);
    select.appendChild(opt2);

    select.addEventListener('change', () => {
        const filtrados = datos.filter(element => element.gender == select.value);
        console.log(filtrados);
        borrarNodo(container);
        crearTarjeta(filtrados);
    });
}

