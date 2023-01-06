
let width = 40;
let height = 20;

const board = document.querySelector(".board");
board.setAttribute(
    "stye",
    `display:grid; gap:5px; grid-template-columns:repeat(${width},1/${width}fr); grid-template-rows:repeat(${width},1/${width}fr`
);

for (let i = 1; i < width+1;i++) {
    for (let j = 1; j < height+1; j ++) {
        let square = document.createElement("div");
        square.classList.add("square");
        board.appendChild(square);

        square.setAttribute(
            "style",
            `grid-column:${i}/${i+1}; grid-row:${j}/${j+1}`
        );
    }
}