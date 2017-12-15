var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Neuen Datensatz anlegen (n), abfragen (a) oder Selbstzerstörung (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma zu trennen) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 -> w oder 1 -> m) und einem Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe der Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArray = _input.split(",");
        let studentData = {
            matrikel: parseInt(dataArray[0]),
            lastname: dataArray[1],
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5]
        };
        students.push(studentData);
        let gender;
        if (parseInt(dataArray[4]) == 0) {
            gender = "weiblich";
        }
        else {
            gender = "männlich";
        }
        return "Deine Daten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.firstname + studentData.lastname + "\nAlter: " + studentData.age + "\nGeschlecht: " + gender + "\nKommentar: " + studentData.comment;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let gender = students[i].gender ? "weiblich" : "männlich";
                return "Daten zur passenden Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Die eingegebene Matrikelnummer wurde nicht gefunden";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=E07.js.map