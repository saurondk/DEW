const formulario = document.getElementById("formulario");

enviar.onclick = function() {
   
     var ingredientes=document.querySelectorAll('input[name="ingredientes"]:checked');

    console.log(ingredientes);
    
    var tabla = '<table border="0">';
    ingredientes.forEach(element => {
        tabla += '<tr><td>' + element + '</td></tr>';
        console.log(element.value);
    });

        tabla += '</table>';
    
    
}