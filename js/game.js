class Game {
    constructor (){
        this.gridCol = 36;
        this.time = 0;
        this.pizzas = 10;
        this.playerScore = 0;
        this.shuffleArr = [];
    }

    
    start(){
        creatMatrix();
        
        
    }
    

    makingShufflingarr(){
        let pizzasArr = [];
        let stringpizza = 'pizza'
        let emptyArr = [];
        let emptyString = 'empty';
        for (let i = 0; i< this.pizzas; i++){
            pizzasArr.push(stringpizza);
        }
        
        for (let i = 0; i < this.gridCol - this.pizzas; i++){
            emptyArr.push(emptyString);
        }

        // regrouping both arrays
        let pizzasAndEmptySpace = [...pizzasArr, ...emptyArr];
        
        // shuffling array
        this.shuffleArr = pizzasAndEmptySpace.sort((a, b) => 0.5 - Math.random());
    } 
}




class PlayerScore{

}