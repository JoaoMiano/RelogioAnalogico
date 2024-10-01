let digitalClock = document.querySelector('.digital');
const pointerSecond = document.querySelector('.p_s');
const pointerMinute = document.querySelector('.p_m');
const pointerHour = document.querySelector('.p_h');

function updateClock(){ // atualiza o relogio 
    let date = new Date();

    //atualiza o relogio digital 
    digitalClock.innerHTML = `${fixZero(date.getHours())}:${fixZero(date.getMinutes())}:${fixZero(date.getSeconds())}`

    //criando variaveis para ajustar a rotação dos ponteiros
    const ajustDegSeconds = ((360 / 60) * date.getSeconds()) -90
    const ajustDegMinutes = ((360 / 60) * date.getMinutes()) -90
    const ajustDegHours = ((360 / 24) * date.getHours()) -90

    //Ajusta os ponteiros de acordo com o ora atual utilizando o atributo transform: rotate
    pointerSecond.style.transform = `rotate(${ajustDegSeconds}deg)`
    pointerMinute.style.transform = `rotate(${ajustDegMinutes}deg)`
    pointerHour.style.transform = `rotate(${ajustDegHours}deg)`
}

function fixZero(time){ //verifica se o valor esta com apenas 1 digito, se sim retorna com um 0 antes do digito 
    return (time < 10) ? '0'+ time : time
}

updateClock()
setInterval(updateClock, 1000);