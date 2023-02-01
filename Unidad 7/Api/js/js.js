
const options = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',

  }
};
let arraypedido = [];

const video = document.querySelector('.videoWrapper');
const urlacceso = 'http://cors-anywhere.herokuapp.com';
let datos;
const container = document.querySelector('.container'); // se usa en crear tarjeta se pone aqui para ambito global
const fetchData = fetch('https://www.amiiboapi.com/api/amiibo/', options)
  .then(response => response.json())
  .then((data) => datos = data)
  .then(response => {
    //Creamos el contenerdor y el majeo de los errores.

    console.log(response);
    if (response.code === 400) {
      throw new Error('Api no disponible');

    } else if (response.code === 404) {
      throw new Error('No se ha encontrado la url ');
    }


  })








  .catch(err => {
    const container = document.querySelector('.container');
    const error = document.createElement('div');
    error.textContent = err;
    container.appendChild(error);
  });
////////////////////seccion de cookie//////////////////////////////////////////////






//creamos la tarjeta que va span conteneer todas las fotos y la informacion de la API
async function creaTarjeta(variablefetched) {
  await variablefetched; // espera span que los datos se obtengan antes de modificarlos
  datos.amiibo.map(figura => {

    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'col-4', 'mt-2', 'mb-5', 'ms-5',);
    card.classList.add('tarjeta');

    const img = document.createElement('img');
    img.src = figura.image;
    img.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');


    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = 'Serie - ' + figura.amiiboSeries;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = figura.name;

    const boton = document.createElement('span');
    boton.setAttribute('class', 'btn btn-primary');
    boton.setAttribute('id', `${figura.name}`);
   
    boton.textContent = 'Añadir';

    container.appendChild(card);
    card.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(boton);
    card.appendChild(cardBody);


  });

  datos.amiibo.forEach(element => {
    const botontail = document.getElementById(`${element.name}`);
    botontail.addEventListener('click',function(){
      arraypedido.push(element.name +' ' +element.tail);
      setCookie('pedido',JSON.stringify(arraypedido),7);
      contador();
      cargarCookieInicio();
      console.log(arraypedido);
  
    });
  
  });
}

creaTarjeta(fetchData);
// creamos un listener para la busqueda en la interfaz
buscar.addEventListener('click', personaje);

function personaje() {
  var personaje = document.getElementById('buscarPersonaje').value; //cargamos el valor del input
 

  const fetchDataPersonaje = fetch(`https://www.amiiboapi.com/api/amiibo/?name=${personaje}`, options)
    .then(response => response.json())
    .then((data) => datos = data)
    .then(response => {
      //Creamos el contenerdor y el majeo de los errores.

      
      if (response.code === 400) {
        throw new Error('Api no disponible');

      } else if (response.code === 404) {
        throw new Error('No se ha encontrado la url, ten en cuenta que la busqueda de personaje debe de ser exacta por ejemplo : Mario o Luigi. ');
      }




    })

    .catch(err => {
      const container = document.querySelector('.container');
      const error = document.createElement('div');
      error.textContent = err;
      container.appendChild(error);
    });
  borrarNodo(video);
  borrarNodo(container); //borramos la informacion del container 
  creaTarjeta(fetchDataPersonaje); // llamamos span la funcion crear tarjeta pero solo con el personaje que se le pasa por el input
}



// funcion borrar el nodo 
function borrarNodo(nodo) {
  while (nodo.firstChild) {
    nodo.removeChild(nodo.firstChild);
  }
}

/////////////////////////////////////////////series fetch //////////////////////////////////////////////////////////////////


const dropdownMenu = document.querySelector('#series');

const fetchDataCategoria = fetch('https://www.amiiboapi.com/api/amiibo/', options)
  .then(response => response.json())
  .then(data => datos = data)
  .then(response => {
    
    if (response.code === 400) {
      throw new Error('Api no disponible');
    } else if (response.code === 404) {
      throw new Error('No se ha encontrado la URL');
    }


    // Obtener todas las series de juegos únicas
    const uniqueSeries = [...new Set(datos.amiibo.map(amiibo => amiibo.amiiboSeries))];
    uniqueSeries.sort();
    

    // Crear un elemento de lista para cada serie de juegos única
    uniqueSeries.forEach(series => {
      const li = document.createElement('li');
      li.addEventListener('click', () => {


        const fetchCategoria = fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${series}`, options)
          .then(response => response.json())
          .then((data) => datos = data)
          .then(response => {
            //Creamos el contenerdor y el majeo de los errores.

            
            if (response.code === 400) {
              throw new Error('Api no disponible');

            } else if (response.code === 404) {
              throw new Error('No se ha encontrado la url ');
            }
            borrarNodo(video);
            borrarNodo(container);
            creaTarjeta(fetchCategoria);

          })

          .catch(err => {
            const container = document.querySelector('.container');
            const error = document.createElement('div');
            error.textContent = err;
            container.appendChild(error);
          });



      }
      );
      const span = document.createElement('span');
      span.classList.add('dropdown-item');
      span.classList.add('categoriaEnlace');
      span.setAttribute('href', `https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${series}`);// le ponemos el valor de la serie span cada elemento
      span.textContent = series;
      li.appendChild(span);
      dropdownMenu.appendChild(li);

      //creamos un listener para mostrar por categorias

    });
  })
  .catch(err => {
    const error = document.createElement('div');
    error.textContent = err;
    container.appendChild(error);
  });

//////////////////////////////////////////////////cookies //////////////////////////////////
// seteamos la cookies

function setCookie(pedido, value, expiry) {
  const date = new Date();
  date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = pedido + "=" + value + ";" + expires + ";";
}

function getCookie(pedido) {
  return checkCookie(pedido);
}

function checkCookie(pedido) {
  let name = pedido + "=";
  let spli = document.cookie.split(';');
  for (var j = 0; j < spli.length; j++) {
    let char = spli[j];
    while (char.charAt(0) == ' ') {
      char = char.substring(1);
    }
    if (char.indexOf(name) == 0) {
      return char.substring(name.length, char.length);
    }
  }
  return null;
}
//funcion contador para el carrito
function contador() {
  var contador = document.getElementById("contador");
  let cuenta = arraypedido.length;
  contador.innerHTML = cuenta;

}

function cargarCookieInicio() {
  if (checkCookie('pedido') == null) {
    console.log("el pedido aun no está");

  } else {
    var readCookie = getCookie('pedido');
    arraypedido = JSON.parse(readCookie);

  }
}











