
const tabla = document.getElementById('table');
let input =document.querySelector('#search')
let noticia=document.querySelector('#noticias') 

window.addEventListener('DOMContentLoaded',async ()=>{
    const datos = await data();
    crearTabla(datos);
    noticiasFiltradas(datos);
   })  


async function data(){
           const response= await fetch('https://newsapi.org/v2/everything?q=%22+tecnology+%22&languaje=es&apiKey=3538a4d9cd27480b9f206060fdb9fbdd')
            return await response.json();
        }

   
const botonBuscar = document.getElementById('buscar');

   function noticiasFiltradas(datos){
    botonBuscar.addEventListener('click',()=>{
        const datosFiltrados = datos.articles.filter(escritor=>escritor.author == search.value);
        crearTablaFiltro(datosFiltrados);
    })
   }






   function crearTabla(datos){
    console.log(datos)

                datos.articles.forEach(element => {

                    const fila = document.createElement('tr');
                    const columna = document.createElement('td');
                    const columna2=document.createElement('td');
                    const columna3=document.createElement('td');
                    columna3.textContent=element.description
                    columna2.textContent=element.title;
                    columna.textContent=element.author;

                    tabla.appendChild(fila);
                    fila.appendChild(columna);
                    fila.appendChild(columna2);
                    fila.appendChild(columna3);
                });
   }
   function crearTablaFiltro(datos){
    console.log(datos)
                borrarNodo(tabla);
                datos.forEach(element => {

                    const fila = document.createElement('tr');
                    const columna = document.createElement('td');
                    const columna2=document.createElement('td');
                    const columna3=document.createElement('td');
                    columna3.textContent=element.description
                    columna2.textContent=element.title;
                    columna.textContent=element.author;

                    tabla.appendChild(fila);
                    fila.appendChild(columna);
                    fila.appendChild(columna2);
                    fila.appendChild(columna3);
                });
   }

   function borrarNodo(nodo){
    while(nodo.firstChild){
        nodo.removeChild(nodo.firstChild)
    }
   }