var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Endabgabe;
(function (Endabgabe) {
    let serverUrl = "https://studentmats.herokuapp.com/";
    function checkForEndGame() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Endabgabe.rocksLeft === 0) {
                // ending game
                //console.log("Game end");
                window.clearInterval(Endabgabe.updateIntervalId);
                Endabgabe.printInfo();
                yield sendScoreToServer();
                yield showScoreboard();
            }
        });
    }
    Endabgabe.checkForEndGame = checkForEndGame;
    function sendScoreToServer() {
        return __awaiter(this, void 0, void 0, function* () {
            let name = prompt("Please enter your name");
            let score = {
                name: name,
                score: Endabgabe.points
            };
            let query = new URLSearchParams(score);
            yield fetch(serverUrl + "/store?" + query.toString());
        });
    }
    Endabgabe.sendScoreToServer = sendScoreToServer;
    function showScoreboard() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(serverUrl + "/get");
            let responseText = yield response.text();
            let scoreboard = JSON.parse(responseText);
            let scoreboardBody = "";
            for (let i = 0; i < scoreboard.length; i++) {
                let score = scoreboard[i];
                let tdPoints = "<td>" + score.points + "</td>";
                let tdName = "<td>" + score.name + "</td>";
                let tr = "<tr>" + tdPoints + tdName + "</tr>";
                scoreboardBody += tr;
            }
            let tableScoreboardBody = document.getElementById("tableScoreboardBody");
            tableScoreboardBody.innerHTML = scoreboardBody;
        });
    }
    Endabgabe.showScoreboard = showScoreboard;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Endgame.js.map