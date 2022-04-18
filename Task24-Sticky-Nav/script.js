const nav = document.querySelector(".menu");
const logo = document.querySelector("#logo");

window.addEventListener("scroll", function () {
  if (scrollY >= nav.offsetTop) {
    logo.style.maxWidth = "200px";
  } else {
    logo.style.maxWidth = "0px";
  }
});
