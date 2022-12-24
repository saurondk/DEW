let tabla = document.querySelector('#resultado');
console.log(tabla);

function tabla_multiplicar(num) {
    let table = document.createElement('table');
    let th = document.createElement('th');
    tabla.appendChild(table);
    table.appendChild(th);
    th.textContent='Tabla de multiplicar del '+ num;

    for (let i = 0; i <= 10; i++) {
        let td = document.createElement('td');
        th.appendChild(td);
        td.textContent= num*i;
        
    }
}
 
var elementoCreado = false;
var elementoCreado2=false;
var elementoCreado3=false;

let seven =document.getElementById("7");
seven.addEventListener("click", function() {
   if (elementoCreado) {
    return;
   }
    tabla_multiplicar(7);
    elementoCreado=true;
  });
  document.getElementById("8").addEventListener("click", function() {
    if (elementoCreado2) {
        return;
       }
    
    tabla_multiplicar(8);
    elementoCreado2=true;

  });
  document.getElementById("9").addEventListener("click", function() {
    if (elementoCreado3) {
        return;
       }
    tabla_multiplicar(9);
    elementoCreado3=true;
  });