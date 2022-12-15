 function creatabla() {
    
    var contenedor= document.querySelector('#zonadibujo');
var table = document.createElement('table');
table.style.border="1px solid black";
contenedor.appendChild(table);
    
for (let i = 0; i <= 30;) {

        var tr = document.createElement('tr');
        table.appendChild(tr);
        tr.style.height = '10px';
        tr.style.width = '10px';
        tr.style.border = '1px solid black';

        for (let j = 0; j <= 30; j++) {
            var td = document.createElement('td');
        
            tr.appendChild(td);
            td.style.border = '1px solid black';
            td.style.height = '10px';
            td.style.width = '10px';
        }
        i++;

        
    };
    
 }

 
