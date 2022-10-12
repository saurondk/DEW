String.prototype.replaceAt=function(index, character){
    return this.substring(0, index) + character + 
     this.substr(index+character.length); }

const palabras= ['casa','perro','gato','elefante'];
const palabra =palabras[Math.floor(Math.random()*palabras.length)];
let palabaraguion = palabra.replace(/./g,"_ ");
let contadorfallos=5;
document.querySelector('#salida').innerHTML = palabaraguion;
document.querySelector('#comprobar').addEventListener('click', () =>{

const letra = document.querySelector('#letra').value;
    let hafallado = true;
    for (const i in palabra){
        if(letra == palabra[i]){
        palabaraguion = palabaraguion.replaceAt(i*2,letra);
        hafallado=false;
        }
    }
    
    if (hafallado) {
        contadorfallos--;
        document.querySelector('#intentos').innerHTML="Intentos = "+contadorfallos;
        if (contadorfallos==0) {
            alert("Perdiste el juego");
            window.location.reload();

        }
    }else{
        if(palabaraguion.indexOf('_')<0){
            alert('Victoria');
            window.location.reload();
        }
    }

    document.querySelector('#salida').innerHTML = palabaraguion;
    document.querySelector('#letra').value="";
    document.querySelector('#letra').focus();
});

window.onload = updateClock;

var totalTime = 60;

function updateClock() {
document.getElementById('countdown').innerHTML = "Tienes "+totalTime+" segundos para resolver el ahorcado";
if(totalTime==0){
alert('Has perdido');
window.location.reload();
}else{
totalTime-=1;
setTimeout("updateClock()",1000);
}
}

