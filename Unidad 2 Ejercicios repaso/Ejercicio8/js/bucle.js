function bucle(){
    var i = window.prompt("Introduce un numero para cuenta atras")
    var j = i;
    
    while (i>0) {
        document.write(i+" ")
        i--;
    }
        document.write("<br>");
        while (i<=j) {
            document.write(i+"&nbsp;");
            i++;
        }

}