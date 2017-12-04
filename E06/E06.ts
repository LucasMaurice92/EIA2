namespace E07_Class {
    export let crc2: CanvasRenderingContext2D;


    let background: Background;
    let animatedObj: AnimatedObj[] = [];
    let trees: Tree[] = [];

    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        //Hintergrund
        background = new Background(0, 0);

        for (let i: number = 0; i < 5; i++) { //Jedes Object 5 mal
            let s: Skier = new Skier(Math.random() * -30, Math.random() * 30 + 200);
            animatedObj.push(s);


            let c: Cloud = new Cloud(Math.random() * 800, Math.random() * 600);
            animatedObj.push(c);

            for (let i: number = 0; i < 20; i++) { //5*20 = 100 Schneeflocken
                let sf: Snowflake = new Snowflake(Math.random() * 800, Math.random() * 600);
                animatedObj.push(sf);  //sf Schneeflocken
            }


        }
        for (let i: number = 0; i < 3; i++) {
            let s: Tree = new Tree(Math.random() * 400, Math.random() * 250 + 300); //Zufaellige Position
            trees[i] = s;
        }
        animate();
    }
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren


        background.update();

        for (let i: number = 0; i < animatedObj.length; i++) {
            let m: AnimatedObj = animatedObj[i];
            m.update();
        }

        for (let i: number = 0; i < trees.length; i++) {
            let t: Tree = trees[i];
            t.draw();
        }


        window.setTimeout(animate, 20);
    }
}