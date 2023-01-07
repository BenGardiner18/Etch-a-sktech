


let height, width;
let button = document.querySelector(".generate");

button.addEventListener("click", () => {

    height = parseInt(document.querySelector("#height").value);
    width = parseInt(document.querySelector("#width").value);

    createTable(width,height);

});

function getRandomColor() {
    let randRed = Math.random()*256;
    let randGreen = Math.random()*256;
    let randBlue = Math.random()*256;

    return [randRed,randGreen,randBlue];
}

function createTable(width,height) {


    // general board object
    const board = document.querySelector(".board");
    board.setAttribute(
        "stye",
        `display:grid; gap:5px; grid-template-columns:repeat(${width},1/${width}fr); grid-template-rows:repeat(${width},1/${width}fr`
    );

    if (width == 0 || height == 0) {
        board.innerHTML = "";
    }
    else if (width > 100 || height > 100) {
        alert("grid dimensions are too large pick something smaller!")
    }
    else if (width < 0 || height < 0) {
        alert("grid dimensions must be positive integers");
    }
    else {
        // reseting board before adding more squares
        board.innerHTML = "";
        for (let i = 0; i < height; i ++) {
            let row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < width; j++) {
                let square = document.createElement("div");
                square.classList.add("square");
    
                square.addEventListener("click", () => {
                    color = getRandomColor();
                    square.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
                })
    
                row.append(square);
                
            }
            board.append(row);
        }
    }
}
