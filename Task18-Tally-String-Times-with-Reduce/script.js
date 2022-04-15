const videos = document.querySelector(".videos").children;
// converting HTML collection to actual array
let arr = [].slice.call(videos);
const timeArr = [];
// getting time key from each array element and pushing it into new array
arr.forEach((element) => {
  timeArr.push(element.dataset.time);
});

// preparing function to convert seconds into hours:seconds:minutes format
function secondsConvert(seconds) {
  const convertHours = Math.floor(seconds / 3600);
  const convertMinutes = Math.floor((seconds - convertHours * 3600) / 60);
  const convertSeconds = seconds - (convertHours * 3600 + convertMinutes * 60);
  return convertHours + "h:" + convertMinutes + "m:" + convertSeconds + "s";
}

function timeCount(timeArr) {
  // counting separately minutes from timeArr
  const minutes = timeArr
    .map((element) => {
      return parseInt(element.match(/\d+(?=:)/g));
    })
    .reduce((prev, curr) => {
      curr += prev;
      return curr;
    });
  // counting separately seconds from timeArr
  const seconds = timeArr
    .map((element) => {
      return parseInt(element.match(/(?<=:)\d+/g));
    })
    .reduce((prev, curr) => {
      curr += prev;
      return curr;
    });
  // converting minutes to seconds and getting overall seconds in timeArr
  const secondsAll = minutes * 60 + seconds;

  //converting seconds to h:m:s format using prepared function secondsConvert
  return secondsConvert(secondsAll);
}

console.log(timeCount(timeArr));
