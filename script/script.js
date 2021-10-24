document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector("#board");
    const SQUARES_NUMBERS = 1015;

    function createSquare(){
        for(let i = 0; i < SQUARES_NUMBERS; i++){
            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover", () => addColor(square));
            square.addEventListener("mouseleave", () => removeColor(square));

            board.append(square);
        }
    }
    function addColor(element){
        element.style.backgroundColor = `rgb(${randomColor(0, 255)},${randomColor(0, 255)},${randomColor(0, 255)})`;
        element.classList.add("square-transform");
    } 
    function removeColor(element){
        element.style.backgroundColor = "#1d1d1d";
        element.classList.remove("square-transform");
    }
    function randomColor(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    createSquare();
})

