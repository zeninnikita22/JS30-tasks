window.addEventListener("scroll", () => {
  const scrolledPixels = window.scrollY;
  console.log(scrolledPixels);

  const firstImage = document.getElementById("first-img");
  const secondImage = document.getElementById("second-img");
  const thirdImage = document.getElementById("third-img");
  const fourthImage = document.getElementById("fourth-img");
  const fifthImage = document.getElementById("fifth-img");

  if (scrolledPixels > 28) {
    firstImage.style.transform = "translateX(0%)";
  }
  if (scrolledPixels > 522) {
    secondImage.style.transform = "translateX(0%)";
  }
  if (scrolledPixels > 1332) {
    thirdImage.style.transform = "translateX(0%)";
  }
  if (scrolledPixels > 1416) {
    fourthImage.style.transform = "translateX(0%)";
  }
  if (scrolledPixels > 2178) {
    fifthImage.style.transform = "translateX(0%)";
  }
});
