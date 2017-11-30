var E06_Class;
(function (E06_Class) {
    class Cloud {
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
            if (this.x > 800) {
                this.x = -20;
            }
        }
        draw() {
            E06_Class.crc2.beginPath();
            E06_Class.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            E06_Class.crc2.arc(this.x + 20, this.y, 20, 0, 2 * Math.PI);
            E06_Class.crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            E06_Class.crc2.fillStyle = "white";
            E06_Class.crc2.fill();
        }
    }
    E06_Class.Cloud = Cloud;
})(E06_Class || (E06_Class = {}));
//# sourceMappingURL=cloud_cl.js.map