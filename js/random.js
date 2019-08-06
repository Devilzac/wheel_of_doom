
function killRamdonPerson() {
    activateHologram();
    startExecutionSound();

        resultado.innerHTML = "No hay mas TPP!!!!";
    if (nombres.length > 0) {
        valorRandom = getRandomNumber();
        resultado.innerHTML = nombres[valorRandom];
    }

    if (contador < nombres.length) {
        dissableBtn();
        reducirVelocidad += 10;
        contador++;
        setTimeout(killRamdonPerson, reducirVelocidad);
    } else {
        parar();
        deactivateHologram();
    }
}

function parar() {

    if (!decapitados.includes(nombres[valorRandom]) && nombres.length > 0) {
        decapitados.push(nombres[valorRandom]);
        contador = 0;
        reducirVelocidad = 10;

        for (var i = 0; i < nombres.length; i++) {
            if (nombres[i] === nombres[valorRandom]) {
                nombres.splice(i, 1);
            }
        }
       // lapida();
        enableBtn()
        stopExecutionSound();

    } else {
        contador = 0;
        killRamdonPerson();
    }
}