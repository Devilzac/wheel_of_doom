var nombres = ["Alexandro", "Arnau", "Camilo", "Carlos", "Delfina", "Enric", "Erik", "Ferran", "Franco", "Janina", "Jason", "Kavan", "Manuela", "Nathalia", "Nellay", "Noelia", "Nuria", "Raul", "Sergi", "Shuangjie", "Solomon", "Unai", "Andres", "Thierry"];
var decapitados = [];
var reducirVelocidad = 10;
var valorRandom;
var contador = 0;
var btn;
var stage2 = document.getElementById("cnt");
var piedraConNombre=document.getElementById("cnt-lapida");
var sonidoBtn;
setTimeout(function(){

    console.log(piedraConNombre);
    piedraConNombre.innerHTML="";
    
}, 1000);

function parar() {

    if (!decapitados.includes(nombres[valorRandom]) && nombres.length > 0) {
        decapitados.push(nombres[valorRandom]);
        //reset variables
        contador = 0;
        reducirVelocidad = 10;
        //fin reset
    // console.log("decapitados = ", decapitados);

        for (var i = 0; i < nombres.length; i++) {
            if (nombres[i] === nombres[valorRandom]) {
                nombres.splice(i, 1);
            }
        }
        lapida();
        //console.log("vivos = ", nombres);
        btn.disabled = false;
        
        sonidoBtn.loop = false;
        //sonidoBtn.pause();

    } else {
        contador = 0;
        crearRamdon();
    }
}

function crearRamdon() {
    sonidoBtn = document.getElementById("play");
    sonidoBtn.volume = 0.5;
    sonidoBtn.play();
    sonidoBtn.loop = true;

    btn = document.getElementById("btn");
    var holograma = document.getElementById("holograma");

    btn.disabled = true;
    holograma.classList.add("active");
    var resultado = document.getElementById("decapitado");
    if (nombres.length > 0) {
        valorRandom = Math.floor(Math.random() * nombres.length);
        resultado.innerHTML = nombres[valorRandom];
    } else {
        resultado.innerHTML = "No hay mas TPP!!!!";
    }
    //console.log(contador);
    if (contador < nombres.length) {
        btn.disabled = true;
        //console.log("contador ", reducirVelocidad);
        //console.log("nombres.length = ", nombres.length);
        reducirVelocidad += 10;

        contador++;
        setTimeout(crearRamdon, reducirVelocidad);
    } else {

        parar();
        holograma.classList.remove("active");
    }
}

function lapida(){
    piedraConNombre.innerHTML="";
    for (i = 0; i < decapitados.length; i++) {
        //console.log(decapitados[i]);
        piedraConNombre.innerHTML+="<div class='comun'><img src='./img/RIP1.png'><span>"+decapitados[i]+"</span></div>";
      }

    for (u = 0; u < nombres.length; u++) {
       // console.log("vivos ",nombres[u]);
        piedraConNombre.innerHTML+="<div class='comun'><img src='./img/rip.png.png'></div>";
      }
}
