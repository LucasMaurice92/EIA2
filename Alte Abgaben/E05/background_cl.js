var E05_Class;
(function (E05_Class) {
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
            E05_Class.crc2.beginPath();
            E05_Class.crc2.fillStyle = "lightblue";
            E05_Class.crc2.fillRect(0, 0, 800, 600);
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(this.x + 100, this.y + 10);
            E05_Class.crc2.lineTo(this.x + 200, this.y + 400);
            E05_Class.crc2.lineTo(this.x - 200, this.y + 500);
            E05_Class.crc2.closePath();
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "grey";
            E05_Class.crc2.fill();
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(this.x + 400, this.y + 100);
            E05_Class.crc2.lineTo(this.x + 600, this.y + 500);
            E05_Class.crc2.lineTo(this.x + 200, this.y + 500);
            E05_Class.crc2.closePath();
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "grey";
            E05_Class.crc2.fill();
            //Skipiste
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(0, 200);
            E05_Class.crc2.lineTo(800, 600);
            E05_Class.crc2.lineTo(0, 600);
            E05_Class.crc2.fillStyle = "white";
            E05_Class.crc2.fill();
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(0, 100);
            E05_Class.crc2.lineTo(800, 400);
            E05_Class.crc2.stroke();
            //Seilbahn
            E05_Class.crc2.rect(300, 260, 100, 100);
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "blue";
            E05_Class.crc2.fill();
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(340, 260);
            E05_Class.crc2.lineTo(420, 240);
            E05_Class.crc2.stroke();
            //Sonne
            E05_Class.crc2.beginPath();
            E05_Class.crc2.arc(700, 60, 80, 0, 2 * Math.PI);
            E05_Class.crc2.fillStyle = "yellow";
            E05_Class.crc2.fill();
        }
    }
    E05_Class.Background = Background;
})(E05_Class || (E05_Class = {}));
//# sourceMappingURL=background_cl.js.map