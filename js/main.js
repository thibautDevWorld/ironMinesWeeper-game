
const newGame = new Game();

console.log(newGame.shuffleArr);
newGame.start();
newGame.makingShufflingarr();





function creatMatrix(){
    const matrix = document.getElementById("matrix");
        let cells = [];
    
        for (let i = 0; i < newGame.gridCol; i ++){
            let cell = document.createElement("div");
            // cell.classList.add(drawPizzas[i]);
            cell.setAttribute("id", i);
            matrix.appendChild(cell);
            cells.push(cell);              
        }

      
}











document.addEventListener('click', (e) => {

    

   

})