const saludar = () => {

    alert('Tortillaaaa');
}
function receta  ()  {
    do {
        dato=window.prompt("Introduce el numero de comensales", "1");  
    } while (!Number(dato));
    
    var papas=dato*500;
    document.getElementById("papas").innerHTML= papas+" gr de papas";
    if(papas >= 1000){
        papas=papas/1000;
        document.getElementById("papas").innerHTML= papas +"kg de papas"
    }

    document.getElementById("aceite").innerHTML=500*dato +" ml de aceite";
    var aceite=500*dato;
    if (aceite >=1000){
        aceite=aceite/1000;
        document.getElementById("aceite").innerHTML=aceite+"l de aceite"
    }

    document.getElementById("perejil").innerHTML=10*dato +"gr de perejil";
     var perejil=10*dato;
    if(perejil>=1000){
        perejil=perejil/1000;
        document.getElementById("perejil").innerHTML=perejil+"Kg de perejil"
    }
    
    document.getElementById("huevos").innerHTML=5*dato + " huevos";
    
    ingredientes = [papas,aceite,perejil,huevos];
}
    var estilo = 1;
    function cambio () {
        if (estilo == 1){
            estilo2();
            estilo = 2;
        }
        else {
            estilo1();
            estilo=1;
        }
        
        

    }
    function estilo1 () {
       
        document.getElementById("css").innerHTML ='<link id="css" rel="stylesheet" href="css/style.css">'; 
        
    }
    function estilo2 (){
        document.getElementById("css").innerHTML= '<link id="css" rel="stylesheet" href="css/css.css">'; 
    }
