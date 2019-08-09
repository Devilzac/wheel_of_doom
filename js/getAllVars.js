var nombres = ["Alexandro", "Arnau", "Camilo", "Carlos", "Delfina", "Enric", "Erik", "Ferran", "Franco", "Janina", "Jason", "Kavan", "Manuela", "Nathalia", "Nellay", "Noelia", "Nuria", "Raul", "Sergi", "Shuangjie", "Solomon", "Unai", "Andres", "Thierry"];
//var users=[];
/*for (let index = 0; index < nombres.length; index++) {
     users.push({
        name: nombres[index],
        dead: Math.round(Math.random())
    });
    
}

console.log(JSON.stringify(users));*/
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
