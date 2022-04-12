const leftImages = document.querySelectorAll(".align-left");
const rightImages = document.querySelectorAll(".align-right");

function slidingImages() {
  leftImages.forEach((leftImage) => {
    const leftRect = leftImage.getBoundingClientRect();
    if (leftRect.top - window.innerHeight < 0) {
      leftImage.style.transform = "translateX(0%)";
      leftImage.style.opacity = "100%";
    }
  });
  rightImages.forEach((rightImage) => {
    const rightRect = rightImage.getBoundingClientRect();
    if (rightRect.top - window.innerHeight < 0) {
      rightImage.style.transform = "translateX(0%)";
      rightImage.style.opacity = "100%";
    }
  });
}

window.addEventListener("scroll", slidingImages);
