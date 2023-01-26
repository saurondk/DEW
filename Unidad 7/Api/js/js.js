
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'bd8fb086d9msh49ccdf6375fe468p1382f3jsn9a6c66d4e7a5',
    //         'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    //     .then(response => response.json())
    //     .then(data => {
    //         const container = document.querySelector('.container');
    //         console.log(data);
    //         data.forEach(movie => {
    //             const card = document.createElement('div');
    //             card.classList.add('card', 'mb-3','col-4');
    
    //             const img = document.createElement('img');
    //             img.src = movie.image;
    //             img.classList.add('card-img-top');
    //             console.log(img);
    
    //             const cardBody = document.createElement('div');
    //             cardBody.classList.add('card-body');
    
    //             const title = document.createElement('h5');
    //             title.classList.add('card-title');
    //             title.textContent = movie.title;
    
    //             cardBody.appendChild(title);
    //             card.appendChild(img);
    //             card.appendChild(cardBody);
    //             container.appendChild(card);
    //         });
    //     })
    //     .catch(err => console.error(err));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bd8fb086d9msh49ccdf6375fe468p1382f3jsn9a6c66d4e7a5',
            'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?locale=esES', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));