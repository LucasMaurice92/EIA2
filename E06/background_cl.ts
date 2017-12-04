namespace E07_Class {
    export class Background {
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
            //Himmel
            crc2.beginPath();
            crc2.fillStyle = "lightblue";
            crc2.fillRect(0, 0, 800, 600);

            crc2.beginPath();
            crc2.moveTo(this.x + 100, this.y + 10);
            crc2.lineTo(this.x + 200, this.y + 400);
            crc2.lineTo(this.x - 200, this.y + 500);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "grey";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 400, this.y + 100);
            crc2.lineTo(this.x + 600, this.y + 500);
            crc2.lineTo(this.x + 200, this.y + 500);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "grey";
            crc2.fill();


            //Skipiste
            crc2.beginPath();
            crc2.moveTo(0, 200);
            crc2.lineTo(800, 600);
            crc2.lineTo(0, 600);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(0, 100);
            crc2.lineTo(800, 400);
            crc2.stroke();


            //Seilbahn
            crc2.rect(300, 260, 100, 100);
            crc2.stroke();
            crc2.fillStyle = "blue";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(340, 260);
            crc2.lineTo(420, 240);
            crc2.stroke();

            //Sonne
            crc2.beginPath();
            crc2.arc(700, 60, 80, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
        }

    }
}