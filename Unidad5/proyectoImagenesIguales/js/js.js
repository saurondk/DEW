for (let i = 1; i < 13; i++) {
    let foto = document.getElementById(i);
foto.onclick =girarfoto(i);


    
}
var img= new Array('','1.jpg','2.jpg','4.jpg','6.jpg','5.jpg','3.jpg' ,'1.jpg','2.jpg','4.jpg','6.jpg','5.jpg','3.jpg'  );
function girarfoto(i){
    document.getElementById(i).innerHTML ='<div class="flip-box"><div class="flip-box-inner"><div class="flip-box-back"><img src="img/'+img[i]+'" alt="" style="width:300px;height:200px"></div><div class="flip-box-front"></div></div></div>';
}