function multiplicar (){
    var numero=7;
    
    let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`;
    
    tablaMultiplicar+="<ul>";
    for (let i = 0; i <= 10; i++) {
        tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`;
    }
    
    tablaMultiplicar+="</ul>";
    document.getElementById("tabla").innerHTML=tablaMultiplicar;

}
function sumar (){
    var numero=8;
    let tablasumar = `<h2>Tabla de sumar del número ${numero}</h2>`;
    
    tablasumar+="<ul>";
    let i = 0;
    while ( i <= 10) {
        tablasumar += `<li>${numero} + ${i} = ${numero + i}</li>`;
        i++;
    }
    tablasumar+="</ul>";
    document.getElementById("tablas").innerHTML=tablasumar;

}
function dividir (){
    var numero=9;
    let tabladividir = "<h2>Tabla de dividir del número "+numero+"</h2>";
    
    tabladividir+="<ul>";
    let i = 0;
    
    do{
        tabladividir += "<li>"+numero +"/" +i +"=" +numero / i+"</li>";
        i++;
    }
    while ( i <= 10);
    
    
    tabladividir+="</ul>";
    document.getElementById("tablad").innerHTML=tabladividir;
}
function operadores(){

var  operador=125>>3;

document.getElementById("tablae").innerHTML=operador;


var  operador2=40<<2;

document.getElementById("tablaf").innerHTML=operador2;

var  operador3=25>>1;

document.getElementById("tablag").innerHTML=operador3;

var  operador4=10<<4;

document.getElementById("tablah").innerHTML=operador4;
}