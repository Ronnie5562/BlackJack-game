
function enterGame(){
    const nameInputEl = document.getElementById('nameInput-el')
    const playerName = nameInputEl.value
    alert('Welcome back ' + playerName)
    document.embeds()
}

let player = {
    name: 'Token',
    chips: 100
}

let sum = 0
let startedGame = false
let hasBlackJack = false
let isAlive = false
let cardsContainerEl = document.getElementById('cardsContainer-el')
let StartBtn = document.querySelector('.start-btn')
let NewCardBtn = document.querySelector('.newcard-btn')
let RestartBtn = document.querySelector('.restart-btn')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let messageEl = document.getElementById('message-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent += player.name + ':$' + player.chips
let defImgEl = document.getElementById('defImg-el')
let Cards = []
let CardsNumber = []
let newCards = [
    '`<img src="CARDS/ACE.png">`',
    '`<img src="CARDS/TWO.png">`',
    '`<img src="CARDS/THREE.png">`',
    '`<img src="CARDS/FOUR.png">`',
    '`<img src="CARDS/FIVE.png">`',
    '`<img src="CARDS/SIX.png">`',
    '`<img src="CARDS/SEVEN.png">`',
    '`<img src="CARDS/EIGHT.png">`',
    '`<img src="CARDS/NINE.png">`',
    '`<img src="CARDS/TEN.png">`',
    '`<img src="CARDS/JACK.png">`',
    '`<img src="CARDS/QUEEN.jpg">`',
    '`<img src="CARDS/KING.jpg">`'
]
let NrandomC = ''
function startGame() {
    defImgEl.classList.add('hide')
    if (startedGame === false) {
        isAlive = true
        cardsContainerEl.innerHTML = []
        
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = CardsNumber[0] + CardsNumber[1] + 2
        Cards =[firstCard,secondCard]
        renderGame()
    }
    startedGame = true
}

function getRandomCard() {
    ActualRC = Math.floor(Math.random() * 13)
    CardsNumber.push(ActualRC)
    NrandomC = newCards[ActualRC]
    cardsContainerEl.innerHTML += NrandomC
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw another card?"

    } else if (sum === 21) {
        message = "Wohoo! you've got a black jack!"
        hasBlackJack = true
        document.querySelector("body").style.backgroundImage = `URL("Win bg.jpg")`
        RestartBtn.classList.remove('hide')
        NewCardBtn.classList.add('hide')
        StartBtn.classList.add('hide')
    } else {
        message = "you're out of the game!"
        isAlive = false
        document.getElementById("cool").style.background = "black"
        RestartBtn.classList.remove('hide')
        NewCardBtn.classList.add('hide')
        StartBtn.classList.add('hide')
    }
    messageEl.textContent = message
    // for (let i = 0; i < Cards.length; i++){
        //     cardsContainerEl.innerHTML += Cards[i]
        // }
    
    sumEl.textContent = "Sum: " + sum
    if (isAlive === false){
        let reduction = player.chips / 2
        let playerMoney = player.name + ':$' + reduction
        playerEl.textContent = playerMoney
        RestartBtn.classList.remove('hide')
    }else if (hasBlackJack === true){
        let reduction = player.chips * 10
        let playerMoney = player.name + ':$' + reduction
        playerEl.textContent = playerMoney
    }
}

let thirdCard = ''
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        thirdCard = getRandomCard()
        sum += ActualRC + 1
        renderGame()
    }
}

function cleanUp() {
    RestartBtn.classList.add('hide')
    NewCardBtn.classList.remove('hide')
    StartBtn.classList.remove('hide')
    cardsContainerEl.innerHTML = `<img id="defImg-el" src="CARDS/default.png">`
    sumEl.textContent = 'Sum: 0'
    messageEl.textContent = 'Do you want to play a round?'
    Cards = []
    CardsNumber = []
    sum = 0
    hasBlackJack = false
    isAlive = false
    startedGame = false
    document.querySelector("body").style.backgroundImage = `URL("download.jpg")`
    defImgEl.classList.remove('hide')

}