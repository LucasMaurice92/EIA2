/* 
E00: Miniseite
Name: Maurice Lucas
Matrikel: 256031
Datum: 15.10.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace E00{
let name: string = prompt("Mein Name ist...");
function init() {
    let node: HTMLElement = document.getElementById("servus");
    if (name.length < 1) {
        node.innerHTML = "Schade drum :(";
    }
    
    if (name.length >= 1) {
        node.innerHTML = "Herzlich willkommen liebe/-r " + name + " auf meiner Miniseite.";
    }
    console.log(node);
}
window.addEventListener("load", init);
}
