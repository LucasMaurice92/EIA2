/*
Aufgabe 8: Div Elemente
Name: Maurice Lucas
Matrikel: 256031
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace Blackmail {
    window.addEventListener("load", init); // Prüft ob das DOM geladen ist.
    let buchstaben: string = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"; 
    let div: HTMLDivElement;
    let letterArray: string[] = buchstaben.split(","); //Spaltet String nach dem Komma und Speichert Buchstaben im Array
    let safeSelection: HTMLDivElement; // Speichert den ausgewählten Buchstaben.
    function init() {
        for (let i: number = 0; i < letterArray.length; i++) {
            draw(i);
        }
        drawMail();

    }

    document.addEventListener("keydown", keyPress); //Prüft ob eine Keyboardtaste gedrück wird
    function keyPress(_event: KeyboardEvent): void {
        console.log(_event.key);
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("" + _event.key); // ID wurde in draw Funktion definiert.
        if (safeSelection) {
            safeSelection.style.backgroundColor = "black";
        }

        safeSelection = div;
        div.style.backgroundColor = "red";
    }

    function draw(i: number) { // Zeichenen Buchstabenleiste
        div = document.createElement("div"); // Erstellung dee DIV Elemente für die Buchstabenleiste
        div.addEventListener("click", handle); // Ausführen der Funktion handle bei Klick
        div.style.width = "0.5em";

        div.id = "" + letterArray[i];
        div.style.backgroundColor = "black";
        div.style.color = "white";
        div.style.marginLeft = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.textAlign = "center";
        div.style.cssFloat = "left";
        div.style.padding = "0.5em";
        div.innerHTML = letterArray[i];
        document.body.appendChild(div); // Hängt die DIV an die HTML an
    }
    function drawMail() { // Fläche zur Platzierung des Ausgewählten Buchstaben
        div = document.createElement("div");
        div.addEventListener("click", write);
        div.style.width = "90%";
        div.style.height = "50vh";
        div.style.marginTop = "7em";
        div.style.marginLeft = "5%";
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
    function handle(_event: MouseEvent): void { // Abfrage der Daten in safeSelection
        if (safeSelection) {
            safeSelection.style.backgroundColor = "black";
        }
        let div: HTMLDivElement = <HTMLDivElement>_event.target; // speichert aktuelle Auswahl in safeSelection
        safeSelection = <HTMLDivElement>_event.target;
        div.style.backgroundColor = "red";
    }
    function write(_event: MouseEvent): void { // Aufruf der Funktion zur Erstellung des zu zeichnenden Buchstaben im Mail Bereich
        let div: HTMLDivElement = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "" + (_event.clientY - 20) + "px"; // Fügt die geklickte Mauszeigerposition des Nutzers als Style hinzu
        div.style.left = "" + (_event.clientX - 20) + "px";
        div.style.width = "0.5em";
        div.style.color = "white";
        div.style.textAlign = "center";
        div.style.padding = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.backgroundColor = "hsl( " + Math.random() * 360 + ",100%,60%)";
        div.innerHTML = safeSelection.innerHTML; // Zugriff auf den im HTML abgespeicherten Buchstaben
        div.addEventListener("click", removeLetter);
        document.body.appendChild(div); // Hängt die DIV an die HTML an
    }
    function removeLetter(_event: MouseEvent) {
        if (_event.altKey) { // Überprüng ob alt-Taste gedrückt ist
            let div: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(div); // Entfernt das ausgewählte div Element/Buchstaben
        }
    }
}