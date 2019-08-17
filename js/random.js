
function checkDB(){
    $.ajax({
    url: "../wheel_of_doom/functions/connect.php",
    data: {
            user_id: "user_id",
            name: "name",
            dead: "dead"
        },
    success: function( data ) {
      //  console.log("data== ",data);
       
       

        nombres = JSON.parse(data);
            lapida();
      //  console.log(nombres[0].name);
        }
    });
}

    
function killRamdonPerson() {
    activateHologram();
    startExecutionSound();

    resultado.innerHTML = "No hay mas TPP!!!!";
    console.log(nombres);
        valorRandom = getRandomNumber();

        if(nombres[valorRandom].dead=0){
                 resultado.innerHTML = nombres[valorRandom].name;    
        }
    

    if (contador < nombres.length) {
        dissableBtn();
        reducirVelocidad += 10;
        contador++;
        console.log("contador = ", contador);
        setTimeout(killRamdonPerson, reducirVelocidad);
    } 
    if(contador >= nombres.length) {
        losMuertosNoHablan(valorRandom);
        deactivateHologram();
    }
}

function losMuertosNoHablan(val) {
  
    nombres[val].dead = "1";
    contador = 0;
    reducirVelocidad = 10;
    lapida();
    enableBtn();
    stopExecutionSound();
    
}
function lapida(){
    piedraConNombre.innerHTML="";

    for (var y = 0; y < nombres.length; y++) {

        if(nombres[y].dead == 1){
            piedraConNombre.innerHTML+="<div class='comun'><img src='./img/RIP1.png'><span>"+nombres[y].name+"</span></div>";
        }

        if(nombres[y].dead == 0){
            piedraConNombre.innerHTML+="<div class='comun'><img src='./img/rip.png.png'></div>";
        }
    }
}
