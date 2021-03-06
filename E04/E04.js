var E04;
(function (E04) {
    window.addEventListener("load", generateContent);
    window.addEventListener("change", updateShoppingCart);
    let products = [
        { type: "Waffelart", name: "Waffel", price: 0.10 },
        { type: "Waffelart", name: "Becher", price: 0.10 },
        { type: "Eiskugel", name: "Vanille", price: 0.70 },
        { type: "Eiskugel", name: "Schokolade", price: 1.20 },
        { type: "Eiskugel", name: "Erdbeer", price: 1.20 },
        { type: "Eiskugel", name: "Stracciatella", price: 1.20 },
        { type: "Eiskugel", name: "Vodka Lemon", price: 1.20 },
        { type: "Eiskugel", name: "Schlumpf", price: 1.20 },
        { type: "Topping", name: "kein Topping", price: 0.00 },
        { type: "Topping", name: "Sahne", price: 1.20 },
        { type: "Topping", name: "Schokostreusel", price: 1.40 },
        { type: "Topping", name: "Bunte Streusel", price: 1.20 },
        { type: "Topping", name: "Smarties", price: 1.30 },
        { type: "Topping", name: "Erdbeersoße", price: 1.20 },
        { type: "Topping", name: "Bananasplit", price: 1.10 },
        { type: "Shipping", name: "Standart Lieferung", price: 2.00 },
        { type: "Shipping", name: "Express Lieferung", price: 5.00 }
    ];
    let coneSelected = ["kein Waffel", "0"];
    let flavoursSelected = [];
    let toppingSelected = ["kein Topping", "0"];
    let shippingSelected = ["Selbstabholer", "0"];
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
        for (let i = 0; i < products.length; i++) {
            if (products[i].type == "Waffelart") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupCone";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                conesElement.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = products[i].name;
                conesElement.appendChild(label);
            }
            else if (products[i].type == "Eiskugel") {
                let checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxFlavour";
                checkB.value = "check";
                checkB.id = "check" + i;
                flavourElement.appendChild(checkB);
                let label2 = document.createElement("label");
                label2.id = "label." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = products[i].name;
                flavourElement.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperFlavour" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "3";
                stepper.step = "1";
                flavourElement.appendChild(stepper);
                let br = document.createElement("br");
                flavourElement.appendChild(br);
            }
            else if (products[i].type == "Topping") {
                let opt = document.createElement("option");
                opt.innerText = products[i].name;
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
        for (let i = 0; i < products.length; i++) {
            if (products[i].type == "Shipping") {
                var radioShipping = document.createElement("input");
                radioShipping.type = "radio";
                radioShipping.name = "radioGroupShipping";
                radioShipping.value = "radio2" + i;
                radioShipping.id = "radioShipping" + i;
                shippingOptions.appendChild(radioShipping);
                var labeShipping = document.createElement("label");
                labeShipping.id = "labelShipping" + i;
                labeShipping.htmlFor = radioShipping.id;
                labeShipping.innerText = products[i].name;
                shippingOptions.appendChild(labeShipping);
            }
        }
    }
    function updateShoppingCart(_event) {
        let target = _event.target;
        let priceTotal = 0;
        let countTotal = [];
        let checkedProducts = [];
        let shoppingCartElement = document.getElementById("shoppingcart");
        shoppingCartElement.style.width = "40%";
        shoppingCartElement.style.height = "auto";
        shoppingCartElement.style.border = "1px solid black";
        shoppingCartElement.innerHTML = "<span>Ihr Warenkorb</span> <p></p>";
        for (let i = 0; i < products.length; i++) {
            if (products[i].type == "Eiskugel") {
                countTotal[i] = document.getElementById("stepper" + i);
                checkedProducts[i] = document.getElementById("check" + i);
            }
            if (target.id == "radio" + i) {
                coneSelected[0] = products[i].name;
                coneSelected[1] = "" + products[i].price;
            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                flavoursSelected[i] = [products[i].name, "" + (products[i].price * parseInt(countTotal[i].value))];
            }
            else if (target.value == products[i].name && target.id == "selecttopping") {
                toppingSelected[0] = products[i].name;
                toppingSelected[1] = "" + products[i].price;
            }
            else if (target.id == "radioShipping" + i) {
                shippingSelected[0] = products[i].name;
                shippingSelected[1] = "" + products[i].price;
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
        shoppingCartElement.innerHTML += " Gesamtpreis : " + Math.round(priceTotal * 100) / 100 + "€";
    }
    function validateOrder() {
        let feedback = document.createElement("div");
        if (name.checkValidity() == false || streetName.checkValidity() == false
            || houseNumber.checkValidity() == false || city.checkValidity() == false
            || areaCode.checkValidity() == false || mail.checkValidity() == false) {
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
})(E04 || (E04 = {}));
//# sourceMappingURL=E04.js.map