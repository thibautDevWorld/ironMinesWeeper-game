



class Game {
    constructor (){
        this.gridCol = 36;
        this.time = 0;
        this.mines = 10;
        this.playerScore = 0;
        this.shuffleArr = [];
    }

    
    start(){
        creatMatrix();
        
        
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




class PlayerScore{

}