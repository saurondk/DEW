
    const options = {
        method: 'GET',
        headers: {
            
        }
    };
    let datos;

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
            
            
            //creamos la tarjeta que va a conteneer todas las fotos y la informacion de la API
          
        
        })
        
        .catch(err => {
        const container = document.querySelector('.container');     
        const error = document.createElement('div');
        error.textContent=err;
        container.appendChild(error);
        });



        async function creaTarjeta() {
            await fetchData; // espera a que los datos se obtengan antes de modificarlos
            datos.amiibo.map(figura => {
                const container = document.querySelector('.container');
                const card = document.createElement('div');
                card.classList.add('card', 'mb-3','col-4','mt-2','mb-5');
                card.setAttribute('style', 'width: 200px; height:500px;')
    
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
                boton.textContent='Añadir';

                container.appendChild(card);
                card.appendChild(img);
                cardBody.appendChild(title);
                cardBody.appendChild(text);
                cardBody.appendChild(boton);
                card.appendChild(cardBody);

                
            });
          
          }
creaTarjeta();
        
          buscar.addEventListener('click',bucapersonaje);

        function bucapersonaje() {
            let personaje = document.getElementById('buscarPersonaje').value;

            fetch(`https://www.amiiboapi.com/api/amiibo/?name=${personaje}`, options)
            .then(response => response.json())
            
            .then(response => {
                //Creamos el contenerdor y el majeo de los errores.
                
                console.log(response);  
                if(response.code === 400){
                    throw new Error( 'NO tienes permisos para accedera a este contenido.' );
                    
                } else if(response.code === 404){
                    throw new Error( 'No se ha encontrado la url ');
                }  
                
                
                //creamos la tarjeta que va a conteneer todas las fotos y la informacion de la API
              datos.amiibo.map(figura => {
                const container = document.querySelector('.container');
                const card = document.createElement('div');
                card.classList.add('card', 'mb-3','col-4','mt-2','mb-5');
                card.setAttribute('style', 'width: 200px; height:500px;')
    
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
                boton.textContent='Añadir';

                container.appendChild(card);
                card.appendChild(img);
                cardBody.appendChild(title);
                cardBody.appendChild(text);
                cardBody.appendChild(boton);
                card.appendChild(cardBody);

                
            });
            
            })
            
            .catch(err => {
            const container = document.querySelector('.container');     
            const error = document.createElement('div');
            error.textContent=err;
            container.appendChild(error);
            });
        }