/*
Aufgabe 8: Div Elemente
Name: Maurice Lucas
Matrikel: 256031
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Blackmail;
(function (Blackmail) {
    window.addEventListener("load", init); // Prüft ob das DOM geladen ist.
    let buchstaben = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"; //  
    let div;
    let letterArray = buchstaben.split(","); //Spaltet String nach dem Komma und Speichert Buchstaben im Array
    let safeSelection; // Speichert den ausgewählten Buchstaben.
    function init() {
        for (let i = 0; i < letterArray.length; i++) {
            draw(i);
        }
        drawMail();
    }
    document.addEventListener("keydown", keyPress); //Prüft ob eine Kezboardtaste gedrück wird
    function keyPress(_event) {
        console.log(_event.key);
        let div = document.getElementById("" + _event.key); // ID wurde in draw Funktion definiert.
        if (safeSelection) {
            safeSelection.style.backgroundColor = "black";
        }
        safeSelection = div;
        div.style.backgroundColor = "red";
    }
    function draw(i) {
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
    function drawMail() {
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
    function handle(_event) {
        if (safeSelection) {
            safeSelection.style.backgroundColor = "black";
        }
        let div = _event.target; // speichert aktuelle Auswahl in safeSelection
        safeSelection = _event.target;
        div.style.backgroundColor = "red";
    }
    function write(_event) {
        let div = document.createElement("div");
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
    function removeLetter(_event) {
        if (_event.altKey) {
            let div = _event.target;
            document.body.removeChild(div); // Entfernt das ausgewählte div Element/Buchstaben
        }
    }
})(Blackmail || (Blackmail = {}));
//# sourceMappingURL=main.js.map