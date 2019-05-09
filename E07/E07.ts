namespace E07 {
    window.addEventListener("load", generateContent);
    window.addEventListener("change", updateShoppingCart);

    let coneSelected: string[] = ["kein Waffel", "0"];
    let flavoursSelected: string[][] = [];
    let toppingSelected: string[] = ["kein Topping", "0"];
    let shippingSelected: string [] = ["Selbstabholer", "0"];
    let priceTotal: number = 0;

    
    let name: HTMLInputElement;
    let streetName: HTMLInputElement;
    let houseNumber: HTMLInputElement;
    let city: HTMLInputElement;
    let areaCode: HTMLInputElement;
    let mail: HTMLInputElement;
    let additionalInfo: HTMLTextAreaElement;
    let label: HTMLLabelElement;

    function generateContent(): void {
        
        document.getElementById("validation").addEventListener("click", validateOrder);
        
        let conesElement: HTMLDivElement = <HTMLDivElement>document.getElementById("cones");
        let flavourElement: HTMLDivElement = <HTMLDivElement>document.getElementById("flavours");
        let toppingElement: HTMLDivElement = <HTMLDivElement>document.getElementById("toppings");
        
        let toppingSelectionBox: HTMLSelectElement = document.createElement("select");
        toppingSelectionBox.name = "SelectTopping";
        toppingSelectionBox.id = "selecttopping";
        toppingElement.appendChild(toppingSelectionBox);


        for (let i: number = 0; i < products.length; i++) {
            
            if (products[i].type == "Waffelart") {
                let radioB: HTMLInputElement = document.createElement("input");
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
                let checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxFlavour";
                checkB.value = "check";
                checkB.id = "check" + i;
                flavourElement.appendChild(checkB);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = products[i].name;
                flavourElement.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperFlavour" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "3";
                stepper.step = "1";
                flavourElement.appendChild(stepper);

                let br: HTMLElement = document.createElement("br");
                flavourElement.appendChild(br);
            }

            else if (products[i].type == "Topping") {
                let opt: HTMLElement = document.createElement("option");
                opt.innerText = products[i].name;
                opt.id = "option." + i;
                toppingSelectionBox.appendChild(opt);
            }

            
        }
        
        //Create shipping input

        let shippingInformation: HTMLDivElement = <HTMLDivElement>document.getElementById("shippinginformation");
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

        let shippingOptions: HTMLDivElement = <HTMLDivElement>document.getElementById("shippingoptions");

        for (let i: number = 0; i < products.length; i++) {
            if (products[i].type == "Shipping") {
                var radioShipping: HTMLInputElement = document.createElement("input");
                radioShipping.type = "radio";
                radioShipping.name = "radioGroupShipping";
                radioShipping.value = "radio2" + i;
                radioShipping.id = "radioShipping" + i;
                shippingOptions.appendChild(radioShipping);

                var labeShipping: HTMLLabelElement = document.createElement("label");
                labeShipping.id = "labelShipping" + i;
                labeShipping.htmlFor = radioShipping.id;
                labeShipping.innerText = products[i].name;
                shippingOptions.appendChild(labeShipping);
            }


        }
    }

    function updateShoppingCart(_event: Event): void {
        
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let countTotal: HTMLInputElement[] = [];
        let checkedProducts: HTMLInputElement[] = [];

        let shoppingCartElement: HTMLDivElement = <HTMLDivElement>document.getElementById("shoppingcart");
        shoppingCartElement.style.width = "40%";
        shoppingCartElement.style.height = "auto";
        shoppingCartElement.style.border = "1px solid black";
        shoppingCartElement.innerHTML = "<span>Ihr Warenkorb</span> <p></p>";

        for (let i: number = 0; i < products.length; i++) {

            if (products[i].type == "Eiskugel") {
                countTotal[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkedProducts[i] = <HTMLInputElement>document.getElementById("check" + i);
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
        
        priceTotal = parseFloat(coneSelected[1]) + parseFloat(toppingSelected[1]) + parseFloat(shippingSelected[1]) ;

        shoppingCartElement.innerHTML += "" + coneSelected[0] + " " + coneSelected[1] + "€ <p></p>";
       
        for (let i: number = 0; i < countTotal.length; i++) {
            if (checkedProducts[i] != null) {
                if (checkedProducts[i].checked == true) {
                    priceTotal += parseFloat(flavoursSelected[i][1]);
                    shoppingCartElement.innerHTML += "" + flavoursSelected[i][0] + " " + flavoursSelected[i][1] + "€ <p></p>";
                }
            }
        }
       
        shoppingCartElement.innerHTML += "" + toppingSelected[0] + " " + toppingSelected[1] + "€ <p></p>";

        shoppingCartElement.innerHTML += "" + shippingSelected[0] + " " + shippingSelected[1] + "€ <p></p>";

        shoppingCartElement.innerHTML += " Gesamtpreis : " + priceTotal.toFixed(2)  + "€"; 

    }

    function validateOrder(): void {
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
}
