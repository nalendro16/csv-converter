"use strict";
//========= class
class Pizza {
    constructor(titl, pric) {
        this.titl = titl;
        this.pric = pric;
        // title: string
        // price: number
        this.base = 'thin';
        this.toppings = [];
        // this.title = titl
        // this.price = pric
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    addBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('me hombre american', 90000);
pizza.addTopping('olive');
pizza.addBase('bold');
console.log(pizza);
