namespace Endabgabe {
    
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let bubbles: Bubble[] = [];
    export let fishs: Fish[] = [];
    export let arrayFood: Food[] = [];
    export let stones: Stone[] = [];
    export let rocksLeft: number = 20;
    export let foodLeft: number = 3;
    export let updateIntervalId: number = 0;
    export let points: number = 0;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas) {
            return;
        }

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

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
        let background: ImageData = crc2.getImageData(0, 0, 800, 600);
        updateIntervalId = window.setInterval(update, 20, background); // ticks = 1000 / 20 = 50
    }

    function keypress(_event: KeyboardEvent): void {
        
        // spacenar event
        if (_event.key === " ") {
            throwFood(_event);
            return;
        }
    }

    export function printInfo(): void {
        let spanRocksLeft: HTMLSpanElement = <HTMLSpanElement>document.getElementById("rocksLeft");
        let spanFoodLeft: HTMLSpanElement = <HTMLSpanElement>document.getElementById("foodLeft");
        let spanPoints: HTMLSpanElement = <HTMLSpanElement>document.getElementById("points");

        if (spanRocksLeft) {
            spanRocksLeft.innerHTML = rocksLeft.toString();
        }
        if (spanFoodLeft) {
            spanFoodLeft.innerHTML = foodLeft.toString();
        }
        if (spanPoints) {
            spanPoints.innerHTML = points.toString();
        }

    }

    function drawOcean(): void {

        let sea: CanvasGradient = crc2.createLinearGradient(0, 500, 0, 0);
		      sea.addColorStop(0, "blue");
		      sea.addColorStop(1, "lightblue");
		      crc2.fillStyle = sea;
		      crc2.fillRect(0, 0, 900, 400);

    }

    function drawSeabed(): void {

        let seabed: Path2D = new Path2D();
        seabed.moveTo(0, 400);
        seabed.lineTo(0, 600);
        seabed.lineTo(900, 600);
        seabed.lineTo(900, 400);
        seabed.lineTo(0, 400);
        seabed.closePath();
        crc2.fillStyle = "peru";
        crc2.fill(seabed);
        crc2.stroke(seabed);

    }



    function drawSeaweed(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.restore();
    }


    function throwRock(_event: MouseEvent): void {
        if (rocksLeft === 0) {
            return;
        }

        //mouse coordinates
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let stone: Stone = new Stone(x, y);

        stones.push(stone);

        rocksLeft--;
    }

    function drawFish(_nfish: number): void {

        for (let i: number = 0; i < _nfish; i++) {
            let fish: Fish = new Fish();
            fishs.push(fish);
        }
    }

    function drawBubbles(_nBubbles: number): void {

        for (let i: number = 0; i < _nBubbles; i++) {
            let bubble: Bubble = new Bubble();
            bubbles.push(bubble);
        }
    }

    function throwFood(_event: KeyboardEvent): void {
        if (foodLeft === 0) {
            return;
        }

        let food: Food = new Food(400, 480, 40, 40);
        arrayFood.push(food);

        foodLeft--;

        
        if (stones.length === 0) {
            checkForEndGame();
        }
    }

    function update(_background: ImageData): void {
        crc2.putImageData(_background, 0, 0);

        for (let bubble of bubbles) {
            bubble.move();
            bubble.draw();
        }

        // Food
        for (let i: number = 0; i < arrayFood.length; i++) {
            arrayFood[i].draw();
        }

        // Fish
        for (let fish of fishs) {
            fish.move(1 / 50);
            fish.draw();
        }

        // Stones
        for (let i: number = 0; i < stones.length; i++) {
            stones[i].draw();
        }

        printInfo();
    }
}