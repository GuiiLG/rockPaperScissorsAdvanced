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
                        <h1 class="">YOU LOSE</h1>
                        <button class="playAgainButton">PLAY AGAIN</button>
                    </div>
                    <div class="housePicked"></div>
                </div>
            </div>

            
        `
        main.insertBefore(resultDiv, rulesDiv)
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
        
    })
})