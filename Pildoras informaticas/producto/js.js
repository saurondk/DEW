class Producto{
    constructor(precio,descuento){
        this.precio = precio;
        this.descuento = descuento;
    };
    neto(){
        return this.precio-((this.precio *this.descuento)/100);
    }


}

    
enviar.onclick=function(){

    precio= document.getElementById("precio").value;
    descuento=document.getElementById("descuento").value;
    var producto1= new Producto(precio, descuento);
    
    document.getElementById("resultado").innerHTML= producto1.neto (precio,descuento);
    
}