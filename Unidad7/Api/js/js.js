
const options = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',

  }
};
let arraypedido = [];

if (checkCookie(pedido) != null) {
  arraypedido = getCookie(pedido);

}
cargarCookieInicio();
contador();

const video = document.querySelector('.videoWrapper');
let datos;
const container = document.querySelector('.container'); // se usa en crear tarjeta se pone aqui para ambito global
const modal = document.querySelector('#modal');
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

    carrito(datos);
  })


  .catch(err => {
    const container = document.querySelector('.container');
    const error = document.createElement('div');
    error.textContent = err;
    container.appendChild(error);
  });

//creamos la tarjeta que va a conteneer todas las fotos y la informacion de la API
async function creaTarjeta(variablefetched) {
  await variablefetched; // espera span que los datos se obtengan antes de modificarlos
  datos.amiibo.map(figura => {

    const card = document.createElement('div');
    card.classList.add('card','col-lg-2','col-md-4','col-sm-8','col-8','ms-5','mt-2');
    card.classList.add('tarjeta');
    

    const img = document.createElement('img');
    img.src = figura.image;
    img.classList.add('card-img-top');
    img.classList.add('img-fluid');
    img.setAttribute('style','padding:1em;');
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
    boton.setAttribute('id', `${figura.tail}`);

    boton.textContent = 'Añadir';
////////////////////creamos el boton de mas info con las clases del modal//////////////////
    const botonInfo = document.createElement('span');
    botonInfo.setAttribute('class', 'btn btn-primary  ms-1');
    botonInfo.setAttribute('data-bs-toggle','modal');
    botonInfo.setAttribute('data-bs-target','#exampleModal');
    botonInfo.setAttribute('id', `${figura.tail+1}`);
    botonInfo.textContent= '+ INFO';

    container.appendChild(card);
    card.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(boton);
    card.appendChild(cardBody);
    cardBody.appendChild(botonInfo);
    


  });
//////////////////////Creamos boton +info/////////////////////////////////
datos.amiibo.forEach(element=>{
const botontailPlus1 = document.getElementById(`${element.tail+1}`);
botontailPlus1.addEventListener('click', function() {
  console.log(element.tail);
  if(botontailPlus1.id==element.tail+1){
    const divPadreExistente = modal.querySelector('.card');
    if (divPadreExistente) {
      modal.removeChild(divPadreExistente);
    }
    const divPadre = document.createElement('div');
    divPadre.setAttribute('class','card');
    divPadre.setAttribute('style','width:28rem;');
    const img = document.createElement('img');
    img.setAttribute('class','img-top');
    img.src=element.image;
    const body = document.createElement('div');
    body.setAttribute('class','card-body');
    const title = document.createElement('h5');
    title.textContent= 'Nombre del articulo: '+ element.name;
    const series = document.createElement('p');
    series.setAttribute('class','card-text');
    series.textContent= 'Serie del Articulo: '+ element.gameSeries
    modal.appendChild(divPadre);
    divPadre.appendChild(img);
    divPadre.appendChild(body);
    body.appendChild(title);
    body.appendChild(series);
  }
  
})


})

////////////////////creamos boton añadir en la tarjeta/////////////////////////////////////
  datos.amiibo.forEach(element => {
    const botontail = document.getElementById(`${element.tail}`);
    botontail.addEventListener('click', function () {
      arraypedido.push(element.tail);
      setCookie('pedido', JSON.stringify(arraypedido), 7);
      console.log(arraypedido);
      carrito(datos); //cargamos los posibles articulos que hubieran en el carrito
      cargarCookieInicio(); //cargamos la cookie

    });

  });
}

function carrito(datos) {
  if (checkCookie('pedido') == null) {
    console.log("el pedido aun no está");

  } else {
    var tabla = document.getElementById("tablaPedido"); //invocamos a la tabla del offcanvas
    borrarNodo(tabla);// en caso de que hubiera una tabla anterior la borramos
    tabla.innerHTML = "<tr><td>Articulo</td><td>Id</td><td>Borrar</td></tr>"; // le añadimos a esa tabla los tr y td con los nombre de  los campos
    arraypedido.forEach(element => {//recorrmos el arrya y cremos elementos para su contenido
      var tr = document.createElement("tr");
      var td = "";
      var td2 = "";
      var td3 = "";
      datos.amiibo.forEach(elementos => { // hacemos un fetch de los datos que nos da la api y los comprobamos con los que tiene el array de pedidos si son iguales cremaos los nodos
        if (element == elementos.tail) {
          td = document.createElement("td");// añadimos los elementos en el carrito
          texto = document.createTextNode(elementos.name);
          td.appendChild(texto);
          tr.appendChild(td);
          td2 = document.createElement("td");
          texto = document.createTextNode(elementos.tail)
          td2.appendChild(texto);
          tr.appendChild(td2);
          //creamos botton para borrar
          td3 = document.createElement("td");
          borrarButton = document.createElement("button");
          borrarButton.innerHTML += "X";
          borrarButton.classList.add("borrar");

          td3.appendChild(borrarButton);
          tr.appendChild(td3);
          //logica para borrar el nodo
          borrarButton.addEventListener('click', function () {
            borrarNodo(tr);
            arraypedido = arraypedido.filter(i => i !== element);
            setCookie('pedido', JSON.stringify(arraypedido), 7);
            window.location.reload();

          });
        }
        tabla.appendChild(tr);
      });
    });


  }
}

creaTarjeta(fetchData);
// creamos un listener para la busqueda en la interfaz
buscar.addEventListener('click', personaje);

function personaje() {

  
  cargarCookieInicio();
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
  creaTarjeta(fetchDataPersonaje); // llamamos a la funcion crear tarjeta pero solo con el personaje que se le pasa por el input


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
//funcion para que recarge la cookie al inicio de carga.
function cargarCookieInicio() {
  if (checkCookie('pedido') == null) {
    console.log("el pedido aun no está");

  } else {
    var readCookie = getCookie('pedido');
    arraypedido = JSON.parse(readCookie);
    console.log(arraypedido)
    contador();

  }
  
}











