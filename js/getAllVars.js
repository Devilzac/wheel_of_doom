var nombres;
var users=[];
/*for (let index = 0; index < nombres.length; index++) {
     users.push({
        name: nombres[index],
        dead: Math.round(Math.random())
    });
    
}

console.log(JSON.stringify(users));*/
fetch('http://www.mocky.io/v2/5d4d3d5c330000e73b3376c0').then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        nombres =data;
        console.log(nombres);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
var decapitados = [];
var reducirVelocidad;
var valorRandom;
var contador;
var btn;
var stage2;
var piedraConNombre;
var sonidoBtn;
var holograma;
var resultado;

function startVars(){
    reducirVelocidad = 10;
    valorRandom;
    contador = 0;
    btn = document.getElementById("btn");
    stage2 = document.getElementById("cnt");
    piedraConNombre=document.getElementById("cnt-lapida");
    sonidoBtn = document.getElementById("play");
    sonidoBtn.volume = 1;
    holograma = document.getElementById("holograma");
    resultado = document.getElementById("decapitado");
    lapida();

}


function getRandomNumber(){
    return Math.floor(Math.random() * nombres.length);
}
function activateHologram(){
    holograma.classList.add("active");
}
function deactivateHologram(){
    holograma.classList.remove("active");
}
function dissableBtn(){
    btn.disabled = true;
}
function enableBtn(){
    btn.disabled = false;
}
function startExecutionSound(){
    sonidoBtn.play();
    sonidoBtn.loop = true;
}
function stopExecutionSound(){
    sonidoBtn.loop = false;
}
