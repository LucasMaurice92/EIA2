namespace E07_Class {
    export class AnimatedObj {
        x: number;
        y: number;
        speed: number;

        constructor(_x: number, _y: number, s: number) {
            this.x = _x;
            this.y = _y;
            this.speed = s;
        }


        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //wird von subklassen übernommen 
        }

        move(): void {
            this.x += this.speed;
            this.y += this.speed;
            if (this.x > 500 || this.y > 600) {
                this.x = -50;
                this.y = 200;
            }
        }

    }

}
