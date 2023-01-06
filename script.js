
let width = 40;
let height = 20;



function createTable(width,height) {

    // general board object
    const board = document.querySelector(".board");
    board.setAttribute(
        "stye",
        `display:grid; gap:5px; grid-template-columns:repeat(${width},1/${width}fr); grid-template-rows:repeat(${width},1/${width}fr`
    );

    
    for (let i = 0; i < height; i ++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < width; j++) {
            let square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("click", () => {
                square.style.backgroundColor = "red";
            })

            row.append(square);
            
        }
        board.append(row);
    }
}

createTable(width,height);
