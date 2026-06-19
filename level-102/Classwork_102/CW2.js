// შექმენი Product კლასი, რომელსაც ექნება ფასი (price) და მეთოდი getFinalPrice(), რომელიც დააბრუნებს ფასს 18% დღგ-ს დამატებით.

class Product {
  constructor(price) {
    this.price = price;
  }

  getFinalPrice() {
    return this.price * 1.18; 
  }
}