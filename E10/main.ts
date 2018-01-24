namespace E10 {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);

    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var zusatz: HTMLTextAreaElement;
    var label: HTMLLabelElement;
    let checkedId: string[] = [];

    var baumArt: string[] = [posten[0].name, "" + posten[0].preis];
    var halter: string[] = ["kein Halter", "0"];
    var beleuchtungW: string[] = [];
    var schmuck: string[][] = [];
    var rabatt: number = 0.75;
    var baumGanz: boolean = false;



    function createElements(): void {
        //Baumart:




        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBox: HTMLSelectElement = document.createElement("select");

        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);

        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");

        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);

        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");

        for (let i: number = 0; i < posten.length; i++) {

            if (posten[i].art == "Beleuchtung" && posten[i].preis == 0) {
                beleuchtungW = [posten[i].name, "" + posten[i].preis];
            }
            if (posten[i].art == "Baumart") {
                var opt: HTMLElement = document.createElement("option");
                opt.innerText = posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
            else if (posten[i].art == "Halter") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                halterung.appendChild(label);
            }
            else if (posten[i].art == "Beleuchtung") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
            else if (posten[i].art == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);

                let br: HTMLElement = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }


        //Deine Daten:
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
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
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                lieferopt.appendChild(label3);
            }
        }

        //Button:
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let werte: HTMLInputElement[] = [];
        let check: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        korb.style.width = "40%";
        korb.style.height = "auto";
        korb.style.border = "1px solid black";
        korb.innerHTML = "<span>Warenkorb</span> <p></p>";
        console.log(target.value);

        for (let i: number = 0; i < posten.length; i++) {

            if (posten[i].art == "Schmuck") {
                werte[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                check[i] = <HTMLInputElement>document.getElementById("check" + i);
            }

            if (target.value == posten[i].name && target.id == "selectBaumart") {
                baumArt[0] = posten[i].name;
                baumArt[1] = "" + posten[i].preis;
            }
            else if (target.id == "radio" + i) {
                halter[0] = posten[i].name;
                halter[1] = "" + posten[i].preis;

            }
            else if (target.value == posten[i].name && target.id == "selectBeleuchtung") {
                beleuchtungW[0] = posten[i].name;
                beleuchtungW[1] = "" + posten[i].preis;

            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                schmuck[i] = [posten[i].name, "" + (posten[i].preis * parseInt(werte[i].value))];

            }


        }
        //write
        gesamtpreis = parseFloat(baumArt[1]) + parseFloat(halter[1]) + parseFloat(beleuchtungW[1]);

        korb.innerHTML += "" + baumArt[0] + " " + baumArt[1] + "€ <p></p>";

        korb.innerHTML += "" + halter[0] + " " + halter[1] + "€ <p></p>";

        korb.innerHTML += "" + beleuchtungW[0] + " " + beleuchtungW[1] + "€ <p></p>";
        for (let i: number = 0; i < werte.length; i++) {
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
        korb.innerHTML += " Gesamtpreis : " + Math.round( gesamtpreis * 100) / 100  + "€"; 

    }


    function handleMouseDown(_event: MouseEvent): void {
        let feedback: HTMLDivElement = document.createElement("div");
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
}