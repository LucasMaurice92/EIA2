var E03;
(function (E03) {
    window.addEventListener("load", init);
    var canvas;
    var crc2;
    var skiPosX = [];
    var skiPosY = [];
    var wolkenPosX = [];
    var wolkenPosY = [];
    var schneePosX = [];
    var schneePosY = [];
    var hintergrund;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Linie
        crc2.beginPath();
        crc2.fillStyle = "#58ACFA";
        crc2.fillRect(0, 0, 800, 600);
        for (let i = 0; i < 3; i++) {
            drawMountain(Math.random() * 200 + i * 300, Math.random() * 200 + 50);
        }
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 400);
        crc2.stroke();
        crc2.rect(300, 260, 100, 100);
        crc2.stroke();
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(340, 260);
        crc2.lineTo(420, 240);
        crc2.stroke();
        //Tannenbaum
        //Position oberes Dreieck
        sonne(700, 60);
        for (let i = 0; i < 4; i++) {
            tannenbaum(Math.random() * 400, Math.random() * 300 + 200);
        }
        hintergrund = crc2.getImageData(0, 0, 800, 600);
        for (let i = 0; i < 2; i++) {
            wolkenPosX[i] = Math.random() * 800;
            wolkenPosY[i] = Math.random() * 100;
            wolke(schneePosX[i], schneePosY[i]);
        }
        for (let i = 0; i < 100; i++) {
            schneePosX[i] = Math.random() * 800;
            schneePosY[i] = Math.random() * 600;
            drawSnowFlake(schneePosX[i], schneePosY[i]);
        }
        for (let i = 0; i < 3; i++) {
            skiPosX[i] = Math.random() * 100;
            skiPosY[i] = Math.random() * 200 + 200;
            drawSki(skiPosX[i], skiPosX[i]);
        }
        animate();
    }
    //Uebergabe der Werte an die Funktion
    function tannenbaum(x, y) {
        // Tannenbaum 0-2 (3)    
        for (let i = 0; i < 3; i++) {
            dreieck(x, y + 50 * i);
        }
        //Rechteck Baumstamm
        crc2.fillStyle = "brown";
        crc2.fillRect(x - 10, y + 150, 20, 40);
    }
    //Generieren der Dreiecke 
    function dreieck(x, y) {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 40, y + 60);
        crc2.lineTo(x - 40, y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
    }
    function drawMountain(x, y) {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 200, y + 500);
        crc2.lineTo(x - 200, y + 500);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "grey";
        crc2.fill();
    }
    function sonne(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
    }
    //Offset der Kreise
    function wolke(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.arc(x + 20, y, 20, 0, 2 * Math.PI);
        crc2.arc(x + 40, y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "grey";
        crc2.fill();
    }
    //Kreise generieren
    function kreis(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "grey";
        crc2.fill();
    }
    //Schneeflocken generieren
    function drawSnowFlake(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 2, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
    }
    function drawSki(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 5, y + 10);
        crc2.lineTo(x - 5, y + 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.fillRect(x - 8, y + 10, 20, 3);
    }
    function animate() {
        crc2.clearRect(0, 0, 600, 800);
        crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < 3; i++) {
            if (skiPosX[i] > 800 || skiPosY[i] > 600) {
                skiPosX[i] = Math.random() * 100;
                skiPosY[i] = Math.random() * 200 + 200;
            }
            skiPosX[i] += 2;
            skiPosY[i] += 2;
            drawSki(skiPosX[i], skiPosY[i]);
        }
        for (let i = 0; i < 2; i++) {
            if (wolkenPosX[i] > 810) {
                wolkenPosX[i] = 0;
            }
            wolkenPosX[i] += 2;
            wolke(wolkenPosX[i], wolkenPosY[i]);
        }
        for (let i = 0; i < 100; i++) {
            if (schneePosY[i] > 600) {
                schneePosY[i] = 0;
            }
            schneePosY[i] += 2;
            drawSnowFlake(schneePosX[i], schneePosY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(E03 || (E03 = {}));
//# sourceMappingURL=E03.js.map