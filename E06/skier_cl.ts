namespace E07_Class {
    export class Skier extends AnimatedObj {

        constructor(_x: number, _y: number) {
            super(_x, _y, Math.random() * 3 + 1);
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