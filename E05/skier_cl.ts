namespace E05_Class {
    export class Skier {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += 2;
            this.y += 2;
            if (this.y > 600 || this.x > 800) {
                this.y = 300;
                this.x = -20 + 10 * Math.random();
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.fillRect(this.x - 8, this.y + 10, 20, 3);
        }

    }
}