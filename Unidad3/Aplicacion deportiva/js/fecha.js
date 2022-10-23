function fecha(){
    var datecuadrado = new Date();
    var anio=datecuadrado.getFullYear();
    var dia =datecuadrado.getDate();
    
    var mes= datecuadrado.toLocaleDateString('es-ES',{  month: 'long'});

    document.getElementById("anios").innerHTML=anio;
    document.getElementById("dia").innerHTML=dia;
    document.getElementById("meses").innerHTML=mes;
}
function aviso(){
     window.open("avisolegal.html","Aviso Legal","scrollbars=no")
}
function cerrar(){
    window.close();
}