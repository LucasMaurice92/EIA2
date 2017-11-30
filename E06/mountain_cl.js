var E06_Class;
(function (E06_Class) {
    class Mountain {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(this.x, this.y);
            E06_Class.crc2.lineTo(this.x + 200, this.y + 500);
            E06_Class.crc2.lineTo(this.x - 200, this.y + 500);
            E06_Class.crc2.closePath();
            E06_Class.crc2.stroke();
            E06_Class.crc2.fillStyle = "grey";
            E06_Class.crc2.fill();
        }
    }
    E06_Class.Mountain = Mountain;
})(E06_Class || (E06_Class = {}));
//# sourceMappingURL=mountain_cl.js.map