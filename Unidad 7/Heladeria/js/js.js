let stocks = {
    fruits: ["Fresa", "Uva", "Platano", "Manzana"],
    liquid:["Agua", "hielo"],
    holder:["cono", "vaso","palo"],
    toppings:["chocolate", "Peanuts"],
};



let is_shop_open = true;

function time(ms) {
    return new Promise ((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"));
        }
    });
};




// constantantes que ocultan o muestran
const ocultar = elem => {
    elem.style.display = 'none';   
  }
const mostrar = elem=>{
    elem.style.display= 'flex';
}  


 
let frutas;
let ingredientes;
let ingrediente;
let arrayfrutas=[];
// seccion de ingredientes
enviar.onclick = function(){
frutas =document.querySelectorAll('input[name="fruits"]:checked');
frutas.forEach(element => {
     arrayfrutas.push(element.value);
});
stocks.fruits=arrayfrutas;
ingredientes =document.getElementById('ingredientes');
console.log(frutas);
ocultar(ingredientes);
mostrar(formato);
};

//seccion de formato
let formato;
let recipiente;
formato = document.getElementById('formato'); //para ocultar con click
enviar2.onclick = function(){
recipiente = document.querySelector('input[name="holder"]:checked');
stocks.holder=recipiente.value;
ocultar(formato);  
mostrar(toppings);  
}

//seccion de toppings
let toppings = document.getElementById('toppings'); //para ocultar con click
let cobertura;
finalizar.onclick = function(){
cobertura = document.querySelector('input[name="toppings"]');
console.log(cobertura);   
ocultar(toppings);
kitchen();
}


async function kitchen() {
    
    try{
        await time (1000)
        
        var contenido='Has elegido ';
            stocks.fruits.forEach(element => {
                contenido+=element+', ';
            });   
        contenido += ' procedemos a preparar tu helado.';

        let resultado = document.querySelector('#resultado');
        let h2 =document.createElement('h2');
        h2.textContent=contenido;
        resultado.appendChild(h2);

        await time(3000)
        var contenido2 ='La produccion a comenzado'
        h2.textContent= contenido2;
        
        await time(3000)
        var contenido3='La fruta ha sido cortada'
        h2.textContent = contenido3;

        await time(1000)
        var contenido4= (`${stocks.liquid[0]} y ${stocks.liquid[1]} añadidos.`);
        h2.textContent= contenido4;
        
        await time(1000)
        var contenido5 = 'Mezclando todos los ingredientes'
        h2.textContent = contenido5;
        await time(2000)
        var contenido6 =(`Colocando tu helado en un ${stocks.holder}`);
        h2.textContent = contenido6;    
        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)
    
        await time(2000)
        console.log("Serve Ice Cream")
    }
    catch(error){
        console.log('customer left',error);
    }
    finally{
        console.log('Day ended, shop is closed');
    }
}
