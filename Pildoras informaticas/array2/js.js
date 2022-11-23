
var array = [];
for (let i = 0; i < 10; i++) {
    var num = Math.random()*10;
    num = Math.floor(num); 
    array.push(num);
    
}
var array2=array.slice().sort();




enviar.onclick=function(){
    
    
     var contenido="<ul>";
       array2.forEach(element => {
        contenido+="<li>"+element+"</li>";
       });

      contenido+="</ul>";
      document.getElementById("resultado").innerHTML=contenido;
      
}