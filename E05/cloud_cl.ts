namespace E05_Class {
    export class Cloud {
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
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.arc(this.x + 20, this.y, 20, 0, 2 * Math.PI);
            crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "grey";
            crc2.fill();
        }

    }
}