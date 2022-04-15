// test array
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function sortNoArticle(arr) {
  // finding elements in array which include articles in the beginning
  // and moving those articles in the end of the element
  const noArticleBands = arr
    .map((element) => {
      accumulator = element.match(/^an\s|^a\s|^the\s/gi);
      return element.replace(/^an\s|^a\s|^the\s/gi, "") + accumulator;
    })
    // sorting modified array with artilces in the end of elements
    .sort()
    // returting articles from the end of element to the beginning in an already sorted array
    .map((element) => {
      const newFirstRegex = /(The\s)$/gi;
      const newSecondRegex = /(An\s)$/gi;
      const newThirdRegex = /(a\s)$/gi;
      const newFourthRegex = /(null)$/gi;
      if (newFirstRegex.test(element)) {
        const testsub = element.substring(element.length - 4);
        return testsub + element.replace(newFirstRegex, "");
      } else if (newSecondRegex.test(element)) {
        const testsub = element.substring(element.length - 3);
        return testsub + element.replace(newSecondRegex, "");
      } else if (newThirdRegex.test(element)) {
        const testsub = element.substring(element.length - 2);
        return testsub + element.replace(newThirdRegex, "");
      } else {
        return element.replace(newFourthRegex, "");
      }
    });
  return noArticleBands;
}
// looping through new sorted array with articles and adding elements to html ul list
const newArr = sortNoArticle(bands);
const ulElement = document.querySelector("#bands");
for (let i = 0; i < newArr.length; i++) {
  ulElement.innerHTML = ulElement.innerHTML + `<li>${newArr[i]}</li>`;
}
