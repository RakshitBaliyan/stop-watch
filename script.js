let startTime;
let elapsedTime = 0;
let intervalId;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTime() {
    const now = Date.now();
    const timeDiff = now - startTime + elapsedTime;

    const hours = Math.floor(timeDiff / 3600000);
    const minutes = Math.floor((timeDiff % 3600000) / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    const milliseconds = Math.floor((timeDiff % 1000));

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (!intervalId) {
        startTime = Date.now();
        intervalId = setInterval(updateTime, 10); // Update every 10 milliseconds for accurate ms display
    }
});

stopBtn.addEventListener('click', () => {
    if (intervalId) {
        elapsedTime += Date.now() - startTime;
        clearInterval(intervalId);
        intervalId = null;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    display.textContent = "00:00:00.000";
});


