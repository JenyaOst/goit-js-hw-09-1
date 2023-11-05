
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const colorBody = document.querySelector('body');
btnStop.setAttribute('disabled', true) ;
btnStart.addEventListener('click', onClick);
btnStop.addEventListener('click', offClick);
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
function onClick (element){
  intervalId=  setInterval(() => {
const initialColor = getRandomHexColor();
colorBody.style.backgroundColor = initialColor;
}, 1000  );
btnStop.removeAttribute('disabled');
btnStart.setAttribute('disabled', true) ;
};
function offClick (){
    clearInterval(intervalId);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true) ;
};
