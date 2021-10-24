// import colors from './colors.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
}
let timerId = 0;

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', clearInt);

function chooseColor() {
  const colorNum = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[colorNum];
}

function changeColor() {
  if (timerId !== 0) {
    return;
  } else {
    timerId = setInterval(chooseColor, 1000);
    refs.startBtn.disabled = true;
  } 
}

function clearInt() {
  clearInterval(timerId);
  timerId = 0;
  refs.startBtn.disabled = false; 
}
