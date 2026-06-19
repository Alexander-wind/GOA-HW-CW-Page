// შექმენი Loan კლასი, სადაც იქნება სესხის თანხა (amount) და პროცენტი (interest). დაწერე მეთოდი, რომელიც გამოთვლის საბოლოო გადასახდელ თანხას.

class Loan {
  constructor(amount, interest) {
    this.amount = amount;
    this.interest = interest;
  }

  getTotalPayment() {
    return this.amount + (this.amount * this.interest / 100);
  }
}