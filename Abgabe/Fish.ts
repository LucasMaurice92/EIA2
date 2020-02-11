namespace Endabgabe {
    export class Fish {
        position: Vector;
        velocity: Vector;

        constructor() {
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector((Math.random() * -5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }

        move(_timeslice: number): void {

            let temporaryVelocity: Vector = this.velocity;

            // Schaue ob in Radius minFoodDistance essen liegt
            let minFoodDistance: number = 80;
            for (let i: number = 0; i < arrayFood.length; i++) {
                let food: Food = arrayFood[i];

                let distance: number = Math.hypot(food.position.x - this.position.x, food.position.y - this.position.y); //quadratischer Bereich 

                if (distance < minFoodDistance) {

                    let cornPosition: Vector = food.cornArray[Math.floor(Math.random() * food.cornArray.length)];

                    let velocity: Vector = new Vector(food.position.x + cornPosition.x - this.position.x, food.position.y + cornPosition.y - this.position.y);
                    velocity.scale(1 / 50);

                    temporaryVelocity = velocity;

                    break;
                }
            }

            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }

            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }

            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }

            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        draw(): void {

            crc2.beginPath();

            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.scale(-0.3, 0.3);

            let body: Path2D = new Path2D;
            body.ellipse(200, 200, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill(body);
            crc2.stroke();
    
            let tailfinn: Path2D = new Path2D;
            tailfinn.moveTo (125, 200);
            tailfinn.lineTo (80, 160);
            tailfinn.lineTo (80, 240);
            tailfinn.closePath();
            crc2.fill(tailfinn);
            //crc.stroke(tailfinn);
    
            let eyes: Path2D = new Path2D;
            eyes.arc( 240, 183, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill(eyes);
            crc2.stroke(eyes);
    
            let mouth: Path2D = new Path2D;
            mouth.moveTo(275, 200);
            mouth.lineTo (265, 200);
            crc2.stroke(mouth);
            crc2.restore();
        }
    }
}