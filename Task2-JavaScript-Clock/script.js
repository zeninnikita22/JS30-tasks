const secondArrow = document.querySelector(".second");
const minuteArrow = document.querySelector(".minute");
const hourArrow = document.querySelector(".hour");

let currentDate = new Date();

let numberOfDegreesSecond = currentDate.getSeconds() * 6;
window.onload = setInterval(function () {
  numberOfDegreesSecond = numberOfDegreesSecond + 6;
  secondArrow.style.transform = `rotate(${numberOfDegreesSecond}deg)`;
}, 1000);

let numberOfDegreesMinute = currentDate.getMinutes() * 6;
window.onload = setInterval(function () {
  numberOfDegreesMinute = numberOfDegreesMinute + 6;
  minuteArrow.style.transform = `rotate(${numberOfDegreesMinute}deg)`;
}, 60000);

let numberOfDegreesHour = currentDate.getHours() * 30;
window.onload = setInterval(function () {
  numberOfDegreesHour = numberOfDegreesHour + 30;
  hourArrow.style.transform = `rotate(${numberOfDegreesHour}deg)`;
}, 3600000);
