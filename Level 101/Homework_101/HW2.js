// შექმენი კლასი Car, რომელსაც კონსტრუქტორში გადაეცემა brand, model და year, და შექმენი მინიმუმ 3 მანქანის ობიექტი.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("BMW", "X5", 2022);
const car3 = new Car("Mercedes", "C-Class", 2021);

console.log(car1, car2, car3);