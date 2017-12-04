var E07_Class;
(function (E07_Class) {
    class Snowflake extends E07_Class.AnimatedObj {
        constructor(_x, _y) {
            super(_x, _y, Math.random() + 1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.speed;
            if (this.y > 500) {
                this.y = 0;
            }
        }
        draw() {
            E07_Class.crc2.beginPath();
            E07_Class.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "white";
            E07_Class.crc2.fill();
        }
    }
    E07_Class.Snowflake = Snowflake;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=snowflake_cl.js.map