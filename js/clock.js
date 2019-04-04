
let time = new Date(), // Hora al iniciar
    hours5 = 0,
    hours1 = 0,
    minutes5 = 0,
    minutes1 = 0,
    seconds = 0;

calculateTime(time); // Calculamos la primera hora

function getActualTime() { // Funcion que se repetira cada segundo

    time = new Date();
    calculateTime(time);
};

function calculateTime(t) { // Calcula la hora actual en formato berlin(?)

    const hour = t.getHours(), // Hora actual
        minutes = t.getMinutes(), // Minutos actual
        secondsActual = t.getSeconds(); // segundos actual

    separateHours(hour); // Pasa formato 'normal' a formato berlin
    separateMinutes(minutes);
    calculateSeconds(secondsActual);

    printTime(); // Mostrar la hora formato berlin en colores

    let actualTime = document.getElementsByClassName('actualTime'); // Mostrar hora actual 
    actualTime[0].innerHTML = `${hour}h ${minutes}m ${secondsActual}s`;
}

function separateHours(hours) { // Calcular las horas en bloques de 5h(Fila 1) y 1h(Fila 2)

    hours5 = Math.floor(hours / 5);
    hours1 = hours % 5;
}

function separateMinutes(minutes) { // Calcular los minutos en bloques de 5m(Fila 3) y 1m(Fila 4)

    minutes5 = Math.floor(minutes / 5);
    minutes1 = minutes % 5;
}

function calculateSeconds(sec) { // Calcular los segundos (Circulo superior)

    seconds = sec % 2;
}

function printTime() {

    let secondCircle = document.getElementsByClassName('secondsCircle'),
        rowHours5 = document.getElementsByClassName('cell hour5'),
        rowHours1 = document.getElementsByClassName('cell hour1'),
        rowMinutes5 = document.getElementsByClassName('cell minute5'),
        rowMinutes1 = document.getElementsByClassName('cell minute1');

    if (seconds) { // Mostrar segundos
        secondCircle[0].classList.add('on');
    } else {
        secondCircle[0].classList.remove('on');
    }

    for (let i = 0; i < rowHours5.length; i++) { // Row hours 5
        if (i < hours5) {
            rowHours5[i].classList.add('on');
        } else {
            rowHours5[i].classList.remove('on');
        }
    }

    for (let i = 0; i < rowHours1.length; i++) { // Row hours 1
        if (i < hours1) {
            rowHours1[i].classList.add('on');
        } else {
            rowHours1[i].classList.remove('on');
        }
    }

    for (let i = 0; i < rowMinutes5.length; i++) { // Row minutes 5
        if (i < minutes5) {
            rowMinutes5[i].classList.add('on');
        } else {
            rowMinutes5[i].classList.remove('on');
        }
    }

    for (let i = 0; i < rowMinutes1.length; i++) { // Row minutes 1
        if (i < minutes1) {
            rowMinutes1[i].classList.add('on');
        } else {
            rowMinutes1[i].classList.remove('on');
        }
    }

}

setInterval(getActualTime, 1000); // Indicamos que haga getActualTime() cada segundo