window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  drum.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const drums = document.querySelectorAll(".drum");
for (let drum of drums) {
  drum.addEventListener("transitionend", removeTransition);
}
