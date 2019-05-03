var E05;
(function (E05) {
    window.addEventListener("load", generateContent);
    window.addEventListener("change", updateShoppingCart);
    var coneSelected = ["kein Waffel", "0"];
    var flavoursSelected = [];
    var toppingSelected = ["kein Topping", "0"];
    var shippingSelected = ["Selbstabholer", "0"];
    var priceTotal = 0;
    var name;
    var streetName;
    var houseNumber;
    var city;
    var areaCode;
    var mail;
    var additionalInfo;
    var label;
    function generateContent() {
        document.getElementById("validation").addEventListener("click", validateOrder);
        var conesElement = document.getElementById("cones");
        var flavourElement = document.getElementById("flavours");
        var toppingElement = document.getElementById("toppings");
        var toppingSelectionBox = document.createElement("select");
        toppingSelectionBox.name = "SelectTopping";
        toppingSelectionBox.id = "selecttopping";
        toppingElement.appendChild(toppingSelectionBox);
        for (var i = 0; i < E05.products.length; i++) {
            if (E05.products[i].type == "Waffelart") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupCone";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                conesElement.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = E05.products[i].name;
                conesElement.appendChild(label);
            }
            else if (E05.products[i].type == "Eiskugel") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxFlavour";
                checkB.value = "check";
                checkB.id = "check" + i;
                flavourElement.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = E05.products[i].name;
                flavourElement.appendChild(label2);
                var stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperFlavour" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "3";
                stepper.step = "1";
                flavourElement.appendChild(stepper);
                var br = document.createElement("br");
                flavourElement.appendChild(br);
            }
            else if (E05.products[i].type == "Topping") {
                var opt = document.createElement("option");
                opt.innerText = E05.products[i].name;
                opt.id = "option." + i;
                toppingSelectionBox.appendChild(opt);
            }
        }
        //Create shipping input
        var shippingInformation = document.getElementById("shippinginformation");
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
        var shippingOptions = document.getElementById("shippingoptions");
        for (var i = 0; i < E05.products.length; i++) {
            if (E05.products[i].type == "Shipping") {
                var radioShipping = document.createElement("input");
                radioShipping.type = "radio";
                radioShipping.name = "radioGroupShipping";
                radioShipping.value = "radio2" + i;
                radioShipping.id = "radioShipping" + i;
                shippingOptions.appendChild(radioShipping);
                var labeShipping = document.createElement("label");
                labeShipping.id = "labelShipping" + i;
                labeShipping.htmlFor = radioShipping.id;
                labeShipping.innerText = E05.products[i].name;
                shippingOptions.appendChild(labeShipping);
            }
        }
    }
    function updateShoppingCart(_event) {
        var target = _event.target;
        var countTotal = [];
        var checkedProducts = [];
        var shoppingCartElement = document.getElementById("shoppingcart");
        shoppingCartElement.style.width = "40%";
        shoppingCartElement.style.height = "auto";
        shoppingCartElement.style.border = "1px solid black";
        shoppingCartElement.innerHTML = "<span>Ihr Warenkorb</span> <p></p>";
        for (var i = 0; i < E05.products.length; i++) {
            if (E05.products[i].type == "Eiskugel") {
                countTotal[i] = document.getElementById("stepper" + i);
                checkedProducts[i] = document.getElementById("check" + i);
            }
            if (target.id == "radio" + i) {
                coneSelected[0] = E05.products[i].name;
                coneSelected[1] = "" + E05.products[i].price;
            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                flavoursSelected[i] = [E05.products[i].name, "" + (E05.products[i].price * parseInt(countTotal[i].value))];
            }
            else if (target.value == E05.products[i].name && target.id == "selecttopping") {
                toppingSelected[0] = E05.products[i].name;
                toppingSelected[1] = "" + E05.products[i].price;
            }
            else if (target.id == "radioShipping" + i) {
                shippingSelected[0] = E05.products[i].name;
                shippingSelected[1] = "" + E05.products[i].price;
            }
        }
        priceTotal = parseFloat(coneSelected[1]) + parseFloat(toppingSelected[1]) + parseFloat(shippingSelected[1]);
        shoppingCartElement.innerHTML += "" + coneSelected[0] + " " + coneSelected[1] + "€ <p></p>";
        for (var i = 0; i < countTotal.length; i++) {
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
})(E05 || (E05 = {}));
