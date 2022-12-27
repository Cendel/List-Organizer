let arr = [];

// creates variables using the id names of elements in the class "main"
for (let x of document.querySelectorAll("main *[id]")) {
  document.getElementById(x);
}

// adding & handling events
entry.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) add.click();
});
add.addEventListener("click", () => {
  if (entry.value !== "") {
    arr.push(entry.value);
    output();
    entry.value = "";
  }
});
sort.addEventListener("click", () => {
  arr.sort();
  output();
});
reverse.addEventListener("click", () => {
  arr.reverse();
  output();
});
pop.addEventListener("click", () => {
  arr.pop();
  output();
});
shift.addEventListener("click", () => {
  arr.shift();
  output();
});
removeAll.addEventListener("click", () => {
  arr = [];
  output();
});
mix.addEventListener("click", () => {
  arrayMixer(arr);
  output();
});

// prints the array elements on the screen in a list format
const output = () => {
  let innerTxt = `<ul>`;
  for (let x of arr) innerTxt += `<li>${x}</li>`;
  list.innerHTML = innerTxt + `</ul>`;
  entry.value = "";
};

// shuffles a received array
const arrayMixer = (arry) => {
  if (arry[0] !== undefined) {
    let element;
    for (let i = 0; i < 10; i++) {
      element = arry.splice(Math.floor(Math.random() * arry.length), 1);
      arry.splice(Math.floor(Math.random() * arry.length), 0, element[0]);
    }
  }
};
