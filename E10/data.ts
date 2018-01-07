namespace E10 {
    //Baumart
    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
        { art: "Baumart", name: "Keiner", preis: 0.00 },
        { art: "Baumart", name: "Nordmanntanne", preis: 24.99 },
        { art: "Baumart", name: "Nobilistanne", preis: 49.99 },
        { art: "Baumart", name: "Douglasie", preis: 29.99 },
        { art: "Baumart", name: "Colorado-Tanne", preis: 39.99 },
        { art: "Baumart", name: "Kiefer", preis: 49.99 },

        { art: "Halter", name: "rot", preis: 15.99 },
        { art: "Halter", name: "blau", preis: 24.99 },
        { art: "Halter", name: "silber", preis: 39.99 },
        { art: "Halter", name: "dunkelgrün", preis: 9.99 },

        { art: "Beleuchtung", name: "Keine", preis: 0.00 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 29.99 },
        { art: "Beleuchtung", name: "Kerzen", preis: 24.99 },

        { art: "Schmuck", name: "Kugel, bunt gestreift", preis: 1.99 },
        { art: "Schmuck", name: "Kugel, rot", preis: 0.99 },
        { art: "Schmuck", name: "Kugel, blau", preis: 0.98 },
        { art: "Schmuck", name: "Kugel, silber", preis: 0.29 },
        { art: "Schmuck", name: "Kugel, gold", preis: 0.99 },

        { art: "Schmuck", name: "Lametta, rot", preis: 0.99 },
        { art: "Schmuck", name: "Lametta, silber", preis: 0.99 },
        { art: "Schmuck", name: "Lametta, gold", preis: 0.99 },

        { art: "Schmuck", name: "Millenium Falcon-Anhänger", preis: 3.49 },
        { art: "Schmuck", name: "Engel-Anhänger", preis: 4.49 },
        { art: "Schmuck", name: "Stern-Anhänger", preis: 6.99 },
        { art: "Schmuck", name: "Zuckerstange", preis: 5.99 },
        { art: "Schmuck", name: "Orangenscheiben", preis: 1.99 },

        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.00 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 5.99 }
    ];
}