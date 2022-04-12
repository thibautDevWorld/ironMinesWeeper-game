
const newGame = new Game();


newGame.start();





function creatMatrix(){
    const matrix = document.getElementById("matrix");
        let cells = [];
        const shufflePositions = newGame.makingShufflingarr();  
        for (let i = 0; i < newGame.gridCol; i ++){
            let cell = document.createElement("div");
            cell.setAttribute("id", i);
            cell.classList.add(shufflePositions[i])
            
            
            matrix.appendChild(cell);
            cells.push(cell);              
        }

        
}










document.addEventListener('click', (e) => {
if(e.target === cell.classList.contains("mines"))
    // alert "Game Over";
console.log(cell.classList.contains("empty"));
})