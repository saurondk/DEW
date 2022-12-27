var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];



function enviarFormulario(){
var dni = document.getElementById('dni').value ;
let letra = document.getElementById('letra').value ;
 console.log(dni);
if (dni>99999999 | dni<0) {
    window.alert('El dni introducido no es correcto');
}else{
    let resultado = document.write("Tu dni es "+dni);
    
    
        if (letra == letras[dni%23]) {
        resultado+= document.write('La letra de tu dni es '+letras[dni%23]+'<br>');
        resultado+=document.write ('La letra introducida es '+letra+'<br>');
    }else{
        
        console.log(letras[dni%23]);
        resultado+= document.write('La letra no es correcta');
        resultado+=document.write ('La letra introducida es '+letra+'<br>');
    }

}


}
console.log(dni);