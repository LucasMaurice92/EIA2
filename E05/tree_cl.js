var E05_Class;
(function (E05_Class) {
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
            E05_Class.crc2.fillStyle = "brown";
            E05_Class.crc2.fillRect(this.x - 10, this.y + 40, 20, 40);
            //Dreiecke
            E05_Class.crc2.beginPath();
            E05_Class.crc2.moveTo(this.x, this.y);
            E05_Class.crc2.lineTo(this.x + 40, this.y + 60);
            E05_Class.crc2.lineTo(this.x - 40, this.y + 60);
            E05_Class.crc2.closePath();
            E05_Class.crc2.stroke();
            E05_Class.crc2.fillStyle = "green";
            E05_Class.crc2.fill();
        }
    }
    E05_Class.Tree = Tree;
})(E05_Class || (E05_Class = {}));
//# sourceMappingURL=tree_cl.js.map