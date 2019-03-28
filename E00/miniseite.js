/*
E00: Miniseite
Name: Maurice Lucas
Matrikel: 256031
Datum: 15.10.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var E00;
(function (E00) {
    let name = prompt("Mein Name ist...");
    function init() {
        let node = document.getElementById("servus");
        if (name.length < 1) {
            node.innerHTML = "Schade drum :(";
            console.log("Schade drum :(");
        }
        if (name.length >= 1) {
            node.innerHTML = "Herzlich willkommen liebe/-r " + name + " auf meiner Miniseite.";
            console.log("Herzlich willkommen liebe/-r " + name + " auf meiner Miniseite.");
        }
        console.log(node);
    }
    window.addEventListener("load", init);
})(E00 || (E00 = {}));
//# sourceMappingURL=miniseite.js.map