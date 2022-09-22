function tipo(){
   var numero;
   var string;
   var bool;

   document.getElementById("1").innerHTML=
   "<p>La variable "+numero+"es del tipo "+typeof(numero)+"</p><br>"+
   "<p>La variable "+string+"es del tipo "+typeof(string)+"</p><br>"+
   "<p>La variable "+bool+"es del tipo "+typeof(bool)+"</p><br>";
    numero=2;
    string="hola";
    bool=true;
    document.getElementById("2").innerHTML=
  "<p>La variable "+numero+" es del tipo "+typeof(numero)+"</p><br>"+
   "<p>La variable "+string+" es del tipo "+typeof(string)+"</p><br>"+
   "<p>La variable "+bool+" es del tipo "+typeof(bool)+"</p><br>";
    

}