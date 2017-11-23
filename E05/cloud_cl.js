var E05_Class;
(function (E05_Class) {
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
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        }
        draw() {
            E05_Class.crc2.beginPath();
            E05_Class.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            E05_Class.crc2.arc(this.x + 20, this.y, 20, 0, 2 * Math.PI);
            E05_Class.crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            E05_Class.crc2.fillStyle = "grey";
            E05_Class.crc2.fill();
        }
    }
    E05_Class.Cloud = Cloud;
})(E05_Class || (E05_Class = {}));
//# sourceMappingURL=cloud_cl.js.map