class Game {
    constructor (){
        this.gridCol = 36;
        this.time = 0;
        this.mines = 5;
        this.playerScore = 0;
        this.shuffleArr = [];
        this.cells = [];
    }

    
    start(){
        creatMatrix();
        
    }
    


    creatMatrix(){
        const matrix = document.getElementById("matrix");
            // let cells = [];
            const shufflePositions = newGame.makingShufflingarr();  
            for (let i = 0; i < this.gridCol; i ++){
                let cell = document.createElement("div");
                cell.setAttribute("id", i);
                cell.classList.add(shufflePositions[i])               
                matrix.appendChild(cell);
                this.cells.push(cell); 
                

                cell.addEventListener('click', function(e){
                  console.log(e.target);
                  if (e.target.classList.contains('mines')){
                      e.target.setAttribute("class", 'fallOnMine')
                    
                     console.log('You loose');
                  } if (e.target.classList.contains('empty')){
                      e.target.setAttribute("class", 'checked')
                  }
                //     if(e.target){
                //       alert console.log(e.target);
                //   }
                })

               
            

            }
    
            
    }
    

    makingShufflingarr(){
        let minesArr = [];
        let stringmines = 'mines'
        let emptyArr = [];
        let emptyString = 'empty';
        for (let i = 0; i< this.mines; i++){
            minesArr.push(stringmines);
        }
        
        for (let i = 0; i < this.gridCol - this.mines; i++){
            emptyArr.push(emptyString);
        }

        // regrouping both arrays
        let minesAndEmptySpace = [...minesArr, ...emptyArr];
        
        // shuffling array
        this.shuffleArr = minesAndEmptySpace.sort((a, b) => 0.5 - Math.random());
        return this.shuffleArr
    } 


  

}



const newGame = new Game();
newGame.creatMatrix();









const startingMinutes = 2;
let time = startingMinutes* 60;
let refreshIntervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if(seconds < 2){
        seconds = '0' + seconds
    } 
    const countDownEl = document.getElementById("countDown");
    countDownEl.innerHTML = `${minutes}:${seconds}`;

    time--;

    if (time < 0){
        clearInterval(refreshIntervalId);
    }
}