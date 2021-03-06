var E07;
(function (E07) {
    window.addEventListener("load", generateContent);
    window.addEventListener("change", updateShoppingCart);
    let address = "https://eisd.herokuapp.com/";
    let coneSelected = ["kein Waffel", "0"];
    let flavoursSelected = [];
    let toppingSelected = ["kein Topping", "0"];
    let shippingSelected = ["Selbstabholer", "0"];
    let priceTotal = 0;
    let name;
    let streetName;
    let houseNumber;
    let city;
    let areaCode;
    let mail;
    let additionalInfo;
    let label;
    function generateContent() {
        document.getElementById("validation").addEventListener("click", validateOrder);
        let conesElement = document.getElementById("cones");
        let flavourElement = document.getElementById("flavours");
        let toppingElement = document.getElementById("toppings");
        let toppingSelectionBox = document.createElement("select");
        toppingSelectionBox.name = "SelectTopping";
        toppingSelectionBox.id = "selecttopping";
        toppingElement.appendChild(toppingSelectionBox);
        for (let i = 0; i < E07.products.length; i++) {
            if (E07.products[i].type == "Waffelart") {
                let radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = E07.products[i].name;
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                conesElement.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = E07.products[i].name;
                conesElement.appendChild(label);
            }
            else if (E07.products[i].type == "Eiskugel") {
                let checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = E07.products[i].name;
                checkB.value = "check";
                checkB.id = "check" + i;
                flavourElement.appendChild(checkB);
                let label2 = document.createElement("label");
                label2.id = "label." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = E07.products[i].name;
                flavourElement.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = E07.products[i].name;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "3";
                stepper.step = "1";
                flavourElement.appendChild(stepper);
                let br = document.createElement("br");
                flavourElement.appendChild(br);
            }
            else if (E07.products[i].type == "Topping") {
                let opt = document.createElement("option");
                opt.innerText = E07.products[i].name;
                opt.id = "option." + i;
                toppingSelectionBox.appendChild(opt);
            }
        }
        //Create shipping input
        let shippingInformation = document.getElementById("shippinginformation");
        name = document.createElement("input");
        name.type = "text";
        name.name = "NameData";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        shippingInformation.appendChild(name);
        streetName = document.createElement("input");
        streetName.type = "text";
        streetName.name = "StreetData";
        streetName.placeholder = "Straße";
        streetName.pattern = "[a-zA-Z]{1,}";
        streetName.required = true;
        shippingInformation.appendChild(streetName);
        houseNumber = document.createElement("input");
        houseNumber.type = "text";
        houseNumber.name = "HouseNumberData";
        houseNumber.placeholder = "Hausnummer";
        houseNumber.pattern = "[a-zA-Z0-9]{1,}";
        houseNumber.required = true;
        shippingInformation.appendChild(houseNumber);
        city = document.createElement("input");
        city.type = "text";
        city.name = "CityData";
        city.placeholder = "Ort";
        city.pattern = "[a-zA-Z]{1,}";
        city.required = true;
        shippingInformation.appendChild(city);
        areaCode = document.createElement("input");
        areaCode.type = "text";
        areaCode.name = "AreaCodeData";
        areaCode.placeholder = "Postleitzahl";
        areaCode.pattern = "[0-9]{5}";
        areaCode.required = true;
        shippingInformation.appendChild(areaCode);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "MailData";
        mail.placeholder = "E-Mail";
        mail.required = true;
        shippingInformation.appendChild(mail);
        additionalInfo = document.createElement("textarea");
        additionalInfo.name = "AdditionalData";
        additionalInfo.placeholder = "Adresszusatz";
        additionalInfo.cols = 30;
        additionalInfo.rows = 3;
        additionalInfo.required = true;
        shippingInformation.appendChild(additionalInfo);
        //generate shipping options
        let shippingOptions = document.getElementById("shippingoptions");
        for (let i = 0; i < E07.products.length; i++) {
            if (E07.products[i].type == "Shipping") {
                var radioShipping = document.createElement("input");
                radioShipping.type = "radio";
                radioShipping.name = E07.products[i].name;
                radioShipping.value = "radio2" + i;
                radioShipping.id = "radioShipping" + i;
                shippingOptions.appendChild(radioShipping);
                var labeShipping = document.createElement("label");
                labeShipping.id = "labelShipping" + i;
                labeShipping.htmlFor = radioShipping.id;
                labeShipping.innerText = E07.products[i].name;
                shippingOptions.appendChild(labeShipping);
            }
        }
    }
    function updateShoppingCart(_event) {
        let target = _event.target;
        let countTotal = [];
        let checkedProducts = [];
        let shoppingCartElement = document.getElementById("shoppingcart");
        shoppingCartElement.style.width = "40%";
        shoppingCartElement.style.height = "auto";
        shoppingCartElement.style.border = "1px solid black";
        shoppingCartElement.innerHTML = "<span>Ihr Warenkorb</span> <p></p>";
        for (let i = 0; i < E07.products.length; i++) {
            if (E07.products[i].type == "Eiskugel") {
                countTotal[i] = document.getElementById("stepper" + i);
                checkedProducts[i] = document.getElementById("check" + i);
            }
            if (target.id == "radio" + i) {
                coneSelected[0] = E07.products[i].name;
                coneSelected[1] = "" + E07.products[i].price;
            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                flavoursSelected[i] = [E07.products[i].name, "" + (E07.products[i].price * parseInt(countTotal[i].value))];
            }
            else if (target.value == E07.products[i].name && target.id == "selecttopping") {
                toppingSelected[0] = E07.products[i].name;
                toppingSelected[1] = "" + E07.products[i].price;
            }
            else if (target.id == "radioShipping" + i) {
                shippingSelected[0] = E07.products[i].name;
                shippingSelected[1] = "" + E07.products[i].price;
            }
        }
        priceTotal = parseFloat(coneSelected[1]) + parseFloat(toppingSelected[1]) + parseFloat(shippingSelected[1]);
        shoppingCartElement.innerHTML += "" + coneSelected[0] + " " + coneSelected[1] + "€ <p></p>";
        for (let i = 0; i < countTotal.length; i++) {
            if (checkedProducts[i] != null) {
                if (checkedProducts[i].checked == true) {
                    priceTotal += parseFloat(flavoursSelected[i][1]);
                    shoppingCartElement.innerHTML += "" + flavoursSelected[i][0] + " " + flavoursSelected[i][1] + "€ <p></p>";
                }
            }
        }
        shoppingCartElement.innerHTML += "" + toppingSelected[0] + " " + toppingSelected[1] + "€ <p></p>";
        shoppingCartElement.innerHTML += "" + shippingSelected[0] + " " + shippingSelected[1] + "€ <p></p>";
        shoppingCartElement.innerHTML += " Gesamtpreis : " + priceTotal.toFixed(2) + "€";
    }
    function validateOrder() {
        //let feedback: HTMLDivElement = document.createElement("div");
        if (priceTotal == 0)
            alert("Bitte wählen sie ein Eis aus");
        else if (name.checkValidity() == false || streetName.checkValidity() == false
            || houseNumber.checkValidity() == false || city.checkValidity() == false
            || areaCode.checkValidity() == false || mail.checkValidity() == false) {
            //feedback.innerText = "Du scheinst deine Daten nicht korrekt angegeben zu haben. Bitte überprüfe sie nocheinmal.";
            //feedback.style.color = "red";
            //document.body.appendChild(feedback);
            alert("Du scheinst deine Lieferdaten nicht korrekt angegeben zu haben. Bitte überprüfe sie nocheinmal.");
        }
        else {
            //feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            //feedback.style.color = "green";
            //document.body.appendChild(feedback);
            alert("Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.");
        }
    }
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(E07 || (E07 = {}));
//# sourceMappingURL=E07.js.map