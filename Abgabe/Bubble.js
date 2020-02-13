var Endabgabe;
(function (Endabgabe) {
    class Bubble {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(0.3, -3);
        }
        move() {
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(this.velocity);
            //Wenn Bubbles den oberen Canvasranderreichen erscheinen sie am unteren wieder
            if (this.position.y < 0)
                this.position.y += Endabgabe.crc2.canvas.height;
            if (this.position.x < 600)
                this.position.x += Endabgabe.crc2.canvas.width;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            let bubble = new Path2D();
            bubble.arc(0, 0, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fill(bubble);
            Endabgabe.crc2.stroke(bubble);
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Bubble = Bubble;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Bubble.js.map