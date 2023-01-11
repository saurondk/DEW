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
            respuesta.innerHTML += `<div class="card mb-3 me-3" style="width: 18rem;"> 
            <img src="${imagen}" class="card-img-top" alt="${titulo}">
            <div class="card-body"><h5 class="card-title">${titulo}</h5>
            <p class="card-text">${element.idDrink}</p>
            <a href="#"  id="${element.idDrink}" class="btn btn-primary">Pedir</a>
            </div>
            </div>`
            
           
        });
       respuesta.innerHTML += '</div>';
      cargarCookieInicio();
      contador();    
    }
    
    carrito(data);
     enviar(data);

} )


function enviar(data) {
    data.drinks.forEach( element => {
    const botonid= document.getElementById(`${element.idDrink}`);  
        botonid.addEventListener('click', function(){
                arrayp.push(element.idDrink);
                setCookie('pedido',JSON.stringify(arrayp),7); //añadimos la cookie una vez ya hemos creado los set get y check.
                contador();
                console.log(arrayp);
            });
        });
}

// seteamos la cookies
function setCookie(pedido, value, expiry) {
    const date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
    var expires = "expires="+date.toUTCString();
    document.cookie = pedido + "=" + value + ";" + expires + ";";
  }

  function getCookie(pedido) {
    return checkCookie(pedido);
  }

  function checkCookie(pedido) {
    let name = pedido + "=";
    let spli = document.cookie.split(';');
    for(var j = 0; j < spli.length; j++) {
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
  
  checkCookie();

  function contador (){
    var contador = document.getElementById("contador");
    let cuenta = arrayp.length;
    contador.innerHTML=cuenta;

  }

  function carrito(data){
    if (checkCookie('pedido')==null) {
      console.log("el pedido aun no está");

  }else{
    var tabla = document.getElementById("tablaPedido");
    arrayp.forEach(element => {
      var tr = document.createElement("tr");
      var td="";
      var td2="";
      data.drinks.forEach(elementos => {
        if (element==elementos.idDrink){
          td= document.createElement("td");
          texto = document.createTextNode(elementos.strDrink);
          td.appendChild(texto);
          tr.appendChild(td);
          td2 = document.createElement("td");
          texto = document.createTextNode(elementos.idDrink)
          td2.appendChild(texto);
          tr.appendChild(td2);
        }
        tabla.appendChild(tr);
      });
    });
    

  }
  }


  function cargarCookieInicio() {	
    if (checkCookie('pedido')==null) {
      console.log("el pedido aun no está");

  }else{
    var readCookie = getCookie('pedido');
    arrayp= JSON.parse(readCookie);

  }}