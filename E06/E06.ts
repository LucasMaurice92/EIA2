namespace E06_Class {
    export let crc2: CanvasRenderingContext2D;


    let background: Background;
    let animatedObj: AnimatedObj[]= [];
    let trees: Tree[] = [];

    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        //Hintergrund
        background = new Background(0, 0);


        // 30 Schneeflocken
        for (let i: number = 0; i < 30; i++) {
            let s: Snowflake = new Snowflake(Math.random() * 800, Math.random() * 600); //Startposition
            snowflakes[i] = s;
        }

        // 3 Skifahrer
        for (let i: number = 0; i < 3; i++) {
            let s: Skier = new Skier(Math.random() * 100, Math.random() * 200 + 200); //Startposition
            skiers[i] = s;
        }

        //4 Wolken
        for (let i: number = 0; i < 4; i++) {
            let s: Cloud = new Cloud(Math.random() * 800, Math.random() * 100); //Startposition
            clouds[i] = s;
        }

        //Tannen
        for (let i: number = 0; i < 3; i++) {
            let s: Tree = new Tree(Math.random() * 400, Math.random() * 300 + 200); //Zufaellige Position
            trees[i] = s;
        }


        animate();
    }
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren


        background.update();


        for (let i: number = 0; i < trees.length; i++) {
            let t: Tree = trees[i];
            t.draw();
        }
        for (let i: number = 0; i < snowflakes.length; i++) {
            let s: Snowflake = snowflakes[i];
            s.update();
        }

        for (let i: number = 0; i < skiers.length; i++) {
            let s: Skier = skiers[i];
            s.update();
        }

        for (let i: number = 0; i < clouds.length; i++) {
            let s: Cloud = clouds[i];
            s.update();
        }


        window.setTimeout(animate, 20);
    }
}