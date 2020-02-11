namespace Endabgabe {
    export class Stone {
        x: number;
        y: number;
        position: Vector;

        draws: number = 0;
        velocity: number = 20;
        originalSize: number = 40;
        maxSizeDifference: number = 30;
        parabelYMax: number = 20;

        // lebt: 50 ticks
        // bei tick 25 parabel max wert
        // bei tick 0 am größten und bei tick 50 am kleinsten

        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
        }

        draw(): void {
            let factor: number = this.draws / this.velocity; // 0 - 1
            let relativeSize: number = this.originalSize - (this.maxSizeDifference * factor);

            let parabelFactor: number;

            if (this.draws < (this.velocity / 2)) {
                parabelFactor = this.draws / (this.velocity / 2); // 0 - 1
            } else {
                parabelFactor = (this.velocity - this.draws) / (this.velocity / 2); // 1 - 0
            }

            // 0 = 0, 25 = parabelYMax, 50 = 0
            let relativeY: number = this.parabelYMax * parabelFactor;

            // Löscht quasi den Snowball
            if (this.draws >  this.velocity) {

                // Überprüfe ob Fische im Bereich sind
                for (let i: number = 0; i < fishs.length; i++) {
                    let fish: Fish = fishs[i];

                    let distance: number = Math.hypot(fish.position.x - this.position.x + 20, fish.position.y - this.position.y + 20);

                    let circleRadius: number = relativeSize / 2;

                    if (distance <= circleRadius + 70) { // 70 pixel hitbox
                        let index: number = fishs.indexOf(fish);
                        fishs.splice(index, 1);

                        let newFish: Fish = new Fish();
                        fishs.push(newFish);

                        points++;
                        
                        //console.log(points);
                    }
                }

                stones = stones.slice(1); // Löscht ältesten Snowball

                checkForEndGame();

                return;
            }

            crc2.save();

            crc2.translate(this.x, this.y);

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y - relativeY, relativeSize, 0, 2 * Math.PI);

            crc2.fillStyle = "darkgrey";
            crc2.fill();

            crc2.closePath();

            crc2.restore();

            this.draws++;
        }
    }
}