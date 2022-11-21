var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

var total=0;
for (let index = 0; index < numeros.length; index++) {
    
    


    if(index%2==0){
        console.log(index);
    }
    total+=numeros[index];
    

    
    
}
console.log(total);