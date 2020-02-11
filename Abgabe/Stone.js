var Endabgabe;
(function (Endabgabe) {
    class Stone {
        // lebt: 50 ticks
        // bei tick 25 parabel max wert
        // bei tick 0 am größten und bei tick 50 am kleinsten
        constructor(_x, _y) {
            this.draws = 0;
            this.velocity = 20;
            this.originalSize = 40;
            this.maxSizeDifference = 30;
            this.parabelYMax = 20;
            this.position = new Endabgabe.Vector(_x, _y);
        }
        draw() {
            let factor = this.draws / this.velocity; // 0 - 1
            let relativeSize = this.originalSize - (this.maxSizeDifference * factor);
            let parabelFactor;
            if (this.draws < (this.velocity / 2)) {
                parabelFactor = this.draws / (this.velocity / 2); // 0 - 1
            }
            else {
                parabelFactor = (this.velocity - this.draws) / (this.velocity / 2); // 1 - 0
            }
            // 0 = 0, 25 = parabelYMax, 50 = 0
            let relativeY = this.parabelYMax * parabelFactor;
            // Löscht quasi den Snowball
            if (this.draws > this.velocity) {
                // Überprüfe ob Fische im Bereich sind
                for (let i = 0; i < Endabgabe.fishs.length; i++) {
                    let fish = Endabgabe.fishs[i];
                    let distance = Math.hypot(fish.position.x - this.position.x + 20, fish.position.y - this.position.y + 20);
                    let circleRadius = relativeSize / 2;
                    if (distance <= circleRadius + 70) { // 70 pixel hitbox
                        let index = Endabgabe.fishs.indexOf(fish);
                        Endabgabe.fishs.splice(index, 1);
                        let newFish = new Endabgabe.Fish();
                        Endabgabe.fishs.push(newFish);
                        Endabgabe.points++;
                        //console.log(points);
                    }
                }
                Endabgabe.stones = Endabgabe.stones.slice(1); // Löscht ältesten Snowball
                Endabgabe.checkForEndGame();
                return;
            }
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.x, this.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y - relativeY, relativeSize, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "darkgrey";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.restore();
            this.draws++;
        }
    }
    Endabgabe.Stone = Stone;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Stone.js.map