namespace E05_Class {
    export let crc2: CanvasRenderingContext2D;

    let snowflakes: Snowflake[] = [];
    let skiers: Skier[] = [];
    let clouds: Cloud[] = [];
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        // 30 Schneeflocken
        for (let i: number = 0; i < 30; i++) {
            let s: Snowflake = new Snowflake(200, 150); //Starposition
            snowflakes[i] = s;
        }
        
        // 3 Skifahrer
        for (let i: number = 0; i < 3; i++) {
            let s: Skier = new Skier(200, 150); //Starposition
            skiers[i] = s;
        }

        //4 Wolken
        for (let i: number = 0; i < 4; i++) {
            let s: Cloud = new Cloud(200, 150); //Starposition
            clouds[i] = s;
        }

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren

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