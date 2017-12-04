namespace E07_Class {
    export class Snowflake extends AnimatedObj {


        constructor(_x: number, _y: number) {
            super(_x, _y, Math.random() + 1);
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += this.speed;
            if (this.y > 500) {

                this.y = 0;
            }
        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();

        }

    }
}

