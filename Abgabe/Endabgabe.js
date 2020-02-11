var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    Endabgabe.bubbles = [];
    Endabgabe.fishs = [];
    Endabgabe.arrayFood = [];
    Endabgabe.stones = [];
    Endabgabe.rocksLeft = 20;
    Endabgabe.foodLeft = 3;
    Endabgabe.updateIntervalId = 0;
    Endabgabe.points = 0;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Endabgabe.crc2 = canvas.getContext("2d");
        drawOcean();
        drawSeabed();
        //drawSeaweed(new Vector(x, y));
        //drawSeaweed(new Vector(x, y));
        //drawSeaweed(new Vector(x, y));
        //drawSeaweed(new Vector(x, y));
        //drawSeaweed(new Vector(x, y));
        //drawSeaweed(new Vector(x, y));
        drawBubbles(20);
        drawFish(10);
        // add Eventlisteners
        canvas.addEventListener("click", throwRock);
        window.addEventListener("keydown", keypress);
        // write background, update canvas
        let background = Endabgabe.crc2.getImageData(0, 0, 800, 600);
        Endabgabe.updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
    }
    function keypress(_event) {
        // spacenar event
        if (_event.key === " ") {
            throwFood(_event);
            return;
        }
    }
    function printInfo() {
        let spanRocksLeft = document.getElementById("rocksLeft");
        let spanFoodLeft = document.getElementById("foodLeft");
        let spanPoints = document.getElementById("points");
        if (spanRocksLeft) {
            spanRocksLeft.innerHTML = Endabgabe.rocksLeft.toString();
        }
        if (spanFoodLeft) {
            spanFoodLeft.innerHTML = Endabgabe.foodLeft.toString();
        }
        if (spanPoints) {
            spanPoints.innerHTML = Endabgabe.points.toString();
        }
    }
    Endabgabe.printInfo = printInfo;
    function drawOcean() {
        let sea = Endabgabe.crc2.createLinearGradient(0, 500, 0, 0);
        sea.addColorStop(0, "blue");
        sea.addColorStop(1, "lightblue");
        Endabgabe.crc2.fillStyle = sea;
        Endabgabe.crc2.fillRect(0, 0, 900, 400);
    }
    function drawSeabed() {
        let seabed = new Path2D();
        seabed.moveTo(0, 400);
        seabed.lineTo(0, 600);
        seabed.lineTo(900, 600);
        seabed.lineTo(900, 400);
        seabed.lineTo(0, 400);
        seabed.closePath();
        Endabgabe.crc2.fillStyle = "peru";
        Endabgabe.crc2.fill(seabed);
        Endabgabe.crc2.stroke(seabed);
    }
    function drawSeaweed(_position) {
        Endabgabe.crc2.save();
        Endabgabe.crc2.translate(_position.x, _position.y);
        Endabgabe.crc2.restore();
    }
    function throwRock(_event) {
        if (Endabgabe.rocksLeft === 0) {
            return;
        }
        //mouse coordinates
        let x = _event.clientX;
        let y = _event.clientY;
        let stone = new Endabgabe.Stone(x, y);
        Endabgabe.stones.push(stone);
        Endabgabe.rocksLeft--;
    }
    function drawFish(_nfish) {
        for (let i = 0; i < _nfish; i++) {
            let fish = new Endabgabe.Fish();
            Endabgabe.fishs.push(fish);
        }
    }
    function drawBubbles(_nBubbles) {
        for (let i = 0; i < _nBubbles; i++) {
            let bubble = new Endabgabe.Bubble();
            Endabgabe.bubbles.push(bubble);
        }
    }
    function throwFood(_event) {
        if (Endabgabe.foodLeft === 0) {
            return;
        }
        let food = new Endabgabe.Food(400, 480, 40, 40);
        Endabgabe.arrayFood.push(food);
        Endabgabe.foodLeft--;
        if (Endabgabe.stones.length === 0) {
            Endabgabe.checkForEndGame();
        }
    }
    function update(_background) {
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let bubble of Endabgabe.bubbles) {
            bubble.move();
            bubble.draw();
        }
        // Food
        for (let i = 0; i < Endabgabe.arrayFood.length; i++) {
            Endabgabe.arrayFood[i].draw();
        }
        // Fish
        for (let fish of Endabgabe.fishs) {
            fish.move(1 / 50);
            fish.draw();
        }
        // Stones
        for (let i = 0; i < Endabgabe.stones.length; i++) {
            Endabgabe.stones[i].draw();
        }
        printInfo();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Endabgabe.js.map