var E06_Class;
(function (E06_Class) {
    class Snowflake {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += 2;
            if (this.y > 600) {
                this.y = 0;
            }
        }
        draw() {
            E06_Class.crc2.beginPath();
            E06_Class.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            E06_Class.crc2.stroke();
            E06_Class.crc2.fillStyle = "white";
            E06_Class.crc2.fill();
        }
    }
    E06_Class.Snowflake = Snowflake;
})(E06_Class || (E06_Class = {}));
//# sourceMappingURL=snowflake_cl.js.map