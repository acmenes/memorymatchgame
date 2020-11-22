document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById("game");
    let cardsChosen = []
    let checkCards = []
    let cardsWon = []
    const score = document.getElementById("score")

//I think I want to use the images instead of the colors like in the tutorial game

    const cardArray = [
        {
            name: 'fries', img:'images/fries.png'
        },
        {
            name: 'cheeseburger', img:'images/cheeseburger.png'
        },
        {
            name: 'hotdog', img:'images/hotdog.png'
        },
        {
            name: 'icecream', img:'images/ice-cream.png'
        },
        {
            name: 'milkshake', img:'images/milkshake.png'
        },
        {
            name: 'pizza', img:'images/pizza.png'
        },
        {
            name: 'fries', img:'images/fries.png'
        },
        {
            name: 'cheeseburger', img:'images/cheeseburger.png'
        },
        {
            name: 'hotdog', img:'images/hotdog.png'
        },
        {
            name: 'icecream', img:'images/ice-cream.png'
        },
        {
            name: 'milkshake', img:'images/milkshake.png'
        },
        {
            name: 'pizza', img:'images/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
  
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++ ){
            let card = document.createElement("img")
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gameContainer.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute("data-id")
        this.setAttribute('src', cardArray[cardId].img)
        this.setAttribute('class', 'flipped')
        cardsChosen.push(cardId)
        checkCards.push(cardId)
        if(cardsChosen.length === 2){
            console.log("checking for match")
            console.log(cardsChosen)
            console.log(checkCards)
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch(){
        //how can I compare the ids of each card?
        var cards = document.querySelectorAll('img')
        let cardOne = checkCards[0]
        let cardTwo = checkCards[1]
        console.log(cardOne, cardTwo)
        let originalOne = cardArray[cardOne]
        let originalTwo = cardArray[cardTwo]
        console.log(originalOne, originalTwo)
        //can it search back in the original array for the corresponding cards?
        if(originalOne.name === originalTwo.name){
            alert("It's a match!")
            cardsWon.push(cardsChosen)
            console.log(cardsWon)
            score.textContent = `Score: ${cardsWon.length}`
        }else{
            alert("Try again!")
            cards[cardOne].setAttribute('src', 'images/blank.png')
            cards[cardTwo].setAttribute('src', 'images/blank.png')
        }     
        cardsChosen = []
        checkCards = []
        if  (cardsWon.length === cardArray.length/2) {
            score.textContent = 'Congratulations! You found them all!'
          }
    }

    createBoard();
 })