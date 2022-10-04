var palabrasecreta="ventanas";
var palabrasecreta2="blancanieves"

var pista1="Un sistema operativo se llama como la palabra";
var pista2="Una madrastra que es infernal ,una manzana que es mortal,con un beso de amor se salvará";

var solucion="Enhorabuena has acertado la adivinanza";
var prueba="Prueba otra vez";



function pista() {
    alert("Tienes 10 segundos para solucionar la adivinanza")
    setInterval(makeAlert, 10000);
    pista1=prompt(pista1);
    if (pista1==palabrasecreta) {

        document.getElementById("resultado").innerHTML=solucion;
        

    }else{
        document.getElementById("resultado").innerHTML=prueba;
        
    }
    clearInterval(); 
}

function pistados(){
    alert("Tienes 10 segundos para solucionar la adivinanza")
    setInterval(makeAlert, 10000);
    pista2=prompt(pista2);
    if(pista2==palabrasecreta2){

        document.getElementById("resultado").innerHTML=solucion;
        

    }else{
        document.getElementById("resultado").innerHTML=prueba;
    }
    clearInterval(); 
}

function makeAlert(){ 
    alert("Te has pasado de tiempo");
    
};









