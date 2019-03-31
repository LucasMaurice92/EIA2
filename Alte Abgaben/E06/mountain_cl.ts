namespace E07_Class {
    export class Mountain {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }


        update(): void {
            this.draw();
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 200, this.y + 500);
            crc2.lineTo(this.x - 200, this.y + 500);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "grey";
            crc2.fill();

        }

    }
}