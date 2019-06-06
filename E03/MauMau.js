/*
E02: MauMau
Name: Maurice Lucas
Matrikel: 256031
Datum: 09.04.2019
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var E03MauMau;
(function (E03MauMau) {
    window.addEventListener("load", handCard);
    let cardStack = [
        { value: "7", symbol: "Heart" }, { value: "7", symbol: "Tiles" }, { value: "7", symbol: "Clovers" }, { value: "7", symbol: "Pikes" },
        { value: "8", symbol: "Heart" }, { value: "8", symbol: "Tiles" }, { value: "8", symbol: "Clovers" }, { value: "8", symbol: "Pikes" },
        { value: "9", symbol: "Heart" }, { value: "9", symbol: "Tiles" }, { value: "9", symbol: "Clovers" }, { value: "9", symbol: "Pikes" },
        { value: "10", symbol: "Heart" }, { value: "10", symbol: "Tiles" }, { value: "10", symbol: "Clovers" }, { value: "10", symbol: "Pikes" },
        { value: "Joker", symbol: "Heart" }, { value: "Joker", symbol: "Tiles" }, { value: "Joker", symbol: "Clovers" }, { value: "Joker", symbol: "Pikes" },
        { value: "Queen", symbol: "Heart" }, { value: "Queen", symbol: "Tiles" }, { value: "Queen", symbol: "Clovers" }, { value: "Queen", symbol: "Pikes" },
        { value: "King", symbol: "Heart" }, { value: "King", symbol: "Tiles" }, { value: "King", symbol: "Clovers" }, { value: "King", symbol: "Pikes" },
        { value: "Ace", symbol: "Heart" }, { value: "Ace", symbol: "Tiles" }, { value: "Ace", symbol: "Clovers" }, { value: "Ace", symbol: "Pikes" }
    ];
    let handCards = [];
    let playCards = [];
    function handCard() {
        document.getElementById("drawstack").addEventListener("click", drawCard);
        document.addEventListener("keydown", spaceBar);
        document.getElementById("sort").addEventListener("click", sortCards);
        let input = parseInt(prompt("How many cards do you want to draw?"));
        distributeCards(input);
        displayCards();
    }
    function distributeCards(_input) {
        for (let i = 0; i < _input; i++) {
            let cardIndex = Math.floor(Math.random() * cardStack.length);
            let cardDrawn = cardStack[cardIndex];
            handCards.push(cardDrawn);
            cardStack.splice(cardIndex, 1);
        }
    }
    function displayCards() {
        var element = document.getElementById("handcards");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        for (let i = 0; i < handCards.length; i++) {
            let cardDrawn = document.createElement("div");
            cardDrawn.innerText = handCards[i].symbol + " " + handCards[i].value;
            cardDrawn.setAttribute("class", "cardsDrawn");
            cardDrawn.addEventListener("click", playCard);
            cardDrawn.setAttribute("id", "" + i);
            document.getElementById("handcards").appendChild(cardDrawn);
        }
    }
    function spaceBar(_event) {
        if (_event.keyCode == 32 && cardStack.length > 0) {
            drawCard();
        }
        else {
            playCardKey();
        }
    }
    function playCardKey() {
        playCards.push(handCards[0]);
        handCards.splice(0, 1);
        var element = document.getElementById("playstack");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        for (let i = 0; i < playCards.length; i++) {
            let cardDrawn = document.createElement("div");
            cardDrawn.innerText = playCards[i].symbol + " " + playCards[i].value;
            cardDrawn.setAttribute("class", "cardsDrawn");
            document.getElementById("playstack").appendChild(cardDrawn);
        }
        displayCards();
    }
    function playCard(_element) {
        let target = _element.target;
        console.log(target.id);
        playCards.push(handCards[Number(target.id)]);
        handCards.splice(Number(target.id), 1);
        var element = document.getElementById("playstack");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        for (let i = 0; i < playCards.length; i++) {
            let cardDrawn = document.createElement("div");
            cardDrawn.innerText = playCards[i].symbol + " " + playCards[i].value;
            cardDrawn.setAttribute("class", "cardsDrawn");
            document.getElementById("playstack").appendChild(cardDrawn);
        }
        displayCards();
    }
    function drawCard() {
        let cardIndex = Math.floor(Math.random() * cardStack.length);
        let cardDrawn = cardStack[cardIndex];
        handCards.push(cardDrawn);
        cardStack.splice(cardIndex, 1);
        displayCards();
    }
    function sortCards() {
        handCards.sort((a, b) => {
            if (a.value > b.value) {
                return 1;
            }
            else if (a.value < b.value) {
                return -1;
            }
            else {
                return 0;
            }
        });
        handCards.sort((a, b) => {
            if (a.symbol > b.symbol) {
                return 1;
            }
            else if (a.symbol < b.symbol) {
                return -1;
            }
            else {
                return 0;
            }
        });
        displayCards();
    }
})(E03MauMau || (E03MauMau = {}));
//# sourceMappingURL=MauMau.js.map