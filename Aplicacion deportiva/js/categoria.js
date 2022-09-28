function categoria(){


do {
    var anio=prompt("Introduce tu año de nacimiento");
    anio =parseInt(anio);
    anioActual=(new Date).getFullYear();
    edad= anioActual-anio;
    
    } while ((isNaN(anio)));
    
    if (edad<=7) {
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria <b style=color:red>Prebenjamines.</b></p>"+
        " <p> Categoria Benjamines.</p>"+
        " <p> Categoria Alevines.</p>"+
        " <p> Categoria Infantiles.</p>"+
        " <p> Categoria Cadetes.</p>"+
        " <p> Categoria Juveniles.</p>"+
        " <p> Sin categoria.</p>";


    } else if(edad==8 || edad==9){
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria Prebenjamines.</p>"+
        " <p> Categoria <b style=color:red> Benjamines.</b></p>"+
        " <p> Categoria Alevines.</p>"+
        " <p> Categoria Infantiles.</p>"+
        " <p> Categoria Cadetes.</p>"+
        " <p> Categoria Juveniles.</p>"+
        " <p> Sin categoria.</p>";

    }else if(edad==10 || edad==11){
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria Prebenjamines.</p>"+
        " <p> Categoria Benjamines.</p>"+
        " <p> Categoria <b style=color:red> Alevines.</b></p>"+
        " <p> Categoria Infantiles.</p>"+
        " <p> Categoria Cadetes.</p>"+
        " <p> Categoria Juveniles.</p>"+
        " <p> Sin categoria.</p>";

    }else if(edad==12 || edad==13){
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria Prebenjamines.</p>"+
        " <p> Categoria Benjamines.</p>"+
        " <p> Categoria Alevines.</p>"+
        " <p> Categoria <b style=color:red> Infantiles.</b></p>"+
        " <p> Categoria Cadetes.</p>"+
        " <p> Categoria Juveniles.</p>"+
        " <p> Sin categoria.</p>";

    }else if(edad==14 || edad==15){
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria Prebenjamines.</p>"+
        " <p> Categoria Benjamines.</p>"+
        " <p> Categoria Alevines.</p>"+
        " <p> Categoria Infantiles.</p>"+
        " <p> Categoria <b style=color:red> Cadetes.</b></p>"+
        " <p> Categoria Juveniles.</p>"+
        " <p> Sin categoria.</p>";
    }else if(edad==16|| edad==17 || edad==18){
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria Prebenjamines.</p>"+
        " <p> Categoria Benjamines.</p>"+
        " <p> Categoria Alevines.</p>"+
        " <p> Categoria Infantiles.</p>"+
        " <p> Categoria Cadetes.</p>"+
        " <p> Categoria <b style=color:red> Juveniles.</b></p>"+
        " <p> Sin categoria.</p>";
    }else if(edad>19){
        document.getElementById("imc").innerHTML="<p> Tu edad es "+edad+"</p>"+
        " <p> Categoria Prebenjamines.</p>"+
        " <p> Categoria Benjamines.</p>"+
        " <p> Categoria Alevines.</p>"+
        " <p> Categoria Infantiles.</p>"+
        " <p> Categoria Cadetes.</p>"+
        " <p> Categoria Juveniles.</p>"+
        " <p><b style=color:red> Categoria Senior</b></p>";
    }
} 
    