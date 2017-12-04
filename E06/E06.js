var E07_Class;
(function (E07_Class) {
    let background;
    let animatedObj = [];
    let trees = [];
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        E07_Class.crc2 = canvas.getContext("2d");
        //Hintergrund
        background = new E07_Class.Background(0, 0);
        for (let i = 0; i < 5; i++) {
            let s = new E07_Class.Skier(Math.random() * -30, Math.random() * 30 + 200);
            animatedObj.push(s);
            let c = new E07_Class.Cloud(Math.random() * 800, Math.random() * 600);
            animatedObj.push(c);
            for (let i = 0; i < 20; i++) {
                let sf = new E07_Class.Snowflake(Math.random() * 800, Math.random() * 600);
                animatedObj.push(sf); //sf Schneeflocken
            }
        }
        for (let i = 0; i < 3; i++) {
            let s = new E07_Class.Tree(Math.random() * 400, Math.random() * 250 + 300); //Zufaellige Position
            trees[i] = s;
        }
        animate();
    }
    function animate() {
        E07_Class.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        background.update();
        for (let i = 0; i < animatedObj.length; i++) {
            let m = animatedObj[i];
            m.update();
        }
        for (let i = 0; i < trees.length; i++) {
            let t = trees[i];
            t.draw();
        }
        window.setTimeout(animate, 20);
    }
})(E07_Class || (E07_Class = {}));
//# sourceMappingURL=E06.js.map