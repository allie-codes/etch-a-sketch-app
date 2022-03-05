// TODO
// refactor EVERYTHING, put most things into functions?
// create mockup of UI
// move crucial UI components to index.html
// allow user to change size
// allow user to change color
// allow user to use a freestyle color mode
// color palettes?
// think of a better name lol
// add etch a sketch mode or drawing mode, or maybe a "precision mode" toggle
// add little question mark popup explaining precision mode
// make current "mode" highlighted, as in draw or erase mode, etc

let app = document.querySelector("#app");
let ui = document.querySelector("#ui");
let container = document.querySelector("#container");
// let eraseButton = document.createElement("button");
// eraseButton.textContent = "Erase Mode";
let eraseButton = document.querySelector(".erase-button");
// let drawButton = document.createElement("button");
// drawButton.textContent = "Draw Mode";
let drawButton = document.querySelector(".draw-button");
drawButton.classList.add("active-mode");
let gridButton = document.createElement("button");
gridButton.textContent = "Toggle Grid";
let clearGrid = document.createElement("button");
clearGrid.textContent = "Clear ";

let gridSize = 8;

const createGrid = () => {};

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  container.style.gridTemplateColumns = `repeat(16, 1fr)`;
  container.style.gridTemplateRows = `repeat(16, 1fr)`;

  square.classList.add("square");
  square.addEventListener("mouseenter", () => {
    square.classList.add("square-mouseover");
  });
  // square.addEventListener("mouseenter", () => {
  //   if (square.classList.contains("square-mouseover")) {
  //     square.classList.remove("square-mouseover");
  //   }
  //});
  container.appendChild(square);
}

eraseButton.addEventListener("click", () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    console.log(child);
    child.addEventListener("mouseenter", () => {
      child.classList.remove("square-mouseover");
    });
  }
  eraseButton.classList.add("active-mode");
  drawButton.classList.remove("active-mode");
});

drawButton.addEventListener("click", () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    console.log(child);
    child.addEventListener("mouseenter", () => {
      child.classList.add("square-mouseover");
    });
  }
  drawButton.classList.add("active-mode");
  eraseButton.classList.remove("active-mode");
});

gridButton.addEventListener("click", () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    child.classList.toggle("grid");
  }
});

clearGrid.addEventListener("click", () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    child.classList.remove("square-mouseover");
  }

  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    console.log(child);
    child.addEventListener("mouseenter", () => {
      child.classList.add("square-mouseover");
    });
  }
});

ui.appendChild(gridButton);
ui.appendChild(clearGrid);

// let count = 20;
// for (let i = 1; i <= 365; i++) {
//   //console.log("day", i, ": ", count, " potatoes");
//   console.log(`Day ${i}: ${count} potatoes`);
//   count = count * 2;
// }

// const ul = document.getElementById("authors");
// const list = document.createDocumentFragment();
// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(
//   "https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=9f58ebd3&app_key=b86e1b6643a79093228da383811f2fbd&random=false"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// import axios from "axios";

// const baseUrl =
//   "https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=9f58ebd3&app_key=b86e1b6643a79093228da383811f2fbd&random=false";
// const getIndicatorByCountry = async (country, indicator, page) => {
//   const query = `${baseUrl}/${country}/indicator/${indicator}?page=${page}&format=json`;
//   const response = await axios.get(query);
//   const data = response.data;

//   if (data[0].pages > page) {
//     return data.concat(
//       await getIndicatorByCountry(country, indicator, page + 1)
//     );
//   } else {
//     return data;
//   }
// };
