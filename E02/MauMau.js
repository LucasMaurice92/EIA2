/*
E02: MauMau
Name: Maurice Lucas
Matrikel: 256031
Datum: 09.04.2019
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var E02MauMau;
(function (E02MauMau) {
    window.addEventListener("load", handCard);
    var cardStack = [
        { value: "7", symbol: "Heart" }, { value: "7", symbol: "Tiles" }, { value: "7", symbol: "Clovers" }, { value: "7", symbol: "Pikes" },
        { value: "8", symbol: "Heart" }, { value: "8", symbol: "Tiles" }, { value: "8", symbol: "Clovers" }, { value: "8", symbol: "Pikes" },
        { value: "9", symbol: "Heart" }, { value: "9", symbol: "Tiles" }, { value: "9", symbol: "Clovers" }, { value: "9", symbol: "Pikes" },
        { value: "10", symbol: "Heart" }, { value: "10", symbol: "Tiles" }, { value: "10", symbol: "Clovers" }, { value: "10", symbol: "Pikes" },
        { value: "Joker", symbol: "Heart" }, { value: "Joker", symbol: "Tiles" }, { value: "Joker", symbol: "Clovers" }, { value: "Joker", symbol: "Pikes" },
        { value: "Queen", symbol: "Heart" }, { value: "Queen", symbol: "Tiles" }, { value: "Queen", symbol: "Clovers" }, { value: "Queen", symbol: "Pikes" },
        { value: "King", symbol: "Heart" }, { value: "King", symbol: "Tiles" }, { value: "King", symbol: "Clovers" }, { value: "King", symbol: "Pikes" },
        { value: "Ace", symbol: "Heart" }, { value: "Ace", symbol: "Tiles" }, { value: "Ace", symbol: "Clovers" }, { value: "Ace", symbol: "Pikes" }
    ];
    var handCards = [];
    function handCard() {
        var input = parseInt(prompt("How many cards do you want to draw?"));
        distributeCards(input);
        displayCards();
        console.log("kkkkk");
        console.log("kkkkk");
    }
    function distributeCards(_input) {
        for (var i = 0; i < _input; i++) {
            var cardIndex = Math.floor(Math.random() * cardStack.length);
            var cardDrawn = cardStack[cardIndex];
            handCards.push(cardDrawn);
            cardStack.splice(cardIndex, 1);
        }
    }
    function displayCards() {
        for (var i = 0; i < handCards.length; i++) {
            var cardDrawn = document.createElement("div");
            cardDrawn.innerText = handCards[i].symbol + " " + handCards[i].value;
            cardDrawn.setAttribute("class", "cardsDrawn");
            document.getElementById("handcards").appendChild(cardDrawn);
        }
    }
})(E02MauMau || (E02MauMau = {}));
