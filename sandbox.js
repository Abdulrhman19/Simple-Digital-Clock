const clock = document.querySelector("#clock");

const tick = () => {
    const date =  new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const html = `
    <span>${hours}</span>:
    <span>${minutes}</span>:
    <span>${seconds}</span>`;

    clock.innerHTML = html;
};

setInterval(tick, 1000);