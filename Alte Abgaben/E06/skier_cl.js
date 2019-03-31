var E07_Class;
(function (E07_Class) {
    class Skier extends E07_Class.AnimatedObj {
        constructor(_x, _y) {
            super(_x, _y, Math.random() * 3 + 1);
        }
        draw() {
            E07_Class.crc2.beginPath();
            E07_Class.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "red";
            E07_Class.crc2.fill();
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(this.x, this.y);
            E07_Class.crc2.lineTo(this.x + 5, this.y + 10);
            E07_Class.crc2.lineTo(this.x - 5, this.y + 10);
            E07_Class.crc2.closePath();
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "red";
            E07_Class.crc2.fill();
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(this.x, this.y);
            E07_Class.crc2.fillRect(this.x - 8, this.y + 10, 20, 3);
        }
    }
    E07_Class.Skier = Skier;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=skier_cl.js.map