var ventanas="";
function ventana() {
      ventanas = window.open("ventana.html","ventana");
      escribir();
}
function escribir(){
        ventanas.document.write("<h3>Ejemplo de Ventana Nueva</h3>");
        var location= window.location.href;
        ventanas.document.write("La localizacion de la url es " + location +"<br>");
        ventanas.document.write("El protocolo utilizado es " + window.location.protocol +"<br>");
        ventanas.document.write("Nombre en código del navegador: " + navigator.appCodeName +"<br>");
        if(navigator.javaEnabled){
            ventanas.document.write("Java disponible <br>");
        }else{
            ventanas.document.write("Java no disponible <br>");
        }

        ventanas.document.write("<iframe src='https://departamentoinformaticajmpp.com/web/' frameborder='0' style='width: 800px; height: 600px;'></iframe>")

}
function datos(){
     var nombre =document.getElementById("nombrec").value;
     var fecha =  new Date (document.getElementById("fechan").value);
     document.getElementById("salida").innerHTML= "Buenos dias "+nombre+"<br>";
     document.getElementById("salida").innerHTML+= "Tu nombre tiene "+(nombre+"").length+ " caracteres, incluidos espacios <br>";
     document.getElementById("salida").innerHTML+= "La primera letra A de tu nombre está en la posición:"+nombre.indexOf("a") +  "<br>";
     document.getElementById("salida").innerHTML+= "La ultima letra A de tu nombre está en la posición:"+nombre.lastIndexOf("a") +  "<br>";
     document.getElementById("salida").innerHTML+= "Tu nombre menos las tres primeras letras es :"+ nombre.substring(3) +  "<br>";
     document.getElementById("salida").innerHTML+= "Tu nombre en mayusculas es :"+(nombre+"").toLocaleUpperCase() +  "<br>";
     var fechaActual = new Date();

     var anio1= fechaActual.getFullYear();
     var anio2= fecha.getFullYear();
     var edad = anio1-anio2;
     
     document.getElementById("salida").innerHTML+= "Tu Edad es : "+edad+ "<br>";
     document.getElementById("salida").innerHTML+= "Naciste un feliz "+fecha.getDate()+" del "+ (fecha.getMonth()+1) + " del año " +fecha.getFullYear()+"<br>";
     document.getElementById("salida").innerHTML+= "El coseno de 180º es : "+Math.cos(180 * Math.PI /180)+ "<br>";

     document.getElementById("salida").innerHTML+= "El número mayor de (34,67,23,75,35,19) es:"+Math.max(34,67,23,75,35,19) +"<br>";
     document.getElementById("salida").innerHTML+= "Ejemplo de numero al azar:"+ parseInt( Math.random()*100) +"<br>";

}