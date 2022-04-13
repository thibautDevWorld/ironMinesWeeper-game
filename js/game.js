class Game {
    constructor(){
        this.matrix = [];
        this.rows = 8;
        this.columns = 8;
        this.minesNumber = 5;
        // this.minesPosition = [];
        // this.cellClicked = 0;
        // this.gameOver = false;
    }


    startGame(){
        document.getElementById("mines-number").innerText = this.minesNumber;
        this.createMatrix();
    }

    createMatrix(){
        for (let i = 0; i < this.rows; i++){
            let row = [];
        
            for (let j = 0; j < this.columns; j++){
                let cell = document.createElement("div");
                cell.setAttribute("id", i + "-" + j);
                
                const matrixDivSelection = document.getElementById("matrix")
                matrixDivSelection.appendChild(cell);
                row.push(cell); // send all the cell in the row array
            }
            this.matrix.push(row) // send div position in the matrix array
        }
    }
}

const newGame = new Game();
newGame.startGame()












































// class Game {
//     constructor() {
//         this.numberOfCells = 36;
//         this.time = 0;
//         this.mines = 5;
//         this.playerScore = 0;
//         this.shuffleArr = [];
//         this.cells = [];
//     }


//     start() {
//         document.getElementById("numberOfMines").innerHTML = this.mines;
//     }



//     creatMatrix() {
//         const matrix = document.getElementById("matrix");
//         const shufflePositions = this.makingShufflingarr();

//         for (let i = 0; i < this.numberOfCells; i++) {

//             // create dom element
//             let cell = document.createElement("div");
//             cell.setAttribute("id", i);
//             cell.setAttribute("class", "cell");
//             cell.classList.add(shufflePositions[i])
//             matrix.appendChild(cell);

//             // add to array
//             this.cells.push(cell);


//             // add event listeners
//             cell.addEventListener('click', function (e) {

//                 // check game over
//                 if (e.target.classList.contains('mines')) {
//                     e.target.setAttribute("class", 'fallOnMine')
//                     console.log('You loose');
//                 } if (e.target.classList.contains('empty')) {
//                     e.target.setAttribute("class", 'checked')
//                 }

//                 // count mines around
//                 // ...

//             })
//         }
//     }


//     makingShufflingarr() {
//         let minesArr = [];
//         let stringmines = 'mines'
//         let emptyArr = [];
//         let emptyString = 'empty';
//         for (let i = 0; i < this.mines; i++) {
//             minesArr.push(stringmines);
//         }

//         for (let i = 0; i < this.numberOfCells - this.mines; i++) {
//             emptyArr.push(emptyString);
//         }

//         // regrouping both arrays
//         let minesAndEmptySpace = [...minesArr, ...emptyArr];

//         // shuffling array
//         this.shuffleArr = minesAndEmptySpace.sort((a, b) => 0.5 - Math.random());
//         return this.shuffleArr
//     }




// }



// const newGame = new Game();
// newGame.creatMatrix();
// newGame.start()









// const startingMinutes = 2;
// let time = startingMinutes * 60;
// let refreshIntervalId = setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     if (seconds < 2) {
//         seconds = '0' + seconds
//     }
//     const countDownEl = document.getElementById("countDown");
//     countDownEl.innerHTML = `${minutes}:${seconds}`;

//     time--;

//     if (time < 0) {
//         clearInterval(refreshIntervalId);
//     }
// }