 var colorSeleccionado = "yellow";
 function creatabla() {
    
var contenedor= document.querySelector('#zonadibujo');
var table = document.createElement('table');
table.style.border="1px solid black";
contenedor.appendChild(table);
    
for (let i = 0; i < 30;) {

        var tr = document.createElement('tr');
        table.appendChild(tr);
        tr.style.height = '10px';
        tr.style.width = '10px';
        tr.style.border = '1px solid black';

        for (let j = 0; j < 30; j++) {

            let td = document.createElement('td');
            tr.appendChild(td);
            td.style.border = '1px solid black';
            td.style.height = '10px';
            td.style.width = '10px';
          
           
            td.addEventListener('click', function(){
                td.style.backgroundColor=(colorSeleccionado);
                
            });

        }
        
        i++;
        
        
    };
 
 }

var color=document.querySelector(".colores");
var verde = document.querySelector(".color2");
verde.addEventListener('click', function (){

    console.log(color.children);
    for (let i = 0; i < 6; i++) {
        var aux =i+1;
        color.children[i].className="color"+aux; 
    }
    
    console.log(color.children);
    verde.classList.add("seleccionado");
    colorSeleccionado="green";

});
 

var amarillo = document.querySelector(".color1");
amarillo.addEventListener("click", function(){
    
    
    for (let i = 0; i < 6; i++) {
        var aux =i+1;
        color.children[i].className="color"+aux; 
    }
    
    
    amarillo.classList.add("seleccionado");
    colorSeleccionado= "yellow";
    
});

var negro = document.querySelector(".color3");
negro.addEventListener("click", function(){
    
    
    for (let i = 0; i < 6; i++) {
        var aux =i+1;
        color.children[i].className="color"+aux; 
    }
    
    
    negro.classList.add("seleccionado");
    colorSeleccionado= "black";
    
});

var rojo = document.querySelector(".color4");
rojo.addEventListener("click", function(){
    
    
    for (let i = 0; i < 6; i++) {
        var aux =i+1;
        color.children[i].className="color"+aux; 
    }
    
    
    rojo.classList.add("seleccionado");
    colorSeleccionado= "red";
    
});

var blue = document.querySelector(".color5");
blue.addEventListener("click", function(){
    
    
    for (let i = 0; i < 6; i++) {
        var aux =i+1;
        color.children[i].className="color"+aux; 
    }
    
    
    blue.classList.add("seleccionado");
    colorSeleccionado= "blue";
    
});

var blanco = document.querySelector(".color6");
blanco.addEventListener("click", function(){
    
    
    for (let i = 0; i < 6; i++) {
        var aux =i+1;
        color.children[i].className="color"+aux; 
    }
    
    
    blanco.classList.add("seleccionado");
    colorSeleccionado= "white";
    
});