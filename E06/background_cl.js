var E07_Class;
(function (E07_Class) {
    class Background {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            //Himmel
            E07_Class.crc2.beginPath();
            E07_Class.crc2.fillStyle = "lightblue";
            E07_Class.crc2.fillRect(0, 0, 800, 600);
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(this.x + 100, this.y + 10);
            E07_Class.crc2.lineTo(this.x + 200, this.y + 400);
            E07_Class.crc2.lineTo(this.x - 200, this.y + 500);
            E07_Class.crc2.closePath();
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "grey";
            E07_Class.crc2.fill();
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(this.x + 400, this.y + 100);
            E07_Class.crc2.lineTo(this.x + 600, this.y + 500);
            E07_Class.crc2.lineTo(this.x + 200, this.y + 500);
            E07_Class.crc2.closePath();
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "grey";
            E07_Class.crc2.fill();
            //Skipiste
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(0, 200);
            E07_Class.crc2.lineTo(800, 600);
            E07_Class.crc2.lineTo(0, 600);
            E07_Class.crc2.fillStyle = "white";
            E07_Class.crc2.fill();
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(0, 100);
            E07_Class.crc2.lineTo(800, 400);
            E07_Class.crc2.stroke();
            //Seilbahn
            E07_Class.crc2.rect(300, 260, 100, 100);
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "blue";
            E07_Class.crc2.fill();
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(340, 260);
            E07_Class.crc2.lineTo(420, 240);
            E07_Class.crc2.stroke();
            //Sonne
            E07_Class.crc2.beginPath();
            E07_Class.crc2.arc(700, 60, 80, 0, 2 * Math.PI);
            E07_Class.crc2.fillStyle = "yellow";
            E07_Class.crc2.fill();
        }
    }
    E07_Class.Background = Background;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=background_cl.js.map