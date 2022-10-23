function calculadoraimc(){
var altura;
var peso;
var imc;
    do {
        altura= prompt("Introduce tu altura en cm");
        peso=prompt("Introduce tu peso en kg");
    } while (isNaN(altura)||isNaN(peso));
   
    altura = altura/100;
    imc= peso/(altura**2);
    if (imc<16) {
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:red>"+imc + " estas en infrapeso (delgadez severa)</b>.";
    } else if(imc>=16 && imc<16.99){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:yellow>"+imc + " estas en infrapeso (delgadez moderada).</b> ";
        
    }else if(imc>=17 && imc<18.49){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:green>"+imc + " estas en infrapeso (delgadez aceptable).</b>";
        
    }else if(imc>=18.5 && imc<24.99){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:green>"+imc + " Peso normal.</b>";
        
    }else if(imc>=25 && imc<29.99){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:orange>"+imc + " estas en sobrepeso .</b>";
        
    }else if(imc>=30 && imc<34.99){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:red>"+imc + " estas en sobrepeso Obeso tipo I.</b>";
        
    }
    
    else if(imc>=35 && imc<40){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:red>"+imc + " estas en sobrepeso Obeso tipo II.</b>";
        
    }else if(imc<40){
        document.getElementById("imc").innerHTML=
        "<p>Tu altura es de "+altura+" metros. </p>"+
        "<p>Tu Peso es de "+peso+" kg. <p>"+
        "Tu indice de masa corporal es <b style=color:red>"+imc + " estas en sobrepeso Obeso tipo III.</b>";
        
    }
   

}