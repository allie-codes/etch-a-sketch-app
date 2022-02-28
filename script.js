let app = document.querySelector("#app");
let ui = document.querySelector("#ui");
let container = document.querySelector("#container");
let eraseButton = document.createElement("button");
eraseButton.textContent = "Erase Mode";
let drawButton = document.createElement("button");
drawButton.textContent = "Draw Mode";
let gridButton = document.createElement("button");
gridButton.textContent = "Toggle Grid";
let clearGrid = document.createElement("button");
clearGrid.textContent = "Clear ";

let gridSize = 8;

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
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
});

drawButton.addEventListener("click", () => {
  for (let i = 0; i < container.children.length; i++) {
    let child = container.children[i];
    console.log(child);
    child.addEventListener("mouseenter", () => {
      child.classList.add("square-mouseover");
    });
  }
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

ui.appendChild(eraseButton);
ui.appendChild(drawButton);
ui.appendChild(gridButton);
ui.appendChild(clearGrid);

// let count = 20;
// for (let i = 1; i <= 365; i++) {
//   //console.log("day", i, ": ", count, " potatoes");
//   console.log(`Day ${i}: ${count} potatoes`);
//   count = count * 2;
// }

const ul = document.getElementById("authors");
const list = document.createDocumentFragment();
const url = "https://jsonplaceholder.typicode.com/users";

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
