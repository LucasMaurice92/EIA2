var E06_Class;
(function (E06_Class) {
    class Tree {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
        }
        draw() {
            //Baumstamm
            E06_Class.crc2.fillStyle = "brown";
            E06_Class.crc2.fillRect(this.x - 10, this.y + 40, 20, 40);
            //Dreiecke
            E06_Class.crc2.beginPath();
            E06_Class.crc2.moveTo(this.x, this.y);
            E06_Class.crc2.lineTo(this.x + 40, this.y + 60);
            E06_Class.crc2.lineTo(this.x - 40, this.y + 60);
            E06_Class.crc2.closePath();
            E06_Class.crc2.stroke();
            E06_Class.crc2.fillStyle = "green";
            E06_Class.crc2.fill();
        }
    }
    E06_Class.Tree = Tree;
})(E06_Class || (E06_Class = {}));
//# sourceMappingURL=tree_cl.js.map