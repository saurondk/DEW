var texto ="Cliente;Localidad;Cuota-Laura;Santander;50-Álvaro;Castro;50-Igor;Castro;60-Ivan;Santander;40-Mónica;Zamora;30-Javi;Bilbao;30-David;Bilbao;50-José Luis;Bilbao;60";
var array1= texto.split("-");
var tabl="";
var linea=[];
var arraylimpio=[];

var invisible=' <input type="text"  id="prov" hidden>';
invisible+='<button onclick="provincias()" hidden>Buscar Provincias</button>';

var visible=' <input type="text" id="prov" >';
visible+='<button onclick="provincias()">Buscar Provincia</button>';

var visibleC='<input type="text"  id="cuot">';visibleC+='<button onclick="cuota()">Buscar Cuota</button>';
var invisibleC='<input type="text"  id="cuot" hidden>';invisibleC+='<button onclick="cuota()">Buscar Cuota</button>';


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
    document.getElementById("cajacuota").innerHTML=""; 
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
function visip(){
    document.getElementById("cajaprov").innerHTML=visible;
    document.getElementById("cajacuota").innerHTML=""; 
    
}
function visic(){
    document.getElementById("cajaprov").innerHTML="";
    document.getElementById("cajacuota").innerHTML=visibleC;
    
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

   //alternativa

   /* arraylimpio.forEach(element => {
       if (provi==element[1]) {
        tabl+="<tr>";
        for (let index = 0; index < element.length; index++) {
            tabl+="<td>"+element[index]+"</td>"   
        }
        tabl+="</tr>";
       } 
       
    });

    tabl+="</table>";
    document.getElementById("usuario").innerHTML=tabl;*/

    for (let index = 0; index < arraylimpio.length; index++) {
        
        if(provi==arraylimpio[index][1]){
            
        tabl+="<tr>";
        for (let i = 0; i < arraylimpio[index].length; i++) {
            tabl+="<td>"+arraylimpio[index][i]+"</td>";  
        }
        tabl+="</tr>";
     }
    }
    tabl+="</table>";
    document.getElementById("usuario").innerHTML=tabl;
}

function cuota(){
document.getElementById("cajaprov").innerHTML=invisible;
var cuota=document.getElementById("cuot").value;
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
         for (let index = 0; index < arraylimpio.length; index++) {
        
            if(cuota==arraylimpio[index][2]){
                
            tabl+="<tr>";
            for (let i = 0; i < arraylimpio[index].length; i++) {
                tabl+="<td>"+arraylimpio[index][i]+"</td>";  
            }
            tabl+="</tr>";
         }
        }
        tabl+="</table>";
        document.getElementById("usuario").innerHTML=tabl;
}
