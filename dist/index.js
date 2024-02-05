"use strict";
//========= class
class Pizza {
    constructor(titl, pric) {
        this.toppings = [];
        this.title = titl;
        this.price = pric;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    addBase(base) {
        this.base = base;
    }
}
const pizza = new Pizza('me hombre american', 90000);
pizza.addTopping('olive');
pizza.addBase('bold');
console.log(pizza);
