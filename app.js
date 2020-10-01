var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");

var timer = null;
var h = 0;
var m = 0;
var s = 0;

var displayHour = 0;
var displayMin = 0;
var displaySec = 0;

function stopWatch() {
    s++;
    if (s >= 60) {
        s = 0;
        m++;

        if (m >= 60) {
            m = 0;
            h++;
        }
    }

    if (s < 10) {
        displaySec = "0" + s;
    }

    else {
        displaySec = s;
    }

    if (m < 10) {
        displayMin = "0" + m;
    }

    else {
        displayMin = m;
    }

    if (h < 10) {
        displayHour = "0" + h;
    }

    else {
        displayHour = h;
    }
    document.getElementById("hour").innerHTML = displayHour;
    document.getElementById("min").innerHTML = displayMin;
    document.getElementById("sec").innerHTML = displaySec;
}

function startTimer() {
    startBtn.innerText = "Pause";
    timer = setInterval(stopWatch, 1000);
    startBtn.onclick = pauseTimer;
}

function pauseTimer() {
    startBtn.innerText = "Start";
    startBtn.onclick = startTimer;
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    h = 0;
    m = 0;
    s = -1;
    startBtn.innerText = "Start"
    startBtn.onclick = startTimer;
    stopWatch();
}