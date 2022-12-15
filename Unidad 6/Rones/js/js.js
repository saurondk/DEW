var respuesta = document.getElementById('respuesta');
var arrayp =[];

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
.then (res=> res.json())
.then(data=>{

    console.log(data);
    if(data=='error'){
        respuesta.innerHTML = '<div class="alert alert-danger" role="alert> llena todos los campos </div>'

    }else{
        
        respuesta.innerHTML += '<div class="card-deck">'
        data.drinks.forEach( element => {
            var imagen = element.strDrinkThumb;
            var titulo = element.strDrink;
            respuesta.innerHTML += `<div class="card" style="width: 18rem;"> 
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body"><h5 class="card-title">${titulo}</h5>
            <p class="card-text">${element.idDrink}</p>
            <a href="#"  id="${element.idDrink}" class="btn btn-primary">Añadir</a>
            </div>
            </div>`
           

        
           
        });
       
        
    }
    respuesta.innerHTML += '</div>';
     enviar(data);
} )
function enviar(data) {
    data.drinks.forEach( element => {
    const botonid= document.getElementById(`${element.idDrink}`);
         
        botonid.addEventListener('click', function(){
                arrayp.push(element.idDrink);
                console.log(arrayp);
            });
        });
}