//========= class

type Base = 'thick' | 'thin' | 'bold' | 'classic'

class Pizza {
  constructor(private titl: string, private pric: number) {}

  base: Base = 'thin'
  toppings: string[] = []

  addTopping(topping: string) {
    this.toppings.push(topping)
  }

  addBase(b: Base) {
    this.base = b
  }
}

const pizza = new Pizza('me hombre american', 90000)

pizza.addTopping('olive')
pizza.addBase('bold')

pizza.base

// console.log(pizza)
