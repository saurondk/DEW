var texto ="Cliente;Localidad;Cuota-Laura;Santander;50-Álvaro;Castro;50-Igor;Castro;60-Ivan;Santander;40-Mónica;Zamora;30-Javi;Bilbao;30-David;Bilbao;50-José Luis;Bilbao;60";
var array1= texto.split("-");
var tabl="";
var tablap="";
var linea=[];
var arraylimpio=[];

var invisible=' <input type="text"  id="prov" hidden>';
invisible+='<button onclick="provincias()" hidden>Buscar</button>';

var visible=' <input type="text" id="prov" >';
visible+='<button onclick="provincias()">Buscar</button>';

for (let index = 0; index < array1.length; index++) {
     var array2= (array1[index].split(";"));
    for (let i = 0; i < array2.length; i++) {
        linea[i]=array2[i];
    }
   arraylimpio[index]=linea;
   linea=[];
}
function usuarios(){
    document.getElementById("cajaprov").innerHTML=invisible;
    var tabl="";
    tabl += "<p> tabla con usuarios:</p> <table style ='border:1px solid black;'>";

    for (let index = 0; index < arraylimpio.length; index++) {
        tabl+="<tr>";
        for (let i = 0; i < arraylimpio[index].length; i++) {
            tabl+="<td>"+arraylimpio[index][i]+"</td>";  
        }
        tabl+="</tr>";
    }
    tabl+="</table>";
    document.getElementById("usuario").innerHTML=tabl;
    
}
function visi(){
    document.getElementById("cajaprov").innerHTML=visible;
}
function provincias(){
    var  provi= document.getElementById("prov").value;
    var tabl="";
    tabl += "<p> tabla con usuarios:</p> <table style ='border:1px solid black;'>";
    tabl +="<tr>"+
    "<td>"+
    "Cliente"+
    "</td>"+
    "<td>"+
    "Localidad"+
   " </td>"+
    "<td>"+
    "Cuota"+
    "</td>"+
    "</tr>";
    arraylimpio.forEach(element => {
       if (provi==element[1]) {
        tabl+="<tr>";
        for (let index = 0; index < element.length; index++) {
            tabl+="<td>"+element[index]+"</td>"   
        }
        tabl+="</tr>";
       } 
       
    });

    tabl+="</table>";
    document.getElementById("usuario").innerHTML=tabl;

    /*for (let index = 0; index < arraylimpio.length; index++) {
        
        if(provi==arraylimpio[1]){
            alert("dentro del if");
        tabl+="<tr>";
        for (let i = 0; i < arraylimpio[index].length; i++) {
            tabl+="<td>"+arraylimpio[index][i]+"</td>";  
        }
        tabl+="</tr>";
     }
    }
    tabl+="</table>";
    document.getElementById("usuario").innerHTML=tabl;*/

    
}

