const newYear = "1 Jan 2024";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newYearsDate = new Date(newYear);

    const currentDate = new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(Totalseconds/ 3600/ 24);

    const hours = Math.floor(Totalseconds / 3600) % 24;

    const mins = Math.floor(Totalseconds / 60) % 60;

    const seconds = Math.floor(Totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

    //console.log(newYearsDate = currentDate);
    //console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
    return time < 10 ? '0${time}' : time;
}

//Initial call
countdown();

setInterval(countdown, 1000);
