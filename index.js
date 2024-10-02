
let score = 0
let scoreDiv = document.querySelector('.score')
// Rules code
const rulesButton = document.querySelector(".rulesButton")
const main = document.querySelector(".main")
const rulesDiv = document.querySelector('.rulesDiv')

rulesButton.addEventListener('click', ()=>{
    let newRulesWindow = new RulesModal
})

class RulesModal{
    constructor(){
        this.creatingModal()
    }
    creatingModal(){
        this.rulesModalDiv = document.createElement('div')
        this.rulesModalDiv.setAttribute('class', 'modalOverlay')
        this.rulesModalDiv.innerHTML = `
            <div class="rulesModalDiv">
                <div class="close">
                    <div>4</div>
                        <img  class="imgClose" src="images/icon-close.svg" alt="">
                    </div>
                    <div class="imgRules">
                        <img class="imgReal" src="images/image-rules-bonus.svg"  alt="">
                    </div>
                </div>
            </div>
        `
        main.appendChild(this.rulesModalDiv)

        this.closingModal()


    }

    closingModal(){
        const closeButton = document.querySelector('.imgClose')
        closeButton.addEventListener('click', ()=>{
            main.removeChild(this.rulesModalDiv)
        })
    }
}

// Changing screen after the user choosing an option

const container = document.querySelector('.container')
const options = document.querySelectorAll('.options')

options.forEach((el, i)=>{
    el.addEventListener('click', ()=>{
        container.style.display = 'none'
        let resultDiv = document.createElement('div')
        resultDiv.setAttribute('class', 'resultMainDiv')
        resultDiv.innerHTML = `
            <div class="whoPicked">
                <div class=" picked">YOU PICKED</div>
                <div class=" picked">THE HOUSE PICKED</div>
            </div>
            <div class="resultDiv">
                <div class="youPicked"></div>
                    <div class="playAgainDiv">
                        <h1 class="winOrLoseText">YOU LOSE</h1>
                        <button class="playAgainButton">PLAY AGAIN</button>
                    </div>
                    <div class="housePicked"></div>
                </div>
            </div>

            
        `
        
        main.insertBefore(resultDiv, rulesDiv)

        const winOrLoseText = document.querySelector('.winOrLoseText')

        // Playing again button
        const playAgainButton = document.querySelector(".playAgainButton")

        playAgainButton.addEventListener('click', ()=>{
            main.removeChild(resultDiv)
            container.style.display = 'block'
            
        })
        //Showing House choice
        const housePicked = document.querySelector('.housePicked')
        function computerChoiceFunction(max){
            return Math.floor(Math.random() * max)
        }

        let computerChoiceVar = computerChoiceFunction(4)
        if (computerChoiceVar === 0) {
            housePicked.classList.add('lizardResult')
        }
        else if(computerChoiceVar ===1) {
            housePicked.classList.add('paperResult')
        }
        else if(computerChoiceVar ===2) {
            housePicked.classList.add('rockResult')
        }
        else if(computerChoiceVar ===3) {
            housePicked.classList.add('spockResult')
        }
        else if(computerChoiceVar ===4) {
            housePicked.classList.add('scissorsResult')
        }
        console.log(computerChoiceVar)


        // Showing the user choice
        let youPicked = document.querySelector('.youPicked')
            
        if (el.classList.contains('scissors')){
            youPicked.classList.add('scissorsResult')
        }
        else if(el.classList.contains('lizard')){
            youPicked.classList.add('lizardResult')
        }
        else if(el.classList.contains('rock')){
            youPicked.classList.add('rockResult')
        }
        else if(el.classList.contains('paper')){
            youPicked.classList.add('paperResult')
        }
        else if(el.classList.contains('spock')){
            youPicked.classList.add('spockResult')
        }
        // Seeing who win or lose
        // being:
        // 0 = lizard
        // 1 = paper
        // 2= rock 
        // 3 = spock
        // 4 = scissors
        let winOrLose = 9999
        
        // lizard
        if (el.classList.contains('lizard') && (computerChoiceVar === 1 || computerChoiceVar ===3)){
            winOrLose = 1
            
            
        }
        else if(el.classList.contains('lizard') && (computerChoiceVar === 0)){
            winOrLose = 2
        }
        
        // rock
        else if (el.classList.contains('rock') && (computerChoiceVar === 0 || computerChoiceVar ===1)){
            winOrLose = 1
            
        }
        else if(el.classList.contains('rock') && (computerChoiceVar === 2)){
            winOrLose = 2
        }

        // paper
        else if (el.classList.contains('paper') && (computerChoiceVar === 2 || computerChoiceVar ===3)){
            winOrLose = 1
            
        }
        else if(el.classList.contains('paper') && (computerChoiceVar === 1)){
            winOrLose = 2
        }
        // spock
        else if (el.classList.contains('spock') && (computerChoiceVar === 4 || computerChoiceVar ===2)){
            winOrLose = 1
            
        }
        else if(el.classList.contains('spock') && (computerChoiceVar === 3)){
            winOrLose = 2
        }
        // scissors 
        else if (el.classList.contains('scissors') && (computerChoiceVar === 0 || computerChoiceVar ===1)){
            winOrLose = 1
            
        }
        else if(el.classList.contains('scissors') && (computerChoiceVar === 4)){
            winOrLose = 2
        }
        else {
            winOrLose = 0
        }



        if (winOrLose === 0) {
            winOrLoseText.innerHTML = 'YOU LOSE';
            score--;
            scoreDiv.innerHTML = `${score}`;
        } else if (winOrLose === 1) {
            winOrLoseText.innerHTML = 'YOU WIN';
            score++;
            scoreDiv.innerHTML = `${score}`;
        } else if (winOrLose === 2) {
            winOrLoseText.innerHTML = 'DRAW';
        }

            
    })

})

