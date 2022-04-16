let matrix = [];
let rows = 8;
let columns = 8;

let minesNumber = 5;
let minesPosition = ["6-7", "2-3", "7-7", "2-1", "4-7"];

let gameOver = false;


window.onload = function(){
    startGame();
    restartButton()
}


function startGame(){
    document.getElementById("mines-number").innerText = minesNumber;
    
    for (let i = 0; i < rows; i++){
            let row = []
            
        for (let j = 0; j < columns; j++){
            let cell = document.createElement("div");
            cell.setAttribute("id", i + "-" + j);
            const matrixDivSelection = document.getElementById("matrix")
            matrixDivSelection.appendChild(cell);
            row.push(cell); // send all the cell in the row array 

            
            ////////////////////////////////////////////////////////////////////////////
            cell.addEventListener('click', function (e) {
                if (minesPosition.includes(cell.id)) {
                    gameOver = true;
                    displayMines()
                    removeClassHidden()
                    return;
                }
                e.target.classList.add("cell-clicked")

                let test = 0;
                if (minesPosition.includes(`${i-1}-${j-1}`)) {
                    test++
                }
                if (minesPosition.includes(`${i-1}-${j}`)) {
                    test++
                }
                if (minesPosition.includes(`${i-1}-${j+1}`)){
                    test++
                }
                //////////////////////////////////////////////////////////////////////////
                if (minesPosition.includes(`${i}-${j-1}`)) {
                    test++
                }
                if (minesPosition.includes(`${i}-${j+1}`)) {
                    test++
                }
                //////////////////////////////////////////////////////////////////////////
                if (minesPosition.includes(`${i+1}-${j-1}`)) {
                    test++
                }
                if (minesPosition.includes(`${i+1}-${j}`)) {
                    test++
                }
                if (minesPosition.includes(`${i+1}-${j+1}`)){
                    test++
                }
                //////////////////////////////////////////////////////////////////////////      
                if(test > 0) {
                    e.target.innerText = test
                }               
            })
            ////////////////////////////////////////////////////////////////////////////////                        
        }
        matrix.push(row) // send div position in the matrix array
    } 
}

function displayMines(){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            let searchMine = matrix[i][j];
            if (minesPosition.includes(searchMine.id)){
                searchMine.innerText = "💣"
            }    
        }
    }
}

function displayMinesNumber(){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const matrixDivSelection = document.getElementById("matrix")
            console.log(matrixDivSelection);
        }
    }
}

function removeClassHidden(){
    let displayMess = document.getElementsByClassName("hidden");
    displayMess[0].classList.replace("hidden", "displayGameOver");  // Thanks to Gabriel for this one ;)
}

function restartButton(){
    let replayButton = document.getElementById('replayButton');
    replayButton.addEventListener('click', () => {
        replayAgain()
    })
}

function replayAgain(){
    location.reload();
}


const startingMinutes = 2;
let time = startingMinutes * 60;
let refreshIntervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    const countDownEl = document.getElementById("countDown");
    countDownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (time < 0) {
        clearInterval(refreshIntervalId);
        removeClassHidden()
    }
    if (gameOver == true){
        clearInterval(refreshIntervalId);
    }
}