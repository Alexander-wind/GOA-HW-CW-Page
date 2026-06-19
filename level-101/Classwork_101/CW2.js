// შექმენი class Car, რომლის constructor იღებს brand და model და ავტომატურად ამატებს year = 2020 (default მნიშვნელობა).

class Car {
  constructor(brand, model, year = 2020) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}