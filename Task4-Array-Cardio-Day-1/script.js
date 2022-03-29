const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

inventors.filter(function (element) {
  if (element.year >= 1500 && element.year < 1600) {
    return true;
  }
});

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const mappedArray = inventors.map(function (element) {
  return element.first + " " + element.last;
});

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedArray = inventors.sort(function (a, b) {
  return a.year - b.year;
});

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const reducedArray = inventors.reduce(function (previousValue, currentValue) {
  return previousValue + (currentValue.passed - currentValue.year);
}, 0);

// 5. Sort the inventors by years lived

inventors.forEach((object) => {
  return (object.lived = object.passed - object.year);
});
const sortedInventors = inventors.sort(function (a, b) {
  return a.lived - b.lived;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortedPeople = people.sort();

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// Solution 1 (not sustainable, first what I've thought about)
const carRegex = /car/g;
const walkRegex = /walk/g;
const vanRegex = /van/g;
const bikeRegex = /bike/g;
const truckRegex = /truck/g;

const newArray = data.join(" ").match(vanRegex);
const result = newArray.length;

// Solution 2 (after watching video)
const transport = data.reduce(function (object, item) {
  if (!object[item]) {
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});

// additional reduce method practice (not JS30 but still adding it here as it relates to the topic)
// 1. Get average from the array of numbers

const someArray = [1, 2, 3, 5, 76, 86, 25, 12, 8, 0, 77, 32];

function getAverage(arr) {
  const reducedArr = arr.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  return reducedArr / arr.length;
}

// 2. Count number of jedi in the array of users

const users = [
  { username: "darth vader", jedi: false },
  { username: "ray", jedi: true },
  { username: "luke skywalker", jedi: true },
  { username: "yoda", jedi: true },
  { username: "queen padme", jedi: false },
  { username: "obi wan kenobi", jedi: true },
];
const numberOfJedi = users.reduce(
  (accumulator, current) => (current.jedi ? accumulator + 1 : accumulator + 0),
  0
);

//3. Get an array of jedi from users array
// first option with filter, will get array of objects with usernames
const arrOfJedi = users.filter((element) => {
  return element.jedi;
});

// second option with reduce, will get array of names directly
const redArrOfJedi = users.reduce(function (accumulator, current) {
  if (current.jedi === true) {
    accumulator.push(current.username);
  }
  return accumulator;
}, []);
