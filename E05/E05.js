var E05_Class;
(function (E05_Class) {
    let snowflakes = [];
    let skiers = [];
    let clouds = [];
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        E05_Class.crc2 = canvas.getContext("2d");
        console.log(E05_Class.crc2);
        // 30 Schneeflocken
        for (let i = 0; i < 30; i++) {
            let s = new E05_Class.Snowflake(200, 150); //Starposition
            snowflakes[i] = s;
        }
        // 3 Skifahrer
        for (let i = 0; i < 3; i++) {
            let s = new E05_Class.Skier(200, 150); //Starposition
            skiers[i] = s;
        }
        //4 Wolken
        for (let i = 0; i < 4; i++) {
            let s = new E05_Class.Cloud(200, 150); //Starposition
            clouds[i] = s;
        }
        animate();
    }
    function animate() {
        E05_Class.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
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