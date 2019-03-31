var E05_Class;
(function (E05_Class) {
    class Mountain {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(this.x, this.y);
            E05_Class.crc2.lineTo(this.x + 200, this.y + 500);
            E05_Class.crc2.lineTo(this.x - 200, this.y + 500);
            E05_Class.crc2.closePath();
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "grey";
            E05_Class.crc2.fill();
        }
    }
    E05_Class.Mountain = Mountain;
})(E05_Class || (E05_Class = {}));
//# sourceMappingURL=mountain_cl.js.map