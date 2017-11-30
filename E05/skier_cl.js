var E05_Class;
(function (E05_Class) {
    class Skier {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += 2;
            this.y += 2;
            if (this.y > 600 || this.x > 800) {
                this.y = 300;
                this.x = -20 + 10 * Math.random();
            }
        }
        draw() {
            E05_Class.crc2.beginPath();
            E05_Class.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "red";
            E05_Class.crc2.fill();
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(this.x, this.y);
            E05_Class.crc2.lineTo(this.x + 5, this.y + 10);
            E05_Class.crc2.lineTo(this.x - 5, this.y + 10);
            E05_Class.crc2.closePath();
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "red";
            E05_Class.crc2.fill();
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(this.x, this.y);
            E05_Class.crc2.fillRect(this.x - 8, this.y + 10, 20, 3);
        }
    }
    E05_Class.Skier = Skier;
})(E05_Class || (E05_Class = {}));
//# sourceMappingURL=skier_cl.js.map