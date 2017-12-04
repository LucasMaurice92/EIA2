var E07_Class;
(function (E07_Class) {
    class AnimatedObj {
        constructor(_x, _y, s) {
            this.x = _x;
            this.y = _y;
            this.speed = s;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //wird von subklassen übernommen 
        }
        move() {
            this.x += this.speed;
            this.y += this.speed;
            if (this.x > 500 || this.y > 600) {
                this.x = -50;
                this.y = 200;
            }
        }
    }
    E07_Class.AnimatedObj = AnimatedObj;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=animatedObj_cl.js.map