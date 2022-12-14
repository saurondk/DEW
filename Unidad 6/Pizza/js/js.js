const formulario = document.getElementById("formulario");

enviar.onclick = function () {

    var ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');
    var masa = document.querySelector('input[name="masa"]:checked');

    console.log(masa);
    console.log(masa.value);

    var tabla = document.querySelector('#caja');
    var th = document.createElement('th');
    th.textContent = 'Los Ingredientes para tu pizza';
    tabla.appendChild(th);
    
    



    ingredientes.forEach(element => {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = element.value;
        tabla.appendChild(tr);
        tr.appendChild(td);
        
    });

    var thMasa = document.createElement('th');
    thMasa.textContent = 'La Masa para tu pizza';
    tabla.appendChild(thMasa);
    
    var trm=document.createElement('tr');
    var tdm=document.createElement('td');
    tabla.appendChild(trm);
    trm.appendChild(tdm);
    tdm.textContent = masa.value;
    console.log(trm);
        console.log(tdm);
        console.log(masa.value);
    

        var confirma = document.querySelector('#confirmar');
        var boton =document.createElement('button');
        boton.classList.add('btn');
        boton.classList.add('btn-danger');
        boton.textContent = 'Confirma tu pizza';
        confirma.appendChild(boton);
}