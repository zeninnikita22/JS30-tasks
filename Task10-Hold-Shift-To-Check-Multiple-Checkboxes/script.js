const checkBox = document.querySelectorAll(".check");

checkBox.forEach((item) => {
  item.addEventListener("change", function () {
    if (item.checked) {
      item.parentElement.style.textDecoration = "line-through";
    } else {
      item.parentElement.style.textDecoration = "none";
    }
  });
});

const tempArray = [];

window.addEventListener("keydown", function (event) {
  if (event.key == "Shift") {
    for (let i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked) {
        tempArray.push(i);
      }
    }

    for (let j = tempArray[1]; j > tempArray[0]; j--) {
      checkBox[j].parentElement.style.textDecoration = "line-through";
      checkBox[j].checked = true;
    }
  }
});
