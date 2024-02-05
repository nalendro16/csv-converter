//========= class

type Base = 'thick' | 'thin' | 'bold'

class Pizza {
  constructor(titl: string, pric: number) {
    this.title = titl
    this.price = pric
  }

  title: string
  price: number
  base: Base
  toppings: string[] = []

  addTopping(topping: string) {
    this.toppings.push(topping)
  }

  addBase(base: Base) {
    this.base = base
  }
}

const pizza = new Pizza('me hombre american', 90000)

pizza.addTopping('olive')
pizza.addBase('bold')

console.log(pizza)
