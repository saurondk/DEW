function mayormenor(){
    let numero1= window.prompt("Introduce un numero","0");
    let numero2= window.prompt("Introduce otro numero","0");
    parseInt(numero1);
    parseInt(numero2);

    if(numero1>numero2){
        document.getElementById("1").innerHTML="El primer numero es mayor que el segundo.";}
    if(numero2>numero1){
        document.getElementById("2").innerHTML="El segundo numero es mayor que el primero.";}
    if(numero1==numero2){
        document.getElementById("3").innerHTML="Los numeros son iguales.";}
}