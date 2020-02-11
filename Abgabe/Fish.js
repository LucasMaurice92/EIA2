var Endabgabe;
(function (Endabgabe) {
    class Fish {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector((Math.random() * -5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }
        move(_timeslice) {
            let temporaryVelocity = this.velocity;
            // Schaue ob in Radius minFoodDistance essen liegt
            let minFoodDistance = 80;
            for (let i = 0; i < Endabgabe.arrayFood.length; i++) {
                let food = Endabgabe.arrayFood[i];
                let distance = Math.hypot(food.position.x - this.position.x, food.position.y - this.position.y); //quadratischer Bereich 
                if (distance < minFoodDistance) {
                    let cornPosition = food.cornArray[Math.floor(Math.random() * food.cornArray.length)];
                    let velocity = new Endabgabe.Vector(food.position.x + cornPosition.x - this.position.x, food.position.y + cornPosition.y - this.position.y);
                    velocity.scale(1 / 50);
                    temporaryVelocity = velocity;
                    break;
                }
            }
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);
            if (this.position.x < 0) {
                this.position.x += Endabgabe.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Endabgabe.crc2.canvas.height;
            }
            if (this.position.x > Endabgabe.crc2.canvas.width) {
                this.position.x -= Endabgabe.crc2.canvas.width;
            }
            if (this.position.y > Endabgabe.crc2.canvas.height) {
                this.position.y -= Endabgabe.crc2.canvas.height;
            }
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.scale(-0.3, 0.3);
            let body = new Path2D;
            body.ellipse(200, 200, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "lightblue";
            Endabgabe.crc2.fill(body);
            Endabgabe.crc2.stroke();
            let tailfinn = new Path2D;
            tailfinn.moveTo(125, 200);
            tailfinn.lineTo(80, 160);
            tailfinn.lineTo(80, 240);
            tailfinn.closePath();
            Endabgabe.crc2.fill(tailfinn);
            //crc.stroke(tailfinn);
            let eyes = new Path2D;
            eyes.arc(240, 183, 7, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fill(eyes);
            Endabgabe.crc2.stroke(eyes);
            let mouth = new Path2D;
            mouth.moveTo(275, 200);
            mouth.lineTo(265, 200);
            Endabgabe.crc2.stroke(mouth);
            Endabgabe.crc2.restore();
        }
    }
    Endabgabe.Fish = Fish;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Fish.js.map