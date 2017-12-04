var E07_Class;
(function (E07_Class) {
    class Cloud extends E07_Class.AnimatedObj {
        constructor(_x, _y) {
            super(_x, _y, Math.random() + 1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.speed;
            if (this.x > 800) {
                this.x = -50;
            }
        }
        draw() {
            E07_Class.crc2.beginPath();
            E07_Class.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            E07_Class.crc2.arc(this.x + 20, this.y, 20, 0, 2 * Math.PI);
            E07_Class.crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            E07_Class.crc2.fillStyle = "white";
            E07_Class.crc2.fill();
        }
    }
    E07_Class.Cloud = Cloud;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=cloud_cl.js.map