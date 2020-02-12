namespace Endabgabe {

    let serverUrl: string = "https://endabgabe2020.herokuapp.com/";

    export async function checkForEndGame(): Promise<void>  {
        if (rocksLeft === 0) {
            // ending game
            //console.log("Game end");

            window.clearInterval(updateIntervalId);
            printInfo();

            await sendScoreToServer();
            await showScoreboard();
        }
    }

    export async function sendScoreToServer(): Promise<void> {
        let name: string | null = prompt("Please enter your name");
        

        let score: any = {
            name: name,
            score: points
        };
        let query: URLSearchParams = new URLSearchParams(<any>score);
        await fetch(serverUrl + "/store?" + query.toString());
    }

    export async function showScoreboard(): Promise<void> {
        let response: Response = await fetch(serverUrl + "/get");
        let responseText: string = await response.text();

        let scoreboard: any = JSON.parse(responseText);

        let scoreboardBody: string = "";

        for (let i: number = 0; i < scoreboard.length; i++) {
            let score: any = scoreboard[i];

            let tdPoints: string = "<td>" + score.points + "</td>";
            let tdName: string = "<td>" + score.name + "</td>";
            let tr: string = "<tr>" + tdPoints + tdName + "</tr>";

            scoreboardBody += tr;
        }

        let tableScoreboardBody: HTMLSpanElement = <HTMLSpanElement> document.getElementById("tableScoreboardBody");
        tableScoreboardBody.innerHTML = scoreboardBody;
    }
}