namespace E08 {
    window.addEventListener("load", init);  //Wenn html fenster geladen init ausführen

    function init(): void {
        let stringOfBoxes: string = prompt("Bitte geben sie die Anzahl der zu zeichnenden Quadrate an (zwischen 10 und 100)");
        //Aufruf des Eingabefensters und deklarierung der Eingabe als Variable
        let numberOfBoxes: number = parseInt(stringOfBoxes); //Umwandlung des eingebeben Strings in Number
        console.log(numberOfBoxes);


        if (numberOfBoxes >= 10 && numberOfBoxes <= 100) {
            for (let i: number = 0; i < numberOfBoxes; i++) {
                drawBoxes(Math.random() * 100, Math.random() * 100, 30, 30, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
        }
    }
    function drawBoxes(_x: number, _y: number, _height: number, _width: number, _color: string): void {
        let divBox: HTMLDivElement = document.createElement("div");

        divBox.style.marginLeft = _x + "px";
        divBox.style.marginTop = _y + "px";
        divBox.style.width = _width + "px";
        divBox.style.height = _height + "px";
        divBox.style.background = _color;

        document.body.appendChild(divBox);

    }
}