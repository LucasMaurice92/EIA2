namespace Endabgabe {
    export class Bubble {
        position: Vector;
        velocity: Vector;

        constructor() {
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0.3, -3);
        }

        move(): void {

            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(this.velocity);

            //Wenn Bubbles den oberen Canvasranderreichen erscheinen sie am unteren wieder
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }


        draw(): void {


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let bubble: Path2D = new Path2D();
		          bubble.arc( 0, 0, 5, 0, 2 * Math.PI);
		          crc2.fillStyle = "white";
		          crc2.fill(bubble);
		          crc2.stroke(bubble);
            crc2.restore();
            crc2.closePath();
        }
    }
}