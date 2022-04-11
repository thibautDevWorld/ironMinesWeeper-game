

const matrix = document.getElementById("matrix");
console.log(matrix);
let numberOfcol = 9;
let cells = [];

function creatMatrix(){
    for (let i = 0; i < numberOfcol; i ++){
        let cell = document.createElement("div");
        cell.setAttribute("id", i);
        matrix.appendChild(cell);
        cells.push(cell);
    }
}





const newGame = new Game();
newGame.start();



document.addEventListener('click', (e) => {

    

   

})