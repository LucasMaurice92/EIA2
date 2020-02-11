var Endabgabe;
(function (Endabgabe) {
    class Food {
        constructor(_x, _y, _x2, _y2) {
            this.cornArray = [];
            this.timer = 5 * 1000; // * 1000 = milliseconds
            this.position = new Endabgabe.Vector(_x, _y);
            this.size = new Endabgabe.Vector(_x2, _y2);
            this.drawTime = Date.now(); // 1000
            let nParticles = 10;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = (Math.random() - 0.5) * this.size.y;
                this.cornArray[drawn] = new Endabgabe.Vector(x, y);
            }
        }
        draw() {
            // If time expired, don't draw and delete
            if (Date.now() > (this.drawTime + this.timer)) {
                // remove foodobject from arrayfood
                Endabgabe.arrayFood = Endabgabe.arrayFood.slice(1); // deletes first foodobject
                return;
            }
            let particle = new Path2D();
            let nParticles = 7;
            let radiusParticle = 2;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                let translation = this.cornArray[drawn];
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x + translation.x, this.position.y + translation.y);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill(particle);
                Endabgabe.crc2.restore();
            }
        }
    }
    Endabgabe.Food = Food;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Food.js.map