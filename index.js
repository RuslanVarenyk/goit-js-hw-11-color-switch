import colors from './colors.js'
const max = colors.length;

const colorSwitch = {
    isActive: false,
    intervalId: null,
}

const refs = {
    bodyEl: document.querySelector('.body-color'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor(colors) {
    let number = randomIntegerFromInterval(0, max);
    refs.bodyEl.style.backgroundColor = colors[number];
}

function onStartBtnClick(event) {
    if (colorSwitch.isActive) {
        return
    }
    colorSwitch.isActive = true;
    colorSwitch.intervalId = setInterval(() => {
        changeBodyColor(colors)
    }, 1000);
}

function onStopBtnClick(event) {
    colorSwitch.isActive = false;
    clearInterval(colorSwitch.intervalId)
}