var E07_Class;
(function (E07_Class) {
    class Mountain {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(this.x, this.y);
            E07_Class.crc2.lineTo(this.x + 200, this.y + 500);
            E07_Class.crc2.lineTo(this.x - 200, this.y + 500);
            E07_Class.crc2.closePath();
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "grey";
            E07_Class.crc2.fill();
        }
    }
    E07_Class.Mountain = Mountain;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=mountain_cl.js.map