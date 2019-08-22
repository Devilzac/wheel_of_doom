
function resetDB(dato){
    $.ajax({
    url: "../wheel_of_doom/functions/connect.php",
    type: 'post',
    data: {
          getUsersOrUpdate: dato
        },
    success: function( data ) {
            console.log("reset: ", data);
            setTimeout(function(){
                location.reload();
            },7000);        
        }
    });
}

function updateDead(dato){
    $.ajax({
    url: "../wheel_of_doom/functions/connect.php",
    type: 'post',
    data: {
          getUsersOrUpdate: dato
        },
    success: function( data ) {
      // console.log("update: ", data);
       getAllUsers("getAllUsers");
        }
    });
}

function getAllUsers(dato){
    $.ajax({
    url: "../wheel_of_doom/functions/connect.php",
    type: 'post',
    data: {
          getUsersOrUpdate: dato
        },
    success: function( data ) {
        //console.log(data);
        nombres = JSON.parse(data);
        lapida();
        }
    });
}

function getDeadPeople(dato){
    $.ajax({
    url: "../wheel_of_doom/functions/connect.php",
    type: 'post',
    data: {
          getUsersOrUpdate: dato
        },
    success: function( data ) {
      //  console.log("decapitados: ", data);
            if(data != ""){
                decapitados = JSON.parse(data);   
            }            
        }
    });
}
    
function killRamdonPerson() {
    
    activateHologram();
    startExecutionSound();

   //console.log(decapitados);  

        valorRandom = getRandomNumber();   
    if(valorRandom != -1){
       // console.log("valorRandom= ",valorRandom);
        resultado.innerHTML = decapitados[valorRandom].name;  
        losMuertosNoHablan(valorRandom);
    }
    
    if(valorRandom == -1){
        resultado.innerHTML = "No hay mas TPP!!!!"; 
        resetDB("reset");
    }
    
}


function losMuertosNoHablan(val) {

    var name = decapitados[val].name;
   // console.log("name == ", name);    
    updateDead(name);

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
    deactivateHologram();
  //  $("html, body").delay(2000).animate({scrollTop: $('#cnt-lapida').offset().top }, 2000);
    getDeadPeople("getAllDeadUsers");
}
