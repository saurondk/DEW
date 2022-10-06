let crearNueva=0;

function abrirventana() {
    crearNueva= window.open("http://aram.departamentoinformaticajmpp.com","","height=400,width=800");
   
}

function cerrarventana(){
    if (crearNueva) {
        crearNueva.close();
    }
}

function tiempo(){ 
setInterval(cerrarventana,1000);
}




