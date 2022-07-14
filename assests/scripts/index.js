let numbersBox = [
  {
    num: 1,
    color: "red",
  },
  {
    num: 2,
    color: "blue",
  },
  {
    num: 3,
    color: "yellow",
  },
  {
    num: 4,
    color: "orange",
  },
  {
    num: 5,
    color: "pink",
  },
  {
    num: 6,
    color: "darkgreen",
  },
  {
    num: 7,
    color: "brown",
  },
  {
    num: 8,
    color: "green",
  },
  {
    num: 9,
    color: "gray",
  },
];

const boxes = document.querySelector(".boxes");

function createBoxes(modifiedArry) {
  modifiedArry.forEach((ele) => {
    let box = document.createElement("div");
    box.innerText = ele.num;
    box.style.backgroundColor = ele.color;
    box.style.width = "50px";
    box.style.height = "50px";
    box.classList.add("box");
    boxes.appendChild(box);
  });
}

createBoxes(numbersBox);

const btns = document.querySelectorAll(".container--buttons button");
console.log(btns);

btns[0].addEventListener("click", () => {
  boxes.innerHTML = "";
  const numsInserted = []; //keep track of element inserted;
  const newShuffledArray = [];
  let c = 0;
  while (c < 9) {
    let randomIndex = parseInt(Math.floor(Math.random() * 9));
    if (!numsInserted.includes(randomIndex)) {
      numsInserted.push(randomIndex);
      newShuffledArray.push(numbersBox[randomIndex]);
      c++;
    }
  }

  console.log(numsInserted);

  createBoxes(newShuffledArray);
});

btns[1].addEventListener("click", () => {
  boxes.innerHTML = "";
  numbersBox.sort(function (a, b) {
    return a.num - b.num;
  });
  console.log(numbersBox);
  createBoxes(numbersBox);
});
