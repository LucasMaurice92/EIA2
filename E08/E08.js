var E08;
(function (E08) {
    window.addEventListener("load", init); //Wenn html fenster geladen init ausführen
    function init() {
        let stringOfBoxes = prompt("Bitte geben sie die Anzahl der zu zeichnenden Quadrate an (zwischen 10 und 100)");
        //Aufruf des Eingabefensters und deklarierung der Eingabe als Variable
        let numberOfBoxes = parseInt(stringOfBoxes); //Umwandlung des eingebeben Strings in Number
        console.log(numberOfBoxes);
        if (numberOfBoxes >= 10 && numberOfBoxes <= 100) {
            for (let i = 0; i < numberOfBoxes; i++) {
                drawBoxes(Math.random() * window.innerWidth, Math.random() * window.innerWidth, 30, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
        }
        else {
            window.alert("Bitte gib eine korrekte Zahl ein.");
        }
    }
    function drawBoxes(_x, _y, _height, _width, _color) {
        let divBox = document.createElement("div");
        divBox.style.left = _x + "px";
        divBox.style.top = _y + "px";
        divBox.style.width = _width + "px";
        divBox.style.height = _height + "px";
        divBox.style.background = _color;
        document.body.appendChild(divBox);
    }
})(E08 || (E08 = {}));
//# sourceMappingURL=E08.js.map