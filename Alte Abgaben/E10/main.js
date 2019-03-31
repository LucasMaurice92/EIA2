var E10;
(function (E10) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var strasse;
    var hNr;
    var ort;
    var plz;
    var mail;
    var zusatz;
    var label;
    let checkedId = [];
    var baumArt = [E10.posten[0].name, "" + E10.posten[0].preis];
    var halter = ["kein Halter", "0"];
    var beleuchtungW = [];
    var schmuck = [];
    var rabatt = 0.75;
    var baumGanz = false;
    function createElements() {
        //Baumart:
        let baumart = document.getElementById("baumart");
        let selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        let halterung = document.getElementById("halterung");
        let beleuchtung = document.getElementById("beleuchtung");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        let schmuckartikel = document.getElementById("schmuckartikel");
        for (let i = 0; i < E10.posten.length; i++) {
            if (E10.posten[i].art == "Beleuchtung" && E10.posten[i].preis == 0) {
                beleuchtungW = [E10.posten[i].name, "" + E10.posten[i].preis];
            }
            if (E10.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = E10.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
            else if (E10.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = E10.posten[i].name;
                halterung.appendChild(label);
            }
            else if (E10.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = E10.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
            else if (E10.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = E10.posten[i].name;
                schmuckartikel.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                let br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //Deine Daten:
        let daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        name.pattern = "[a-zA-Z0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        zusatz = document.createElement("textarea");
        zusatz.name = "DatenZusatz";
        zusatz.placeholder = "Adresszusatz";
        zusatz.cols = 30;
        zusatz.rows = 3;
        zusatz.required = true;
        daten.appendChild(zusatz);
        //Lieferoptionen:
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < E10.posten.length; i++) {
            if (E10.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = E10.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button:
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        let target = _event.target;
        let werte = [];
        let check = [];
        let gesamtpreis = 0;
        let korb = document.getElementById("zusammenfassung");
        korb.style.width = "40%";
        korb.style.height = "auto";
        korb.style.border = "1px solid black";
        korb.innerHTML = "<span>Warenkorb</span> <p></p>";
        console.log(target.value);
        for (let i = 0; i < E10.posten.length; i++) {
            if (E10.posten[i].art == "Schmuck") {
                werte[i] = document.getElementById("stepper" + i);
                check[i] = document.getElementById("check" + i);
            }
            if (target.value == E10.posten[i].name && target.id == "selectBaumart") {
                baumArt[0] = E10.posten[i].name;
                baumArt[1] = "" + E10.posten[i].preis;
            }
            else if (target.id == "radio" + i) {
                halter[0] = E10.posten[i].name;
                halter[1] = "" + E10.posten[i].preis;
            }
            else if (target.value == E10.posten[i].name && target.id == "selectBeleuchtung") {
                beleuchtungW[0] = E10.posten[i].name;
                beleuchtungW[1] = "" + E10.posten[i].preis;
            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                schmuck[i] = [E10.posten[i].name, "" + (E10.posten[i].preis * parseInt(werte[i].value))];
            }
        }
        //write
        gesamtpreis = parseFloat(baumArt[1]) + parseFloat(halter[1]) + parseFloat(beleuchtungW[1]);
        korb.innerHTML += "" + baumArt[0] + " " + baumArt[1] + "€ <p></p>";
        korb.innerHTML += "" + halter[0] + " " + halter[1] + "€ <p></p>";
        korb.innerHTML += "" + beleuchtungW[0] + " " + beleuchtungW[1] + "€ <p></p>";
        for (let i = 0; i < werte.length; i++) {
            if (check[i] != null) {
                if (check[i].checked == true) {
                    gesamtpreis += parseFloat(schmuck[i][1]);
                    korb.innerHTML += "" + schmuck[i][0] + " " + schmuck[i][1] + "€ <p></p>";
                }
            }
        }
        if (parseFloat(baumArt[1]) > 0 && parseFloat(halter[1]) > 0) {
            gesamtpreis *= rabatt;
        }
        korb.innerHTML += " Gesamtpreis : " + Math.round(gesamtpreis * 100) / 100 + "€";
    }
    function handleMouseDown(_event) {
        let feedback = document.createElement("div");
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte überprüfe sie nocheinmal.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
})(E10 || (E10 = {}));
//# sourceMappingURL=main.js.map