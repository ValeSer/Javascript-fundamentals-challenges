class ShoppingBasket {
  constructor() {
    this.candies = []
  };

  addItem(candy) {
    this.candies.push(candy);
  };

  getTotalPrice() {
    let sum = 0;
    this.candies.forEach(candy => {
       sum += candy.getPrice();
    });
    return sum;
  };

}



module.exports = ShoppingBasket;