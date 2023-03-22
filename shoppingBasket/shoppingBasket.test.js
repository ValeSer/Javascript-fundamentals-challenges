const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('returns the total price', () => {
    const candyDouble = {
        getName: () => 'Mars',
        getPrice: () => 4.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99 * 3);
  })
})