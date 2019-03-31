var E05_Class;
(function (E05_Class) {
    let background;
    let snowflakes = [];
    let skiers = [];
    let clouds = [];
    let trees = [];
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        E05_Class.crc2 = canvas.getContext("2d");
        //Berge
        //Hintergrund
        background = new E05_Class.Background(0, 0);
        // 30 Schneeflocken
        for (let i = 0; i < 30; i++) {
            let s = new E05_Class.Snowflake(Math.random() * 800, Math.random() * 600); //Startposition
            snowflakes[i] = s;
        }
        // 3 Skifahrer
        for (let i = 0; i < 3; i++) {
            let s = new E05_Class.Skier(Math.random() * 100, Math.random() * 200 + 200); //Startposition
            skiers[i] = s;
        }
        //4 Wolken
        for (let i = 0; i < 4; i++) {
            let s = new E05_Class.Cloud(Math.random() * 800, Math.random() * 100); //Startposition
            clouds[i] = s;
        }
        //Tannen
        for (let i = 0; i < 3; i++) {
            let s = new E05_Class.Tree(Math.random() * 400, Math.random() * 300 + 200); //Zufaellige Position
            trees[i] = s;
        }
        //Berge
        animate();
    }
    function animate() {
        E05_Class.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        background.update();
        for (let i = 0; i < trees.length; i++) {
            let t = trees[i];
            t.draw();
        }
        for (let i = 0; i < snowflakes.length; i++) {
            let s = snowflakes[i];
            s.update();
        }
        for (let i = 0; i < skiers.length; i++) {
            let s = skiers[i];
            s.update();
        }
        for (let i = 0; i < clouds.length; i++) {
            let s = clouds[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(E05_Class || (E05_Class = {}));
//# sourceMappingURL=E05.js.map