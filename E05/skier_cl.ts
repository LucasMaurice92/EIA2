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
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
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