
// let nameInputEl = document.querySelector("#nameInput-el")
// let playerName = nameInputEl.
let player = {
    name: "Ronald",
    chips: 50
}
let sum = 0
let startedGame = false
let hasBlackJack = false
let isAlive = false
let cardsContainerEl = document.getElementById('cardsContainer-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let messageEl = document.getElementById('message-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent += player.name + ':$' + player.chips
let defImgEl = document.getElementById('defImg-el')
// let Cards = []
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
    defImgEl.style.display = 'none'
    if (startedGame === false) {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = CardsNumber[0] + CardsNumber[1] + 2
        // Cards =[firstCard,secondCard]
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
    } else {
        message = "you're out of the game!"
        isAlive = false
        document.getElementById("cool").style.background = "black"
    }
    messageEl.textContent = message
    // for (let i = 0; i < Cards.length; i++){
    //     cardsContainerEl.innerHTML += Cards[i]
    // }
    sumEl.textContent = "Sum: " + sum
}

let thirdCard = ''
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        thirdCard = getRandomCard()
        sum += ActualRC + 1
        renderGame()
    }
}
