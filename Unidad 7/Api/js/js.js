
    const options = {
        method: 'GET',
        headers: {
            
        }
    };
   
    let datos;
    const container = document.querySelector('.container'); // se usa en crear tarjeta se pone aqui para ambito global
   const fetchData =fetch('https://www.amiiboapi.com/api/amiibo/', options)
        .then(response => response.json())
        .then ((data)=>datos = data)
        .then(response => {
            //Creamos el contenerdor y el majeo de los errores.
            
            console.log(response);  
            if(response.code === 400){
                throw new Error( 'Api no disponible');
                
            } else if(response.code === 404){
                throw new Error( 'No se ha encontrado la url ');
            }  
            
            
          
          
        })
        
        .catch(err => {
        const container = document.querySelector('.container');     
        const error = document.createElement('div');
        error.textContent=err;
        container.appendChild(error);
        });


  //creamos la tarjeta que va a conteneer todas las fotos y la informacion de la API
        async function creaTarjeta(variablefetched) {
            await variablefetched; // espera a que los datos se obtengan antes de modificarlos
            datos.amiibo.map(figura => {
                
                const card = document.createElement('div');
                card.classList.add('card', 'mb-3','col-4','mt-2','mb-5','ms-5',);
                card.classList.add('tarjeta');
    
                const img = document.createElement('img');
                img.src = figura.image;
                img.classList.add('card-img-top');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                
    
                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = 'Serie - '+figura.amiiboSeries;

                const text = document.createElement('p');
                text.classList.add('card-text');
                text.textContent = figura.name;

                const boton = document.createElement('a');
                boton.setAttribute('class', 'btn btn-primary');
                boton.setAttribute('id',`${figura.tail}`);
                console.log(figura.tail)
                boton.textContent='Añadir';

                container.appendChild(card);
                card.appendChild(img);
                cardBody.appendChild(title);
                cardBody.appendChild(text);
                cardBody.appendChild(boton);
                card.appendChild(cardBody);

                
            });
         
          }

creaTarjeta(fetchData);
        // creamos un listener para la busqueda en la interfaz
        buscar.addEventListener('click',personaje);

        function personaje (){
        var personaje = document.getElementById('buscarPersonaje').value; //cargamos el valor del input
        console.log(personaje);

         const fetchDataPersonaje  =fetch(`https://www.amiiboapi.com/api/amiibo/?name=${personaje}`, options)
         .then(response => response.json())
         .then ((data)=>datos = data)
         .then(response => {
             //Creamos el contenerdor y el majeo de los errores.
             
             console.log(response);  
             if(response.code === 400){
                 throw new Error( 'Api no disponible');
                 
             } else if(response.code === 404){
                 throw new Error( 'No se ha encontrado la url, ten en cuenta que la busqueda de personaje debe de ser exacta por ejemplo : Mario o Luigi. ');
             }  
             
             
    
         
         })
         
         .catch(err => {
         const container = document.querySelector('.container');     
         const error = document.createElement('div');
         error.textContent=err;
         container.appendChild(error);
         });
         borrarNodo(container); //borramos la informacion del container 
         creaTarjeta(fetchDataPersonaje); // llamamos a la funcion crear tarjeta pero solo con el personaje que se le pasa por el input
        }



// funcion borrar el nodo 
        function borrarNodo(nodo) {
            while (nodo.firstChild) {
              nodo.removeChild(nodo.firstChild);
            }
          }

     

const dropdownMenu = document.querySelector('#categoria');

const fetchDataCategoria = fetch('https://www.amiiboapi.com/api/amiibo/', options)
  .then(response => response.json())
  .then(data => datos = data)
  .then(response => {
    console.log(response);
    if (response.code === 400) {
      throw new Error('Api no disponible');
    } else if (response.code === 404) {
      throw new Error('No se ha encontrado la URL');
    }

  
    // Obtener todas las series de juegos únicas
    const uniqueSeries = [...new Set(datos.amiibo.map(amiibo => amiibo.gameSeries))];
    uniqueSeries.sort();
    console.log(uniqueSeries);

    // Crear un elemento de lista para cada serie de juegos única
    uniqueSeries.forEach(series => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.classList.add('dropdown-item');
      a.classList.add('categoriaEnlace');
      a.setAttribute('href',`https://www.amiiboapi.com/api/amiibo/?gameseries=${series}`);// le ponemos el valor de la serie a cada elemento
      a.textContent = series;
      li.appendChild(a);
      dropdownMenu.appendChild(li);
      console.log(a);
      //creamos un listener para mostrar por categorias
      
    });
  })
  .catch(err => {
    const error = document.createElement('div');
    error.textContent = err;
    container.appendChild(error);
  });

