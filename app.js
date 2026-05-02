const clock = document.querySelector(".clock");

function tick() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span>${hours} :</span> 
        <span>${minutes} :</span>
        <span>${seconds}</span>
    `;

    clock.innerHTML = html;
}

//run immediately
tick();

//update every second
setInterval(tick, 1000);