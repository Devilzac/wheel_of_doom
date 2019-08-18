var nombres=[];
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
var testdata;

$(document).ready(function () {
  startVars();
});
function startVars(){
    reducirVelocidad = 50;
    valorRandom;
    contador = 0;
    btn = document.getElementById("btn");
    stage2 = document.getElementById("cnt");
    piedraConNombre=document.getElementById("cnt-lapida");
    sonidoBtn = document.getElementById("play");
    sonidoBtn.volume = 1;
    holograma = document.getElementById("holograma");
    resultado = document.getElementById("decapitado");    
    getAllUsers("getAllUsers");
    getDeadPeople("getAllDeadUsers");

}


function getRandomNumber(){
    
    return Math.floor(Math.random() * (decapitados.length-1));
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
