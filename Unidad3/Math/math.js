
    var invisible=' <input type="text"  id="pot" hidden>';
    invisible+='<button onclick="potencias()" hidden>Enviar</button>';
    
     

    function pot(){
     var base =prompt("Introduce una Base");
     var exponente= prompt("Introduce el exponente");
     var resultado =base**exponente;
     document.getElementById("caja").innerHTML="La potencia de "+ base + " X "+exponente + "es = "+resultado;  
    }

    function raiz(){
        var numero=prompt("Introduce un numero para calcular su raiz cuadrada");
        if(numero<0){
            prompt("No se aceptan numeros negativos ")
        }else{
            var resultado= Math.sqrt(numero);
            document.getElementById("caja").innerHTML=("El resultado es "+resultado);
        }
    }

    function redondeo(){
        var numero= prompt("Introduce un numero y lo redondearemos");
        var resultado= Math.round(numero);
        document.getElementById("caja").innerHTML="El redondedo de "+numero+" es "+ resultado;
    }
    function angulo(){
        var angulo= prompt("Introduce un angulo de 0 º a 360º");
        if(angulo>=0 && angulo <=360){
            var coseno = Math.cos(angulo);
        var seno = Math.sin(angulo);
        var tangente = Math.tan(angulo);
        document.getElementById("caja").innerHTML=" El coseno de " + angulo+ " es "+coseno+"<br>"+
        " El seno de " + angulo+ " es "+seno+"<br>"+" La tangente de " + angulo+ " es "+tangente+"<br>";
        }else{
            document.getElementById("caja").innerHTML="Introduce un numero entre 0 y 360";
        }
    }
    function circulo(){
        var radio= prompt("Introduce el radio del circulo");
        document.getElementById("caja").innerHTML="El radio del circulo es "+radio+"<br>"+
        "El valor del diametro es "+(radio*2)+"<br>"+ "El valor del perimetro es"+2*Math.PI*radio+"<br>"+
        "El valor del area es "+Math.PI*Math.pow(radio,2)+"<br>"+"El valor del area de la esfera "+4*Math.PI*Math.pow(radio,2)+"<br>"+
        "El valor del volumen de la esfera es "+(4*Math.PI*Math.pow(radio,3))/3;

    }   
    