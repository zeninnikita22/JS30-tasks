const middleText = document.querySelectorAll(".middle-text");
const panels = document.querySelectorAll(".panel");

middleText.forEach((item) =>
  item.addEventListener("mouseenter", function changeWidth() {
    return (item.parentNode.style.flex = "5");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseenter", function appearText() {
    return (item.previousElementSibling.style.transform = "translateY(0%)");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseenter", function appearText() {
    return (item.nextElementSibling.style.transform = "translateY(0%)");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseenter", function scaleText() {
    return (item.style.transform = "scale(1.75)");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseleave", function changeWidth() {
    return (item.parentNode.style.flex = "1");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseleave", function appearText() {
    return (item.previousElementSibling.style.transform = "translateY(-200%)");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseleave", function appearText() {
    return (item.nextElementSibling.style.transform = "translateY(200%)");
  })
);

middleText.forEach((item) =>
  item.addEventListener("mouseleave", function scaleText() {
    return (item.style.transform = "scale(1)");
  })
);
