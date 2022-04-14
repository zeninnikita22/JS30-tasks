const textElement = document.querySelector(".text");

textElement.addEventListener("mousemove", function (e) {
  // Mouse position in relation to span element (temporarily manually typed 521, 265
  //   as a position of element, will change it to a variable soon
  const cursorX = e.clientX - 521;
  const cursorY = e.clientY - 265;

  // Mouse position in relation to text-shadow px
  const shadowPositionX = cursorX / 20;
  const shadowPositionY = cursorY / 15;

  // Changing span element style in relation to mouse position
  textElement.style.textShadow = `${shadowPositionX}px ${shadowPositionY}px 4px rgb(57, 56, 56)`;
});
