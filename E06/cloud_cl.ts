namespace E07_Class {
    export class Cloud extends AnimatedObj {

        constructor(_x: number, _y: number) {
            super(_x, _y, Math.random() + 1);

        }


        update(): void {
            this.move();
            this.draw();
        }
         move(): void {
            this.x += this.speed;
            if (this.x > 800) {
                this.x = -50;

            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.arc(this.x + 20, this.y, 20, 0, 2 * Math.PI);
            crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
        }

    }
}