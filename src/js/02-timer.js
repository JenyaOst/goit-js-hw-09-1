import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const tDays = document.querySelector('span[data-days]');
const tHours = document.querySelector('span[data-hours]');
const tMinutes = document.querySelector('span[data-minutes]');
const tSeconds = document.querySelector('span[data-seconds]');
const btStart = document.querySelector('button[data-start]')
const input = document.querySelector('#datetime-picker');
btStart.setAttribute('disabled', true);
let countdownInterval; 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
  
      if (selectedDate > Date.now()) {
        btStart.removeAttribute('disabled');
      } else {
        window.alert('Please choose a date in the future');
      }
    },
  };
  


  const calendar = flatpickr(input, options);

  btStart.addEventListener('click', () => {
    const selectedDate = calendar.selectedDates[0];
  
    if (selectedDate > Date.now()) {
      const timeDiff = selectedDate - Date.now();
      startCountdown(timeDiff);
    } else {
      Notify.failure('Please choose a date in the future');
    }
  });
  function startCountdown(ms) {
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
  
    countdownInterval = setInterval(() => {
      const { days, hours, minutes, seconds } = convertMs(ms);
  
      tDays.textContent = addLeadingZero(days);
      tHours.textContent = addLeadingZero(hours);
      tMinutes.textContent = addLeadingZero(minutes);
      tSeconds.textContent = addLeadingZero(seconds);
  
      if (ms <= 0) {
        clearInterval(countdownInterval);
        alert("Countdown has finished!");
      } else {
        ms -= 1000; 
      }
    }, 1000);
  }
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value.toString();
  };