
function checkDB(){
    console.log(resultado);
    $.ajax({
        accepts: {
          mycustomtype: 'application/x-some-custom-type'
        },
    url: "../functions/connect.php",
    data: {
        example: resultado.textContent
    },
    success: function( data ) {
        console.log(data);
    }
    });
}

function killRamdonPerson() {
    activateHologram();
    startExecutionSound();

    resultado.innerHTML = "No hay mas TPP!!!!";
    resultado.innerHTML = "Kavan";
    /*if (nombres.length > 0) {
        valorRandom = getRandomNumber();
        resultado.innerHTML = nombres[valorRandom].name;
    }

    if (contador < nombres.length) {
        dissableBtn();
        reducirVelocidad += 10;
        contador++;
        setTimeout(killRamdonPerson, reducirVelocidad);
    } else {
        losMuertosNoHablan(valorRandom);
        deactivateHologram();
    }*/
    checkDB();
}

function losMuertosNoHablan(val) {
  
    nombres[val].dead = 1;
    contador = 0;
    reducirVelocidad = 10;
    lapida();
    enableBtn();
    stopExecutionSound();
    
}
function lapida(){
    piedraConNombre.innerHTML="";

    /*for (var y = 0; y < nombres.length; y++) {

        if(nombres[y].dead == 1){
            piedraConNombre.innerHTML+="<div class='comun'><img src='./img/RIP1.png'><span>"+nombres[y].name+"</span></div>";
        }

        if(nombres[y].dead == 0){
            piedraConNombre.innerHTML+="<div class='comun'><img src='./img/rip.png.png'></div>";
        }
    }*/
}
