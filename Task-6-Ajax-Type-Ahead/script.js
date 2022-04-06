const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

fetch(url).then((response) =>
  response.json().then((data) => cities.push(...data))
);

console.log(cities);

const inputText = document.querySelector(".input-text");
inputText.addEventListener("change", displayMatches);
inputText.addEventListener("keyup", displayMatches);

function findMatches(wordToMatch, cities) {
  return cities.filter((element) => {
    let myRegex = new RegExp(wordToMatch, "gi");
    if (myRegex.test(element["city"]) || myRegex.test(element["state"])) {
      return true;
    } else {
      return false;
    }
  });
}

function displayMatches() {
  console.log(this.value);
}
