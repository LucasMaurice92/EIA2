
namespace E06 {

    export interface Product {
        type: string;
        name: string;
        price: number;
    }


    export let products: Product[] = [
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
}