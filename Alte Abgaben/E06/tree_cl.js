var E07_Class;
(function (E07_Class) {
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
            E07_Class.crc2.fillStyle = "brown";
            E07_Class.crc2.fillRect(this.x - 10, this.y + 40, 20, 40);
            //Dreiecke
            E07_Class.crc2.beginPath();
            E07_Class.crc2.moveTo(this.x, this.y);
            E07_Class.crc2.lineTo(this.x + 40, this.y + 60);
            E07_Class.crc2.lineTo(this.x - 40, this.y + 60);
            E07_Class.crc2.closePath();
            E07_Class.crc2.stroke();
            E07_Class.crc2.fillStyle = "green";
            E07_Class.crc2.fill();
        }
    }
    E07_Class.Tree = Tree;
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=tree_cl.js.map