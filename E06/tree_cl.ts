namespace E06_Class {
    export class Tree {
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
            //Baumstamm
            crc2.fillStyle = "brown";
            crc2.fillRect(this.x - 10, this.y + 40, 20, 40);

            //Dreiecke
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y + 60);
            crc2.lineTo(this.x - 40, this.y + 60);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "green";
            crc2.fill();

        }

    }
}