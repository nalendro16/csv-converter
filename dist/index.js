"use strict";
//========= class
class Pizza {
    constructor(titl, pric) {
        this.titl = titl;
        this.pric = pric;
        this.base = 'thin';
        this.toppings = [];
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
pizza.base;
// console.log(pizza)
