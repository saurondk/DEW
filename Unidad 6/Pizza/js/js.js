const formulario = document.getElementById("formulario");

enviar.onclick = function() {
   
     var ingredientes=document.querySelectorAll('input[name="ingredientes"]:checked');

    console.log(ingredientes);
    
    var tabla =document.querySelector('#caja');
     var th=document.createElement('th');
        th.textContent='Los Ingredientes para tu pizza :';
        tabla.appendChild(th);
    ingredientes.forEach(element => {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = element.value;
        tabla.appendChild(tr);
        tr.appendChild(td);

        console.log(tr);
        console.log(td);
        console.log(element.value);
    });

        
    
    
}