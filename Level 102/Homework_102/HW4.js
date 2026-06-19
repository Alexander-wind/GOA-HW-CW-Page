// შექმენი Payment კლასი.
// მონაცემები: amount
// ლოგიკა:
// შექმენი შიდა მეთოდი _applyDiscount() → თუ amount > 200, დააკლებს 10%
// მთავარი მეთოდი calculate():
// გამოიძახოს _applyDiscount()
// დაამატოს 2% საკომისიო
// დააბრუნოს შედეგი toFixed(2)
// ბოლოს console.log-ში გამოიტანე შედეგი

class Payment {
  constructor(amount) {
    this.amount = amount;
  }

  _applyDiscount() {
    if (this.amount > 200) {
      this.amount *= 0.9;
    }
  }

  calculate() {
    this._applyDiscount();

    let result = this.amount * 1.02;

    return result.toFixed(2);
  }
}

