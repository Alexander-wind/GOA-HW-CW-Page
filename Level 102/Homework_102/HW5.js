// შექმენი BankAccount კლასი.
// მონაცემები: balance
// ლოგიკა:
// შექმენი შიდა მეთოდი _getFee(amount) →
// თუ amount > 500 → 2%
// სხვა შემთხვევაში → 1%
// withdraw(amount):
// დაითვალოს საკომისიო _getFee-ით
// განახლდეს ბალანსი
// დააბრუნოს ახალი ბალანსი toFixed(2)
// დაბეჭდე console.log

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  _getFee(amount) {
  if (amount > 500) {
    return 0.02;
  } else {
    return 0.01;
  }
}

  withdraw(amount) {
    let fee = this._getFee(amount);
    let total = amount + amount * fee;

    this.balance -= total;

    return this.balance.toFixed(2);
  }
}
