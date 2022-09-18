
let player ={
    name: "Ronald",
    chips: 50
}
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let startedGame = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
const startGame = () => {
    if (startedGame === false){
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
    startedGame = true
}
const getRandomCard = () => {
    let randomNumber =  Math.floor(Math.random() * 13 + 1) 
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

const renderGame = () => {
    if(sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "Wohoo! you've got a black jack!"
        hasBlackJack = true
        document.querySelector("body").style.backgroundImage = `URL("thanos.gif")`
    } else {
        message = "you're out of the game!"
        isAlive = false
        document.getElementById("cool").style.background = "black"
}
messageEl.textContent = message
cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}
sumEl.textContent = "Sum: " + sum   
}

let thirdCard = getRandomCard()
const newCard =()=> {
    if (hasBlackJack === false && isAlive === true) {
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}


