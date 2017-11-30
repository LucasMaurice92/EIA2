var E06_Class;
(function (E06_Class) {
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
            E06_Class.crc2.beginPath();
            E06_Class.crc2.fillStyle = "lightblue";
            E06_Class.crc2.fillRect(0, 0, 800, 600);
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(this.x + 100, this.y + 10);
            E06_Class.crc2.lineTo(this.x + 200, this.y + 400);
            E06_Class.crc2.lineTo(this.x - 200, this.y + 500);
            E06_Class.crc2.closePath();
            E06_Class.crc2.stroke();
            E06_Class.crc2.fillStyle = "grey";
            E06_Class.crc2.fill();
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(this.x + 400, this.y + 100);
            E06_Class.crc2.lineTo(this.x + 600, this.y + 500);
            E06_Class.crc2.lineTo(this.x + 200, this.y + 500);
            E06_Class.crc2.closePath();
            E06_Class.crc2.stroke();
            E06_Class.crc2.fillStyle = "grey";
            E06_Class.crc2.fill();
            //Skipiste
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(0, 200);
            E06_Class.crc2.lineTo(800, 600);
            E06_Class.crc2.lineTo(0, 600);
            E06_Class.crc2.fillStyle = "white";
            E06_Class.crc2.fill();
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(0, 100);
            E06_Class.crc2.lineTo(800, 400);
            E06_Class.crc2.stroke();
            //Seilbahn
            E06_Class.crc2.rect(300, 260, 100, 100);
            E06_Class.crc2.stroke();
            E06_Class.crc2.fillStyle = "blue";
            E06_Class.crc2.fill();
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(340, 260);
            E06_Class.crc2.lineTo(420, 240);
            E06_Class.crc2.stroke();
            //Sonne
            E06_Class.crc2.beginPath();
            E06_Class.crc2.arc(700, 60, 80, 0, 2 * Math.PI);
            E06_Class.crc2.fillStyle = "yellow";
            E06_Class.crc2.fill();
        }
    }
    E06_Class.Background = Background;
})(E06_Class || (E06_Class = {}));
//# sourceMappingURL=background_cl.js.map